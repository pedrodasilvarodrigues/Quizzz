import React, { useState, useCallback, useMemo } from 'react';
import type { Question } from '../types';
import ProgressBar from './ProgressBar';
import { StreakIcon } from './icons/UIIcons';
import { CORRECT_ANSWER_MESSAGES, INCORRECT_ANSWER_MESSAGES } from '../constants';

interface QuizProps {
  questions: Question[];
  onComplete: (answers: string[], score: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [streak, setStreak] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [motivationalMessage, setMotivationalMessage] = useState('');

  const currentQuestion = useMemo(() => questions[currentQuestionIndex], [questions, currentQuestionIndex]);

  const handleNextQuestion = useCallback(() => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setMotivationalMessage('');

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      const score = userAnswers.reduce((acc, answer, index) => {
        return questions[index].correctAnswer === answer ? acc + 1 : acc;
      }, 0);
      onComplete(userAnswers, score);
    }
  }, [currentQuestionIndex, questions.length, onComplete, userAnswers, questions]);


  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer) return;

    const correct = answer === currentQuestion.correctAnswer;
    setSelectedAnswer(answer);
    setUserAnswers([...userAnswers, answer]);
    setIsCorrect(correct);
    setShowFeedback(true);

    if (correct) {
      setStreak(prev => prev + 1);
      const message = CORRECT_ANSWER_MESSAGES[Math.floor(Math.random() * CORRECT_ANSWER_MESSAGES.length)];
      setMotivationalMessage(message);
    } else {
      setStreak(0);
      const message = INCORRECT_ANSWER_MESSAGES[Math.floor(Math.random() * INCORRECT_ANSWER_MESSAGES.length)];
      setMotivationalMessage(message);
    }

    // O timeout automático foi removido para permitir a progressão controlada pelo usuário.
  };
  
  const getButtonClass = (option: string) => {
    if (!showFeedback) {
      return 'bg-slate-800 hover:bg-indigo-700 border-slate-700';
    }
    if (option === currentQuestion.correctAnswer) {
      return 'bg-green-500 border-green-400 animate-pulse-correct';
    }
    if (option === selectedAnswer && option !== currentQuestion.correctAnswer) {
      return 'bg-red-500 border-red-400 animate-shake';
    }
    return 'bg-slate-800 border-slate-700 opacity-50';
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700">
      <style>{`
        @keyframes shake { 0%, 100% { transform: translateX(0); } 10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); } 20%, 40%, 60%, 80% { transform: translateX(5px); } }
        .animate-shake { animation: shake 0.5s ease-in-out; }
        @keyframes pulse-correct { 0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); } 50% { transform: scale(1.02); box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); } }
        .animate-pulse-correct { animation: pulse-correct 1s; }
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
      `}</style>
      <div className="flex justify-between items-center mb-4">
        <div className="text-indigo-300 font-semibold">Pergunta {currentQuestionIndex + 1} de {questions.length}</div>
        {streak > 1 && (
          <div className="flex items-center gap-1 text-orange-400 font-bold bg-orange-900/50 px-3 py-1 rounded-full">
            <StreakIcon className="w-5 h-5"/>
            <span>x{streak} em sequência!</span>
          </div>
        )}
      </div>
      <ProgressBar value={currentQuestionIndex + 1} max={questions.length} />

      <div className="mt-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{currentQuestion.questionText}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerClick(option)}
              disabled={!!selectedAnswer}
              className={`w-full p-4 rounded-lg border text-left font-semibold text-lg transition-all duration-300 transform ${getButtonClass(option)} ${!selectedAnswer ? 'hover:scale-105' : 'cursor-not-allowed'}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      
      {showFeedback && (
        <div className="mt-6 p-4 rounded-lg text-center animate-fade-in">
           <div className={`text-xl font-bold ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
              {isCorrect ? 'Correto!' : 'Incorreto!'}
            </div>
          {motivationalMessage && <p className="text-slate-200 mt-2 text-lg">{motivationalMessage}</p>}
          <p className="text-slate-300 mt-2">{currentQuestion.explanation}</p>
          <button
            onClick={handleNextQuestion}
            className="mt-6 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-6 rounded-full text-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-pink-500"
          >
            {currentQuestionIndex < questions.length - 1 ? 'Próxima Pergunta' : 'Ver Resultados'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
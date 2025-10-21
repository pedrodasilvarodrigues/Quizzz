
import React from 'react';
import type { Question } from '../types';
import { CheckIcon, XIcon } from './icons/UIIcons';

interface ResultsProps {
  questions: Question[];
  userAnswers: string[];
  onPlayAgain: () => void;
}

const Results: React.FC<ResultsProps> = ({ questions, userAnswers, onPlayAgain }) => {
  const score = userAnswers.reduce((acc, answer, index) => {
    return questions[index].correctAnswer === answer ? acc + 1 : acc;
  }, 0);
  const accuracy = Math.round((score / questions.length) * 100);
  const xpGained = score * 10;

  return (
    <div className="w-full max-w-3xl mx-auto p-4 md:p-8 bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-700 animate-fade-in">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Quiz Concluído!</h2>
        <p className="text-8xl font-bold my-4">{accuracy}%</p>
        <div className="flex justify-center items-center gap-8 text-xl">
          <div className="flex flex-col items-center">
            <span className="font-bold text-green-400">{score}</span>
            <span className="text-slate-400">Corretas</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-red-400">{questions.length - score}</span>
            <span className="text-slate-400">Incorretas</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-yellow-400">+{xpGained}</span>
            <span className="text-slate-400">XP Ganhos</span>
          </div>
        </div>
        <button
          onClick={onPlayAgain}
          className="mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105"
        >
          Jogar Novamente
        </button>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4 text-center">Revise Suas Respostas</h3>
        <div className="space-y-4">
          {questions.map((question, index) => {
            const userAnswer = userAnswers[index];
            const isCorrect = userAnswer === question.correctAnswer;
            return (
              <div key={index} className={`p-4 rounded-lg ${isCorrect ? 'bg-green-900/30' : 'bg-red-900/30'}`}>
                <p className="font-semibold text-lg flex items-start gap-2">
                  <span className="mt-1">
                    {isCorrect ? <CheckIcon className="w-5 h-5 text-green-400" /> : <XIcon className="w-5 h-5 text-red-400" />}
                  </span>
                  <span>{question.questionText}</span>
                </p>
                <p className="mt-2 text-sm pl-7">Resposta Correta: <span className="font-bold">{question.correctAnswer}</span></p>
                {!isCorrect && <p className="text-sm pl-7">Sua Resposta: <span className="font-bold">{userAnswer}</span></p>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Results;

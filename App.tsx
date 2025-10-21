
import React, { useState, useCallback } from 'react';
import { GameStatus, Question, UserStats } from './types';
import { generateQuizQuestions } from './services/geminiService';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Header from './components/Header';
import Loader from './components/Loader';

const App: React.FC = () => {
  const [gameStatus, setGameStatus] = useState<GameStatus>(GameStatus.NOT_STARTED);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  // Mock user stats
  const [userStats, setUserStats] = useState<UserStats>({
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    lovecoins: 50,
    avatar: 'https://picsum.photos/seed/loveble-user/100/100',
    username: 'MestreDoQuiz'
  });

  const handleStartQuiz = useCallback(async (category: string, difficulty: string) => {
    setGameStatus(GameStatus.LOADING_QUESTIONS);
    setError(null);
    try {
      const newQuestions = await generateQuizQuestions(category, difficulty);
      if (newQuestions.length === 0) {
        throw new Error("Falha ao gerar as perguntas. A IA pode estar ocupada. Por favor, tente novamente.");
      }
      setQuestions(newQuestions);
      setUserAnswers([]);
      setGameStatus(GameStatus.IN_PROGRESS);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.');
      setGameStatus(GameStatus.NOT_STARTED);
    }
  }, []);

  const handleQuizComplete = useCallback((finalAnswers: string[], score: number) => {
    setUserAnswers(finalAnswers);
    setGameStatus(GameStatus.COMPLETED);

    // Update user stats (XP and level)
    const xpGained = score * 10;
    setUserStats(prevStats => {
      let newXp = prevStats.xp + xpGained;
      let newLevel = prevStats.level;
      let newXpToNextLevel = prevStats.xpToNextLevel;
      let newLovecoins = prevStats.lovecoins + score;

      while (newXp >= newXpToNextLevel) {
        newLevel++;
        newXp -= newXpToNextLevel;
        newXpToNextLevel = Math.floor(newXpToNextLevel * 1.5);
      }

      return { ...prevStats, xp: newXp, level: newLevel, xpToNextLevel: newXpToNextLevel, lovecoins: newLovecoins };
    });
  }, []);

  const handlePlayAgain = useCallback(() => {
    setGameStatus(GameStatus.NOT_STARTED);
    setQuestions([]);
    setUserAnswers([]);
    setError(null);
  }, []);

  const renderContent = () => {
    switch (gameStatus) {
      case GameStatus.LOADING_QUESTIONS:
        return <Loader message="Gerando seu quiz exclusivo..." />;
      case GameStatus.IN_PROGRESS:
        return <Quiz questions={questions} onComplete={handleQuizComplete} />;
      case GameStatus.COMPLETED:
        return <Results questions={questions} userAnswers={userAnswers} onPlayAgain={handlePlayAgain} />;
      case GameStatus.NOT_STARTED:
      default:
        return <Home onStartQuiz={handleStartQuiz} error={error} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-indigo-900 text-white flex flex-col items-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-4xl mx-auto">
        <Header userStats={userStats} />
        <main className="mt-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default App;

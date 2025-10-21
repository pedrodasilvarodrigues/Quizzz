
import React, { useState } from 'react';
import { QUIZ_CATEGORIES, QUIZ_DIFFICULTIES } from '../constants';
import CategoryCard from './CategoryCard';

interface HomeProps {
  onStartQuiz: (category: string, difficulty: string) => void;
  error: string | null;
}

const Home: React.FC<HomeProps> = ({ onStartQuiz, error }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('Médio');
  const [customTopic, setCustomTopic] = useState('');

  const handleCustomQuizStart = () => {
    if (customTopic.trim()) {
      onStartQuiz(customTopic, selectedDifficulty);
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleCustomQuizStart();
    }
  };


  return (
    <div className="text-center animate-fade-in">
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        Bem-vindo ao Loveble
      </h1>
      <p className="mt-4 text-lg text-indigo-200 max-w-2xl mx-auto">
        Desafie seus conhecimentos, suba nos placares e torne-se um mestre do quiz!
      </p>
      
      {error && (
        <div className="mt-6 bg-red-900/50 border border-red-700 text-red-200 px-4 py-3 rounded-lg relative" role="alert">
          <strong className="font-bold">Opa! </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {/* Difficulty Selector */}
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-indigo-200 mb-4">1. Escolha a Dificuldade</h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {QUIZ_DIFFICULTIES.map((diff) => (
            <button
              key={diff.id}
              onClick={() => setSelectedDifficulty(diff.id)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedDifficulty === diff.id
                  ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-lg'
                  : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
              }`}
            >
              {diff.name}
            </button>
          ))}
        </div>
      </div>

      {/* Topic Selector */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-indigo-200 mb-4">2. Escolha um Tópico</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {QUIZ_CATEGORIES.map((category) => (
            <CategoryCard 
              key={category.name} 
              category={category} 
              onClick={() => onStartQuiz(category.name, selectedDifficulty)}
            />
          ))}
        </div>

        {/* OR Separator */}
        <div className="my-8 flex items-center justify-center">
            <div className="h-px bg-slate-600 flex-grow"></div>
            <span className="mx-4 text-slate-400 font-semibold">OU</span>
            <div className="h-px bg-slate-600 flex-grow"></div>
        </div>
        
        {/* Custom Quiz Input */}
        <div>
            <h3 className="text-xl font-bold text-indigo-200 mb-4">Crie seu próprio Quiz!</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
                <input 
                    type="text"
                    value={customTopic}
                    onChange={(e) => setCustomTopic(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite qualquer tema, ex: 'Fórmula 1'"
                    className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-600 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    aria-label="Tema para quiz customizado"
                />
                <button
                    onClick={handleCustomQuizStart}
                    disabled={!customTopic.trim()}
                    className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
                >
                    Gerar
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

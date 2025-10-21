
import React from 'react';
import type { Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  const Icon = category.icon;
  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br ${category.color} text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-pink-500`}
    >
      <div className="absolute inset-0 bg-black/20 rounded-2xl group-hover:bg-black/10 transition-colors duration-300"></div>
      <div className="relative z-10 flex flex-col items-center">
          <Icon className="h-12 w-12 sm:h-16 sm:w-16 mb-3 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <span className="font-bold text-lg sm:text-xl">{category.name}</span>
      </div>
    </button>
  );
};

export default CategoryCard;


import React from 'react';

interface LoaderProps {
  message: string;
}

const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-64">
      <div className="w-16 h-16 border-4 border-t-transparent border-purple-400 rounded-full animate-spin"></div>
      <p className="mt-6 text-xl font-semibold text-indigo-200">{message}</p>
    </div>
  );
};

export default Loader;

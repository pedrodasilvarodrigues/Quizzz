
import React from 'react';
import { UserStats } from '../types';
import ProgressBar from './ProgressBar';
import { StarIcon, CoinIcon } from './icons/UIIcons';

interface HeaderProps {
  userStats: UserStats;
}

const Header: React.FC<HeaderProps> = ({ userStats }) => {
  const { level, xp, xpToNextLevel, lovecoins, avatar, username } = userStats;

  return (
    <header className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-slate-700">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <img src={avatar} alt="User Avatar" className="w-12 h-12 rounded-full border-2 border-purple-400" />
          <div>
            <h2 className="font-bold text-lg">{username}</h2>
            <div className="flex items-center gap-2 text-sm text-indigo-300">
              <StarIcon className="w-4 h-4 text-yellow-400" />
              <span>Nível {level}</span>
            </div>
          </div>
        </div>
        
        <div className="hidden sm:flex flex-col items-end gap-1 w-1/3 max-w-xs">
           <div className="flex justify-between w-full text-xs text-slate-300">
             <span>XP</span>
             <span>{xp} / {xpToNextLevel}</span>
           </div>
           <ProgressBar value={xp} max={xpToNextLevel} />
        </div>
        
        <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-2 rounded-full">
          <CoinIcon className="w-6 h-6 text-yellow-400" />
          <span className="font-bold text-lg">{lovecoins}</span>
        </div>
      </div>
       <div className="sm:hidden mt-3">
           <div className="flex justify-between w-full text-xs text-slate-300">
             <span>XP</span>
             <span>{xp} / {xpToNextLevel}</span>
           </div>
           <ProgressBar value={xp} max={xpToNextLevel} />
        </div>
    </header>
  );
};

export default Header;

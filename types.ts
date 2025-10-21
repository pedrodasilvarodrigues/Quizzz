// FIX: Import `ComponentType` from 'react' to resolve the "Cannot find namespace 'React'" error.
import type { ComponentType } from 'react';

export interface Question {
  questionText: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface UserStats {
  level: number;
  xp: number;
  xpToNextLevel: number;
  lovecoins: number;
  avatar: string;
  username: string;
}

export enum GameStatus {
  NOT_STARTED = 'NOT_STARTED',
  LOADING_QUESTIONS = 'LOADING_QUESTIONS',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
}

export interface Category {
    name: string;
    // FIX: Use `ComponentType` directly, as it's now imported.
    icon: ComponentType<{ className?: string }>;
    color: string;
}

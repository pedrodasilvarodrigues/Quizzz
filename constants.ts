import type { Category } from './types';
import { ScienceIcon, HistoryIcon, FilmIcon, MusicIcon, SportsIcon, GeographyIcon, TechIcon, ArtIcon, PortugueseIcon, MathIcon, BiologyIcon, ChemistryIcon, PhysicsIcon, LiteratureIcon, NewsIcon, PopCultureIcon, BibleIcon } from './components/icons/CategoryIcons';

export const QUIZ_CATEGORIES: Category[] = [
  { name: 'Ciência', icon: ScienceIcon, color: 'from-cyan-500 to-blue-500' },
  { name: 'História', icon: HistoryIcon, color: 'from-amber-500 to-orange-500' },
  { name: 'Filmes', icon: FilmIcon, color: 'from-rose-500 to-red-500' },
  { name: 'Música', icon: MusicIcon, color: 'from-violet-500 to-purple-500' },
  { name: 'Esportes', icon: SportsIcon, color: 'from-emerald-500 to-green-500' },
  { name: 'Geografia', icon: GeographyIcon, color: 'from-sky-500 to-indigo-500' },
  { name: 'Bíblico', icon: BibleIcon, color: 'from-yellow-400 to-amber-500' },
  { name: 'Tecnologia', icon: TechIcon, color: 'from-slate-500 to-gray-500' },
  { name: 'Arte', icon: ArtIcon, color: 'from-pink-500 to-fuchsia-500' },
  { name: 'Português', icon: PortugueseIcon, color: 'from-blue-400 to-cyan-400' },
  { name: 'Matemática', icon: MathIcon, color: 'from-red-400 to-yellow-400' },
  { name: 'Biologia', icon: BiologyIcon, color: 'from-lime-500 to-green-500' },
  { name: 'Química', icon: ChemistryIcon, color: 'from-teal-400 to-cyan-600' },
  { name: 'Física', icon: PhysicsIcon, color: 'from-indigo-400 to-blue-600' },
  { name: 'Literatura', icon: LiteratureIcon, color: 'from-orange-300 to-amber-500' },
  { name: 'Atualidades', icon: NewsIcon, color: 'from-gray-400 to-slate-600' },
  { name: 'Cultura Pop', icon: PopCultureIcon, color: 'from-fuchsia-500 to-pink-600' },
];

export const QUESTIONS_PER_QUIZ = 10;

export const QUIZ_DIFFICULTIES = [
  { id: 'Fácil', name: 'Fácil' },
  { id: 'Médio', name: 'Médio' },
  { id: 'Difícil', name: 'Difícil' },
  { id: 'Especialista', name: 'Especialista' },
  { id: 'Gênio', name: 'Gênio' },
];

export const CORRECT_ANSWER_MESSAGES = [
  'Muito bom!',
  'Excelente!',
  'Você é demais!',
  'Continue assim!',
  'Incrível!',
  'Mandou bem!',
  'Impressionante!',
];

export const INCORRECT_ANSWER_MESSAGES = [
  'Melhore!',
  'Quase lá!',
  'Não desista!',
  'Estude um pouco mais.',
  'Tente de novo!',
  'Essa foi por pouco!',
  'Você consegue na próxima!',
];
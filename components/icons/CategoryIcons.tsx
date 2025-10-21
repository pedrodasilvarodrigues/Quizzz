import React from 'react';

type IconProps = { className?: string };

export const ScienceIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <path d="M14 2v6h6" />
    <path d="M10.4 12.6a2.4 2.4 0 0 1 3.2 0" />
    <path d="M12 18a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
  </svg>
);

export const HistoryIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 3v18h18" />
    <path d="M3 13h18" />
    <path d="M8 21V9" />
    <path d="M13 21V3" />
    <path d="M18 21V11" />
  </svg>
);

export const FilmIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
    <line x1="7" y1="2" x2="7" y2="22"></line>
    <line x1="17" y1="2" x2="17" y2="22"></line>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <line x1="2" y1="7" x2="7" y2="7"></line>
    <line x1="2" y1="17" x2="7" y2="17"></line>
    <line x1="17" y1="17" x2="22" y2="17"></line>
    <line x1="17" y1="7" x2="22" y2="7"></line>
  </svg>
);

export const MusicIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13"></path>
    <circle cx="6" cy="18" r="3"></circle>
    <circle cx="18" cy="16" r="3"></circle>
  </svg>
);

export const SportsIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 2a5 5 0 0 0-5 5c0 1.5.64 2.85 1.66 3.84"></path>
    <path d="M12 22a5 5 0 0 0 5-5c0-1.5-.64-2.85-1.66-3.84"></path>
    <path d="M2 12h20"></path>
  </svg>
);

export const GeographyIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

export const TechIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
    <line x1="8" y1="21" x2="16" y2="21"></line>
    <line x1="12" y1="17" x2="12" y2="21"></line>
    <path d="m10 9 2 2 2-2" />
  </svg>
);

export const ArtIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21.3 15.3a2.4 2.4 0 0 1-3.4 3.4L12 12.8l-5.9 5.9a2.4 2.4 0 0 1-3.4-3.4l5.9-5.9-5.9-5.9a2.4 2.4 0 0 1 3.4-3.4L12 6.1l5.9-5.9a2.4 2.4 0 0 1 3.4 3.4L15.9 12l5.4 3.3z" />
    </svg>
);

export const PortugueseIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 22v-4.2a3.3 3.3 0 0 0-3.3-3.3H5.3a3.3 3.3 0 0 0-3.3 3.3V22" />
    <path d="M16 14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
    <path d="M12 4v10" />
    <path d="m18 17 4 4" />
    <path d="m22 17-4 4" />
  </svg>
);

export const MathIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" />
    <path d="M12 5v14" />
    <path d="m17 7-5 5-5-5" />
    <path d="m17 17-5-5-5 5" />
  </svg>
);

export const BiologyIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21a8 8 0 0 0 4-15.5" />
    <path d="M12 3a8 8 0 0 0-4 15.5" />
    <path d="M12 3v1" />
    <path d="M12 20v1" />
    <path d="M4.5 10.5h1" />
    <path d="M18.5 10.5h1" />
    <path d="M6 15.25a8 8 0 0 0 12 0" />
    <path d="M6 8.75a8 8 0 0 1 12 0" />
  </svg>
);

export const ChemistryIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 3h8" />
    <path d="M11 3v5" />
    <path d="M13 3v5" />
    <path d="M18 8.8c0 1.3-1.2 2.4-2.8 3.2C13.5 12.8 12 14.3 12 16.5V21" />
    <path d="M6 8.8C6 7.5 7.2 6.4 8.8 5.6 10.5 4.8 12 3.3 12 1.5V1" />
    <path d="M12 21H6.5A4.5 4.5 0 0 1 2 16.5V12" />
  </svg>
);

export const PhysicsIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="1" />
    <path d="M20.2 20.2c2.04-2.03.02-5.91-2.98-8.9-3-3-6.87-5.02-8.9-2.98" />
    <path d="M3.8 3.8c-2.04 2.03-.02 5.91 2.98 8.9 3 3 6.87 5.02 8.9 2.98" />
    <path d="M20.2 3.8c-2.03-2.04-5.91-.02-8.9 2.98-3 3-5.02 6.87-2.98 8.9" />
    <path d="M3.8 20.2c2.03 2.04 5.91.02 8.9-2.98 3-3 5.02-6.87 2.98-8.9" />
  </svg>
);

export const LiteratureIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <path d="m14 6-2 5 2 5" />
    <path d="M10 16H8" />
  </svg>
);

export const NewsIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h20v18H2z" />
    <path d="M6 8h12" />
    <path d="M6 12h12" />
    <path d="M6 16h8" />
  </svg>
);

export const PopCultureIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 21h8" />
    <path d="M12 17v4" />
    <path d="M10 3v2" />
    <path d="M14 3v2" />
    <path d="M6 5v2" />
    <path d="M18 5v2" />
    <path d="M4 9h16" />
    <path d="m19.5 9-.7-4.5" />
    <path d="m4.5 9 .7-4.5" />
    <path d="M10 13h4" />
    <path d="M12 11v4" />
  </svg>
);

export const BibleIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);
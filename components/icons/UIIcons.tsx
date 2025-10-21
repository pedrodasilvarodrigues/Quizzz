
import React from 'react';

type IconProps = { className?: string };

export const StarIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export const CoinIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="8"></circle>
    <path d="M12 18V6"></path>
    <path d="M16 14c-2 0-3-1-3-3s1-3 3-3"></path>
  </svg>
);

export const StreakIcon: React.FC<IconProps> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.83 2.05c.44-.66.22-1.6-.46-2.05-.68-.44-1.6-.22-2.05.46-.99 1.49-1.46 3.19-1.52 4.95C8.74 5.43 8.7 5.4 8.65 5.35c-.88-.88-2.3-.88-3.18 0-.88.88-.88 2.3 0 3.18.05.05.09.09.14.13-1.75.06-3.46.53-4.95 1.52-.66.44-1.6.22-2.05-.46-.44-.68-.22-1.6.46-2.05C.57 6.6 2.2 6.1 3.73 5.8c.34-1.52.9-3.04 1.7-4.4C6.11.05 7.02-.2 7.67.24c.66.44.87 1.38.44 2.05-1.29 1.95-2 4.14-2.08 6.42.06.03.11.06.17.09 1.25.79 2.13 2.12 2.3 3.61.03-.06.06-.11.09-.17.79-1.25 2.12-2.13 3.61-2.3-.06-.03-.11-.06-.17-.09-1.95-1.29-4.14-2-6.42-2.08-.03.06-.06.11-.09.17-0.79 1.25-2.12 2.13-3.61 2.3.06.03.11.06.17.09 1.29 1.95 2 4.14 2.08 6.42.03-.06.06-.11.09-.17.79-1.25 2.12-2.13 3.61-2.3.06.03.11.06.17.09 1.95 1.29 4.14 2 6.42 2.08.03-.06.06-.11.09-.17.79-1.25 2.12-2.13 3.61-2.3-.06-.03-.11-.06-.17-.09-1.29-1.95-2-4.14-2.08-6.42-.03.06-.06.11-.09.17-.79 1.25-2.12 2.13-3.61 2.3.06.03.11.06.17.09 1.95 1.29 4.14 2 6.42 2.08.03-.06.06-.11.09-.17.79-1.25 2.12-2.13 3.61-2.3-.06-.03-.11-.06-.17-.09-1.52-.25-3.04-.81-4.4-1.7-1.36.89-2.88 1.45-4.4 1.7.06.03.11.06.17.09 1.25.79 2.13 2.12 2.3 3.61.03-.06.06-.11.09-.17.79-1.25 2.12-2.13 3.61-2.3-.06-.03-.11-.06-.17-.09-1.95-1.29-4.14-2-6.42-2.08-.03.06-.06.11-.09.17-0.79 1.25-2.12 2.13-3.61 2.3.06.03.11.06.17.09 1.29 1.95 2 4.14 2.08 6.42.03-.06.06-.11.09-.17.79-1.25 2.12-2.13 3.61-2.3.06.03.11.06.17.09 1.52.25 3.04.81 4.4 1.7.25.16.55.25.85.25.39 0 .78-.15 1.07-.44.66-.66.8-1.6.3-2.36-1.5-2.26-2.34-4.88-2.34-7.64s.84-5.38 2.34-7.64c.5-.75.36-1.7-.3-2.36-.66-.66-1.7-.8-2.36-.3-2.26 1.5-4.88 2.34-7.64 2.34-2.76 0-5.38-.84-7.64-2.34-.66-.5-1.7-.36-2.36.3z"/>
    </svg>
);

export const CheckIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export const XIcon: React.FC<IconProps> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

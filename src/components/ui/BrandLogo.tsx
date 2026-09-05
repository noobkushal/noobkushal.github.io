import React from 'react';

interface BrandLogoProps {
  brand: 'ORACLE' | 'GOOGLE' | 'MICROSOFT' | 'CISCO' | 'IBM' | 'CREDLY';
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ brand, size = 'md' }) => {
  const dimensions = {
    sm: 'w-6 h-6',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }[size];

  switch (brand) {
    case 'ORACLE':
      return (
        <div className={`${dimensions} rounded-xl bg-[#F80000]/10 border border-[#F80000]/30 p-1.5 flex items-center justify-center shrink-0`}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-[#F80000] fill-current">
            <path d="M16.2 3H7.8C4 3 1 6 1 9.8v4.4C1 18 4 21 7.8 21h8.4c3.8 0 6.8-3 6.8-6.8V9.8C23 6 20 3 16.2 3zm3.8 11.2c0 2.1-1.7 3.8-3.8 3.8H7.8C5.7 18 4 16.3 4 14.2V9.8C4 7.7 5.7 6 7.8 6h8.4c2.1 0 3.8 1.7 3.8 3.8v4.4zM7.8 15h8.4c.6 0 1-.4 1-1s-.4-1-1-1H7.8c-.6 0-1 .4-1 1s.4 1 1 1z" />
          </svg>
        </div>
      );

    case 'GOOGLE':
      return (
        <div className={`${dimensions} rounded-xl bg-white/10 border border-white/20 p-1.5 flex items-center justify-center shrink-0`}>
          <svg viewBox="0 0 24 24" className="w-full h-full">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
          </svg>
        </div>
      );

    case 'MICROSOFT':
      return (
        <div className={`${dimensions} rounded-xl bg-slate-800/80 border border-slate-700 p-2 flex items-center justify-center shrink-0`}>
          <svg viewBox="0 0 23 23" className="w-full h-full">
            <path fill="#F25022" d="M1 1h10v10H1z" />
            <path fill="#7FBA00" d="M12 1h10v10H12z" />
            <path fill="#00A4EF" d="M1 12h10v10H1z" />
            <path fill="#FFB900" d="M12 12h10v10H12z" />
          </svg>
        </div>
      );

    case 'CREDLY':
    case 'CISCO':
    case 'IBM':
    default:
      return (
        <div className={`${dimensions} rounded-xl bg-[#FFB800]/10 border border-[#FFB800]/30 p-1.5 flex items-center justify-center shrink-0`}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-[#FFB800] fill-current">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
      );
  }
};

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '', id }) => {
  return (
    <div id={id} className={`cyber-card p-6 ${className}`}>
      {children}
    </div>
  );
};

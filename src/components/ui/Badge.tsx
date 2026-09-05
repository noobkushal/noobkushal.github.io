import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'emerald' | 'purple' | 'amber' | 'rose' | 'slate';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'cyan', size = 'sm' }) => {
  const getStyles = () => {
    switch (variant) {
      case 'emerald':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      case 'purple':
        return 'bg-purple-500/10 text-purple-300 border-purple-500/30';
      case 'amber':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'rose':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      case 'slate':
        return 'bg-slate-800/60 text-slate-300 border-slate-700';
      case 'cyan':
      default:
        return 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30';
    }
  };

  const sizeClasses = size === 'md' ? 'px-3 py-1 text-xs font-mono font-semibold' : 'px-2.5 py-0.5 text-[11px] font-mono font-medium';

  return (
    <span className={`inline-flex items-center gap-1.5 rounded-md border ${getStyles()} ${sizeClasses}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-75" />
      {children}
    </span>
  );
};

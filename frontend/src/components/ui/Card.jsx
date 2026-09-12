import React from 'react';
import { cn } from '@/utils/cn';

export const Card = ({ children, className, hover = false, ...props }) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-carbon-900 border border-slate-200 dark:border-carbon-800 rounded-2xl p-6 transition-all duration-200 shadow-sm',
        hover && 'hover:border-eco-emerald/40 hover:shadow-glow-emerald/10 cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

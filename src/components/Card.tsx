import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient';
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
}) => {
  const baseClasses = 'rounded-xl p-6 shadow-lg transition-all duration-300';
  const hoverClasses = hover ? 'hover:shadow-2xl transform hover:-translate-y-2' : '';
  
  const variantClasses = {
    default: 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700',
    gradient: 'bg-gradient-card backdrop-blur-sm border border-white/20',
  };

  return (
    <div className={`${baseClasses} ${hoverClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </div>
  );
};
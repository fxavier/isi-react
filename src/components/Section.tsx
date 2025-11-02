import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gradient' | 'dark';
  padding?: 'sm' | 'md' | 'lg';
}

export const Section: React.FC<SectionProps> = ({
  children,
  id,
  className = '',
  background = 'white',
  padding = 'lg',
}) => {
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-16',
    lg: 'py-20',
  };

  const backgroundClasses = {
    white: 'bg-white dark:bg-neutral-900',
    gradient: 'bg-gradient-section',
    dark: 'bg-neutral-50 dark:bg-neutral-800',
  };

  return (
    <section
      id={id}
      className={`${paddingClasses[padding]} ${backgroundClasses[background]} ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};
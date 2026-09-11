import React from 'react';

interface MirraTextProps {
  children: React.ReactNode;
  variant?: 'editorial' | 'metric' | 'body';
  className?: string;
  as?: React.ElementType;
}

export const MirraText: React.FC<MirraTextProps> = ({ 
  children, 
  variant = 'body', 
  className = '',
  as: Component = 'div' 
}) => {
  let baseClasses = '';
  
  if (variant === 'editorial') {
    baseClasses = 'font-serif text-[72px] leading-[1.1] tracking-[-0.02em] text-foreground';
  } else if (variant === 'metric') {
    baseClasses = 'font-mono text-[56px] leading-[1.2] tracking-[-0.04em] text-foreground';
  } else {
    baseClasses = 'font-sans text-base text-foreground';
  }

  return (
    <Component className={`${baseClasses} ${className}`}>
      {children}
    </Component>
  );
};

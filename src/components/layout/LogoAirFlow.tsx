
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoAirFlowProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

const LogoAirFlow: React.FC<LogoAirFlowProps> = ({
  className,
  size = 'md',
  onClick
}) => {
  const sizeClasses = {
    sm: 'h-12 md:h-16',
    md: 'h-16 md:h-20',
    lg: 'h-20 md:h-24'
  };

  return (
    <div 
      className={cn("flex items-center justify-center", className)}
      onClick={onClick}
    >
      <img 
        alt="Air Flow Logo" 
        src="/lovable-uploads/64687e12-46cb-44b9-8574-13e6f0e8cce8.png" 
        className={cn(sizeClasses[size], "object-cover", onClick && "cursor-pointer")} 
      />
    </div>
  );
};

export default LogoAirFlow;

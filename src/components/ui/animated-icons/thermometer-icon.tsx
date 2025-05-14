
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AnimatedIconProps } from './types';
import { pathVariants, liquidVariants } from './animation-variants';

export const AnimatedThermometerIcon: React.FC<AnimatedIconProps> = ({ 
  className, 
  color = "#1E4D8C",
  size = 24,
  isVisible = true
}) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.path
          d="M14 14.76V3.5C14 2.67 13.33 2 12.5 2H11.5C10.67 2 10 2.67 10 3.5V14.76"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          custom={0}
          variants={pathVariants}
        />
        <motion.path
          d="M12 19C13.6569 19 15 17.6569 15 16C15 14.3431 13.6569 13 12 13C10.3431 13 9 14.3431 9 16C9 17.6569 10.3431 19 12 19Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          custom={1}
          variants={pathVariants}
        />
        <motion.rect
          x="10.5"
          y="13"
          width="3"
          height="6"
          rx="1.5"
          fill={color}
          opacity="0.5"
          variants={liquidVariants}
          style={{ transformOrigin: 'bottom' }}
        />
      </motion.svg>
    </div>
  );
};

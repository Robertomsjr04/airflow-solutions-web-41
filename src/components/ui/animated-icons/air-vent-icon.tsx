
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AnimatedIconProps } from './types';
import { pathVariants, airFlowVariants } from './animation-variants';

export const AnimatedAirVentIcon: React.FC<AnimatedIconProps> = ({ 
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
        <motion.rect
          x="2"
          y="3"
          width="20"
          height="18"
          rx="2"
          stroke={color}
          strokeWidth="2"
          fill="none"
          custom={0}
          variants={pathVariants}
        />
        <motion.path
          d="M2 7H22"
          stroke={color}
          strokeWidth="2"
          custom={1}
          variants={pathVariants}
        />
        <motion.path
          d="M2 17H22"
          stroke={color}
          strokeWidth="2"
          custom={2}
          variants={pathVariants}
        />
        <motion.path
          d="M8 12H9"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          custom={0}
          variants={airFlowVariants}
          style={{ transformOrigin: 'center' }}
        />
        <motion.path
          d="M12 12H13"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          custom={1}
          variants={airFlowVariants}
          style={{ transformOrigin: 'center' }}
        />
        <motion.path
          d="M16 12H17"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          custom={2}
          variants={airFlowVariants}
          style={{ transformOrigin: 'center' }}
        />
      </motion.svg>
    </div>
  );
};

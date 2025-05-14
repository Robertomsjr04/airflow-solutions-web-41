
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AnimatedIconProps } from './types';
import { pathVariants, pulseVariants } from './animation-variants';

export const AnimatedBuildingIcon: React.FC<AnimatedIconProps> = ({ 
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
          x="4"
          y="2"
          width="16"
          height="20"
          rx="2"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          custom={0}
          variants={pathVariants}
        />
        <motion.path
          d="M9 22V16H15V22"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          custom={1}
          variants={pathVariants}
        />
        <motion.path
          d="M8 6H10"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          custom={2}
          variants={pathVariants}
        />
        <motion.path
          d="M14 6H16"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          custom={3}
          variants={pathVariants}
        />
        <motion.path
          d="M8 10H10"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          custom={4}
          variants={pathVariants}
        />
        <motion.path
          d="M14 10H16"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          custom={5}
          variants={pathVariants}
        />
        <motion.circle
          cx="12"
          cy="12"
          r="6"
          stroke={color}
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={pulseVariants}
          style={{ opacity: 0.2 }}
        />
      </motion.svg>
    </div>
  );
};

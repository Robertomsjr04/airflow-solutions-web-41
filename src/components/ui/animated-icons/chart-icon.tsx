
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { AnimatedIconProps } from './types';

export const AnimatedChartIcon: React.FC<AnimatedIconProps> = ({ 
  className, 
  color = "#1E4D8C",
  size = 24,
  isVisible = true
}) => {
  const barVariants = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: (i: number) => ({
      scaleY: 1,
      opacity: 1,
      transition: {
        scaleY: { type: "spring", duration: 1, bounce: 0.3, delay: i * 0.2 },
        opacity: { duration: 0.3, delay: i * 0.2 }
      }
    })
  };

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
          x="3"
          y="21"
          width="18"
          height="1"
          fill={color}
          custom={0}
          variants={barVariants}
          style={{ transformOrigin: '50% 100%', originY: 1 }}
        />
        <motion.rect
          x="4"
          y="12"
          width="4"
          height="9"
          rx="1"
          fill={color}
          custom={1}
          variants={barVariants}
          style={{ transformOrigin: '50% 100%' }}
        />
        <motion.rect
          x="10"
          y="8"
          width="4"
          height="13"
          rx="1"
          fill={color}
          custom={2}
          variants={barVariants}
          style={{ transformOrigin: '50% 100%' }}
        />
        <motion.rect
          x="16"
          y="4"
          width="4"
          height="17"
          rx="1"
          fill={color}
          custom={3}
          variants={barVariants}
          style={{ transformOrigin: '50% 100%' }}
        />
        <motion.path
          d="M3 9L7 5L13 11L21 3"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            transition: { 
              pathLength: { type: "spring", duration: 1.5, bounce: 0, delay: 0.8 },
              opacity: { duration: 0.3, delay: 0.8 }
            }
          }}
        />
      </motion.svg>
    </div>
  );
};


import React, { useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface AnimatedIconProps {
  className?: string;
  color?: string;
  size?: number;
  isVisible?: boolean;
}

// Shield Icon - For experience
export const AnimatedShieldIcon: React.FC<AnimatedIconProps> = ({ 
  className, 
  color = "#1E4D8C",
  size = 24,
  isVisible = true
}) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0, delay: i * 0.2 },
        opacity: { duration: 0.3, delay: i * 0.2 }
      }
    })
  };

  const checkVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", duration: 1, bounce: 0.4, delay: 0.6 }
    }
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
        <motion.path
          d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          custom={0}
          variants={pathVariants}
        />
        <motion.path
          d="M16 10L10.5 15.5L8 13"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={checkVariants}
        />
      </motion.svg>
    </div>
  );
};

// Users Icon - For certified team
export const AnimatedUsersIcon: React.FC<AnimatedIconProps> = ({ 
  className, 
  color = "#1E4D8C",
  size = 24,
  isVisible = true
}) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0, delay: i * 0.2 },
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
        <motion.path
          d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          custom={0}
          variants={pathVariants}
        />
        <motion.path
          d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          custom={1}
          variants={pathVariants}
        />
        <motion.path
          d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          custom={2}
          variants={pathVariants}
        />
        <motion.path
          d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          custom={3}
          variants={pathVariants}
        />
      </motion.svg>
    </div>
  );
};

// Building Icon - For national service
export const AnimatedBuildingIcon: React.FC<AnimatedIconProps> = ({ 
  className, 
  color = "#1E4D8C",
  size = 24,
  isVisible = true
}) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0, delay: i * 0.2 },
        opacity: { duration: 0.3, delay: i * 0.2 }
      }
    })
  };
  
  const pulseVariants: Variants = {
    hidden: { scale: 1, opacity: 0.7 },
    visible: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        delay: 1
      }
    }
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

// Chart Icon - For efficiency
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

// Air Vent Icon - For climatization
export const AnimatedAirVentIcon: React.FC<AnimatedIconProps> = ({ 
  className, 
  color = "#1E4D8C",
  size = 24,
  isVisible = true
}) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0, delay: i * 0.2 },
        opacity: { duration: 0.3, delay: i * 0.2 }
      }
    })
  };

  const airFlowVariants: Variants = {
    hidden: { opacity: 0, x: -5 },
    visible: (i: number) => ({
      opacity: [0, 1, 0],
      x: [-5, 0, 5],
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        delay: i * 0.3 + 0.5
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

// Settings Icon - For projects
export const AnimatedSettingsIcon: React.FC<AnimatedIconProps> = ({ 
  className, 
  color = "#1E4D8C",
  size = 24,
  isVisible = true
}) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0, delay: i * 0.2 },
        opacity: { duration: 0.3, delay: i * 0.2 }
      }
    })
  };

  const rotateVariants: Variants = {
    hidden: { rotate: 0 },
    visible: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear"
      }
    }
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
        <motion.path
          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          custom={0}
          variants={pathVariants}
        />
        <motion.path
          d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={rotateVariants}
          style={{ transformOrigin: 'center' }}
        />
      </motion.svg>
    </div>
  );
};

// Activity Icon - For automation
export const AnimatedActivityIcon: React.FC<AnimatedIconProps> = ({ 
  className, 
  color = "#1E4D8C",
  size = 24,
  isVisible = true
}) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.3 }
      }
    }
  };

  const pulseVariants: Variants = {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.1, 1],
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 1.2,
        delay: 1
      }
    }
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
        <motion.path
          d="M22 12h-4l-3 9L9 3l-3 9H2"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
        />
        <motion.circle 
          cx="12" 
          cy="12" 
          r="2" 
          fill={color} 
          variants={pulseVariants} 
        />
      </motion.svg>
    </div>
  );
};

// Wrench Icon - For infrastructure
export const AnimatedWrenchIcon: React.FC<AnimatedIconProps> = ({ 
  className, 
  color = "#1E4D8C",
  size = 24,
  isVisible = true
}) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0, delay: i * 0.2 },
        opacity: { duration: 0.3, delay: i * 0.2 }
      }
    })
  };

  const rotateVariants: Variants = {
    hidden: { rotate: 0 },
    visible: {
      rotate: [-10, 10, -10],
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        delay: 1
      }
    }
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
        variants={rotateVariants}
        style={{ transformOrigin: 'center' }}
      >
        <motion.path
          d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          custom={0}
          variants={pathVariants}
        />
      </motion.svg>
    </div>
  );
};

// Thermometer Icon - For ducts
export const AnimatedThermometerIcon: React.FC<AnimatedIconProps> = ({ 
  className, 
  color = "#1E4D8C",
  size = 24,
  isVisible = true
}) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0, delay: i * 0.2 },
        opacity: { duration: 0.3, delay: i * 0.2 }
      }
    })
  };
  
  const liquidVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: '50%',
      opacity: 1,
      transition: {
        height: { type: "spring", duration: 1.5, bounce: 0.3, delay: 0.8 },
        opacity: { duration: 0.5, delay: 0.8 }
      }
    }
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

// Shield Check Icon - For PMOC
export const AnimatedShieldCheckIcon: React.FC<AnimatedIconProps> = ({ 
  className, 
  color = "#1E4D8C",
  size = 24,
  isVisible = true
}) => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0, delay: i * 0.2 },
        opacity: { duration: 0.3, delay: i * 0.2 }
      }
    })
  };

  const checkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1, bounce: 0, delay: 0.8 },
        opacity: { duration: 0.3, delay: 0.8 }
      }
    }
  };

  const pulseVariants: Variants = {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.05, 1],
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        delay: 1.5
      }
    }
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
        variants={pulseVariants}
        style={{ transformOrigin: 'center' }}
      >
        <motion.path
          d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          custom={0}
          variants={pathVariants}
        />
        <motion.path
          d="M9 12L11 14L15 10"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          variants={checkVariants}
        />
      </motion.svg>
    </div>
  );
};

// Hook for scroll visibility
export const useScrollVisibility = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [threshold]);

  return { ref, isVisible };
};

// Export all animated icons
export const AnimatedIcons = {
  Shield: AnimatedShieldIcon,
  Users: AnimatedUsersIcon,
  Building: AnimatedBuildingIcon,
  Chart: AnimatedChartIcon,
  AirVent: AnimatedAirVentIcon,
  Settings: AnimatedSettingsIcon,
  Activity: AnimatedActivityIcon,
  Wrench: AnimatedWrenchIcon,
  Thermometer: AnimatedThermometerIcon,
  ShieldCheck: AnimatedShieldCheckIcon
};

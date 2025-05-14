
import { Variants } from 'framer-motion';

export const pathVariants: Variants = {
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

export const pulseVariants: Variants = {
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

export const rotateVariants: Variants = {
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

export const airFlowVariants: Variants = {
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

export const alternatingRotateVariants: Variants = {
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

export const checkVariants: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", duration: 1, bounce: 0.4, delay: 0.6 }
  }
};

export const liquidVariants: Variants = {
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

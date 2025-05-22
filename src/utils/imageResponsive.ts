
/**
 * Utility functions for responsive image handling
 */

/**
 * Check if the device is mobile
 */
export const isMobileDevice = (): boolean => {
  return window.innerWidth < 768;
};

/**
 * Get appropriate image dimensions based on device
 */
export const getResponsiveImageDimensions = (
  defaultWidth: number, 
  defaultHeight: number,
  aspectRatio: number = 4/3 // Default to portrait 3:4 (width:height) ratio
): { width: number, height: number } => {
  if (isMobileDevice()) {
    // Scale down for mobile devices - maintain aspect ratio
    const scaleFactor = 0.7; // 70% of original size for mobile devices
    return {
      width: Math.round(defaultWidth * scaleFactor),
      height: Math.round((defaultWidth * aspectRatio) * scaleFactor)
    };
  }
  
  return { 
    width: defaultWidth, 
    height: Math.round(defaultWidth * aspectRatio) 
  };
};

/**
 * Calculate aspect ratio based on original dimensions
 * Returns a CSS value like "100%" to maintain square aspect ratio
 */
export const getAspectRatioStyles = (width: number, height: number): { paddingTop: string } => {
  const ratio = (height / width) * 100;
  return {
    paddingTop: `${ratio}%`
  };
};

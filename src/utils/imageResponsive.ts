
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
  defaultHeight: number
): { width: number, height: number } => {
  if (isMobileDevice()) {
    // Scale down for mobile devices - maintain aspect ratio
    const scaleFactor = 0.8; // 80% of original size
    return {
      width: Math.round(defaultWidth * scaleFactor),
      height: Math.round(defaultHeight * scaleFactor)
    };
  }
  
  return { width: defaultWidth, height: defaultHeight };
};

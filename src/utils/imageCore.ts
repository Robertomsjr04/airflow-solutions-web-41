
/**
 * Core image utility functions and constants
 */

// Default fallback image to use when images fail to load
const DEFAULT_FALLBACK_IMAGE = "/placeholder.svg";

// Specific fallbacks for different content types
const FALLBACKS = {
  testimonial: "/placeholder.svg",
  project: "/placeholder.svg",
  client: "/placeholder.svg",
  service: "/placeholder.svg",
};

export type ImageCategory = keyof typeof FALLBACKS | 'default';

/**
 * Get appropriate fallback image based on content category
 */
export const getFallbackImage = (category: ImageCategory = 'default'): string => {
  return FALLBACKS[category] || DEFAULT_FALLBACK_IMAGE;
};

/**
 * Renames a file path with spaces to a URL-compatible format
 */
export const getEncodedPath = (path: string): string => {
  if (!path) return '';
  // Ensure the path has properly encoded URL characters
  return path && path.includes(' ') ? encodeURI(path) : path;
};

/**
 * Check if an image exists
 */
export const imageExists = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    if (!src) {
      resolve(false);
      return;
    }
    
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
};

/**
 * Add dimensions to image URL for CDNs that support on-the-fly resizing
 * and optimize for mobile devices
 */
export const getOptimizedImageUrl = (url: string, width?: number, height?: number): string => {
  if (!url) return DEFAULT_FALLBACK_IMAGE;
  
  // Check if URL is for a lovable upload
  if (url.includes('lovable-uploads')) {
    // For now, just return the URL as-is
    return url;
  }
  
  // For other URLs, we could add width/height parameters for CDN-based image resizing
  // or implement responsive images based on device
  return url;
};

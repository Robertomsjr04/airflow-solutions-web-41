
/**
 * Utilitário para gerenciamento de imagens
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
 * Preload an image and return a promise
 */
export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    // Handle empty/invalid sources
    if (!src || src === '') {
      console.warn('Empty image source provided to preloadImage');
      reject(new Error('Invalid image source'));
      return;
    }
    
    const img = new Image();
    
    img.onload = () => resolve(img);
    img.onerror = (e) => {
      console.error('Error preloading image:', src, e);
      reject(e);
    };
    
    // Add a timestamp to prevent caching issues in development
    img.src = src.includes('?') ? src : `${src}?_t=${new Date().getTime()}`;
  });
};

/**
 * Get appropriate fallback image based on content category
 */
export const getFallbackImage = (category: ImageCategory = 'default'): string => {
  return FALLBACKS[category] || DEFAULT_FALLBACK_IMAGE;
};

/**
 * Preloads multiple images simultaneously
 */
export const preloadImages = (sources: string[]): Promise<HTMLImageElement[]> => {
  // Filter out empty sources to avoid errors
  const validSources = sources.filter(src => src && src !== '');
  return Promise.all(validSources.map(src => preloadImage(src)));
};

/**
 * Preloads a video file
 */
export const preloadVideo = (src: string): Promise<HTMLVideoElement> => {
  return new Promise((resolve, reject) => {
    if (!src || src === '') {
      console.warn('Empty video source provided to preloadVideo');
      reject(new Error('Invalid video source'));
      return;
    }
    
    const video = document.createElement('video');
    video.preload = 'auto';
    
    video.onloadeddata = () => resolve(video);
    video.onerror = (e) => {
      console.error('Error preloading video:', src, e);
      reject(e);
    };
    
    video.src = src;
    video.load();
  });
};

/**
 * Renames a file path with spaces to a URL-compatible format
 */
export const getEncodedPath = (path: string): string => {
  // Ensure the path has properly encoded URL characters
  return path && path.includes(' ') ? encodeURI(path) : path;
};

/**
 * Handles image loading with error tracking and fallbacks
 */
export const handleImageLoad = (
  src: string, 
  setLoading: (loading: boolean) => void,
  setLoaded: (loaded: boolean) => void,
  setError: (error: boolean) => void
): void => {
  if (!src) {
    setLoading(false);
    setError(true);
    return;
  }
  
  setLoading(true);
  setLoaded(false);
  
  preloadImage(src)
    .then(() => {
      setLoaded(true);
      setLoading(false);
    })
    .catch(() => {
      setError(true);
      setLoading(false);
    });
};

/**
 * Add dimensions to image URL for CDNs that support on-the-fly resizing
 * (Not implemented for now as we don't know if a CDN is being used)
 */
export const getOptimizedImageUrl = (url: string, width?: number, height?: number): string => {
  // For now, just return the URL as-is
  // In the future, this could add width/height parameters for CDN-based image resizing
  return url;
};


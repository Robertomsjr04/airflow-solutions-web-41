
/**
 * Utility functions for image loading operations
 */

import { getFallbackImage, ImageCategory } from './imageCore';

/**
 * Get device-appropriate image timeout
 */
export const getImageTimeout = (): number => {
  // Mobile devices may have slower connections, so we give them more time
  const isMobile = window.innerWidth < 768;
  return isMobile ? 15000 : 10000; // 15 seconds for mobile, 10 for desktop
};

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
    
    // Check if src is a valid URL or path
    if (!src.startsWith('http') && !src.startsWith('/')) {
      console.warn('Invalid image path format:', src);
      reject(new Error('Invalid image path format'));
      return;
    }
    
    const img = new Image();
    
    img.onload = () => resolve(img);
    img.onerror = (e) => {
      console.warn('Error preloading image:', src);
      reject(e);
    };
    
    // Add timestamp to prevent caching issues in development
    const cacheBuster = process.env.NODE_ENV === 'development' ? `?_t=${new Date().getTime()}` : '';
    img.src = src.includes('?') ? src : `${src}${cacheBuster}`;
    
    // Set a dynamic timeout based on device
    setTimeout(() => {
      if (!img.complete) {
        reject(new Error('Image load timeout'));
      }
    }, getImageTimeout());
  });
};

/**
 * Preloads multiple images simultaneously
 */
export const preloadImages = (sources: string[]): Promise<HTMLImageElement[]> => {
  // Filter out empty sources to avoid errors
  const validSources = sources.filter(src => src && src !== '');
  
  if (validSources.length === 0) {
    return Promise.resolve([]);
  }
  
  return Promise.allSettled(validSources.map(src => preloadImage(src)))
    .then(results => {
      // Return only successfully loaded images
      return results
        .filter((result): result is PromiseFulfilledResult<HTMLImageElement> => 
          result.status === 'fulfilled')
        .map(result => result.value);
    });
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
    
    // Set a small segment to preload
    video.preload = 'metadata';
    
    video.onloadedmetadata = () => resolve(video);
    video.onerror = (e) => {
      console.warn('Error preloading video:', src);
      reject(e);
    };
    
    // Check if browser supports the video format
    const canPlay = video.canPlayType('video/mp4');
    if (!canPlay) {
      console.warn('Browser cannot play this video format');
      reject(new Error('Unsupported video format'));
      return;
    }
    
    video.src = src;
    video.load();
    
    // Set a timeout to reject after 15 seconds for mobile, 10 seconds for desktop
    setTimeout(() => {
      if (video.readyState === 0) {
        reject(new Error('Video load timeout'));
      }
    }, getImageTimeout());
  });
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
      setError(false);
    })
    .catch(() => {
      setError(true);
      setLoading(false);
      setLoaded(false);
    });
};

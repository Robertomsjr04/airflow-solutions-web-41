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
 * Renames a file path with spaces to a URL-compatible format
 */
export const getEncodedPath = (path: string): string => {
  if (!path) return '';
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
      setError(false);
    })
    .catch(() => {
      setError(true);
      setLoading(false);
      setLoaded(false);
    });
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

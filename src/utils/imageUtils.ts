
/**
 * Utilitário para gerenciamento de imagens
 */

export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = (e) => {
      console.error('Error preloading image:', e);
      reject(e);
    };
    img.src = src;
  });
};

/**
 * Preloads multiple images simultaneously
 */
export const preloadImages = (sources: string[]): Promise<HTMLImageElement[]> => {
  return Promise.all(sources.map(src => preloadImage(src)));
};

/**
 * Preloads a video file
 */
export const preloadVideo = (src: string): Promise<HTMLVideoElement> => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.preload = 'auto';
    
    video.onloadeddata = () => resolve(video);
    video.onerror = (e) => {
      console.error('Error preloading video:', e);
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
  return path.includes(' ') ? encodeURI(path) : path;
};


import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { getFallbackImage, ImageCategory, preloadImage } from '@/utils/imageUtils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackCategory?: ImageCategory;
  showPlaceholder?: boolean;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  fallbackCategory = 'default',
  showPlaceholder = true,
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  
  useEffect(() => {
    let isMounted = true;
    
    if (!src) {
      setHasError(true);
      setIsLoading(false);
      return;
    }
    
    // Reset states when source changes
    setIsLoading(true);
    setHasError(false);
    
    preloadImage(src)
      .then(() => {
        if (isMounted) {
          setImageSrc(src);
          setIsLoading(false);
          onLoad?.();
        }
      })
      .catch(() => {
        if (isMounted) {
          console.warn(`Failed to load image: ${src}`);
          setHasError(true);
          setIsLoading(false);
          setImageSrc(getFallbackImage(fallbackCategory));
          onError?.();
        }
      });
      
    return () => {
      isMounted = false;
    };
  }, [src, fallbackCategory, onLoad, onError]);

  return (
    <div className={cn("relative", className)} style={{ width, height }}>
      {isLoading && showPlaceholder && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="h-10 w-10 border-4 border-t-airflow-blue rounded-full animate-spin"></div>
        </div>
      )}
      
      <img
        src={hasError ? getFallbackImage(fallbackCategory) : imageSrc}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        width={width}
        height={height}
        loading={props.loading || "lazy"}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;

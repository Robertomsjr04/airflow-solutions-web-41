
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { 
  getFallbackImage, 
  ImageCategory, 
  preloadImage,
  getResponsiveImageDimensions 
} from '@/utils/imageUtils';
import { useIsMobile } from '@/hooks/use-mobile';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackCategory?: ImageCategory;
  showPlaceholder?: boolean;
  responsive?: boolean;
  aspectRatio?: number;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  width: defaultWidth = 300,
  height: defaultHeight = 400,
  fallbackCategory = 'default',
  showPlaceholder = true,
  responsive = true,
  aspectRatio = 4/3,
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  const isMobile = useIsMobile();
  
  // Calculate responsive dimensions
  const { width, height } = responsive 
    ? getResponsiveImageDimensions(Number(defaultWidth), Number(defaultHeight), aspectRatio)
    : { width: defaultWidth, height: defaultHeight };
  
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
    <div 
      className={cn("relative", className)} 
      style={props.style || { 
        width: responsive ? '100%' : width, 
        height: 'auto', 
        maxWidth: isMobile ? '100%' : width 
      }}
    >
      {isLoading && showPlaceholder && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="h-10 w-10 border-4 border-t-airflow-blue rounded-full animate-spin"></div>
        </div>
      )}
      
      <img
        src={hasError ? getFallbackImage(fallbackCategory) : imageSrc}
        alt={alt}
        className={cn(
          "transition-opacity duration-300 w-full h-auto object-cover",
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

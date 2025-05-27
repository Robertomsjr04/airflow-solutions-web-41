
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  fallbackCategory?: string;
  lazy?: boolean;
  quality?: number;
  responsive?: boolean;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  fallbackSrc = '/placeholder.svg',
  fallbackCategory,
  lazy = true,
  quality = 85,
  responsive = false,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Log para debug
    console.log('OptimizedImage initialized:', { src, lazy, isInView });
    
    if (!lazy) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, src]);

  const handleLoad = () => {
    console.log('Image loaded successfully:', src);
    setIsLoaded(true);
  };

  const handleError = () => {
    console.warn('Image failed to load:', src);
    setHasError(true);
    setIsLoaded(true);
  };

  // Use fallbackCategory to determine fallback image if provided
  const finalFallbackSrc = fallbackCategory ? `/placeholder.svg` : fallbackSrc;
  const imageSrc = isInView ? (hasError ? finalFallbackSrc : src) : '';

  // Log para debug do estado atual
  useEffect(() => {
    console.log('OptimizedImage state:', { 
      src, 
      imageSrc, 
      isInView, 
      isLoaded, 
      hasError, 
      lazy 
    });
  }, [src, imageSrc, isInView, isLoaded, hasError, lazy]);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        loading={lazy ? 'lazy' : 'eager'}
        {...props}
      />
    </div>
  );
};

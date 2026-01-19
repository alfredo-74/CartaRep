import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderClassName?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
  onError?: () => void;
  style?: React.CSSProperties;
  loading?: "lazy" | "eager";
  testId?: string;
}

export function LazyImage({
  src,
  alt,
  className = "",
  placeholderClassName = "",
  width,
  height,
  priority = false,
  onLoad,
  onError,
  style,
  loading = "lazy",
  testId,
}: LazyImageProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(priority ? src : null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !imageSrc) {
            setImageSrc(src);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "50px",
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, priority, imageSrc]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    onLoad?.();
  };

  const handleImageError = () => {
    setImageError(true);
    onError?.();
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden", className)}
      style={style}
      data-testid={testId}
    >
      {/* Placeholder while loading */}
      {!imageLoaded && !imageError && (
        <div
          className={cn(
            "absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse",
            placeholderClassName
          )}
          aria-hidden="true"
        />
      )}

      {/* Error state */}
      {imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-400 dark:text-gray-600">
          <span className="text-sm font-neon">Failed to load image</span>
        </div>
      )}

      {/* Actual image */}
      {imageSrc && (
        <img
          ref={imgRef}
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={cn(
            "transition-opacity duration-300",
            imageLoaded ? "opacity-100" : "opacity-0",
            className
          )}
          style={style}
        />
      )}
    </div>
  );
}

// Lazy Background Image Component for carousel slides
interface LazyBackgroundProps {
  src: string;
  className?: string;
  children?: React.ReactNode;
  priority?: boolean;
  testId?: string;
}

export function LazyBackground({
  src,
  className = "",
  children,
  priority = false,
  testId,
}: LazyBackgroundProps) {
  const [imageSrc, setImageSrc] = useState<string | null>(priority ? src : null);
  const [imageLoaded, setImageLoaded] = useState(priority);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If priority is true, load image immediately
    if (priority) {
      setImageSrc(src);
      const img = new Image();
      img.src = src;
      img.onload = () => setImageLoaded(true);
      return;
    }

    // If priority is false and imageSrc already set, skip (already loaded)
    if (imageSrc) {
      return;
    }

    // Otherwise use Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !imageSrc) {
            setImageSrc(src);
            
            // Preload the image
            const img = new Image();
            img.src = src;
            img.onload = () => setImageLoaded(true);
            
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: "100px",
        threshold: 0.01,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [src, priority, imageSrc]);

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{
        backgroundImage: imageLoaded && imageSrc ? `url('${imageSrc}')` : undefined,
        backgroundColor: !imageLoaded ? "rgb(31, 41, 55)" : undefined,
      }}
      data-testid={testId}
    >
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gray-800 animate-pulse" aria-hidden="true" />
      )}
      {children}
    </div>
  );
}
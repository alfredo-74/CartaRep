import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LazyImage } from "./lazy-image";
import { cn } from "@/lib/utils";
import type { LightingCollection } from "@/assets/manifest";

interface BrandGalleryProps {
  collections: readonly LightingCollection[];
  brandName: string;
  className?: string;
}

export default function BrandGallery({ 
  collections, 
  brandName, 
  className = "" 
}: BrandGalleryProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Guard against empty collections
  if (!collections || collections.length === 0) {
    return (
      <div className={cn("text-center text-white/60 py-8", className)}>
        <p>No collections available</p>
      </div>
    );
  }

  // Generate consistent testId prefix
  const testIdPrefix = brandName.toLowerCase().replace(/\s+/g, '-');

  // Check scroll position to show/hide navigation arrows
  const updateScrollButtons = useCallback(() => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  // Smooth scroll to specific position
  const scrollTo = useCallback((direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const itemWidth = container.scrollWidth / collections.length;
    const currentScroll = container.scrollLeft;
    
    // Calculate scroll distance based on responsive layout
    const viewportWidth = window.innerWidth;
    const itemsPerView = viewportWidth >= 1024 ? 3.5 : viewportWidth >= 768 ? 2.5 : 1.5;
    const scrollDistance = itemWidth * itemsPerView;
    
    const targetScroll = direction === 'left' 
      ? Math.max(0, currentScroll - scrollDistance)
      : Math.min(container.scrollWidth - container.clientWidth, currentScroll + scrollDistance);

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  }, [collections.length]);

  // Handle keyboard navigation - now based on focus instead of hover
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!isFocused && !isHovered) return;
    
    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        scrollTo('left');
        break;
      case 'ArrowRight':
        event.preventDefault();
        scrollTo('right');
        break;
      case 'Home':
        event.preventDefault();
        if (scrollContainerRef.current) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
        break;
      case 'End':
        event.preventDefault();
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          container.scrollTo({ left: container.scrollWidth, behavior: 'smooth' });
        }
        break;
    }
  }, [isFocused, isHovered, scrollTo]);

  // Set up event listeners
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Initial scroll position check
    updateScrollButtons();

    // Add scroll listener
    container.addEventListener('scroll', updateScrollButtons, { passive: true });

    // Add keyboard listener
    document.addEventListener('keydown', handleKeyDown);

    // Add resize listener for responsive behavior
    const handleResize = () => {
      updateScrollButtons();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      container.removeEventListener('scroll', updateScrollButtons);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [updateScrollButtons, handleKeyDown]);

  return (
    <div 
      className={cn("relative", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      tabIndex={0}
      role="region"
      aria-label={`${brandName} collections gallery`}
      data-testid={`brand-gallery-${testIdPrefix}`}
    >
      {/* Horizontal scrolling container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth brand-gallery-container"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch', // Enable momentum scrolling on iOS
          scrollBehavior: 'smooth',
          // Hide scrollbar
          msOverflowStyle: 'none',
          scrollbarWidth: 'none'
        } as React.CSSProperties}
        role="list"
        aria-label={`${brandName} lighting collections`}
        data-testid={`gallery-container-${testIdPrefix}`}
      >
        {collections.map((collection, index) => (
          <div
            key={`${collection.name}-${index}`}
            className="flex-shrink-0 relative group"
            style={{
              scrollSnapAlign: 'start',
              // Responsive width: 1-2 items mobile, 2-3 tablet, 3-4 desktop
              width: 'clamp(280px, calc(100vw - 8rem), 320px)',
              minWidth: '280px'
            }}
            role="listitem"
            data-testid={`gallery-item-${testIdPrefix}-${index}`}
          >
            {/* Image container with glass-card styling */}
            <div className="relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <LazyImage
                src={collection.image}
                alt={collection.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                priority={index < 4} // Prioritize first 4 images
                testId={`gallery-image-${testIdPrefix}-${index}`}
              />
              
              {/* Collection name overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-medium text-sm leading-tight">
                    {collection.name}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left navigation arrow */}
      {canScrollLeft && (
        <button
          onClick={() => scrollTo('left')}
          className={cn(
            "absolute left-2 top-1/2 -translate-y-1/2 z-10",
            "w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20",
            "flex items-center justify-center text-white",
            "hover:bg-white/20 hover:border-white/40 transition-all duration-200",
            "focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/50",
            "opacity-0 scale-90",
            (isHovered || isFocused) && "opacity-100 scale-100"
          )}
          aria-label="Previous collections"
          data-testid={`gallery-nav-left-${testIdPrefix}`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Right navigation arrow */}
      {canScrollRight && (
        <button
          onClick={() => scrollTo('right')}
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2 z-10",
            "w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20",
            "flex items-center justify-center text-white",
            "hover:bg-white/20 hover:border-white/40 transition-all duration-200",
            "focus:bg-white/20 focus:border-white/40 focus:ring-2 focus:ring-white/50",
            "opacity-0 scale-90",
            (isHovered || isFocused) && "opacity-100 scale-100"
          )}
          aria-label="Next collections"
          data-testid={`gallery-nav-right-${testIdPrefix}`}
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
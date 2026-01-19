import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

  // Smooth scroll to specific position - scroll exactly one item at a time
  const scrollTo = useCallback((direction: 'left' | 'right' | 'start') => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    
    if (direction === 'start') {
      container.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
      return;
    }

    const itemWidth = container.clientWidth; // Full container width = one item width
    const currentScroll = container.scrollLeft;
    
    const targetScroll = direction === 'left' 
      ? Math.max(0, currentScroll - itemWidth)
      : Math.min(container.scrollWidth - container.clientWidth, currentScroll + itemWidth);

    container.scrollTo({
      left: targetScroll,
      behavior: 'smooth'
    });
  }, []);

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
        className="flex overflow-x-auto scroll-smooth brand-gallery-container w-full touch-pan-x"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch', // Enable momentum scrolling on iOS
          scrollBehavior: 'smooth',
          overscrollBehaviorX: 'contain', // Prevent overscroll on mobile
          touchAction: 'pan-x', // Allow horizontal touch scrolling only
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
            className="flex-shrink-0 relative group w-full"
            style={{
              scrollSnapAlign: 'start'
            }}
            role="listitem"
            data-testid={`gallery-item-${testIdPrefix}-${index}`}
          >
            {/* Image container with glass-card styling */}
            <div className="brand-window relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
              <img
                src={collection.image}
                alt={collection.alt}
                className="brand-window-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading={index < 4 ? "eager" : "lazy"} // Prioritize first 4 images
                data-testid={`gallery-image-${testIdPrefix}-${index}`}
              />
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
            "w-11 h-11 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20",
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
            "w-11 h-11 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20",
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

      {/* Back to start arrow - appears when at the end */}
      {!canScrollRight && canScrollLeft && collections.length > 1 && (
        <button
          onClick={() => scrollTo('start')}
          className={cn(
            "absolute right-2 top-1/2 -translate-y-1/2 z-10",
            "w-10 h-10 rounded-full bg-primary/10 backdrop-blur-sm border border-primary/30",
            "flex items-center justify-center text-primary",
            "hover:bg-primary/20 hover:border-primary/50 transition-all duration-200",
            "focus:bg-primary/20 focus:border-primary/50 focus:ring-2 focus:ring-primary/60",
            "opacity-0 scale-90",
            (isHovered || isFocused) && "opacity-100 scale-100"
          )}
          aria-label="Back to first collection"
          data-testid={`gallery-nav-start-${testIdPrefix}`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
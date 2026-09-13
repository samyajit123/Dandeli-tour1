import React, { forwardRef } from 'react';

export interface CarouselTrackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /**
   * Tailwind grid column classes for desktop/tablet breakpoint (e.g. "sm:grid-cols-2 lg:grid-cols-4")
   * Defaults to "sm:grid-cols-2 lg:grid-cols-3"
   */
  gridCols?: string;
  /**
   * Additional class names for the carousel track container
   */
  className?: string;
  /**
   * Additional class names for the outer viewport wrapper
   */
  viewportClassName?: string;
  /**
   * Gap class for mobile and desktop (defaults to "gap-3.5 sm:gap-4")
   */
  gapClassName?: string;
  /**
   * Optional HTML id attribute
   */
  id?: string;
}

/**
 * Universal Reusable Carousel Track
 * Enforces unified horizontal spacing, section heading alignment, card gaps,
 * next-card peeking, and symmetrical left & right breathing room across all carousels.
 */
export const CarouselTrack = forwardRef<HTMLDivElement, CarouselTrackProps>(
  (
    {
      children,
      gridCols = 'sm:grid-cols-2 lg:grid-cols-3',
      className = '',
      viewportClassName = '',
      gapClassName = 'gap-3.5 sm:gap-4',
      id,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={`carousel-viewport -mx-4 sm:mx-0 overflow-hidden sm:overflow-visible ${viewportClassName}`}
      >
        <div
          ref={ref}
          id={id}
          className={`carousel-track flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar px-4 sm:px-0 scroll-px-4 sm:scroll-px-0 ${gapClassName} pb-2 sm:grid ${gridCols} sm:overflow-visible ${className}`}
          {...props}
        >
          {children}
          {/* Symmetrical trailing breathing room spacer for the final card on mobile */}
          <div
            className="shrink-0 w-4 -ml-3.5 sm:hidden pointer-events-none"
            aria-hidden="true"
          />
        </div>
      </div>
    );
  }
);

CarouselTrack.displayName = 'CarouselTrack';

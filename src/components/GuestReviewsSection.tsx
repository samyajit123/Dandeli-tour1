import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { GUEST_REVIEWS } from '../data/dandeliData';
import { CarouselTrack } from './CarouselTrack';

export const GuestReviewsSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    trackRef.current?.scrollBy({ left: -320, behavior: 'smooth' });
  };

  const scrollNext = () => {
    trackRef.current?.scrollBy({ left: 320, behavior: 'smooth' });
  };

  return (
    <section id="reviews" className="relative bg-[#0c2b20] text-[#fcfbf7] py-14 overflow-hidden">
      <div className="max-w-[430px] sm:max-w-4xl lg:max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Heading & Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div className="text-center sm:text-left space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
              What our guests say
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-normal">
              Real stories from adventurers across India
            </p>
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center justify-center sm:justify-end gap-2">
            <button
              onClick={scrollPrev}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white flex items-center justify-center transition-colors"
              aria-label="Previous Reviews"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={scrollNext}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white flex items-center justify-center transition-colors"
              aria-label="Next Reviews"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Unified Horizontal Carousel on Mobile / Clean Grid on Desktop */}
        <CarouselTrack
          ref={trackRef}
          id="reviews-carousel"
          gridCols="sm:grid-cols-2 lg:grid-cols-3"
        >
          {GUEST_REVIEWS.map((review) => (
            <div
              key={review.id}
              id={`review-card-${review.id}`}
              className="w-[84vw] max-w-[340px] shrink-0 snap-start flex flex-col justify-between sm:w-auto sm:max-w-none bg-white text-[#0c2b20] rounded-xl p-5 sm:p-6 border border-[#0c2b20]/10 shadow-xs"
            >
              {/* Top Star Rating & Quote */}
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#0c2b20]/15" />
                </div>

                {/* Review Body */}
                <p className="text-xs sm:text-sm text-[#4a5550] leading-relaxed mb-4 min-h-[60px] font-normal">
                  "{review.review}"
                </p>
              </div>

              {/* Guest Details */}
              <div className="pt-3 border-t border-[#0c2b20]/8 flex items-baseline justify-between">
                <div>
                  <span className="text-sm font-semibold text-[#0c2b20] block">
                    {review.name}
                  </span>
                  <span className="text-xs text-[#5c6660]">
                    {review.location} • {review.date}
                  </span>
                </div>
                <span className="text-xs text-[#1b533f] font-medium">
                  {review.tripType}
                </span>
              </div>
            </div>
          ))}
        </CarouselTrack>
      </div>
    </section>
  );
};


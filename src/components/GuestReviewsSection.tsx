import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { GUEST_REVIEWS } from '../data/dandeliData';

export const GuestReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % GUEST_REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + GUEST_REVIEWS.length) % GUEST_REVIEWS.length);
  };

  const current = GUEST_REVIEWS[currentIndex];

  return (
    <section id="reviews" className="relative bg-[#0c2b20] text-[#fcfbf7] py-14 overflow-hidden">
      <div className="max-w-[430px] mx-auto px-4 relative z-10">
        {/* Section Heading */}
        <div className="text-center space-y-1.5 mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            What our guests say
          </h2>
          <p className="text-xs sm:text-sm text-white/70 font-normal">
            Real stories from adventurers across India
          </p>
        </div>

        {/* Clean Editorial Review Card */}
        <div className="mb-6">
          <div className="bg-white text-[#0c2b20] rounded-xl p-5 sm:p-6 border border-[#0c2b20]/10 shadow-xs">
            {/* Top Star Rating & Quote */}
            <div className="flex items-center justify-between mb-3.5">
              <div className="flex items-center gap-0.5 text-amber-500">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <Quote className="w-5 h-5 text-[#0c2b20]/15" />
            </div>

            {/* Review Body */}
            <p className="text-xs sm:text-sm text-[#4a5550] leading-relaxed mb-4 min-h-[60px] font-normal">
              "{current.review}"
            </p>

            {/* Guest Details */}
            <div className="pt-3 border-t border-[#0c2b20]/8 flex items-baseline justify-between">
              <div>
                <span className="text-sm font-semibold text-[#0c2b20] block">
                  {current.name}
                </span>
                <span className="text-xs text-[#5c6660]">
                  {current.location} • {current.date}
                </span>
              </div>
              <span className="text-xs text-[#1b533f] font-medium">
                {current.tripType}
              </span>
            </div>
          </div>
        </div>

        {/* Slider Navigation Controls */}
        <div className="flex items-center justify-between px-1">
          {/* Review Counter */}
          <div className="text-xs text-white/60 font-medium">
            {currentIndex + 1} of {GUEST_REVIEWS.length} reviews
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevReview}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white flex items-center justify-center transition-colors"
              aria-label="Previous Review"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={nextReview}
              className="w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20 active:scale-[0.98] text-white flex items-center justify-center transition-colors"
              aria-label="Next Review"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

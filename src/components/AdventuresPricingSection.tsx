import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { FEATURED_EXPERIENCES } from '../data/dandeliData';
import { FeaturedExperience } from '../types';
import { CarouselTrack } from './CarouselTrack';

interface AdventuresPricingSectionProps {
  onSelectExperience: (exp: FeaturedExperience) => void;
  onBookExperience: (exp: FeaturedExperience) => void;
  onViewAllPackages: () => void;
  onCustomizeWithUs: () => void;
}

export const AdventuresPricingSection: React.FC<AdventuresPricingSectionProps> = ({
  onSelectExperience,
  onBookExperience,
  onViewAllPackages,
  onCustomizeWithUs,
}) => {
  // Use approved Dandeli activities: Rafting, Kayaking, Zorbing, River Crossing, Jungle Trekking, Burma Bridge (Rope Adventure), River Boating, River Activities
  const displayAdventures = FEATURED_EXPERIENCES;

  return (
    <section id="activities" className="py-10 px-4 max-w-[430px] sm:max-w-4xl lg:max-w-6xl mx-auto overflow-hidden">
      {/* Editorial Header */}
      <div className="mb-6 text-center space-y-1.5">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0c2b20]">
          Activities & Adventures
        </h2>
        <p className="text-xs sm:text-sm text-[#5c6660] font-normal">
          Certified whitewater guides • International standard safety gear
        </p>
      </div>

      {/* Horizontal Swipe Carousel on Mobile / Clean Grid on Desktop */}
      <CarouselTrack
        id="adventures-carousel"
        gridCols="sm:grid-cols-2 lg:grid-cols-3"
        viewportClassName="mb-6"
      >
        {displayAdventures.map((exp) => (
          <div
            key={exp.id}
            id={`activity-card-${exp.id}`}
            className="w-[84vw] max-w-[340px] shrink-0 snap-start flex flex-col sm:w-auto sm:max-w-none rounded-xl border border-[#0c2b20]/10 bg-white overflow-hidden shadow-2xs hover:border-[#0c2b20]/25 transition-all group"
          >
            {/* Card Image */}
            <div
              className="aspect-[16/10] w-full relative overflow-hidden bg-[#0c2b20] cursor-pointer shrink-0"
              onClick={() => onSelectExperience(exp)}
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/60 via-transparent to-transparent" />

              {/* Category Tag Over Image */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#fcfbf7]/95 text-[#0c2b20] text-[10px] font-semibold px-2 py-0.5 rounded-md uppercase tracking-wider backdrop-blur-xs">
                <span>{exp.category}</span>
              </div>

              {/* Duration badge */}
              <div className="absolute top-3 right-3 bg-[#0c2b20]/80 text-[#fcfbf7] text-[10px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1 backdrop-blur-xs">
                <Clock className="w-2.5 h-2.5 text-[#22c55e]" />
                <span>{exp.duration}</span>
              </div>
            </div>

            {/* Card Details & Pricing */}
            <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
              <div className="space-y-1.5">
                <h3
                  onClick={() => onSelectExperience(exp)}
                  className="text-base font-semibold text-[#0c2b20] tracking-tight leading-snug cursor-pointer hover:text-[#1b533f] transition-colors"
                >
                  {exp.title}
                </h3>
                <p className="text-xs text-[#4a5550] leading-relaxed font-normal line-clamp-3">
                  {exp.description}
                </p>
              </div>

              {/* Bottom Action & Price Bar */}
              <div className="pt-3 border-t border-[#0c2b20]/8 flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#5c6660] uppercase tracking-wider leading-none">Price from</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-sm sm:text-base font-semibold text-[#0c2b20] tracking-tight">
                      {exp.priceFrom || '₹550'}
                    </span>
                    <span className="text-[10px] text-[#5c6660]">
                      / person
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => onSelectExperience(exp)}
                    className="px-2.5 py-1.5 rounded-md bg-[#f5f1e8] hover:bg-[#eae3d2] active:scale-[0.98] text-[#0c2b20] text-xs font-medium transition-colors"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onBookExperience(exp)}
                    className="px-3 py-1.5 rounded-md bg-[#0c2b20] hover:bg-[#133e2f] active:scale-[0.98] text-[#fcfbf7] text-xs font-medium transition-colors"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CarouselTrack>

      {/* Action Buttons */}
      <div className="space-y-2.5 max-w-[430px] mx-auto">
        <button
          onClick={onViewAllPackages}
          className="w-full bg-[#0c2b20] hover:bg-[#133e2f] active:scale-[0.98] text-[#fcfbf7] py-3.5 px-5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
        >
          <span>View All Packages & Combos</span>
          <span className="text-sm">→</span>
        </button>

        <button
          onClick={onCustomizeWithUs}
          className="w-full bg-transparent hover:bg-[#0c2b20]/5 active:scale-[0.98] text-[#0c2b20] border border-[#0c2b20]/20 py-3 px-5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
        >
          <span>Customize With Us</span>
          <span className="text-sm">→</span>
        </button>
      </div>
    </section>
  );
};

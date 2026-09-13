import React from 'react';
import { ArrowRight, Users, Heart, Compass, Sparkles } from 'lucide-react';
import { AUDIENCE_CARDS } from '../data/dandeliData';
import { AudienceCard } from '../types';
import { CarouselTrack } from './CarouselTrack';

interface AudienceCarouselProps {
  onSelectAudience: (card: AudienceCard) => void;
}

export const AudienceCarousel: React.FC<AudienceCarouselProps> = ({ onSelectAudience }) => {
  const getAudienceIcon = (id: string) => {
    switch (id) {
      case 'families':
        return <Users className="w-4 h-4 text-[#22c55e]" />;
      case 'friends':
        return <Sparkles className="w-4 h-4 text-[#22c55e]" />;
      case 'couples':
        return <Heart className="w-4 h-4 text-[#22c55e]" />;
      case 'solo':
        return <Compass className="w-4 h-4 text-[#22c55e]" />;
      default:
        return <Compass className="w-4 h-4 text-[#22c55e]" />;
    }
  };

  return (
    <section id="audience" className="py-8 bg-[#f5f1e8]/50 border-y border-[#0c2b20]/10">
      <div className="max-w-md md:max-w-4xl lg:max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
            <span className="text-[11px] font-bold tracking-widest text-[#1b533f] uppercase">
              Curated By Traveler Type
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0c2b20] tracking-tight uppercase font-editorial">
            WHO ARE YOU TRAVELLING WITH?
          </h2>
          <p className="text-sm text-[#133e2f]/80 mt-1 max-w-lg">
            Every traveler experiences Dandeli differently. Swipe through to discover handpicked adventures tailored for you.
          </p>
        </div>

        {/* Horizontally Scrollable Touch-Friendly Cards */}
        <CarouselTrack
          id="audience-scroll-container"
          gridCols="md:grid-cols-2 lg:grid-cols-4"
        >
          {AUDIENCE_CARDS.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectAudience(card)}
              className="snap-start shrink-0 w-[84vw] max-w-[340px] md:w-auto md:max-w-none bg-[#fcfbf7] rounded-2xl overflow-hidden border border-[#0c2b20]/15 shadow-sm hover:shadow-md transition-all duration-300 active:scale-[0.99] cursor-pointer flex flex-col group"
            >
              {/* Image Container with high quality photography */}
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-[#0c2b20]">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/80 via-transparent to-transparent" />

                {/* Category Pill Over Image */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#0c2b20]/80 backdrop-blur-md px-3 py-1 rounded-full border border-[#22c55e]/30">
                  {getAudienceIcon(card.id)}
                  <span className="text-[10px] font-extrabold text-[#fcfbf7] tracking-wider uppercase">
                    {card.category}
                  </span>
                </div>

                {/* Tag on bottom of image */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="inline-block bg-[#22c55e]/90 text-[#061912] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-1">
                    {card.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white leading-tight font-editorial">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
                <p className="text-xs text-[#133e2f]/85 font-medium leading-relaxed">
                  {card.subtitle}
                </p>

                {/* Quick Highlights list */}
                <div className="space-y-1.5 pt-1 border-t border-[#0c2b20]/10">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#1b533f]">
                    Key Highlights:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {card.recommendedActivities.slice(0, 2).map((act, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-[#f5f1e8] text-[#0c2b20] font-semibold px-2 py-0.5 rounded-md"
                      >
                        {act}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Explore interaction footer */}
                <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#0c2b20] group-hover:text-[#1b533f]">
                  <span className="tracking-wide">Explore Itinerary</span>
                  <div className="w-7 h-7 rounded-full bg-[#f5f1e8] group-hover:bg-[#0c2b20] group-hover:text-[#fcfbf7] flex items-center justify-center transition-colors">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </CarouselTrack>

        {/* Mobile Swipe Hint */}
        <div className="mt-1 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-[#1b533f]/70">
          <span>Swipe left to view all profiles</span>
          <ArrowRight className="w-3 h-3 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

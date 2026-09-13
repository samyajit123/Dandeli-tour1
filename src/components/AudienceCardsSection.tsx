import React from 'react';
import { AUDIENCE_CARDS } from '../data/dandeliData';
import { AudienceCard } from '../types';

interface AudienceCardsSectionProps {
  onSelectAudience: (card: AudienceCard) => void;
}

export const AudienceCardsSection: React.FC<AudienceCardsSectionProps> = ({
  onSelectAudience,
}) => {
  const customAudienceCards = [
    {
      data: AUDIENCE_CARDS.find((c) => c.id === 'families') || AUDIENCE_CARDS[0],
      category: 'FOR FAMILIES',
      heading: 'Easygoing adventures and memories together.',
      image: AUDIENCE_CARDS.find((c) => c.id === 'families')?.image || AUDIENCE_CARDS[0].image,
    },
    {
      data: AUDIENCE_CARDS.find((c) => c.id === 'friends') || AUDIENCE_CARDS[1],
      category: 'FOR FRIENDS',
      heading: 'More adventure. More stories.',
      image: AUDIENCE_CARDS.find((c) => c.id === 'friends')?.image || AUDIENCE_CARDS[1].image,
    },
    {
      data: AUDIENCE_CARDS.find((c) => c.id === 'couples') || AUDIENCE_CARDS[2],
      category: 'FOR COUPLES',
      heading: 'Escape into the wild together.',
      image: AUDIENCE_CARDS.find((c) => c.id === 'couples')?.image || AUDIENCE_CARDS[2].image,
    },
    {
      data: AUDIENCE_CARDS.find((c) => c.id === 'solo') || AUDIENCE_CARDS[3],
      category: 'FOR ADVENTURE SEEKERS',
      heading: 'Push your limits in the wild.',
      image: AUDIENCE_CARDS.find((c) => c.id === 'solo')?.image || AUDIENCE_CARDS[3].image,
    },
  ];

  return (
    <section id="audience" className="pt-10 pb-16 px-4 max-w-[430px] mx-auto overflow-hidden">
      {/* Editorial Header */}
      <div className="text-center space-y-1 mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0c2b20]">
          Dandeli for everyone
        </h2>
        <p className="text-xs sm:text-sm text-[#5c6660] font-normal">
          Curated for every kind of explorer
        </p>
      </div>

      {/* 2-Column Mobile Grid with Exact Row Alignment */}
      <div className="grid grid-cols-2 gap-3 sm:gap-3.5 items-stretch">
        {customAudienceCards.map((item, index) => (
          <div
            key={index}
            onClick={() => onSelectAudience(item.data)}
            className="rounded-xl border border-[#0c2b20]/10 bg-white p-3 flex flex-col h-full cursor-pointer hover:border-[#0c2b20]/25 transition-all shadow-2xs group"
          >
            {/* Top Thumbnail Image: Fixed aspect ratio & rounded corners */}
            <div className="rounded-lg overflow-hidden aspect-[4/3] w-full bg-[#0c2b20]/10 shrink-0 relative mb-2.5">
              <img
                src={item.image}
                alt={item.category}
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Content Area */}
            <div className="flex-1 flex flex-col justify-start">
              <span className="text-[10px] sm:text-[10.5px] font-medium text-[#1b533f] uppercase tracking-wider leading-none mb-1.5 block">
                {item.category}
              </span>
              <h3 className="text-xs sm:text-[13px] font-semibold text-[#0c2b20] leading-snug tracking-tight min-h-[34px] sm:min-h-[38px] flex items-start">
                {item.heading}
              </h3>
            </div>

            {/* Bottom CTA Row */}
            <div className="mt-2.5 pt-2.5 border-t border-[#0c2b20]/8 flex items-center justify-between text-xs font-medium text-[#0c2b20] group-hover:text-[#1b533f] transition-colors shrink-0">
              <span>View Guide</span>
              <span className="text-xs transition-transform group-hover:translate-x-0.5">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


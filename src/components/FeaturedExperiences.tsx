import React, { useState } from 'react';
import { ArrowRight, Clock, MapPin, Zap } from 'lucide-react';
import { FEATURED_EXPERIENCES } from '../data/dandeliData';
import { FeaturedExperience } from '../types';

interface FeaturedExperiencesProps {
  onSelectExperience: (exp: FeaturedExperience) => void;
  onBookExperience: (exp: FeaturedExperience) => void;
}

export const FeaturedExperiences: React.FC<FeaturedExperiencesProps> = ({
  onSelectExperience,
  onBookExperience,
}) => {
  const [filter, setFilter] = useState<'All' | 'Water' | 'Jungle' | 'Night'>('All');

  const filteredExperiences = FEATURED_EXPERIENCES.filter((exp) => {
    if (filter === 'All') return true;
    if (filter === 'Water') return exp.category.includes('Water');
    if (filter === 'Jungle') return exp.category.includes('Wildlife') || exp.category.includes('Eco');
    if (filter === 'Night') return exp.category.includes('Evening') || exp.category.includes('Aerial');
    return true;
  });

  return (
    <section id="discover" className="py-10 px-4 max-w-md md:max-w-4xl lg:max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
          <span className="text-[11px] font-bold tracking-widest text-[#1b533f] uppercase">
            Signature Adventures & Expeditions
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2b20] tracking-tight leading-tight uppercase font-editorial">
          DISCOVER DANDELI
        </h2>
        <p className="text-sm sm:text-base text-[#133e2f]/85 font-medium leading-relaxed max-w-xl">
          From rushing rivers to quiet jungle trails, discover experiences that make Dandeli unforgettable.
        </p>

        {/* Filter Tabs for quick browsing */}
        <div className="pt-2 flex items-center gap-2 overflow-x-auto no-scrollbar -mx-4 px-4">
          {(['All', 'Water', 'Jungle', 'Night'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shrink-0 ${
                filter === tab
                  ? 'bg-[#0c2b20] text-[#fcfbf7]'
                  : 'bg-[#f5f1e8] text-[#133e2f] hover:bg-[#eae3d2]'
              }`}
            >
              {tab === 'All' ? 'All 8 Experiences' : `${tab} Sports`}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Large Image-Led Editorial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredExperiences.map((exp) => (
          <article
            key={exp.id}
            id={`experience-card-${exp.id}`}
            className="bg-[#fcfbf7] rounded-2xl overflow-hidden border border-[#0c2b20]/15 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col group"
          >
            {/* Large Photography with rounded corners & zoom effect */}
            <div
              className="aspect-[16/10] sm:aspect-[16/9] w-full relative overflow-hidden bg-[#0c2b20] cursor-pointer"
              onClick={() => onSelectExperience(exp)}
            >
              <img
                src={exp.image}
                alt={exp.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/80 via-[#061912]/20 to-transparent" />

              {/* Category & Thrill Badge */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <span className="bg-[#fcfbf7]/90 backdrop-blur-md text-[#0c2b20] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                  {exp.category}
                </span>
                <span className="bg-[#0c2b20]/85 backdrop-blur-md text-[#22c55e] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 border border-[#22c55e]/30">
                  <Zap className="w-2.5 h-2.5" />
                  {exp.thrillLevel}
                </span>
              </div>

              {/* Bottom text inside image */}
              <div className="absolute bottom-3 left-3.5 right-3.5">
                <p className="text-[11px] font-medium text-[#22c55e] tracking-wider uppercase mb-0.5">
                  {exp.subtitle}
                </p>
                <h3 className="text-xl font-extrabold text-white tracking-tight leading-snug font-editorial uppercase">
                  {exp.title}
                </h3>
              </div>
            </div>

            {/* Editorial Body */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <p className="text-xs text-[#133e2f]/85 leading-relaxed">
                {exp.description}
              </p>

              {/* Meta indicators: Duration & Location */}
              <div className="flex items-center justify-between text-[11px] text-[#1b533f] font-semibold pt-2 border-t border-[#0c2b20]/10">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#22c55e]" />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-1.5 truncate max-w-[180px]">
                  <MapPin className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
                  <span className="truncate">{exp.location}</span>
                </div>
              </div>

              {/* Actions: Read More + Book */}
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => onSelectExperience(exp)}
                  className="flex-1 bg-[#f5f1e8] hover:bg-[#eae3d2] text-[#0c2b20] py-2 px-3 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Story & Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onBookExperience(exp)}
                  className="bg-[#0c2b20] hover:bg-[#133e2f] active:scale-95 text-[#fcfbf7] py-2 px-3.5 rounded-xl text-xs font-bold tracking-wider uppercase flex items-center gap-1 transition-all"
                >
                  <span>Book</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#22c55e]" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

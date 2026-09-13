import React, { useState } from 'react';
import { Leaf, Clock, ArrowRight, Sun, Compass } from 'lucide-react';
import { NATURE_SPOTS } from '../data/dandeliData';
import { NatureSpot } from '../types';

interface NatureWildSectionProps {
  onSelectSpot: (spot: NatureSpot) => void;
}

export const NatureWildSection: React.FC<NatureWildSectionProps> = ({ onSelectSpot }) => {
  const [activeSpot, setActiveSpot] = useState<NatureSpot>(NATURE_SPOTS[0]);

  return (
    <section id="wild" className="py-12 bg-[#fcfbf7] px-4 max-w-md md:max-w-4xl lg:max-w-6xl mx-auto">
      {/* Editorial Heading */}
      <div className="space-y-2 mb-8">
        <div className="flex items-center gap-2">
          <Leaf className="w-4 h-4 text-[#22c55e]" />
          <span className="text-[11px] font-bold tracking-widest text-[#1b533f] uppercase">
            Sanctuary & Forest Solitude
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c2b20] tracking-tight uppercase font-editorial">
          FIND YOUR WILD
        </h2>

        <p className="text-base text-[#133e2f]/85 font-medium leading-relaxed max-w-lg">
          Slow down, breathe deep and discover the quieter side of Dandeli.
        </p>
      </div>

      {/* Featured Spotlight Card - Large Immersive Photography with Minimal Text */}
      <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-md border border-[#0c2b20]/15 mb-6 group bg-[#0c2b20]">
        <div className="aspect-[4/3] sm:aspect-[16/9] w-full relative overflow-hidden">
          <img
            src={activeSpot.image}
            alt={activeSpot.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/90 via-[#061912]/30 to-transparent" />

          {/* Top Tag */}
          <div className="absolute top-3.5 left-3.5 bg-[#fcfbf7]/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span className="text-[10px] font-extrabold text-[#0c2b20] tracking-wider uppercase">
              {activeSpot.tag}
            </span>
          </div>

          <div className="absolute top-3.5 right-3.5 bg-[#0c2b20]/80 backdrop-blur-md text-[#22c55e] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-[#22c55e]/30 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            <span>{activeSpot.bestTime}</span>
          </div>

          {/* Bottom Details Overlay */}
          <div className="absolute bottom-4 left-4 right-4 text-[#fcfbf7] space-y-1.5">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#22c55e]">
              Dandeli Wilderness Profile
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight uppercase font-editorial text-white">
              {activeSpot.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#fcfbf7]/90 max-w-lg leading-relaxed">
              {activeSpot.description}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#86efac]">
              <Compass className="w-3.5 h-3.5" />
              <span>{activeSpot.highlight}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Thumb-Friendly Strip for all 6 Nature Spots */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
        {NATURE_SPOTS.map((spot) => {
          const isSelected = activeSpot.id === spot.id;
          return (
            <button
              key={spot.id}
              onClick={() => {
                setActiveSpot(spot);
                onSelectSpot(spot);
              }}
              className={`p-2 rounded-xl text-left transition-all border flex flex-col justify-between h-28 relative overflow-hidden group ${
                isSelected
                  ? 'border-[#22c55e] ring-2 ring-[#22c55e]/20 bg-[#f5f1e8]'
                  : 'border-[#0c2b20]/15 bg-[#fcfbf7] hover:bg-[#f5f1e8]'
              }`}
            >
              <div className="w-full h-12 rounded-lg overflow-hidden relative mb-1.5">
                <img
                  src={spot.image}
                  alt={spot.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#061912]/20" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#0c2b20] line-clamp-1 font-editorial">
                  {spot.title}
                </span>
                <span className="text-[9px] text-[#1b533f] font-medium block line-clamp-1">
                  {spot.tag}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, Clock, Gauge, ArrowRight } from 'lucide-react';
import { THRILL_EXPERIENCES } from '../data/dandeliData';
import { ThrillExperience } from '../types';

interface ThrillSeekersSectionProps {
  onSelectThrill: (thrill: ThrillExperience) => void;
  onBookNow: () => void;
}

export const ThrillSeekersSection: React.FC<ThrillSeekersSectionProps> = ({
  onSelectThrill,
  onBookNow,
}) => {
  return (
    <section
      id="thrill"
      className="py-12 bg-[#061912] text-[#fcfbf7] border-y border-[#1b533f]/40 relative overflow-hidden"
    >
      {/* Background Subtle Texture Elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-md md:max-w-3xl lg:max-w-5xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-left mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 bg-[#133e2f]/80 border border-[#22c55e]/30 px-3 py-1 rounded-full">
            <Zap className="w-3.5 h-3.5 text-[#22c55e]" />
            <span className="text-[11px] font-extrabold tracking-widest text-[#22c55e] uppercase">
              Pure Adrenaline Zone
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-none uppercase font-editorial text-white">
            FOR THE THRILL SEEKERS
          </h2>

          <p className="text-sm sm:text-base font-bold tracking-widest text-[#86efac] uppercase">
            ADVENTURES THAT GET YOUR HEART RACING
          </p>

          <p className="text-xs sm:text-sm text-[#e9e2d0]/80 font-normal max-w-xl leading-relaxed">
            Dandeli is the Western Ghats’ ultimate natural playground. Powered by roaring river surges and dense primary rainforest, these high-octane expeditions push your limits in complete safety.
          </p>
        </div>

        {/* Vertical Sequence of Large Visual Cards */}
        <div className="space-y-7">
          {THRILL_EXPERIENCES.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: index * 0.08 }}
              className="bg-[#0c2b20] rounded-2xl md:rounded-3xl overflow-hidden border border-[#1b533f]/60 shadow-xl flex flex-col group"
            >
              {/* Full Width Visual Image Container */}
              <div
                className="aspect-[16/11] sm:aspect-[16/9] w-full relative overflow-hidden cursor-pointer"
                onClick={() => onSelectThrill(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061912] via-[#061912]/40 to-transparent" />

                {/* Badge top-left */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="bg-[#22c55e] text-[#061912] text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <span className="bg-[#061912]/80 backdrop-blur-md text-[#86efac] text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider border border-[#22c55e]/30">
                    {item.tag}
                  </span>
                </div>

                {/* Title & Subtitle overlay on bottom of image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#22c55e] block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight uppercase font-editorial">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Story Details & Stats */}
              <div className="p-4 sm:p-6 space-y-4">
                <p className="text-xs sm:text-sm text-[#e9e2d0]/90 leading-relaxed">
                  {item.description}
                </p>

                {/* Stat Grid */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#1b533f]/40 bg-[#061912]/40 rounded-xl px-3">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-[#86efac] font-bold flex items-center gap-1">
                      <Gauge className="w-2.5 h-2.5" /> Grade
                    </span>
                    <span className="text-xs font-bold text-white truncate">
                      {item.rapidsGrade}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-[#86efac] font-bold flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5" /> Duration
                    </span>
                    <span className="text-xs font-bold text-white">
                      {item.duration}
                    </span>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-wider text-[#86efac] font-bold flex items-center gap-1">
                      <ShieldCheck className="w-2.5 h-2.5" /> Safety
                    </span>
                    <span className="text-xs font-bold text-[#22c55e]">
                      Certified
                    </span>
                  </div>
                </div>

                {/* Bottom Card CTA buttons */}
                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={() => onSelectThrill(item)}
                    className="flex-1 bg-[#133e2f] hover:bg-[#1b533f] text-[#fcfbf7] py-2.5 px-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Expedition Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onBookNow}
                    className="bg-[#22c55e] hover:bg-[#16a34a] active:scale-95 text-[#061912] py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md"
                  >
                    <span>Reserve Slot</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Heart, Compass, Users, Flame, Shield, ArrowRight } from 'lucide-react';

interface WhyChooseUsSectionProps {
  onExploreAll: () => void;
  onCheckAvailability: () => void;
  onSelectExperienceTitle: (title: string) => void;
}

export const WhyChooseUsSection: React.FC<WhyChooseUsSectionProps> = ({
  onExploreAll,
  onCheckAvailability,
  onSelectExperienceTitle,
}) => {
  return (
    <section id="why-choose-us" className="py-10 px-4 max-w-[430px] mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center space-y-1 mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0c2b20]">
          Why travellers choose<br />Dandeli Tours
        </h2>
      </div>

      {/* 2-Column Mixed Image & Text Cards */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {/* Card 1: Image Card (White Water Rafting) */}
        <div
          onClick={() => onSelectExperienceTitle('WHITE WATER RAFTING')}
          className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#0c2b20] cursor-pointer group border border-[#0c2b20]/10"
        >
          <img
            src="https://res.cloudinary.com/joyorpxh/image/upload/v1788990668/7c6871cf-f09f-49dd-a861-b5e76c52736a.png"
            alt="White Water Rafting"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <span className="block text-xs font-medium text-white tracking-tight leading-snug">
              White Water Rafting
            </span>
          </div>
        </div>

        {/* Card 2: Text Card (Kayaking) */}
        <div
          onClick={() => onSelectExperienceTitle('KAYAKING')}
          className="rounded-xl border border-[#0c2b20]/10 bg-white p-3.5 flex flex-col justify-between aspect-[4/5] cursor-pointer hover:border-[#0c2b20]/25 transition-all shadow-2xs group"
        >
          <div className="space-y-1.5">
            <div className="w-7 h-7 rounded-lg bg-[#f0ecdf] flex items-center justify-center text-[#1b533f]">
              <Compass className="w-3.5 h-3.5 text-[#1b533f]" />
            </div>
            <h3 className="text-sm font-semibold text-[#0c2b20] tracking-tight leading-tight">
              Kayaking
            </h3>
            <p className="text-xs text-[#5c6660] leading-relaxed">
              Glide along emerald backwaters flanked by dense Western Ghats canopy.
            </p>
          </div>
          <span className="text-xs font-medium text-[#1b533f] group-hover:text-[#0c2b20] transition-colors">
            Explore →
          </span>
        </div>

        {/* Card 3: Text Card (Jungle Adventures) */}
        <div
          onClick={() => onSelectExperienceTitle('JUNGLE TREKKING')}
          className="rounded-xl border border-[#0c2b20]/10 bg-white p-3.5 flex flex-col justify-between aspect-[4/5] cursor-pointer hover:border-[#0c2b20]/25 transition-all shadow-2xs group"
        >
          <div className="space-y-1.5">
            <div className="w-7 h-7 rounded-lg bg-[#f0ecdf] flex items-center justify-center text-[#1b533f]">
              <Shield className="w-3.5 h-3.5 text-[#1b533f]" />
            </div>
            <h3 className="text-sm font-semibold text-[#0c2b20] tracking-tight leading-tight">
              Jungle Adventures
            </h3>
            <p className="text-xs text-[#5c6660] leading-relaxed">
              Ancient teak forests, Kavala limestone caves & off-road jeep trails.
            </p>
          </div>
          <span className="text-xs font-medium text-[#1b533f] group-hover:text-[#0c2b20] transition-colors">
            Explore →
          </span>
        </div>

        {/* Card 4: Image Card (Wildlife Experiences) */}
        <div
          onClick={() => onSelectExperienceTitle('JUNGLE SAFARI')}
          className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#0c2b20] cursor-pointer group border border-[#0c2b20]/10"
        >
          <img
            src="https://res.cloudinary.com/joyorpxh/image/upload/v1788987633/dandeli_tiger_4K.png"
            alt="Dandeli Wildlife Safari"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <span className="block text-xs font-medium text-white tracking-tight leading-snug">
              Wildlife Experiences
            </span>
          </div>
        </div>

        {/* Card 5: Image Card (Campfire Nights) */}
        <div
          onClick={() => onSelectExperienceTitle('CAMPFIRE NIGHTS')}
          className="relative rounded-xl overflow-hidden aspect-[4/5] bg-[#0c2b20] cursor-pointer group border border-[#0c2b20]/10"
        >
          <img
            src="https://res.cloudinary.com/joyorpxh/image/upload/v1788991817/dandeli_cottages_night_4K_faithful.jpg"
            alt="Campfire Nights"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/80 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <span className="block text-xs font-medium text-white tracking-tight leading-snug">
              Campfire Nights
            </span>
          </div>
        </div>

        {/* Card 6: Text Card (Family Getaways) */}
        <div
          onClick={() => onSelectExperienceTitle('RIVER BOATING')}
          className="rounded-xl border border-[#0c2b20]/10 bg-white p-3.5 flex flex-col justify-between aspect-[4/5] cursor-pointer hover:border-[#0c2b20]/25 transition-all shadow-2xs group"
        >
          <div className="space-y-1.5">
            <div className="w-7 h-7 rounded-lg bg-[#f0ecdf] flex items-center justify-center text-[#1b533f]">
              <Users className="w-3.5 h-3.5 text-[#1b533f]" />
            </div>
            <h3 className="text-sm font-semibold text-[#0c2b20] tracking-tight leading-tight">
              Family Getaways
            </h3>
            <p className="text-xs text-[#5c6660] leading-relaxed">
              Safe coracle boat rides and peaceful riverside stays for all ages.
            </p>
          </div>
          <span className="text-xs font-medium text-[#1b533f] group-hover:text-[#0c2b20] transition-colors">
            Explore →
          </span>
        </div>
      </div>

      {/* Two Consistent Action Buttons */}
      <div className="space-y-2.5 mb-10">
        <button
          onClick={onExploreAll}
          className="w-full bg-[#0c2b20] hover:bg-[#133e2f] active:scale-[0.98] text-[#fcfbf7] py-3.5 px-5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
        >
          <span>Explore All Activities</span>
          <span className="text-sm">→</span>
        </button>

        <button
          onClick={onCheckAvailability}
          className="w-full bg-transparent hover:bg-[#0c2b20]/5 active:scale-[0.98] text-[#0c2b20] border border-[#0c2b20]/20 py-3 px-5 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
        >
          <span>Check Dates & Availability</span>
          <span className="text-sm">→</span>
        </button>
      </div>

      {/* Editorial Quote Banner */}
      <div className="rounded-xl bg-[#f0ecdf] border border-[#0c2b20]/10 p-6 sm:p-7 text-center">
        <p className="text-base sm:text-lg font-normal text-[#0c2b20] italic leading-relaxed max-w-sm mx-auto">
          “Where the mighty Kali flows through rainforest canopies, nature writes its own stories.”
        </p>
        <span className="inline-block mt-3 text-xs font-medium text-[#5c6660]">
          — Dandeli Wilderness Chronicle
        </span>
      </div>
    </section>
  );
};

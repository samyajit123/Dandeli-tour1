import React from 'react';
import { Compass, Users, Shield, ArrowRight } from 'lucide-react';

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
    <section
      id="why-choose-us"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 w-full max-w-6xl mx-auto overflow-hidden"
    >
      {/* Section Header */}
      <div className="text-center space-y-2 mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-[#0c2b20] leading-tight">
          Why travellers choose Dandeli Tours
        </h2>
        <p className="text-xs sm:text-sm md:text-base text-[#5c6660] max-w-xl mx-auto font-normal">
          Unrivalled Kali River adventures, pristine Western Ghats wilderness, and memories crafted to last a lifetime.
        </p>
      </div>

      {/* Responsive Cards Grid:
          - Mobile (< 768px): 2 columns, natural auto-flow checkerboard (Image/Text alternating per row)
          - Desktop (>= 768px): 3 columns, explicit column placement with vertical Image/Text alternation:
              Column 1: Rafting IMAGE -> Rafting DESCRIPTION
              Column 2: Jungle DESCRIPTION -> Wildlife IMAGE
              Column 3: Campfire IMAGE -> Family/Campfire DESCRIPTION
      */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 mb-8 sm:mb-10 md:mb-12">
        {/* Card 1: White Water Rafting IMAGE
            Desktop: Col 1, Row 1
            Mobile: Col 1, Row 1
        */}
        <div
          onClick={() => onSelectExperienceTitle('WHITE WATER RAFTING')}
          className="md:col-start-1 md:row-start-1 relative rounded-xl overflow-hidden aspect-[4/5] sm:aspect-[4/4.5] md:aspect-[4/3.2] bg-[#0c2b20] cursor-pointer group border border-[#0c2b20]/10 transition-all shadow-2xs hover:shadow-md hover:border-[#0c2b20]/25"
        >
          <img
            src="https://res.cloudinary.com/joyorpxh/image/upload/v1788990668/7c6871cf-f09f-49dd-a861-b5e76c52736a.png"
            alt="White Water Rafting"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/85 via-[#061912]/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
            <span className="block text-xs sm:text-sm md:text-base font-semibold text-white tracking-tight leading-snug drop-shadow-xs">
              White Water Rafting
            </span>
          </div>
        </div>

        {/* Card 2: White Water Rafting DESCRIPTION
            Desktop: Col 1, Row 2 (directly beneath Rafting Image)
            Mobile: Col 2, Row 1
        */}
        <div
          onClick={() => onSelectExperienceTitle('WHITE WATER RAFTING')}
          className="md:col-start-1 md:row-start-2 rounded-xl border border-[#0c2b20]/10 bg-white p-3.5 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between aspect-[4/5] sm:aspect-[4/4.5] md:aspect-[4/3.2] cursor-pointer hover:border-[#0c2b20]/25 transition-all shadow-2xs hover:shadow-md group"
        >
          <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#f0ecdf] flex items-center justify-center text-[#1b533f]">
              <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#1b533f]" />
            </div>
            <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#0c2b20] tracking-tight leading-tight">
              White Water Rafting
            </h3>
            <p className="text-xs sm:text-xs md:text-sm text-[#5c6660] leading-relaxed">
              Conquer exhilarating Grade 2 & 3 rapids on the mighty Kali River with certified guides.
            </p>
          </div>
          <span className="text-xs sm:text-sm font-semibold text-[#1b533f] group-hover:text-[#0c2b20] flex items-center gap-1 transition-colors pt-2">
            <span>Explore</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>

        {/* Card 3: Jungle Adventures DESCRIPTION
            Desktop: Col 2, Row 1 (top of middle column)
            Mobile: Col 1, Row 2
        */}
        <div
          id="why-choose-us-jungle-adventures"
          onClick={() => onSelectExperienceTitle('JUNGLE ADVENTURES')}
          className="md:col-start-2 md:row-start-1 rounded-xl border border-[#0c2b20]/10 bg-white p-3.5 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between aspect-[4/5] sm:aspect-[4/4.5] md:aspect-[4/3.2] cursor-pointer hover:border-[#0c2b20]/25 transition-all shadow-2xs hover:shadow-md group"
        >
          <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#f0ecdf] flex items-center justify-center text-[#1b533f]">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#1b533f]" />
            </div>
            <h3
              onClick={(e) => {
                e.stopPropagation();
                onSelectExperienceTitle('JUNGLE ADVENTURES');
              }}
              className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#0c2b20] tracking-tight leading-tight"
            >
              Jungle Adventures
            </h3>
            <p className="text-xs sm:text-xs md:text-sm text-[#5c6660] leading-relaxed">
              Ancient teak forests, Kavala limestone caves & off-road jeep trails.
            </p>
          </div>
          <span
            onClick={(e) => {
              e.stopPropagation();
              onSelectExperienceTitle('JUNGLE ADVENTURES');
            }}
            className="text-xs sm:text-sm font-semibold text-[#1b533f] group-hover:text-[#0c2b20] flex items-center gap-1 transition-colors pt-2"
          >
            <span>Explore</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>

        {/* Card 4: Wildlife Experiences IMAGE
            Desktop: Col 2, Row 2 (directly beneath Jungle Adventures)
            Mobile: Col 2, Row 2
        */}
        <div
          id="why-choose-us-wildlife"
          onClick={() => onSelectExperienceTitle('WILDLIFE EXPERIENCES')}
          className="md:col-start-2 md:row-start-2 relative rounded-xl overflow-hidden aspect-[4/5] sm:aspect-[4/4.5] md:aspect-[4/3.2] bg-[#0c2b20] cursor-pointer group border border-[#0c2b20]/10 transition-all shadow-2xs hover:shadow-md hover:border-[#0c2b20]/25"
        >
          <img
            src="https://res.cloudinary.com/joyorpxh/image/upload/v1788987633/dandeli_tiger_4K.png"
            alt="Dandeli Wildlife Safari"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onClick={(e) => {
              e.stopPropagation();
              onSelectExperienceTitle('WILDLIFE EXPERIENCES');
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/85 via-[#061912]/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
            <span
              onClick={(e) => {
                e.stopPropagation();
                onSelectExperienceTitle('WILDLIFE EXPERIENCES');
              }}
              className="block text-xs sm:text-sm md:text-base font-semibold text-white tracking-tight leading-snug drop-shadow-xs"
            >
              Wildlife Experiences
            </span>
          </div>
        </div>

        {/* Card 5: Campfire Nights IMAGE
            Desktop: Col 3, Row 1 (top of right column)
            Mobile: Col 1, Row 3
        */}
        <div
          id="why-choose-us-campfire"
          onClick={() => onSelectExperienceTitle('CAMPFIRE NIGHTS')}
          className="md:col-start-3 md:row-start-1 relative rounded-xl overflow-hidden aspect-[4/5] sm:aspect-[4/4.5] md:aspect-[4/3.2] bg-[#0c2b20] cursor-pointer group border border-[#0c2b20]/10 transition-all shadow-2xs hover:shadow-md hover:border-[#0c2b20]/25"
        >
          <img
            src="https://res.cloudinary.com/joyorpxh/image/upload/v1788991817/dandeli_cottages_night_4K_faithful.jpg"
            alt="Campfire Nights"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onClick={(e) => {
              e.stopPropagation();
              onSelectExperienceTitle('CAMPFIRE NIGHTS');
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/85 via-[#061912]/20 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
            <span
              onClick={(e) => {
                e.stopPropagation();
                onSelectExperienceTitle('CAMPFIRE NIGHTS');
              }}
              className="block text-xs sm:text-sm md:text-base font-semibold text-white tracking-tight leading-snug drop-shadow-xs"
            >
              Campfire Nights
            </span>
          </div>
        </div>

        {/* Card 6: Family Getaways / Campfire DESCRIPTION
            Desktop: Col 3, Row 2 (directly beneath Campfire Nights Image)
            Mobile: Col 2, Row 3
        */}
        <div
          id="why-choose-us-family-getaways"
          onClick={() => onSelectExperienceTitle('FAMILY GETAWAYS')}
          className="md:col-start-3 md:row-start-2 rounded-xl border border-[#0c2b20]/10 bg-white p-3.5 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between aspect-[4/5] sm:aspect-[4/4.5] md:aspect-[4/3.2] cursor-pointer hover:border-[#0c2b20]/25 transition-all shadow-2xs hover:shadow-md group"
        >
          <div className="space-y-1.5 sm:space-y-2 md:space-y-2.5">
            <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-[#f0ecdf] flex items-center justify-center text-[#1b533f]">
              <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#1b533f]" />
            </div>
            <h3
              onClick={(e) => {
                e.stopPropagation();
                onSelectExperienceTitle('FAMILY GETAWAYS');
              }}
              className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#0c2b20] tracking-tight leading-tight"
            >
              Family Getaways
            </h3>
            <p className="text-xs sm:text-xs md:text-sm text-[#5c6660] leading-relaxed">
              Safe coracle boat rides and peaceful riverside stays for all ages.
            </p>
          </div>
          <span
            onClick={(e) => {
              e.stopPropagation();
              onSelectExperienceTitle('FAMILY GETAWAYS');
            }}
            className="text-xs sm:text-sm font-semibold text-[#1b533f] group-hover:text-[#0c2b20] flex items-center gap-1 transition-colors pt-2"
          >
            <span>Explore</span>
            <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </div>
      </div>

      {/* Two Consistent Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xs sm:max-w-none mx-auto mb-10 md:mb-14">
        <button
          onClick={onExploreAll}
          className="w-full sm:w-auto sm:min-w-[220px] bg-[#0c2b20] hover:bg-[#133e2f] active:scale-[0.98] text-[#fcfbf7] py-3.5 px-6 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-2xs hover:shadow-xs"
        >
          <span>Explore All Activities</span>
          <ArrowRight className="w-4 h-4 text-[#22c55e]" />
        </button>

        <button
          onClick={onCheckAvailability}
          className="w-full sm:w-auto sm:min-w-[220px] bg-white sm:bg-transparent hover:bg-[#0c2b20]/5 active:scale-[0.98] text-[#0c2b20] border border-[#0c2b20]/20 py-3.5 px-6 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2"
        >
          <span>Check Dates & Availability</span>
          <ArrowRight className="w-4 h-4 text-[#1b533f]" />
        </button>
      </div>

      {/* Editorial Quote Banner */}
      <div className="rounded-xl bg-[#f0ecdf] border border-[#0c2b20]/10 p-6 sm:p-8 md:p-10 text-center max-w-3xl mx-auto shadow-2xs">
        <p className="text-base sm:text-lg md:text-xl font-normal text-[#0c2b20] italic leading-relaxed max-w-2xl mx-auto">
          “Where the mighty Kali flows through rainforest canopies, nature writes its own stories.”
        </p>
        <span className="inline-block mt-3 text-xs md:text-sm font-medium text-[#5c6660]">
          — Dandeli Wilderness Chronicle
        </span>
      </div>
    </section>
  );
};

import React from 'react';
import { Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TOUR_PACKAGES } from '../data/dandeliData';
import { TourPackageItem } from '../types';

interface PackagesSectionProps {
  onSelectPackage: (pkg: TourPackageItem) => void;
  onBookPackage: (pkgTitle: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onSelectPackage,
  onBookPackage,
}) => {
  return (
    <section id="packages" className="py-10 px-4 max-w-[430px] sm:max-w-4xl lg:max-w-6xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center space-y-1.5 mb-6">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0c2b20]">
          Tour Packages
        </h2>
        <p className="text-xs sm:text-sm text-[#5c6660] font-normal">
          All-inclusive adventure getaways tailored for your squad
        </p>
      </div>

      {/* Horizontal Carousel on Mobile / Clean Grid on Desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar -mx-4 px-4 gap-3.5 pb-2 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:overflow-visible sm:mx-0 sm:px-0 sm:gap-4">
        {TOUR_PACKAGES.map((pkg) => (
          <div
            key={pkg.id}
            id={`package-${pkg.id}`}
            className="w-[84vw] max-w-[340px] shrink-0 snap-start flex flex-col sm:w-auto sm:max-w-none rounded-xl border border-[#0c2b20]/10 bg-white overflow-hidden shadow-2xs hover:border-[#0c2b20]/25 transition-all group"
          >
            {/* Image Container with Aspect Ratio */}
            <div className="aspect-[16/10] w-full relative overflow-hidden bg-[#0c2b20] shrink-0">
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/60 via-transparent to-transparent" />

              {/* Category Tag */}
              <div className="absolute top-3 left-3 bg-[#fcfbf7]/95 text-[#0c2b20] text-[10px] font-semibold px-2 py-0.5 rounded-md tracking-wider uppercase backdrop-blur-xs">
                {pkg.category}
              </div>

              {/* Duration Tag */}
              <div className="absolute top-3 right-3 bg-[#0c2b20]/80 text-[#fcfbf7] text-[10px] font-medium px-2 py-0.5 rounded-md flex items-center gap-1 backdrop-blur-xs">
                <Clock className="w-2.5 h-2.5 text-[#22c55e]" />
                <span>{pkg.duration}</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-4 flex flex-col justify-between flex-1 space-y-3">
              <div className="space-y-1.5">
                <h3 className="text-base font-semibold text-[#0c2b20] tracking-tight leading-snug">
                  {pkg.title}
                </h3>
                <p className="text-xs text-[#4a5550] leading-relaxed font-normal line-clamp-3">
                  {pkg.description}
                </p>

                {/* Bullet Highlights */}
                <div className="pt-2 space-y-1">
                  {pkg.highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-[11px] text-[#5c6660]">
                      <CheckCircle2 className="w-3 h-3 text-[#22c55e] shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Controls: Pricing & CTA Buttons */}
              <div className="pt-3 border-t border-[#0c2b20]/8 flex items-center justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#5c6660] uppercase tracking-wider leading-none">Starting from</span>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="text-sm sm:text-base font-semibold text-[#0c2b20] tracking-tight">
                      {pkg.priceFrom}
                    </span>
                    <span className="text-[10px] text-[#5c6660]">
                      / {pkg.priceUnit.replace('per ', '')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="px-2.5 py-1.5 rounded-md bg-[#f5f1e8] hover:bg-[#eae3d2] active:scale-[0.98] text-[#0c2b20] text-xs font-medium transition-colors"
                  >
                    Details
                  </button>
                  <button
                    onClick={() => onBookPackage(pkg.title)}
                    className="px-3 py-1.5 rounded-md bg-[#0c2b20] hover:bg-[#133e2f] active:scale-[0.98] text-[#fcfbf7] text-xs font-medium transition-colors"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

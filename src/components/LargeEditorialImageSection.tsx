import React from 'react';

interface LargeEditorialImageSectionProps {
  id: string;
  title: string;
  copy: string;
  image: string;
  location?: string;
  tag?: string;
}

export const LargeEditorialImageSection: React.FC<LargeEditorialImageSectionProps> = ({
  id,
  title,
  copy,
  image,
  location = 'Dandeli, Western Ghats',
  tag,
}) => {
  return (
    <section id={id} className="py-6 px-4 max-w-[430px] mx-auto overflow-hidden">
      <div className="relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] bg-[#0c2b20] border border-[#0c2b20]/10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Subtle Vignette for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/80 via-transparent to-[#061912]/20" />

        {/* Top Tag */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="bg-[#fcfbf7]/95 text-[#0c2b20] text-[11px] font-medium px-2.5 py-1 rounded-md">
            {location}
          </span>
          {tag && (
            <span className="bg-[#0c2b20]/80 text-[#22c55e] text-[11px] font-medium px-2.5 py-1 rounded-md">
              {tag}
            </span>
          )}
        </div>

        {/* Bottom Editorial Typography */}
        <div className="absolute bottom-6 left-5 right-5 text-center text-white space-y-1">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight uppercase text-white">
            {title}
          </h2>
          <p className="text-sm sm:text-base font-normal text-white/90">
            {copy}
          </p>
        </div>
      </div>
    </section>
  );
};

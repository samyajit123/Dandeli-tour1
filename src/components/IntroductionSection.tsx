import React from 'react';

export const IntroductionSection: React.FC = () => {
  return (
    <section id="discover" className="relative py-12 px-4 max-w-[430px] mx-auto overflow-hidden">
      {/* Editorial Header */}
      <div className="space-y-1.5 mb-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0c2b20]">
          Discover Dandeli
        </h2>
        <p className="text-xs sm:text-sm text-[#5c6660] font-normal">
          Where the Kali River meets the wild
        </p>
      </div>

      {/* Large Nature Photograph */}
      <div className="rounded-2xl overflow-hidden border border-[#0c2b20]/10 bg-[#0c2b20] mb-5">
        <div className="aspect-[4/3] w-full relative">
          <img
            src="https://res.cloudinary.com/joyorpxh/image/upload/v1788990397/cc6364c1-6675-432f-8d98-64c73cb38b99.png"
            alt="Emerald River Kali meandering through Western Ghats rainforest in Dandeli"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061912]/60 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 right-4">
            <span className="text-xs text-white/90 font-medium">
              River Kali • Kayaking & Watersports
            </span>
          </div>
        </div>
      </div>

      {/* Short Concise Paragraph */}
      <div className="text-center px-1">
        <p className="text-sm sm:text-base text-[#4a5550] leading-relaxed font-normal">
          Nestled deep within North Karnataka’s rainforests, Dandeli is a sanctuary where emerald rivers carve through ancient teak valleys. Every turn of the river uncovers an exhilarating rush, secret trails reveal rare wildlife, and evenings gather around starlit campfires.
        </p>
      </div>
    </section>
  );
};

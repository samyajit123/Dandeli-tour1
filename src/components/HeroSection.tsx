import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { HERO_DATA } from '../data/dandeliData';

interface HeroSectionProps {
  onExplorePackages: () => void;
  onOpenTripPlanner: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplorePackages,
  onOpenTripPlanner,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure muted is explicitly set on the DOM node for reliable mobile autoplay
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Fallback or user-gesture required
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-[100svh] min-h-[600px] flex flex-col justify-end overflow-hidden"
    >
      {/* 1. Full-Screen Cinematic Hero Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
        <video
          ref={videoRef}
          src={HERO_DATA.heroVideo}
          poster={HERO_DATA.heroImage}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle transparent overlay: keeps video vibrant and natural while ensuring sharp text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/20" />
      </div>

      {/* 2. Hero Content Layered Directly Over the Video */}
      <div className="relative z-10 w-full px-5 sm:px-8 pb-12 sm:pb-16 max-w-md sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto flex flex-col justify-end">
        {/* Large Editorial Headline */}
        <h1
          id="hero-main-title"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-semibold tracking-tight text-white leading-[1.12] drop-shadow-xs max-w-sm sm:max-w-lg md:max-w-2xl"
        >
          Escape into the wild.
        </h1>

        {/* Short Supporting Description */}
        <p className="mt-3.5 sm:mt-4 text-[17px] sm:text-lg md:text-[19px] text-[#e3e8e5] font-normal leading-relaxed max-w-sm sm:max-w-lg md:max-w-xl drop-shadow-xs">
          {HERO_DATA.subheading}
        </p>

        {/* Subtle Content / CTA Actions layered over the lower portion of the video */}
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <button
            id="hero-explore-packages-btn"
            onClick={onExplorePackages}
            className="bg-white hover:bg-[#f6f4ee] active:scale-[0.98] text-[#0c2b20] py-3.5 px-6 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 shadow-sm"
          >
            <span>Explore Packages</span>
            <ArrowRight className="w-4 h-4 text-[#1b533f]" />
          </button>

          <button
            id="hero-plan-trip-btn"
            onClick={onOpenTripPlanner}
            className="bg-black/35 hover:bg-black/50 active:scale-[0.98] text-white border border-white/25 backdrop-blur-md py-3.5 px-5 rounded-xl text-sm font-medium transition-all flex items-center justify-center gap-2"
          >
            <span>Plan My Trip</span>
            <span className="text-sm">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

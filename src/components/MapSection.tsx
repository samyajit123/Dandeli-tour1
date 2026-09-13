import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { FOOTER_DATA } from '../data/dandeliData';

export const MapSection: React.FC = () => {
  const handleDirections = () => {
    window.open(
      'https://maps.google.com/?q=K.C+Circle+Opp+IOC+Pump+Dandeli+Karnataka+581325',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section id="map" className="pb-12 px-4 max-w-[430px] mx-auto overflow-hidden">
      {/* Section Sub-heading */}
      <div className="text-center space-y-1 mb-4">
        <h3 className="text-lg font-semibold tracking-tight text-[#0c2b20]">
          Location & Map
        </h3>
        <p className="text-xs text-[#5c6660] font-normal">
          Easy access opposite IOC Pump, K.C Circle, Dandeli
        </p>
      </div>

      {/* Styled Map Container */}
      <div className="rounded-xl overflow-hidden border border-[#0c2b20]/10 bg-white shadow-2xs mb-3">
        {/* Map Header Preview with River & Forest roads */}
        <div className="relative aspect-[16/9] w-full bg-[#133e2f] overflow-hidden">
          {/* Western Ghats / Dandeli Map Graphic */}
          <div className="absolute inset-0 bg-[#0c2b20]">
            {/* Map Roads & River Pattern */}
            <svg
              className="w-full h-full opacity-30"
              viewBox="0 0 400 220"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Kali River Curve */}
              <path
                d="M-20,40 Q100,160 220,100 T420,180"
                fill="none"
                stroke="#22c55e"
                strokeWidth="10"
                strokeLinecap="round"
                opacity="0.5"
              />
              <path
                d="M-20,40 Q100,160 220,100 T420,180"
                fill="none"
                stroke="#86efac"
                strokeWidth="4"
                strokeLinecap="round"
              />
              {/* Roads */}
              <path
                d="M50,-10 L180,230"
                stroke="#fcfbf7"
                strokeWidth="2"
                strokeDasharray="4,4"
              />
              <path
                d="M-10,130 L410,90"
                stroke="#fcfbf7"
                strokeWidth="1.5"
              />
              {/* Forest Patches */}
              <circle cx="80" cy="70" r="30" fill="#22c55e" opacity="0.12" />
              <circle cx="320" cy="140" r="45" fill="#22c55e" opacity="0.12" />
            </svg>

            {/* Central Pin */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-[#22c55e] text-[#061912] flex items-center justify-center shadow-md border-2 border-white">
                  <MapPin className="w-4 h-4 fill-current" />
                </div>
                <span className="bg-[#0c2b20]/90 text-white text-[10px] font-medium px-2 py-0.5 rounded-md mt-1 border border-white/10">
                  Dandeli Tours Office
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Address Details */}
        <div className="p-4 space-y-1">
          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#1b533f] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold text-[#0c2b20] leading-snug">
                {FOOTER_DATA.address}
              </p>
              <p className="text-[11px] text-[#5c6660] mt-0.5">
                Opposite IOC Fuel Station • 2 mins from Dandeli Bus Stand
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Get Directions Button */}
      <button
        onClick={handleDirections}
        className="w-full bg-[#0c2b20] hover:bg-[#133e2f] active:scale-[0.98] text-[#fcfbf7] py-3 px-4 rounded-lg text-xs font-medium transition-colors flex items-center justify-between shadow-2xs"
      >
        <div className="flex items-center gap-2">
          <Navigation className="w-3.5 h-3.5 text-[#22c55e]" />
          <span>Get Directions on Google Maps</span>
        </div>
        <span className="text-sm">→</span>
      </button>
    </section>
  );
};

import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { FOOTER_DATA } from '../data/dandeliData';
import { DandeliLogoMark } from './DandeliLogoMark';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer id="footer" className="bg-[#061912] text-[#fcfbf7] border-t border-[#133e2f] pt-14 pb-24 sm:pt-16 sm:pb-16">
      <div className="max-w-[430px] mx-auto px-5 sm:px-6">
        {/* 1. Brand & Short Statement */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center justify-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#0c2b20] border border-white/10 flex items-center justify-center p-1 text-[#22c55e] shrink-0">
              <DandeliLogoMark className="w-full h-full" variant="dark" />
            </div>
            <div className="flex flex-col text-left justify-center leading-none">
              <span className="text-base font-semibold tracking-tight text-white leading-none">
                Dandeli Tours
              </span>
              <span className="text-[10px] tracking-wider font-medium text-white/60 uppercase leading-none mt-1">
                Western Ghats
              </span>
            </div>
          </div>

          {/* 2. Brand Description */}
          <p className="mt-3.5 text-xs text-white/70 max-w-[280px] mx-auto leading-relaxed font-normal text-center px-2">
            Experience Karnataka’s Adventure Capital in the heart of the Western Ghats.
          </p>
        </div>

        {/* 3. Navigation Links (Structured 2-Column Grid) */}
        <div className="mt-8 pt-7 border-t border-white/10">
          <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-2.5 sm:gap-y-3 text-xs sm:text-[13px] font-medium text-white/75 max-w-[340px] mx-auto text-left">
            <a
              href="#activities"
              className="py-1.5 px-0.5 hover:text-white transition-colors block"
            >
              White Water Rafting
            </a>
            <a
              href="#activities"
              className="py-1.5 px-0.5 hover:text-white transition-colors block"
            >
              Kayaking & Watersports
            </a>
            <a
              href="#packages"
              className="py-1.5 px-0.5 hover:text-white transition-colors block"
            >
              Tour Packages
            </a>
            <a
              href="#rooms-stays"
              className="py-1.5 px-0.5 hover:text-white transition-colors block"
            >
              Rooms & Stays
            </a>
            <a
              href="#why-choose-us"
              className="py-1.5 px-0.5 hover:text-white transition-colors block"
            >
              Why Choose Us
            </a>
            <a
              href="#gallery"
              className="py-1.5 px-0.5 hover:text-white transition-colors block"
            >
              Photo Gallery
            </a>
            <a
              href="#contact"
              className="py-1.5 px-0.5 col-start-2 hover:text-white transition-colors block"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* 4 & 5. Contact Card (Symmetrical Insets, Clear Gap & Internal Padding) */}
        <div className="mt-8 sm:mt-9 bg-[#0c2b20]/60 p-5 sm:p-6 rounded-xl border border-white/10 text-xs text-white/75 text-center space-y-3.5 shadow-xs">
          {/* Centered Address */}
          <div className="flex items-start justify-center gap-2 text-white/85">
            <MapPin className="w-3.5 h-3.5 text-[#22c55e] shrink-0 mt-0.5" />
            <span className="leading-relaxed max-w-[260px] text-center">
              K.C Circle, Opp. IOC Pump, Dandeli,
              <br className="hidden min-[360px]:inline" /> Karnataka 581325
            </span>
          </div>

          {/* Aligned Phone & Email Row */}
          <div className="pt-2.5 border-t border-white/5 flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1.5 text-xs font-medium">
            <a
              href={`tel:${FOOTER_DATA.phone}`}
              className="hover:text-white text-white flex items-center gap-1.5 transition-colors py-0.5 whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
              <span>{FOOTER_DATA.phone}</span>
            </a>
            <span className="text-white/30 hidden min-[380px]:inline" aria-hidden="true">
              •
            </span>
            <a
              href={`mailto:${FOOTER_DATA.email}`}
              className="hover:text-white text-white/80 flex items-center gap-1.5 transition-colors py-0.5 whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-[#22c55e] shrink-0" />
              <span>{FOOTER_DATA.email}</span>
            </a>
          </div>
        </div>

        {/* 6. Copyright Area (Spaced Divider & Text) */}
        <div className="mt-8 sm:mt-9 pt-6 sm:pt-7 border-t border-white/10 text-center space-y-1.5 text-xs text-white/50 font-normal">
          <p>© 2026 Dandeli Tours. All rights reserved.</p>
          <p className="text-[11px] text-white/40 leading-normal">
            Karnataka Tourism Approved Eco & Adventure Operator
          </p>
        </div>
      </div>
    </footer>
  );
};


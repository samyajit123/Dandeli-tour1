import React from 'react';
import { MapPin, Phone, Mail, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { FOOTER_DATA } from '../data/dandeliData';
import { DandeliLogoMark } from './DandeliLogoMark';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer id="footer" className="bg-[#061912] text-[#fcfbf7] border-t border-[#133e2f] pt-12 pb-24 sm:pb-12">
      <div className="max-w-[430px] mx-auto px-4 space-y-8">
        {/* Brand & Short Statement */}
        <div className="space-y-2.5 text-center">
          <div className="inline-flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#0c2b20] border border-white/10 flex items-center justify-center p-1 text-[#22c55e]">
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
          <p className="text-xs text-white/70 max-w-xs mx-auto leading-relaxed font-normal">
            {FOOTER_DATA.tagline}
          </p>
        </div>

        {/* Quick Links Navigation */}
        <div className="pt-2 border-t border-white/10">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-medium text-white/75">
            {FOOTER_DATA.quickLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Hotline & Address */}
        <div className="space-y-2.5 bg-[#0c2b20]/60 p-4 rounded-xl border border-white/10 text-xs text-white/75 text-center">
          <div className="flex items-center justify-center gap-2 text-white/80">
            <MapPin className="w-3.5 h-3.5 text-[#22c55e]" />
            <span>{FOOTER_DATA.address}</span>
          </div>
          <div className="flex items-center justify-center gap-4 text-xs font-medium pt-0.5">
            <a href={`tel:${FOOTER_DATA.phone}`} className="hover:text-white text-white flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#22c55e]" />
              <span>{FOOTER_DATA.phone}</span>
            </a>
            <span className="text-white/30">•</span>
            <a href={`mailto:${FOOTER_DATA.email}`} className="hover:text-white text-white/80">
              {FOOTER_DATA.email}
            </a>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="border-t border-white/10 pt-4 text-center space-y-1 text-xs text-white/50 font-normal">
          <p>© {new Date().getFullYear()} Dandeli Tours. All rights reserved.</p>
          <p className="text-[11px] text-white/40">
            Karnataka Tourism Approved Eco & Adventure Operator
          </p>
        </div>
      </div>
    </footer>
  );
};

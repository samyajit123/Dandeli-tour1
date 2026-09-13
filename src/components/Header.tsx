import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { FOOTER_DATA } from '../data/dandeliData';
import { DandeliLogoMark } from './DandeliLogoMark';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

interface HeaderProps {
  onOpenBooking: () => void;
  onOpenTripPlanner: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking, onOpenTripPlanner }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('overview'), href: '#hero' },
    { label: t('packages'), href: '#packages' },
    { label: t('activities'), href: '#activities' },
    { label: t('whyUs'), href: '#why-choose-us' },
    { label: t('roomsStays'), href: '#rooms-stays' },
    { label: t('reviews'), href: '#reviews' },
    { label: t('gallery'), href: '#gallery' },
    { label: t('contact'), href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#fcfbf7]/95 backdrop-blur-md shadow-xs border-b border-[#0c2b20]/10 py-2.5'
            : 'bg-gradient-to-b from-black/65 via-black/25 to-transparent py-3.5'
        }`}
      >
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            id="header-brand-logo"
            className="flex items-center gap-2.5 group"
          >
            {/* Minimal Kayaking Human Figure + River Mark */}
            <div className="w-9 h-9 rounded-xl bg-[#0c2b20] border border-[#22c55e]/25 flex items-center justify-center p-1 shadow-xs group-hover:bg-[#133e2f] group-hover:border-[#22c55e]/40 transition-all shrink-0">
              <DandeliLogoMark className="w-full h-full" variant="dark" />
            </div>
            {/* Refined Wordmark: DANDELI in Apple-inspired modern sans typography */}
            <div className="flex flex-col justify-center leading-none">
              <span className={`text-[15px] sm:text-base font-semibold tracking-[0.12em] leading-none uppercase transition-colors ${
                isScrolled ? 'text-[#0c2b20] group-hover:text-[#133e2f]' : 'text-white drop-shadow-xs'
              }`}>
                DANDELI
              </span>
              <span className={`text-[8.5px] sm:text-[9px] uppercase tracking-[0.26em] font-medium leading-none mt-1 ${
                isScrolled ? 'text-[#1b533f]' : 'text-[#86efac]'
              }`}>
                TOURS
              </span>
            </div>
          </a>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Menu / Hamburger Button */}
            <button
              id="header-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`w-9 h-9 rounded-lg border flex items-center justify-center active:scale-[0.98] transition-colors ${
                isScrolled
                  ? 'bg-[#f5f1e8] border-[#0c2b20]/10 text-[#0c2b20] hover:bg-[#eae3d2]'
                  : 'bg-black/35 border-white/20 text-white backdrop-blur-md hover:bg-black/50'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className={`w-4 h-4 ${isScrolled ? 'text-[#0c2b20]' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-backdrop"
          className="fixed inset-0 z-50 bg-[#061912]/60 backdrop-blur-xs flex flex-col justify-end transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            id="mobile-nav-drawer"
            className="w-full bg-[#fcfbf7] rounded-t-2xl border-t border-[#0c2b20]/10 p-6 max-h-[85vh] overflow-y-auto shadow-xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#0c2b20]/10">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#0c2b20] border border-[#22c55e]/25 flex items-center justify-center p-1 text-[#22c55e] shrink-0">
                  <DandeliLogoMark className="w-full h-full" variant="dark" />
                </div>
                <div className="flex flex-col justify-center leading-none">
                  <span className="font-semibold text-sm text-[#0c2b20] uppercase tracking-[0.12em] leading-tight">
                    DANDELI
                  </span>
                  <span className="text-[8px] uppercase tracking-[0.26em] text-[#1b533f] font-medium leading-none mt-0.5">
                    TOURS
                  </span>
                </div>
              </div>

              {/* Right: Compact Language Selector + Close X Button */}
              <div className="flex items-center gap-2 shrink-0">
                <LanguageSelector variant="compact" />
                <button
                  id="mobile-nav-close-btn"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-lg bg-[#f5f1e8] hover:bg-[#eae3d2] active:bg-[#eae3d2] flex items-center justify-center text-[#0c2b20] transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Nav Links */}
            <nav className="py-4 space-y-1">
              {navLinks.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleLinkClick(item.href)}
                  className="w-full text-left py-2.5 px-3 rounded-lg hover:bg-[#f5f1e8] text-[#0c2b20] font-medium text-sm flex items-center justify-between transition-colors group"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1b533f]/40 group-hover:text-[#0c2b20] transition-colors" />
                </button>
              ))}
            </nav>

            {/* Quick Actions in Menu */}
            <div className="pt-4 border-t border-[#0c2b20]/10 space-y-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenTripPlanner();
                }}
                className="w-full bg-transparent hover:bg-[#0c2b20]/5 border border-[#0c2b20]/20 text-[#0c2b20] py-2.5 px-4 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#1b533f]" />
                <span>{t('planTrip')}</span>
              </button>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#0c2b20] hover:bg-[#133e2f] text-[#fcfbf7] py-3 px-4 rounded-lg text-xs sm:text-sm font-medium flex items-center justify-center gap-2 shadow-xs transition-colors"
              >
                <span>{t('bookPackage')}</span>
                <ArrowRight className="w-4 h-4 text-[#22c55e]" />
              </button>

              {/* Direct Call hotline */}
              <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#1b533f]">
                <Phone className="w-3.5 h-3.5" />
                <span>{t('callPrefix')}: {FOOTER_DATA.phone}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

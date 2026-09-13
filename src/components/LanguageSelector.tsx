import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import {
  PRIORITY_INDIAN_LANGUAGES,
  OTHER_INDIAN_LANGUAGES,
  INTERNATIONAL_LANGUAGES,
  Language,
} from '../data/languages';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSelectorProps {
  isScrolled?: boolean;
  className?: string;
  variant?: 'compact' | 'header' | 'drawer';
  onSelect?: () => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  isScrolled = false,
  className = '',
  variant = 'compact',
  onSelect,
}) => {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleChooseLanguage = (code: string) => {
    setLanguage(code);
    setIsOpen(false);
    if (onSelect) {
      onSelect();
    }
  };

  // Compact Header Placement (inside Mobile Menu Drawer header row)
  // Example: 🌐 EN ▾ next to [X]
  if (variant === 'compact' || variant === 'drawer') {
    return (
      <div ref={containerRef} className={`relative inline-block text-left ${className}`}>
        {/* Compact Toggle Button in header row */}
        <button
          id="drawer-compact-language-btn"
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="h-8 px-2.5 rounded-lg bg-[#f5f1e8] hover:bg-[#eae3d2] active:bg-[#eae3d2] border border-[#0c2b20]/10 flex items-center gap-1.5 text-[#0c2b20] transition-colors text-xs font-semibold"
          aria-expanded={isOpen}
          aria-haspopup="true"
          aria-label="Select Language"
        >
          <Globe className="w-3.5 h-3.5 text-[#1b533f] shrink-0" />
          <span className="uppercase text-[11px] font-bold tracking-wider">
            {currentLanguage.code}
          </span>
          <ChevronDown
            className={`w-3 h-3 text-[#1b533f] transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Compact Popover Dropdown positioned directly underneath */}
        {isOpen && (
          <div
            id="drawer-compact-language-dropdown"
            className="absolute right-0 top-full mt-2 w-64 sm:w-72 bg-[#fcfbf7] rounded-xl border border-[#0c2b20]/12 shadow-2xl p-2.5 z-50 animate-in fade-in zoom-in-95 duration-150"
            role="menu"
            aria-orientation="vertical"
          >
            {/* Header label */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#0c2b20]/10 px-1">
              <span className="text-[10px] font-bold text-[#1b533f] uppercase tracking-wider">
                {t('selectLanguage') || 'Select Language'}
              </span>
              <span className="text-[10px] text-[#5c6660]">
                {currentLanguage.nativeName}
              </span>
            </div>

            {/* 2-Column Grid of 7 Prioritized Languages */}
            <div className="grid grid-cols-2 gap-1.5">
              {PRIORITY_INDIAN_LANGUAGES.map((lang) => {
                const isSelected = lang.code === currentLanguage.code;

                return (
                  <button
                    key={lang.code}
                    id={`compact-lang-${lang.code}`}
                    type="button"
                    onClick={() => handleChooseLanguage(lang.code)}
                    className={`h-[40px] px-2.5 rounded-lg border text-left flex items-center justify-between transition-all ${
                      isSelected
                        ? 'bg-[#0c2b20] text-[#fcfbf7] border-[#0c2b20] font-semibold shadow-2xs'
                        : 'bg-white hover:bg-[#f5f1e8] text-[#0c2b20] border-[#0c2b20]/10 font-medium'
                    }`}
                    aria-selected={isSelected}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="text-base shrink-0 leading-none" role="img" aria-label={lang.englishName}>
                        {lang.flag}
                      </span>
                      <span className="text-xs tracking-tight truncate">
                        {lang.nativeName}
                      </span>
                    </div>

                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-[#22c55e] shrink-0 ml-1" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    );
  }

  const renderHeaderLanguageOption = (lang: Language) => {
    const isSelected = lang.code === currentLanguage.code;

    return (
      <button
        key={lang.code}
        id={`lang-option-${lang.code}`}
        type="button"
        onClick={() => handleChooseLanguage(lang.code)}
        className={`w-full text-left px-3 py-2 rounded-lg flex items-center justify-between transition-colors group ${
          isSelected
            ? 'bg-[#0c2b20] text-[#fcfbf7] font-semibold shadow-2xs'
            : 'text-[#0c2b20] hover:bg-[#0c2b20]/6 font-normal'
        }`}
        aria-selected={isSelected}
      >
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="text-base leading-none shrink-0" role="img" aria-label={lang.englishName}>
            {lang.flag}
          </span>
          <div className="flex flex-col min-w-0 leading-tight">
            <span
              className={`text-xs font-medium tracking-tight truncate ${
                isSelected ? 'text-[#fcfbf7]' : 'text-[#0c2b20] group-hover:text-[#133e2f]'
              }`}
            >
              {lang.nativeName}
            </span>
            {lang.nativeName !== lang.englishName && (
              <span
                className={`text-[10px] truncate ${
                  isSelected ? 'text-white/70' : 'text-[#5c6660]'
                }`}
              >
                {lang.englishName}
              </span>
            )}
          </div>
        </div>

        {isSelected && (
          <Check className="w-3.5 h-3.5 text-[#22c55e] shrink-0 ml-2" />
        )}
      </button>
    );
  };

  // Full Header dropdown variant
  return (
    <div ref={containerRef} className={`relative inline-block text-left ${className}`}>
      {/* Header Language Button */}
      <button
        id="header-language-btn"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`h-9 px-2.5 rounded-lg border flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all text-xs font-medium ${
          isScrolled
            ? 'bg-[#f5f1e8] border-[#0c2b20]/10 text-[#0c2b20] hover:bg-[#eae3d2]'
            : 'bg-black/35 border-white/20 text-white backdrop-blur-md hover:bg-black/50'
        }`}
        aria-label="Select Language"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe className={`w-3.5 h-3.5 ${isScrolled ? 'text-[#1b533f]' : 'text-[#86efac]'}`} />
        <span className="text-[13px] leading-none" role="img" aria-label={currentLanguage.englishName}>
          {currentLanguage.flag}
        </span>
        <span className="font-semibold text-[11px] sm:text-xs tracking-tight">
          {currentLanguage.nativeName}
        </span>
        <ChevronDown
          className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${
            isScrolled ? 'text-[#0c2b20]/60' : 'text-white/75'
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          id="header-language-dropdown"
          className="absolute right-0 top-full mt-2 w-64 sm:w-72 bg-[#fcfbf7] rounded-xl border border-[#0c2b20]/12 shadow-2xl p-1.5 max-h-[75vh] overflow-y-auto z-50 animate-in fade-in zoom-in-95 duration-150"
          role="menu"
          aria-orientation="vertical"
        >
          {/* Header indicator */}
          <div className="px-2.5 pt-1.5 pb-1 flex items-center justify-between border-b border-[#0c2b20]/8 mb-1">
            <span className="text-[10px] font-bold text-[#1b533f] uppercase tracking-wider">
              {t('priorityIndianHeading')}
            </span>
            <span className="text-[10px] text-[#5c6660] font-normal">
              7 Languages
            </span>
          </div>

          {/* Group 1: Priority Indian Languages */}
          <div className="space-y-0.5">
            {PRIORITY_INDIAN_LANGUAGES.map(renderHeaderLanguageOption)}
          </div>

          {/* Divider: Other Indian Languages */}
          <div className="my-1.5 border-t border-[#0c2b20]/10" />
          <div className="px-2.5 py-1 text-[10px] font-bold text-[#5c6660] uppercase tracking-wider">
            {t('otherIndianHeading')}
          </div>
          <div className="space-y-0.5">
            {OTHER_INDIAN_LANGUAGES.map(renderHeaderLanguageOption)}
          </div>

          {/* Divider: International Languages */}
          <div className="my-1.5 border-t border-[#0c2b20]/10" />
          <div className="px-2.5 py-1 text-[10px] font-bold text-[#5c6660] uppercase tracking-wider">
            {t('internationalHeading')}
          </div>
          <div className="space-y-0.5">
            {INTERNATIONAL_LANGUAGES.map(renderHeaderLanguageOption)}
          </div>
        </div>
      )}
    </div>
  );
};

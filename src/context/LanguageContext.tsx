import React, { createContext, useContext, useState } from 'react';
import { ALL_LANGUAGES, Language, TRANSLATIONS, TranslationKeys } from '../data/languages';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (code: string) => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'dandeli_preferred_language';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentCode, setCurrentCode] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && ALL_LANGUAGES.some((l) => l.code === saved)) {
        return saved;
      }
    } catch {
      // Ignore localStorage access errors
    }
    return 'en';
  });

  const setLanguage = (code: string) => {
    if (ALL_LANGUAGES.some((l) => l.code === code)) {
      setCurrentCode(code);
      try {
        localStorage.setItem(STORAGE_KEY, code);
      } catch (e) {
        console.warn('Could not persist language to localStorage', e);
      }
    }
  };

  const currentLanguage =
    ALL_LANGUAGES.find((l) => l.code === currentCode) || ALL_LANGUAGES[0];

  const t = (key: TranslationKeys): string => {
    const langDict = TRANSLATIONS[currentCode];
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    // Fallback to English, then key itself
    return TRANSLATIONS['en']?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

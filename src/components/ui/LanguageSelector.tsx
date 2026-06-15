import React from 'react';
import { useLanguage } from '../../shared/LanguageContext';
import type { Language } from '../../shared/translations';

export const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const langs: { id: Language; label: string }[] = [
    { id: 'es', label: 'ES' },
    { id: 'en', label: 'EN' },
    { id: 'pt', label: 'PT' }
  ];

  return (
    <div className="fixed bottom-12 right-12 z-[1000] flex gap-4 pointer-events-auto">
      {langs.map((lang) => (
        <button
          key={lang.id}
          onClick={(e) => {
            e.stopPropagation();
            setLanguage(lang.id);
          }}
          className={`px-4 py-2 text-[12px] font-black tracking-widest border-2 transition-all duration-300 cursor-pointer ${
            language === lang.id
              ? 'bg-neon-violet text-white border-neon-violet shadow-[0_0_20px_#bc13fe]'
              : 'bg-black/80 text-gray-400 border-white/20 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_15px_#00f3ff]'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

import React from 'react';
import { useLanguage } from '../../shared/LanguageContext';

export const ContactActions: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <a 
        href={language === 'es' ? '/cv-es.pdf' : '/cv-en.pdf'} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-black/60 border border-neon-cyan/50 text-neon-cyan px-4 py-3 rounded-full hover:bg-neon-cyan hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.3)] backdrop-blur-md"
      >
        <span className="text-xs font-bold uppercase tracking-widest">CV ({language.toUpperCase()})</span>
      </a>
      <a 
        href="mailto:tu-email@ejemplo.com"
        className="group flex items-center justify-center w-12 h-12 bg-black/60 border border-neon-violet/50 text-neon-violet rounded-full hover:bg-neon-violet hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(188,19,254,0.3)] backdrop-blur-md"
        title="Contacto"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
      </a>
    </div>
  );
};
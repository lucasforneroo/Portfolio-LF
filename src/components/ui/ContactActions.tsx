import React from 'react';

export const ContactActions: React.FC = () => {
  return (
    <div className="fixed top-20 md:top-8 left-8 z-50 flex flex-col gap-4">
      <a 
        href="/cv-es.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center justify-center bg-black/60 border border-neon-cyan/50 text-neon-cyan px-4 py-3 rounded-full hover:bg-neon-cyan hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,243,255,0.3)] backdrop-blur-md"
      >
        <span className="text-xs font-bold uppercase tracking-widest">CV (ES)</span>
      </a>
      <a 
        href="/cv-en.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex items-center justify-center bg-black/60 border border-neon-violet/50 text-neon-violet px-4 py-3 rounded-full hover:bg-neon-violet hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(188,19,254,0.3)] backdrop-blur-md"
      >
        <span className="text-xs font-bold uppercase tracking-widest">CV (EN)</span>
      </a>
    </div>
  );
};
import React from 'react';
import { AboutContent } from './components/AboutContent';
import { SkillsContent } from './components/SkillsContent';
import { ContactContent } from './components/ContactContent';
import { ExperienceContent } from './components/ExperienceContent';
import { ProjectsContent } from './components/ProjectsContent';

interface SectionProps {
  id: string;
  onBack: () => void;
  isUnzooming?: boolean;
}

export const SectionView: React.FC<SectionProps> = ({ id, onBack, isUnzooming }) => {
  // Use a mapping object for cleaner and safer lookup
  const contentMap: Record<string, React.ReactNode> = {
    'about': <AboutContent />,
    'skills': <SkillsContent />,
    'contact': <ContactContent />,
    'experience': <ExperienceContent />,
    'projects': <ProjectsContent />
  };

  const currentContent = contentMap[id] || (
    <div className="flex flex-col items-center justify-center py-20">
      <p className="text-gray-400 font-mono italic animate-pulse">
        {`>_ ACCESSING_DATA_FOR_${id.toUpperCase()}...`}
      </p>
      <p className="text-gray-600 text-xs mt-4">Contenido en carga o no encontrado.</p>
    </div>
  );

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-[#050505] transition-all duration-700 ${isUnzooming ? 'opacity-0 scale-95 blur-2xl' : 'opacity-100 scale-100 blur-0'}`}>
      {/* Background Section Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-pink/5 rounded-full blur-[150px] animate-pulse-slow" />
      
      <div className="relative z-10 w-full max-w-5xl px-8 animate-[reveal_1.5s_ease-out_forwards]">
        <header className="flex items-center justify-between border-b border-neon-cyan/30 pb-4 mb-8">
          <h2 className="text-5xl font-bold tracking-tighter text-neon-cyan uppercase">
            {id === 'experience' && 'Experiencia'}
            {id === 'projects' && 'Proyectos'}
            {id === 'about' && 'Sobre Mí'}
            {id === 'skills' && 'Skills'}
            {id === 'contact' && 'Contacto'}
          </h2>
          <button 
            onClick={onBack}
            className="group flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-neon-pink border border-neon-pink/50 px-6 py-3 hover:bg-neon-pink hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(255,0,255,0.2)]"
          >
            <span>[ RETURN ]</span>
          </button>
        </header>

        <div className="w-full max-h-[70vh] overflow-y-auto custom-scrollbar">
          {currentContent}
        </div>
      </div>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #bc13fe40; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #bc13fe; }
      `}</style>
    </div>
  );
};

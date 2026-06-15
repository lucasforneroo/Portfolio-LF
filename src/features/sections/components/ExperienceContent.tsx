import React from 'react';
import { useLanguage } from '../../../shared/LanguageContext';

const EXPERIENCE_DATA = [
  {
    id: 'sancor',
    company: 'Sancor Seguros',
    logo: '/sancor-logo.png',
    certificate: '/sancor-certificado.png'
  }
];

export const ExperienceContent: React.FC = () => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const { t } = useLanguage();

  React.useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const data = t.experience.sancor;

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-12">
      {EXPERIENCE_DATA.map((exp) => (
        <div key={exp.id} className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 bg-black/40 border border-white/10 p-8 backdrop-blur-md overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-1000 bg-gradient-to-b from-neon-cyan to-neon-violet" />
          <div className="lg:col-span-8 space-y-6 text-left">
            <header className="space-y-4">
              <h3 className="text-4xl font-black tracking-tighter text-white uppercase italic transition-colors group-hover:text-neon-cyan">
                {data.role}
              </h3>
              <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-400">
                <span className="px-2 border border-white/20 bg-white/5 uppercase tracking-widest">{exp.company}</span>
                <span className="text-neon-violet/80">[{data.period || '2026'}]</span>
                <span className="opacity-60">{data.location}</span>
              </div>
            </header>
            <ul className="space-y-4 relative">
              {data.achievements.map((item: string, i: number) => (
                <li key={i} className="flex gap-4 group/item">
                  <span className="text-neon-cyan font-mono text-lg shrink-0 mt-1">{">"}</span>
                  <p className="text-gray-300 leading-relaxed font-light text-lg transition-colors group-hover/item:text-white">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 flex flex-col justify-center items-center gap-6">
            <div className="relative w-full aspect-square border-2 border-dashed border-white/10 p-4 flex items-center justify-center overflow-hidden bg-black/20 group-hover:border-neon-cyan/30 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-cyan opacity-40" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-cyan opacity-40" />
              <div className="relative w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700">
                {[exp.logo, exp.certificate].map((src, idx) => (
                  <img key={src} src={src} alt={`Evidence ${idx}`} className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${idx === imgIndex ? 'opacity-100' : 'opacity-0'}`} onError={(e) => { (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x400/000000/00f3ff?text=${idx === 0 ? 'SANCOR+LOGO' : 'CERTIFICADO'}`; }} />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-cyan/5 to-transparent h-1/2 w-full -top-full group-hover:top-full transition-all duration-[3000ms] linear pointer-events-none" />
            </div>
            <div className="w-full space-y-2">
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-neon-cyan/40 w-[85%] animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

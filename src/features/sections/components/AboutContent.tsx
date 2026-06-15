import React from 'react';
import { useLanguage } from '../../../shared/LanguageContext';

export const AboutContent: React.FC = () => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const images = ['/hero.png', '/uni-rafaela.png']; 
  const { t } = useLanguage();

  React.useEffect(() => {
      const interval = setInterval(() => {
        setImgIndex((prev) => (prev === 0 ? 1 : 0));
      }, 3000);
      return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Text Content */}
      <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-md space-y-6">
        <h3 className="text-xl text-neon-violet font-mono mb-6">{t.about.subtitle}</h3>
        <div className="space-y-6 text-gray-200 leading-relaxed font-light text-xl text-left">
            <p>{t.about.content}</p>
            <p className="border-l-4 border-neon-cyan pl-4 italic text-neon-cyan/90 font-medium">
              {t.about.university}
            </p>
        </div>
      </div>
      
      {/* Dynamic Image Container with Bars */}
      <div className="relative flex flex-col gap-4">
        {/* Bars on top of images (larger) */}
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-3 w-full bg-white/5 overflow-hidden">
              <div 
                className="h-full bg-neon-cyan/70 animate-[loading_3s_infinite_linear]" 
                style={{ animationDelay: `${i * 0.5}s` }}
              />
            </div>
          ))}
        </div>

        <div className="relative border border-neon-cyan/30 p-2 bg-black/50 aspect-square overflow-hidden shadow-[0_0_20px_rgba(0,243,255,0.2)]">
          {images.map((src, index) => (
            <img 
              key={src}
              src={src} 
              alt="Profile/Uni"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === imgIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className="absolute inset-0 border-4 border-neon-cyan/20 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

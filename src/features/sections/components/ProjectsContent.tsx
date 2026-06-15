import React from 'react';
import { useLanguage } from '../../../shared/LanguageContext';

// --- CUSTOM SVG COMPONENTS (Zero Dependency) ---
const ExternalLinkIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 22 3 22 10"/>
    <line x1="10" x2="22" y1="14" y2="2"/>
  </svg>
);

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-4.5-2-7-2"/>
  </svg>
);

const CpuIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="16" height="16" x="4" y="4" rx="2"/>
    <rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/>
  </svg>
);

const DatabaseIcon = ({ size = 64 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
  </svg>
);

const ActivityIcon = ({ size = 12, className = "", color = "currentColor" }: { size?: number, className?: string, color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

export const ProjectsContent: React.FC = () => {
  const { t } = useLanguage();

  const PROJECTS_DATA = [
    { 
      id: 'waspai', 
      title: 'WaspAI', 
      subtitle: t.projects.waspai.subtitle, 
      description: t.projects.waspai.description, 
      period: 'Marzo 2026 - Actualidad', 
      link: 'https://wasp-ai.vercel.app', 
      github: 'https://github.com/lucasforneroo/WaspAI', 
      stack: ['Next.js 16', 'TypeScript', 'Gemini Pro', 'Supabase', 'Tailwind', 'Sentry'], 
      achievements: t.projects.waspai.achievements, 
      color: '#00f3ff', 
      category: 'AI / SAAS' 
    },
    { 
      id: 'aquacontrol32', 
      title: 'AquaControl32', 
      subtitle: t.projects.aquacontrol.subtitle, 
      description: t.projects.aquacontrol.description, 
      period: 'Agosto 2025 - Actualidad', 
      github: 'https://github.com/lucasforneroo/AquaControl32', 
      stack: ['React Native', 'Node.js', 'WebSockets', 'MQTT', 'C++', 'ESP32'], 
      achievements: t.projects.aquacontrol.achievements, 
      color: '#bc13fe', 
      category: 'IOT / FULLSTACK' 
    },
    { 
      id: 'erp-lg', 
      title: 'ERP-LG', 
      subtitle: t.projects.erp.subtitle, 
      description: t.projects.erp.description, 
      period: '2025', 
      link: 'https://erp.sibotec.com.ar', 
      github: 'https://github.com/lucasforneroo/ERP-LG', 
      stack: ['React', 'TypeScript', 'PostgreSQL', 'Express', 'Prisma'], 
      achievements: t.projects.erp.achievements, 
      color: '#ff0055', 
      category: 'ENTERPRISE / ERP' 
    }
  ];

  return (
    <div className="max-w-6xl mx-auto py-6 px-4 h-[65vh] overflow-y-auto custom-scrollbar pr-4 relative">
      <div className="grid grid-cols-1 gap-12 pb-20 text-white">
        {PROJECTS_DATA.map((project) => (
          <div key={project.id} className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 bg-black/40 border border-white/5 p-1 transition-all duration-500 hover:border-white/20 group overflow-hidden text-left">
            <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition duration-1000 blur" style={{ backgroundImage: `linear-gradient(to right, ${project.color}, transparent)` }} />
            <div className="lg:col-span-8 p-8 relative z-10 space-y-6 text-left text-white">
              <header className="space-y-2 text-left">
                <div className="flex items-center gap-4 text-white">
                  <span className="text-[10px] font-mono px-2 py-1 bg-white/5 border border-white/10 text-gray-400 tracking-[0.2em]">{project.category}</span>
                  <div className="h-[1px] flex-grow bg-white/10" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase">[{project.period}]</span>
                </div>
                <h3 className="text-4xl font-black tracking-tighter text-white uppercase group-hover:text-transparent group-hover:bg-clip-text transition-all duration-500" style={{ backgroundImage: `linear-gradient(to right, ${project.color}, #ffffff)` }}>{project.title}</h3>
                <p className="text-neon-cyan/80 font-mono text-sm tracking-widest">{project.subtitle}</p>
              </header>

              <div className="flex flex-wrap gap-2">
                {project.stack.map(tech => <span key={tech} className="text-[9px] font-mono border border-white/10 px-2 py-1 bg-black/50 text-gray-300">{tech}</span>)}
              </div>

              {/* Detailed Description */}
              {project.description && (
                <p className="text-sm text-gray-300 font-light leading-relaxed border-l-2 pl-4 py-1 italic" style={{ borderColor: `${project.color}80` }}>
                  {project.description}
                </p>
              )}

              <ul className="space-y-3">
                {project.achievements.map((ach, i) => <li key={i} className="flex gap-3 text-sm text-gray-400 leading-relaxed group-hover:text-gray-200 transition-colors"><span style={{ color: project.color }}>::</span>{ach}</li>)}
              </ul>

              <div className="flex gap-6 pt-4 text-white">
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono tracking-widest text-white hover:text-neon-cyan transition-colors"><ExternalLinkIcon size={14} /> {t.projects.viewLive}</a>}
                {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs font-mono tracking-widest text-white hover:text-neon-violet transition-colors"><GithubIcon size={14} /> {t.projects.sourceCode}</a>}
              </div>
            </div>
            
            <div className="lg:col-span-4 bg-black border-l border-white/5 relative overflow-hidden group-hover:bg-white/[0.02] transition-all min-h-[250px] flex items-center justify-center">
              {project.id === 'waspai' ? (
                <img 
                  src="/waspai-preview.png" 
                  alt="WaspAI Preview" 
                  className="absolute inset-0 w-full h-full object-contain p-4 opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} 
                />
              ) : (
                <div className="relative z-10 flex flex-col items-center gap-4">
                   <div style={{ color: project.color }}>
                    {project.id === 'aquacontrol32' && <CpuIcon size={64} />}
                    {project.id === 'erp-lg' && <DatabaseIcon size={64} />}
                  </div>
                  <div className="flex items-center justify-center gap-2 text-white">
                    <ActivityIcon size={12} className="animate-pulse" color={project.color} />
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Protocol_Stable</span>
                  </div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.05] to-transparent h-full w-full -top-full group-hover:top-full transition-all duration-[3000ms] linear pointer-events-none z-20" />
            </div>
          </div>
        ))}
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

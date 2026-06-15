import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../shared/LanguageContext';

// --- CUSTOM SVG COMPONENTS (Zero Dependency) ---
const BriefcaseIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
);

const CodeIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);

const UserIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
);

const CpuIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><rect width="6" height="6" x="9" y="9" rx="1"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></svg>
);

const MailIcon = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

interface NavNode {
  id: string;
  angle: number;
  icon: (s: number) => React.ReactNode;
}

const NODES: NavNode[] = [
  { id: 'experience', angle: -90, icon: (s) => <BriefcaseIcon size={s} /> },
  { id: 'projects', angle: -18, icon: (s) => <CodeIcon size={s} /> },
  { id: 'about', angle: 54, icon: (s) => <UserIcon size={s} /> },
  { id: 'skills', angle: 126, icon: (s) => <CpuIcon size={s} /> },
  { id: 'contact', angle: 198, icon: (s) => <MailIcon size={s} /> },
];

const NODE_COLORS = ['#00f3ff', '#0044ff', '#bc13fe', '#ff00ff', '#ff0055'];

interface RadialMenuProps {
  onNodeClick: (id: string) => void;
  isZooming: boolean;
  isUnzooming?: boolean;
  activeNodeId: string | null;
}

export const RadialMenu: React.FC<RadialMenuProps> = ({ onNodeClick, isZooming, isUnzooming, activeNodeId }) => {
  const radius = window.innerWidth < 768 ? 160 : 320;
  const [colorOffset, setColorOffset] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setColorOffset((prev) => (prev + 1) % NODE_COLORS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getZoomStyles = () => {
    if (!activeNodeId) return { transform: 'scale(1) translate(0, 0)', opacity: 1 };
    const node = NODES.find(n => n.id === activeNodeId);
    if (!node) return { transform: 'scale(1) translate(0, 0)', opacity: 1 };
    const x = radius * Math.cos((node.angle * Math.PI) / 180);
    const y = radius * Math.sin((node.angle * Math.PI) / 180);
    const scaleFactor = window.innerWidth < 768 ? 2 : 4;
    if (isZooming) return { transform: `scale(${scaleFactor}) translate(${-x}px, ${-y}px)`, opacity: 0, transition: 'transform 1.2s cubic-bezier(0.7, 0, 0.3, 1), opacity 0.8s ease-in 0.4s' };
    if (isUnzooming) return { transform: 'scale(1) translate(0, 0)', opacity: 1, transition: 'transform 1.2s cubic-bezier(0.7, 0, 0.3, 1), opacity 0.8s ease-out' };
    return { transform: `scale(${scaleFactor}) translate(${-x}px, ${-y}px)`, opacity: 0 };
  };

  return (
    <div className="relative flex items-center justify-center w-[90vw] h-[90vw] transition-all duration-1000 scale-[0.6] md:scale-100" style={getZoomStyles()}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        {NODES.map((node, index) => {
          const x = 450 + radius * Math.cos((node.angle * Math.PI) / 180);
          const y = 450 + radius * Math.sin((node.angle * Math.PI) / 180);
          const currentColor = NODE_COLORS[(index + colorOffset) % NODE_COLORS.length];
          return <line key={`line-${node.id}`} x1="450" y1="450" x2={x} y2={y} stroke={currentColor} strokeOpacity="0.15" strokeWidth="1.5" className="transition-all duration-[2000ms] ease-in-out" style={{ filter: `drop-shadow(0 0 3px ${currentColor})` }} />;
        })}
      </svg>
      <div className="relative z-20 w-32 h-32 md:w-56 md:h-56 rounded-full border-2 bg-black animate-nucleus-cycle flex items-center justify-center overflow-hidden transition-all duration-700 hover:scale-110 shadow-[0_0_50px_rgba(0,0,0,0.8)] group">
        <img src="/hero.png" alt="Lucas Fornero" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
        <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-black opacity-40 pointer-events-none" />
        <div className="absolute inset-0 bg-white/5 animate-pulse-slow pointer-events-none" />
      </div>
      {NODES.map((node, index) => {
        const x = radius * Math.cos((node.angle * Math.PI) / 180);
        const y = radius * Math.sin((node.angle * Math.PI) / 180);
        const currentColor = NODE_COLORS[(index + colorOffset) % NODE_COLORS.length];
        const label = t.nav[node.id as keyof typeof t.nav];
        return (
          <button key={node.id} onClick={() => onNodeClick(node.id)} disabled={isZooming} className="absolute z-30 group flex flex-col items-center justify-center transition-all duration-500 hover:scale-110 disabled:pointer-events-none" style={{ transform: `translate(${x}px, ${y}px)` }}>
            <div className="w-16 h-16 md:w-24 md:h-24 hexagon-clip flex items-center justify-center transition-all duration-[2000ms] ease-in-out" style={{ backgroundColor: currentColor, filter: `drop-shadow(0 0 15px ${currentColor})` }}>
              <div className="w-[calc(100%-6px)] h-[calc(100%-6px)] bg-black hexagon-clip flex items-center justify-center">
                <div className="transition-all duration-[2000ms] ease-in-out group-hover:scale-110" style={{ color: currentColor }}>{node.icon(window.innerWidth < 768 ? 20 : 28)}</div>
              </div>
            </div>
            <span className="absolute mt-20 md:mt-32 whitespace-nowrap text-[10px] md:text-xs font-mono tracking-[0.2em] md:tracking-[0.3em] uppercase transition-all duration-[2000ms] ease-in-out font-bold text-white" style={{ textShadow: `0 0 8px ${currentColor}`, opacity: 0.9 }}>{label}</span>
          </button>
        );
      })}
    </div>
  );
};

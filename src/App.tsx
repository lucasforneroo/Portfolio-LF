import { useState, useCallback, useEffect } from 'react'

// Styles
import './App.css'

// Shared
import { LanguageProvider, useLanguage } from './shared/LanguageContext'

// Features
import { RadialMenu } from './features/radial-nav/RadialMenu'
import { SectionView } from './features/sections/SectionView'

// UI Components
import Lightfall from './components/ui/Lightfall'
import { LanguageSelector } from './components/ui/LanguageSelector'

function AppContent() {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [isZooming, setIsZooming] = useState(false);
  const [isUnzooming, setIsUnzooming] = useState(false);
  const [showSection, setShowSection] = useState(false);
  const [isClosingSection, setIsClosingSection] = useState(false);
  const [colorOffset, setColorOffset] = useState(0);
  const [isFlickering, setIsFlickering] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => setColorOffset(p => (p + 1) % 5), 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const triggerFlicker = async () => {
      const numFlickers = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < numFlickers; i++) {
        setIsFlickering(true);
        await new Promise(r => setTimeout(r, 200));
        setIsFlickering(false);
        if (i < numFlickers - 1) await new Promise(r => setTimeout(r, 100));
      }
      timeoutId = setTimeout(triggerFlicker, 2000 + Math.random() * 3000);
    };
    timeoutId = setTimeout(triggerFlicker, 2000 + Math.random() * 3000);
    return () => clearTimeout(timeoutId);
  }, []);

  const NODE_COLORS = ['#00f3ff', '#0044ff', '#bc13fe', '#ff00ff', '#ff0055'];
  const currentColor = NODE_COLORS[colorOffset % NODE_COLORS.length];

  const handleNodeClick = useCallback((id: string) => {
    setIsZooming(true);
    setActiveNode(id);
    setTimeout(() => {
      setShowSection(true);
      setIsZooming(false);
    }, 1200);
  }, []);

  const handleBack = useCallback(() => {
    setIsClosingSection(true);
    setTimeout(() => {
      setShowSection(false);
      setIsUnzooming(true);
      setIsClosingSection(false);
    }, 600);
    setTimeout(() => {
      setIsUnzooming(false);
      setActiveNode(null);
    }, 1800);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Background */}
      <div className="absolute inset-0 z-0 text-white pointer-events-none">
        <Lightfall colors={['#000064ff', '#30064aff', '#320019ff']} backgroundColor="#000000" speed={0.6} streakCount={2} streakWidth={0.2} streakLength={3} glow={1.2} density={0.7} twinkle={0.8} zoom={1} backgroundGlow={0.3} opacity={0.8} mouseInteraction={false} mouseStrength={0.2} mouseRadius={0.1} />
      </div>

      <div className={`absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-neon-cyan/5 rounded-full blur-[120px] animate-pulse-slow transition-opacity duration-1000 ${showSection ? 'opacity-0' : 'opacity-100'}`} />
      <div className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-violet/5 rounded-full blur-[120px] animate-pulse-slow transition-opacity duration-1000 ${showSection ? 'opacity-0' : 'opacity-100'}`} />
      
      {!showSection && <div className="absolute inset-0 w-full h-[2px] bg-neon-cyan/10 top-0 animate-[scan_8s_linear_infinite] z-10" />}

      {/* Language Selector - Placed at the end of the root div for absolute top priority */}
      <LanguageSelector />

      {/* Main Menu Shell */}
      <div className={`fixed inset-0 flex items-center justify-center z-20 transition-all duration-1000 ${(showSection && !isUnzooming) ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        {/* Top-Right Branding */}
        <div className={`fixed top-12 right-12 text-right pointer-events-none z-50 transition-opacity duration-300 ${(isZooming || isUnzooming) ? 'opacity-0' : 'opacity-100'}`}
             style={{ visibility: isFlickering ? 'hidden' : 'visible' }}>
          <h2 className="text-3xl font-black tracking-[0.6em] transition-colors duration-[2000ms] ease-in-out font-cyber"
              style={{ color: currentColor, textShadow: `0 0 20px ${currentColor}80, 0 0 40px ${currentColor}40` }}>
            LUCAS FORNERO
          </h2>
          <p className="text-xs text-gray-400 font-mono uppercase tracking-[0.5em] mt-3 opacity-60 font-bold text-white">
            {t.branding.role}
          </p>
        </div>

        {/* Bottom-Left Tech Stack */}
        <div className={`fixed bottom-12 left-12 text-left pointer-events-none font-mono z-50 transition-opacity duration-500 ${(isZooming || isUnzooming) ? 'opacity-0' : 'opacity-100'}`}>
          <p className="text-xs text-gray-400 uppercase tracking-[0.4em] mb-6 opacity-60">{t.branding.buildStack}</p>
          <div className="flex flex-col gap-3 border-l-2 border-white/10 pl-6">
            {['React 19', 'TypeScript', 'Tailwind v4', 'Vite', 'OGL'].map((tech, index) => (
              <span key={tech} className="text-sm tracking-[0.3em] uppercase transition-colors duration-[2000ms] ease-in-out"
                    style={{ color: NODE_COLORS[(index + colorOffset) % 5] }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        <main className="relative z-20">
          <RadialMenu 
            onNodeClick={handleNodeClick} 
            isZooming={isZooming}
            isUnzooming={isUnzooming}
            activeNodeId={activeNode}
          />
        </main>
      </div>

      {/* Section View */}
      {showSection && activeNode && (
        <SectionView id={activeNode} onBack={handleBack} isUnzooming={isClosingSection} />
      )}

      {/* Transition Overlay */}
      <div className={`fixed inset-0 z-[100] bg-black pointer-events-none transition-opacity duration-700 ${(isZooming || isClosingSection) ? 'opacity-100' : 'opacity-0'}`} />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App

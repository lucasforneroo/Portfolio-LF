import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import GhostCursor from '../../../components/ui/GhostCursor';
import { useLanguage } from '../../../shared/LanguageContext';

interface SkillNode {
  id: string;
  group: string;
  label: string;
  isRoot?: boolean;
  x?: number;
  y?: number;
}

interface SkillLink {
  source: string;
  target: string;
}

const SKILLS_BASE_DATA: { nodes: SkillNode[]; links: SkillLink[] } = {
  nodes: [
    { id: 'ROOT_LANG', label: '[ LANGUAGES ]', group: 'language', isRoot: true },
    { id: 'ROOT_FE', label: '[ FRONTEND ]', group: 'frontend', isRoot: true },
    { id: 'ROOT_BE', label: '[ BACKEND ]', group: 'backend', isRoot: true },
    { id: 'ROOT_DB', label: '[ DATABASE ]', group: 'database', isRoot: true },
    { id: 'ROOT_DEVOPS', label: '[ DEVOPS ]', group: 'devops', isRoot: true },
    { id: 'ROOT_AI', label: '[ AI_RESEARCH ]', group: 'ai', isRoot: true },
    { id: 'ROOT_IOT', label: '[ IOT_SYSTEMS ]', group: 'iot', isRoot: true },
    { id: 'ROOT_QA', label: '[ QA_TESTING ]', group: 'testing', isRoot: true },
    { id: 'ROOT_AGILE', label: '[ METHODOLOGY ]', group: 'methodology', isRoot: true },
    { id: 'JS', label: 'JavaScript (ES6+)', group: 'language' },
    { id: 'TS', label: 'TypeScript', group: 'language' },
    { id: 'PY', label: 'Python', group: 'language' },
    { id: 'CPP', label: 'C++', group: 'language' },
    { id: 'REACT', label: 'React', group: 'frontend' },
    { id: 'RN', label: 'React Native', group: 'frontend' },
    { id: 'NEXT', label: 'Next.js 16', group: 'frontend' },
    { id: 'TW', label: 'Tailwind CSS', group: 'frontend' },
    { id: 'NODE', label: 'Node.js', group: 'backend' },
    { id: 'EX', label: 'Express', group: 'backend' },
    { id: 'REST', label: 'REST APIs', group: 'backend' },
    { id: 'WS', label: 'WebSockets', group: 'backend' },
    { id: 'PG', label: 'PostgreSQL', group: 'database' },
    { id: 'SQL', label: 'SQL', group: 'database' },
    { id: 'SUPA', label: 'Supabase', group: 'database' },
    { id: 'GIT', label: 'Git', group: 'devops' },
    { id: 'GHA', label: 'GitHub Actions', group: 'devops' },
    { id: 'CICD', label: 'CI/CD', group: 'devops' },
    { id: 'VERCEL', label: 'Vercel', group: 'devops' },
    { id: 'GEMINI', label: 'Gemini API', group: 'ai' },
    { id: 'LLM', label: 'LLM Integration', group: 'ai' },
    { id: 'AI_AGENTS', label: 'AI Agents', group: 'ai' },
    { id: 'ESP32', label: 'ESP32', group: 'iot' },
    { id: 'ARDUINO', label: 'Arduino', group: 'iot' },
    { id: 'MQTT', label: 'MQTT', group: 'iot' },
    { id: 'DS18B20', label: 'DS18B20', group: 'iot' },
    { id: 'JEST', label: 'Jest', group: 'testing' },
    { id: 'PW', label: 'Playwright (E2E)', group: 'testing' },
    { id: 'SENTRY', label: 'Sentry', group: 'testing' },
    { id: 'SCRUM', label: 'Scrum', group: 'methodology' },
    { id: 'AGILE', label: 'Agile', group: 'methodology' },
    { id: 'TDD', label: 'TDD', group: 'methodology' },
  ],
  links: [
    { source: 'ROOT_LANG', target: 'JS' }, { source: 'ROOT_LANG', target: 'TS' }, { source: 'ROOT_LANG', target: 'PY' }, { source: 'ROOT_LANG', target: 'CPP' },
    { source: 'ROOT_FE', target: 'REACT' }, { source: 'ROOT_FE', target: 'RN' }, { source: 'ROOT_FE', target: 'NEXT' }, { source: 'ROOT_FE', target: 'TW' },
    { source: 'ROOT_BE', target: 'NODE' }, { source: 'ROOT_BE', target: 'EX' }, { source: 'ROOT_BE', target: 'REST' }, { source: 'ROOT_BE', target: 'WS' },
    { source: 'ROOT_DB', target: 'PG' }, { source: 'ROOT_DB', target: 'SQL' }, { source: 'ROOT_DB', target: 'SUPA' },
    { source: 'ROOT_DEVOPS', target: 'GIT' }, { source: 'ROOT_DEVOPS', target: 'GHA' }, { source: 'ROOT_DEVOPS', target: 'CICD' }, { source: 'ROOT_DEVOPS', target: 'VERCEL' },
    { source: 'ROOT_AI', target: 'GEMINI' }, { source: 'ROOT_AI', target: 'LLM' }, { source: 'ROOT_AI', target: 'AI_AGENTS' },
    { source: 'ROOT_IOT', target: 'ESP32' }, { source: 'ROOT_IOT', target: 'ARDUINO' }, { source: 'ROOT_IOT', target: 'MQTT' }, { source: 'ROOT_IOT', target: 'DS18B20' },
    { source: 'ROOT_QA', target: 'JEST' }, { source: 'ROOT_QA', target: 'PW' }, { source: 'ROOT_QA', target: 'SENTRY' },
    { source: 'ROOT_AGILE', target: 'SCRUM' }, { source: 'ROOT_AGILE', target: 'AGILE' }, { source: 'ROOT_AGILE', target: 'TDD' },
  ]
};

const GROUP_COLORS: Record<string, string> = {
  language: '#00f3ff', frontend: '#0044ff', backend: '#bc13fe', database: '#ff00ff',
  devops: '#ff0055', ai: '#00f3ff', iot: '#bc13fe', testing: '#0044ff', methodology: '#ff00ff'
};

const NODE_COLORS_ARRAY = ['#00f3ff', '#0044ff', '#bc13fe', '#ff00ff', '#ff0055'];

export const SkillsContent: React.FC = () => {
  const fgRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [colorOffset, setColorOffset] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => setColorOffset(p => (p + 1) % 5), 3000);
    return () => clearInterval(interval);
  }, []);

  const graphData = useMemo(() => JSON.parse(JSON.stringify(SKILLS_BASE_DATA)), []);

  useEffect(() => {
    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth || 800,
        height: containerRef.current.offsetHeight || 600
      });
    }
  }, []);

  const handleEngineStop = useCallback(() => {
    if (fgRef.current) {
      fgRef.current.d3Force('charge').strength(-300); 
      fgRef.current.d3Force('link').distance((l: any) => (l.source.isRoot || l.target.isRoot) ? 220 : 100).strength(0.9);
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[600px] border border-white/10 bg-black/20 backdrop-blur-md relative overflow-hidden">
      <div className="absolute top-4 left-6 z-10 pointer-events-none text-white font-mono">
        <h3 className="text-neon-violet text-sm tracking-widest">{t.skills.matrix}</h3>
      </div>
      <GhostCursor color="#bc13fe" brightness={0.4} trailLength={40} zIndex={0} />
      <ForceGraph2D
        ref={fgRef}
        graphData={graphData}
        nodeId="id"
        width={dimensions.width}
        height={dimensions.height}
        backgroundColor="rgba(0,0,0,0)"
        onEngineStop={handleEngineStop}
        nodeLabel="label"
        enableNodeDrag={true}
        nodePointerAreaPaint={(node: any, color, ctx) => {
          ctx.fillStyle = color;
          const isRoot = node.isRoot;
          const label = node.label ?? '';
          const fontSize = isRoot ? 18 : 14;
          ctx.font = `bold ${fontSize}px "JetBrains Mono", monospace`;
          const w = ctx.measureText(label).width;
          const h = fontSize * 2;
          ctx.fillRect((node.x ?? 0) - w / 2 - 10, (node.y ?? 0) - h / 2, w + 20, h);
        }}
        nodeCanvasObject={(node: any, ctx, globalScale) => {
          const color = GROUP_COLORS[node.group] || '#ffffff';
          const isHovered = node === fgRef.current?.hoverNode;
          if (node.x === undefined || node.y === undefined) return;
          ctx.save();
          if (node.isRoot) {
            ctx.font = `900 ${18 / globalScale}px "JetBrains Mono", monospace`;
            ctx.shadowBlur = 20; ctx.shadowColor = color; ctx.fillStyle = '#ffffff';
          } else {
            ctx.font = `bold ${isHovered ? 18/globalScale : 14/globalScale}px "JetBrains Mono", monospace`;
            if (isHovered) { ctx.shadowBlur = 15; ctx.shadowColor = color; ctx.fillStyle = '#ffffff'; }
            else { ctx.shadowBlur = 5; ctx.shadowColor = color; ctx.fillStyle = color; }
          }
          ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
          ctx.fillText(node.label, node.x, node.y);
          ctx.restore();
        }}
        linkColor={(link: any) => {
          const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
          const nodeIdx = SKILLS_BASE_DATA.nodes.findIndex(n => n.id === sourceId);
          return `${NODE_COLORS_ARRAY[nodeIdx % 5]}30`;
        }}
        linkWidth={link => (link.source.isRoot || link.target.isRoot) ? 1 : 0.5}
        linkDirectionalParticles={1}
        linkDirectionalParticleSpeed={0.003}
        cooldownTicks={100}
      />
    </div>
  );
};

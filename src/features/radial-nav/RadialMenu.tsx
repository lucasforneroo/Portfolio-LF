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
  return <div className="relative flex items-center justify-center w-[900px] h-[900px]">Radial Menu</div>;
};

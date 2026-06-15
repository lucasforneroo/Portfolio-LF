import React from 'react';
import TargetCursor from '../../../components/ui/TargetCursor';

export const ContactContent: React.FC = () => {

  // --- CUSTOM SVG COMPONENTS (Zero Dependency) ---
  const MailIcon = ({ size = 32, color = "currentColor" }: { size?: number, color?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  );

  const LinkedinIcon = ({ size = 32, color = "currentColor" }: { size?: number, color?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  );

  const GithubIcon = ({ size = 32, color = "currentColor" }: { size?: number, color?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-4.5-2-7-2"/></svg>
  );

  const PhoneIcon = ({ size = 32, color = "currentColor" }: { size?: number, color?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.42 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.42 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.42 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.42 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
  );

  const CONTACTS = [
    { id: 'gmail', label: 'GMAIL', value: 'Lucasfornero2012@gmail.com', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=Lucasfornero2012@gmail.com', icon: (s: number, c: string) => <MailIcon size={s} color={c} />, color: '#00f3ff' },
    { id: 'linkedin', label: 'LINKEDIN', value: 'lucas-fornero', href: 'https://www.linkedin.com/in/lucas-fornero/', icon: (s: number, c: string) => <LinkedinIcon size={s} color={c} />, color: '#0044ff' },
    { id: 'whatsapp', label: 'WHATSAPP', value: '+54 3492-654119', href: 'https://wa.me/543492654119', icon: (s: number, c: string) => <PhoneIcon size={s} color={c} />, color: '#bc13fe' },
    { id: 'github', label: 'GITHUB', value: '@lucasforneroo', href: 'https://github.com/lucasforneroo', icon: (s: number, c: string) => <GithubIcon size={s} color={c} />, color: '#ff00ff' },
  ];

  return (
    <div className="relative">
      {/* Restore TargetCursor */}
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
        targetSelector=".cursor-target"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto py-10 px-4">
        {CONTACTS.map((contact, index) => (
          <a 
            key={contact.id} 
            href={contact.href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="cursor-target group relative block p-8 border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden transition-all duration-500 hover:scale-[1.02]"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Background Glow Effect */}
            <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-3xl" style={{ backgroundColor: contact.color }} />
            
            <div className="relative z-10 flex flex-col items-center text-center gap-6">
              <div className="p-5 rounded-full border-2 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                style={{ borderColor: `${contact.color}40`, color: contact.color, boxShadow: `inset 0 0 15px ${contact.color}20` }}>
                {contact.icon(32, contact.color)}
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl font-black tracking-widest text-white uppercase group-hover:text-transparent group-hover:bg-clip-text transition-all duration-500"
                    style={{ backgroundImage: `linear-gradient(to right, ${contact.color}, #ffffff)` }}>{contact.label}</h4>
                <p className="text-sm font-mono text-gray-400 opacity-80 break-all">{contact.value}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700 ease-out" style={{ backgroundColor: contact.color, boxShadow: `0 0 10px ${contact.color}` }} />
          </a>
        ))}
      </div>
    </div>
  );
};

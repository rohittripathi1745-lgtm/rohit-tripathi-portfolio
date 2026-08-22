import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal, Cpu, Database, Check, Copy, Activity } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { PROJECTS } from '../../data/projects';

interface DeveloperHUDProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DeveloperHUD = ({ isOpen, onClose }: DeveloperHUDProps) => {
  const [activeTab, setActiveTab] = useState<'profile' | 'projects' | 'system'>('profile');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Trigger via Ctrl+Shift+R or Cmd+Shift+R (safely check without breaking page reload if user wants normal Ctrl+R)
      if (e.ctrlKey && e.shiftKey && e.key === 'R') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const copyProfileJson = () => {
    const fullData = {
      profile: PROFILE,
      projects: PROJECTS,
      systemInfo: {
        engine: 'React 18 + Vite 6 + Tailwind CSS',
        architecture: 'Client-Side Single Page Application',
        generatedAt: '2026-08-21',
        developer: 'Rohit Tripathi',
      },
    };
    navigator.clipboard.writeText(JSON.stringify(fullData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040406]/90 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-3xl bg-[#090b10] border border-accent-cyan/30 rounded-xl p-6 shadow-[0_0_50px_rgba(0,240,255,0.15)] z-10 font-mono text-xs text-slate-300"
        >
          {/* HUD Top Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="ml-2 text-accent-cyan font-bold flex items-center gap-1.5">
                <Terminal className="w-4 h-4" />
                ROHIT_DEV_HUD :: v1.0.0
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyProfileJson}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 transition-colors"
                title="Copy structured portfolio JSON"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Export JSON'}</span>
              </button>
              <button
                onClick={onClose}
                className="p-1 rounded bg-white/[0.06] hover:bg-white/[0.12] text-slate-400 hover:text-white"
                aria-label="Close HUD"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 py-3 border-b border-white/[0.06]">
            {[
              { id: 'profile', label: 'PROFILE_DATA', icon: Cpu },
              { id: 'projects', label: 'PROJECTS_REGISTRY', icon: Database },
              { id: 'system', label: 'SYSTEM_STATUS', icon: Activity },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded transition-colors ${
                    isActive
                      ? 'bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content Viewer */}
          <div className="py-4 max-h-96 overflow-y-auto font-mono text-[11px] leading-relaxed text-slate-400 bg-[#06070a] p-4 rounded-lg border border-white/[0.04] select-text">
            {activeTab === 'profile' && (
              <pre className="text-emerald-400/90 whitespace-pre-wrap">
                {JSON.stringify(
                  {
                    name: PROFILE.name,
                    education: 'B.Sc. Computer Science, Pillai College',
                    cgpa: 9.21,
                    location: PROFILE.location,
                    roles: PROFILE.roles,
                    status: PROFILE.statusText,
                  },
                  null,
                  2
                )}
              </pre>
            )}

            {activeTab === 'projects' && (
              <pre className="text-sky-400/90 whitespace-pre-wrap">
                {JSON.stringify(
                  PROJECTS.map((p) => ({
                    id: p.id,
                    title: p.title,
                    category: p.category,
                    technologies: p.technologies,
                  })),
                  null,
                  2
                )}
              </pre>
            )}

            {activeTab === 'system' && (
              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between border-b border-white/[0.04] pb-1">
                  <span className="text-slate-500">RUNTIME_ENVIRONMENT:</span>
                  <span className="text-accent-cyan">Browser Client (React 18 + Vite)</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.04] pb-1">
                  <span className="text-slate-500">ANIMATION_ENGINE:</span>
                  <span className="text-accent-cyan">Framer Motion + Spring Physics</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.04] pb-1">
                  <span className="text-slate-500">DESIGN_TOKENS:</span>
                  <span className="text-accent-cyan">Tailwind CSS (Custom Dark Palette)</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.04] pb-1">
                  <span className="text-slate-500">DATA_INTEGRITY:</span>
                  <span className="text-emerald-400">100% Verified Authentic</span>
                </div>
                <div className="flex justify-between border-b border-white/[0.04] pb-1">
                  <span className="text-slate-500">EASTER_EGG_TRIGGER:</span>
                  <span className="text-amber-400">Ctrl + Shift + R</span>
                </div>
              </div>
            )}
          </div>

          <div className="pt-3 flex items-center justify-between text-[10px] text-slate-500">
            <span>PRESS [ESC] OR [X] TO EXIT DEVELOPER MODE</span>
            <span>ROHIT.TRIPATHI // DEV_HUD</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

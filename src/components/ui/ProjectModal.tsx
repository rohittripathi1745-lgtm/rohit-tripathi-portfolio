import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Lightbulb, AlertTriangle, Layers, UserCheck } from 'lucide-react';
import { Project } from '../../types';
import { useCursor } from '../../hooks/useCursor';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const { setCursorVariant, setCursorText } = useCursor();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040406]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0b0d14] border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/80 z-10 my-auto"
        >
          {/* Header Bar */}
          <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-accent-cyan font-bold tracking-widest uppercase">
                  PROJECT {project.number}
                </span>
                <span className="text-white/20">•</span>
                <span className="px-2.5 py-0.5 text-[11px] font-mono rounded bg-white/[0.06] text-slate-300 border border-white/[0.08]">
                  {project.category}
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-white">
                {project.title}
              </h2>
              <p className="text-sm font-mono text-slate-400">{project.subtitle}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/[0.05] border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
              onMouseEnter={() => {
                setCursorVariant('hover');
                setCursorText('CLOSE');
              }}
              onMouseLeave={() => {
                setCursorVariant('default');
                setCursorText('');
              }}
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content Grid */}
          <div className="mt-6 space-y-8">
            {/* Overview & Role */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-3">
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-accent-cyan" />
                  Project Overview
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-accent-sky" />
                  My Role & Contribution
                </h3>
                <p className="text-xs font-mono text-white/90 leading-relaxed">
                  {project.role}
                </p>
              </div>
            </div>

            {/* Technologies */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                Technologies & Architecture
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-mono rounded-lg bg-white/[0.04] border border-white/[0.08] text-accent-cyan"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Contributions & Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contributions */}
              <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent-cyan flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  Core Responsibilities
                </h3>
                <ul className="space-y-2.5">
                  {project.contributions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Features */}
              <div className="space-y-3 p-5 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <h3 className="font-mono text-xs uppercase tracking-wider text-accent-sky flex items-center gap-2">
                  <Layers className="w-4 h-4" />
                  Engineered Features
                </h3>
                <ul className="space-y-2.5">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-sky mt-1.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Challenges & Learnings */}
            {(project.challenges || project.whatILearned) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {project.challenges && (
                  <div className="space-y-3 p-4 rounded-xl bg-amber-500/[0.04] border border-amber-500/20">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-amber-400 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" />
                      Technical Challenges
                    </h3>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-xs text-slate-300 leading-relaxed">
                          • {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.whatILearned && (
                  <div className="space-y-3 p-4 rounded-xl bg-emerald-500/[0.04] border border-emerald-500/20">
                    <h3 className="font-mono text-xs uppercase tracking-wider text-emerald-400 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      What I Learned
                    </h3>
                    <ul className="space-y-2">
                      {project.whatILearned.map((learning, idx) => (
                        <li key={idx} className="text-xs text-slate-300 leading-relaxed">
                          • {learning}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
            <span className="text-xs font-mono text-slate-500">
              Architecture & System Records • Rohit Tripathi
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-mono uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

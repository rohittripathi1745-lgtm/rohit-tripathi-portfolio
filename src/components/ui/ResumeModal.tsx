import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Mail } from 'lucide-react';
import { PROFILE } from '../../data/profile';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal = ({ isOpen, onClose }: ResumeModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#040406]/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-lg bg-[#0c0e17] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 space-y-6"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs font-bold uppercase">
              <FileText className="w-4 h-4" />
              <span>ROHIT TRIPATHI // RESUME</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/[0.05] hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Status info */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-accent-cyan/5 border border-accent-cyan/20 space-y-2">
              <span className="text-[10px] font-mono text-accent-cyan uppercase tracking-wider block font-bold">
                DOCUMENT STATUS
              </span>
              <h3 className="font-display font-bold text-lg text-white">
                Resume Available On Request
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                A formal PDF copy of my updated resume is prepared and available upon direct request.
              </p>
            </div>

            {/* Quick summary card */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-3 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Degree:</span>
                <span className="text-white font-bold">B.Sc. Computer Science</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Institution:</span>
                <span className="text-slate-300">Pillai College, New Panvel</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Academic Score:</span>
                <span className="text-emerald-400 font-bold">9.21 Average CGPA</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Core Disciplines:</span>
                <span className="text-accent-sky">Web Dev, LMS, Automation</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <a
              href={`mailto:${PROFILE.socials.email}?subject=${encodeURIComponent('Requesting Resume - Rohit Tripathi')}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-accent-cyan text-[#070709] font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>REQUEST VIA EMAIL</span>
            </a>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              CLOSE
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

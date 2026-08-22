import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';
import { MagneticButton } from '../ui/MagneticButton';
import { PROFILE } from '../../data/profile';
import { useCursor } from '../../hooks/useCursor';

export const ResumeCTASection = ({ onRequestResumeModal }: { onRequestResumeModal: () => void }) => {
  const { setCursorVariant, setCursorText } = useCursor();

  const handleDownload = () => {
    if (!PROFILE.hasResumePdf) {
      onRequestResumeModal();
    } else {
      window.open(PROFILE.resumeUrl, '_blank');
    }
  };

  const handleView = () => {
    if (!PROFILE.hasResumePdf) {
      onRequestResumeModal();
    } else {
      window.open(PROFILE.resumeUrl, '_blank');
    }
  };

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#070709]">
      <div className="max-w-5xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-16 border border-white/15 relative overflow-hidden text-center shadow-2xl">
          {/* Ambient Glows */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-accent-violet/10 rounded-full blur-3xl pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 relative z-10 max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-accent-cyan uppercase tracking-widest">
              <FileText className="w-3.5 h-3.5" />
              <span>CURRICULUM VITAE</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight uppercase">
              WANT THE FULL STORY?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Explore my experience, education, technical skills, coursework, and projects in detail.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <MagneticButton
                onClick={handleDownload}
                variant="primary"
                onMouseEnter={() => {
                  setCursorVariant('hover');
                  setCursorText('PDF');
                }}
                onMouseLeave={() => {
                  setCursorVariant('default');
                  setCursorText('');
                }}
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD RESUME</span>
              </MagneticButton>

              <MagneticButton
                onClick={handleView}
                variant="outline"
                onMouseEnter={() => {
                  setCursorVariant('hover');
                  setCursorText('VIEW');
                }}
                onMouseLeave={() => {
                  setCursorVariant('default');
                  setCursorText('');
                }}
              >
                <Eye className="w-4 h-4" />
                <span>VIEW RESUME</span>
              </MagneticButton>
            </div>

            <p className="text-xs font-mono text-slate-500 pt-2">
              B.Sc. Computer Science • Pillai College • 9.21 CGPA
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

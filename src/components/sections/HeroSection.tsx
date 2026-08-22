import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Sparkles, Code2, Terminal } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { StatusBadge } from '../ui/StatusBadge';
import { MagneticButton } from '../ui/MagneticButton';
import { useCursor } from '../../hooks/useCursor';
import rohitPhoto from '../../assets/rohit-hero.jpg';

export const HeroSection = ({ onResumeClick }: { onResumeClick: () => void }) => {
  const { setCursorVariant, setCursorText } = useCursor();
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-grid-pattern"
    >
      {/* Background Ambient Glow Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/[0.07] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-accent-violet/[0.05] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Editorial Typography & CTAs */}
          <div className="lg:col-span-7 space-y-8 z-10">
            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <StatusBadge />
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                
                Panvel, Navi Mumbai
              </span>
            </motion.div>

            {/* Main Hero Headline */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <p className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-accent-cyan uppercase">
                HI, I'M
              </p>
              <h1 className="font-display text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-white uppercase leading-[0.95]">
                ROHIT <br />
                <span className="text-gradient-cyan">TRIPATHI</span>
              </h1>
            </motion.div>

            {/* Taglines & Pitch */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 max-w-xl"
            >
              <p className="text-sm sm:text-base font-mono font-medium text-accent-sky">
                {PROFILE.tagline}
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                "{PROFILE.heroPitch}"
              </p>
            </motion.div>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <MagneticButton
                href="#projects"
                variant="primary"
                onMouseEnter={() => {
                  setCursorVariant('hover');
                  setCursorText('WORK');
                }}
                onMouseLeave={() => {
                  setCursorVariant('default');
                  setCursorText('');
                }}
              >
                <span>VIEW MY WORK</span>
                <ArrowDown className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                href="#contact"
                variant="outline"
                onMouseEnter={() => {
                  setCursorVariant('hover');
                  setCursorText('TALK');
                }}
                onMouseLeave={() => {
                  setCursorVariant('default');
                  setCursorText('');
                }}
              >
                <span>LET'S CONNECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </MagneticButton>

              <MagneticButton
                onClick={onResumeClick}
                variant="glass"
                onMouseEnter={() => {
                  setCursorVariant('hover');
                  setCursorText('PDF');
                }}
                onMouseLeave={() => {
                  setCursorVariant('default');
                  setCursorText('');
                }}
              >
                <Download className="w-3.5 h-3.5 text-accent-cyan" />
                <span>RESUME</span>
              </MagneticButton>
            </motion.div>

            {/* Developer philosophy quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="pt-4 border-t border-white/[0.08] flex items-center gap-3 text-xs font-mono text-slate-400"
            >
              <Sparkles className="w-4 h-4 text-accent-cyan shrink-0" />
              <span>"I don't just write code. I build digital systems that solve real problems."</span>
            </motion.div>
          </div>

          {/* Right Column: Authentic Profile Portrait & Atmospheric Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Tech Frame */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-accent-cyan/30 via-accent-violet/20 to-transparent blur-lg opacity-60 pointer-events-none" />

              <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0b0d14] shadow-2xl">
                {/* Visual Image / Fallback Container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden group">
                  <img
                    src={imgError ? '/rohit-hero.jpg' : rohitPhoto}
                    onError={() => setImgError(true)}
                    alt="Rohit Tripathi - Computer Science Developer"
                    className="w-full h-full object-cover object-center filter brightness-95 contrast-105 transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070709] via-transparent to-transparent opacity-80" />

                  {/* Top HUD Tag on photo */}
                  

                  {/* Bottom Info Bar on photo */}
                  <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="font-display font-bold text-white text-sm">
                        Rohit Tripathi
                      </p>
                      <p className="text-[11px] font-mono text-accent-sky">
                        9.21 Average CGPA • Developer
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2 py-0.5 rounded bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30 text-[10px] font-mono font-bold">
                        Pillai College
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtle bottom ticker */}
                <div className="px-4 py-2.5 bg-[#0a0c12] border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span></span>
                  <span className="text-emerald-400 font-semibold">● ACTIVE</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code, Sparkles, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { JOURNEY_TIMELINE } from '../../data/profile';
import { useCursor } from '../../hooks/useCursor';

const badgeIcons: Record<string, any> = {
  education: GraduationCap,
  internship: Code,
  experience: Briefcase,
  focus: Sparkles,
};

export const JourneyTimeline = () => {
  const { setCursorVariant, setCursorText } = useCursor();

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#070709] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="07"
          tagline="ROADMAP & PROGRESSION"
          title="MY JOURNEY"
          description="A chronological perspective mapping academic foundations to industrial development and current technical explorations."
        />

        <div className="relative mt-16 max-w-4xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-gradient-to-b from-accent-cyan via-accent-sky to-accent-violet opacity-30" />

          <div className="space-y-12">
            {JOURNEY_TIMELINE.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = badgeIcons[item.type] || Sparkles;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                  onMouseEnter={() => {
                    setCursorVariant('hover');
                    setCursorText('PATH');
                  }}
                  onMouseLeave={() => {
                    setCursorVariant('default');
                    setCursorText('');
                  }}
                >
                  {/* Center Node Marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0b0d14] border-2 border-accent-cyan flex items-center justify-center text-accent-cyan shadow-[0_0_15px_rgba(0,240,255,0.4)] z-10">
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Content Box */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className="glass-card rounded-2xl p-6 sm:p-7 border border-white/[0.08] hover:border-accent-cyan/40 transition-all duration-300">
                      <div className="flex items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
                        <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase rounded bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/30">
                          {item.period}
                        </span>
                        <span className="text-xs font-mono text-slate-500">
                          STAGE 0{4 - index}
                        </span>
                      </div>

                      <div className="mt-3 space-y-1">
                        <h3 className="font-display text-xl font-bold text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs font-mono text-accent-sky">
                          {item.subtitle}
                        </p>
                      </div>

                      <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="mt-4 pt-3 border-t border-white/[0.04] space-y-1.5">
                        {item.highlights.map((high, hIdx) => (
                          <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                            <span>{high}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

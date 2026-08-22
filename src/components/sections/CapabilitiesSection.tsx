import { motion } from 'framer-motion';
import { Globe, Layers, Zap, GraduationCap, Wrench, Briefcase, ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { CAPABILITIES } from '../../data/profile';
import { useCursor } from '../../hooks/useCursor';

const iconMap: Record<string, any> = {
  Globe,
  Layers,
  Zap,
  GraduationCap,
  Wrench,
  Briefcase,
};

export const CapabilitiesSection = () => {
  const { setCursorVariant, setCursorText } = useCursor();

  return (
    <section id="capabilities" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#070709]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="02"
          tagline="SERVICES & CAPABILITIES"
          title="WHAT I DO"
          description="Transforming operational requirements into reliable software, automated pipelines, and responsive web applications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CAPABILITIES.map((cap, index) => {
            const Icon = iconMap[cap.icon] || Globe;
            return (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between border border-white/[0.08] hover:border-accent-cyan/40 transition-all duration-300 group relative overflow-hidden"
                onMouseEnter={() => {
                  setCursorVariant('hover');
                  setCursorText('EXPLORE');
                }}
                onMouseLeave={() => {
                  setCursorVariant('default');
                  setCursorText('');
                }}
              >
                {/* Subtle top-corner number */}
                <div className="absolute top-6 right-6 font-mono text-xs text-white/20 group-hover:text-accent-cyan transition-colors">
                  {cap.number}
                </div>

                <div className="space-y-4">
                  {/* Icon Badge */}
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-accent-cyan group-hover:bg-accent-cyan group-hover:text-[#070709] transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="font-display text-xl font-bold text-white group-hover:text-accent-cyan transition-colors flex items-center justify-between">
                      <span>{cap.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-xs font-mono text-accent-sky">
                      {cap.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {cap.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {cap.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono rounded bg-white/[0.04] text-slate-300 border border-white/[0.06] group-hover:border-white/15"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

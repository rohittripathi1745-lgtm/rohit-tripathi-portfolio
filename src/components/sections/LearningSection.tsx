import { motion } from 'framer-motion';
import { Compass, Sparkles } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { CURRENTLY_EXPLORING } from '../../data/profile';
import { useCursor } from '../../hooks/useCursor';

export const LearningSection = () => {
  const { setCursorVariant, setCursorText } = useCursor();

  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#070709]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="08"
          tagline="CONTINUOUS IMPROVEMENT"
          title="CURRENTLY EXPLORING"
          description="Technologies, software paradigms, and digital tools I am actively studying and experimenting with."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CURRENTLY_EXPLORING.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="glass-card rounded-xl p-5 border border-white/[0.08] hover:border-accent-sky/30 transition-all duration-300 group flex flex-col justify-between"
              onMouseEnter={() => {
                setCursorVariant('hover');
                setCursorText('LEARN');
              }}
              onMouseLeave={() => {
                setCursorVariant('default');
                setCursorText('');
              }}
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="p-2 rounded-lg bg-accent-sky/10 text-accent-sky border border-accent-sky/20">
                    <Compass className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    TRACK {index + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-white group-hover:text-accent-sky transition-colors">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-slate-500 group-hover:text-accent-sky transition-colors">
                <span>In Progress</span>
                <Sparkles className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

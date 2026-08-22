import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Code2, Database, Wrench, Briefcase, Globe } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { TECH_STACK } from '../../data/profile';
import { ProficiencyLevel } from '../../types';
import { useCursor } from '../../hooks/useCursor';

const CATEGORIES = [
  { id: 'frontend', label: 'FRONTEND', icon: Globe },
  { id: 'backend', label: 'BACKEND', icon: Code2 },
  { id: 'database', label: 'DATABASE', icon: Database },
  { id: 'business', label: 'BUSINESS / ZOHO', icon: Briefcase },
  { id: 'tools', label: 'TOOLS & DEPLOYMENT', icon: Wrench },
];

const levelColorMap: Record<ProficiencyLevel, string> = {
  Proficient: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
  Comfortable: 'bg-accent-cyan/15 text-accent-cyan border-accent-cyan/30',
  'Working Knowledge': 'bg-sky-500/15 text-sky-300 border-sky-500/30',
  Experience: 'bg-indigo-500/15 text-indigo-300 border-indigo-500/30',
  Learning: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
};

export const TechStackSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const { setCursorVariant, setCursorText } = useCursor();

  const filteredTech = activeCategory === 'all'
    ? TECH_STACK
    : TECH_STACK.filter((item) => item.category === activeCategory || (activeCategory === 'business' && item.category === 'business'));

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#070709]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="03"
          tagline="TECHNICAL TOOLBOX"
          title="TECHNOLOGY STACK"
          description="A transparent, categorised overview of the programming languages, frameworks, databases, and enterprise platforms I actively work with."
        />

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/[0.06]">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-accent-cyan text-[#070709] font-bold shadow-[0_0_15px_rgba(0,240,255,0.3)]'
                    : 'bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]'
                }`}
                onMouseEnter={() => {
                  setCursorVariant('hover');
                  setCursorText('FILTER');
                }}
                onMouseLeave={() => {
                  setCursorVariant('default');
                  setCursorText('');
                }}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence>
            {filteredTech.map((tech) => {
              const isHovered = selectedTech === tech.name;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  key={tech.name}
                  onMouseEnter={() => {
                    setSelectedTech(tech.name);
                    setCursorVariant('hover');
                    setCursorText('INFO');
                  }}
                  onMouseLeave={() => {
                    setSelectedTech(null);
                    setCursorVariant('default');
                    setCursorText('');
                  }}
                  className={`glass-card rounded-xl p-5 border transition-all duration-300 relative group cursor-pointer ${
                    isHovered
                      ? 'border-accent-cyan bg-white/[0.08] shadow-[0_0_25px_rgba(0,240,255,0.15)] -translate-y-1'
                      : 'border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-accent-cyan transition-colors">
                      {tech.name}
                    </h3>
                    <span
                      className={`px-2 py-0.5 text-[10px] font-mono rounded border uppercase font-medium ${
                        levelColorMap[tech.level]
                      }`}
                    >
                      {tech.level}
                    </span>
                  </div>

                  <p className="mt-2.5 text-xs text-slate-400 group-hover:text-slate-200 transition-colors leading-relaxed">
                    {tech.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] font-mono text-slate-500">
                    <span className="uppercase text-slate-400">{tech.category}</span>
                    {tech.isFavorite && (
                      <span className="flex items-center gap-1 text-accent-cyan">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Core</span>
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Legend / Honesty Note */}
        <div className="mt-12 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-accent-cyan font-bold">PROFICIENCY RATINGS:</span>
            <span>Accurate, honest self-assessments without exaggerated expert claims.</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.keys(levelColorMap).map((lvl) => (
              <span key={lvl} className={`px-2 py-0.5 rounded border text-[10px] ${levelColorMap[lvl as ProficiencyLevel]}`}>
                {lvl}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import { motion } from 'framer-motion';
import { Briefcase, Wrench, Code2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { useCursor } from '../../hooks/useCursor';

export const ExperienceSection = () => {
  const { setCursorVariant, setCursorText } = useCursor();

  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#070709]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="05"
          tagline="CAREER & ROLES"
          title="WHERE I AM NOW"
          description="A track record of technical support, live web maintenance, digital platform configuration, and frontend development."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Current Professional Role */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-white/15 flex flex-col justify-between relative overflow-hidden"
            onMouseEnter={() => {
              setCursorVariant('hover');
              setCursorText('ROLE');
            }}
            onMouseLeave={() => {
              setCursorVariant('default');
              setCursorText('');
            }}
          >
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                      ● CURRENT ENGAGEMENT - Charismight Consultancy Pvt ltd.
                    </span>
                    <h3 className="font-display text-xl font-bold text-white">
                      Tech Support & Website Maintenance
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-mono rounded bg-white/[0.05] border border-white/[0.08] text-slate-300">
                  Digital Tech
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Active hands-on role managing digital application stability, LMS operational workflows, Zoho business tool configuration, database query validation, and live system troubleshooting.
              </p>

              {/* Responsibilities list */}
              <div className="space-y-2.5 pt-2">
                <p className="text-xs font-mono text-accent-cyan uppercase tracking-wider">
                  Core Responsibilities & Scope:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {[
                    'Live website maintenance & uptime',
                    'LMS platform support & logic validation',
                    'Zoho CRM & Creator custom configuration',
                    'Internal business application routing',
                    'Process automation & script triggers',
                    'Database query & hosting troubleshooting',
                    'Team technical support & triage',
                    'System stability & patch monitoring',
                  ].map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2 p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-cyan shrink-0 mt-0.5" />
                      <span className="text-[11px]">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Footer Tag */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Continuous Live Support
              </span>
              <span className="text-slate-400">Kharghar, Navi Mumbai</span>
            </div>
          </motion.div>

          {/* Card 2: Internship Experience */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-card rounded-2xl p-6 sm:p-8 border border-white/15 flex flex-col justify-between relative overflow-hidden"
            onMouseEnter={() => {
              setCursorVariant('hover');
              setCursorText('INTERN');
            }}
            onMouseLeave={() => {
              setCursorVariant('default');
              setCursorText('');
            }}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-indigo-400 font-bold uppercase tracking-wider block">
                      Code Alpha Technologies
                    </span>
                    <h3 className="font-display text-xl font-bold text-white">
                      Frontend Development Internship
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-[11px] font-mono rounded bg-white/[0.05] border border-white/[0.08] text-slate-300">
                  1+ Months
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Focused practical internship applying React, JavaScript (ES6+), HTML5, and CSS3 to construct responsive user interfaces, dynamic component states, and modern layout architectures.
              </p>

              {/* Technologies & Highlights */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-mono text-accent-sky uppercase tracking-wider">
                  Technology Stack & Learning:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'JavaScript', 'HTML5', 'CSS3 / SCSS', 'Bootstrap', 'Responsive UI'].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono rounded-lg bg-white/[0.04] border border-white/[0.08] text-accent-sky"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] space-y-2">
                  <p className="text-xs font-mono text-white font-semibold">Practical Takeaways:</p>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    <li>• Component modularization and props/state lifecycle management.</li>
                    <li>• Cross-browser mobile responsiveness and layout testing.</li>
                    <li>• Project-based software development and code organization.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom Footer Tag */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-accent-sky" />
                Frontend Developer
              </span>
              <span className="text-slate-400 italic">Remote Internship</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

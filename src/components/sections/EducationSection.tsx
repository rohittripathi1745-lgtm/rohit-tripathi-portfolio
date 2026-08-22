import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, MapPin, CheckCircle } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { CounterNumber } from '../ui/CounterNumber';
import { useCursor } from '../../hooks/useCursor';

export const EducationSection = () => {
  const { setCursorVariant, setCursorText } = useCursor();

  return (
    <section id="education" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#070709]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="06"
          tagline="ACADEMIC BACKGROUND"
          title="EDUCATION"
          description="Formal Computer Science foundation establishing strong roots in algorithms, databases, data structures, and software architecture."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Education Degree Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 glass-card rounded-2xl p-6 sm:p-10 border border-white/15 relative overflow-hidden"
            onMouseEnter={() => {
              setCursorVariant('hover');
              setCursorText('ACADEMIC');
            }}
            onMouseLeave={() => {
              setCursorVariant('default');
              setCursorText('');
            }}
          >
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-xs font-mono text-accent-cyan uppercase tracking-widest block font-bold">
                    UNDERGRADUATE DEGREE
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                    B.Sc. Computer Science
                  </h3>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                <Award className="w-4 h-4" />
                <span>9.21 Average CGPA</span>
              </div>
            </div>

            {/* College Details & Location */}
            <div className="py-6 space-y-4">
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-semibold text-slate-200">
                  Pillai College of Arts, Commerce and Science
                </h4>
                <p className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-accent-sky" />
                  New Panvel, Navi Mumbai, Maharashtra, India
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Comprehensive curriculum blending core theoretical computation with practical software engineering, relational database management systems (RDBMS), object-oriented programming, and modern web application development.
              </p>

              {/* Coursework Topics */}
              <div className="pt-2">
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Key Coursework & Domains:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {[
                    'Data Structures & Algorithms',
                    'Database Management Systems (MySQL / MongoDB)',
                    'Web Technologies & Client-Server Systems',
                    'Object-Oriented Programming & Software Design',
                    'Operating Systems & Networking Basics',
                    'Software Development Principles & Lifecycle',
                  ].map((topic, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded bg-white/[0.02] border border-white/[0.04]">
                      <CheckCircle className="w-3.5 h-3.5 text-accent-cyan shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-accent-cyan" />
                Computer Science Department
              </span>
              <span className="text-emerald-400 font-semibold">Active Student Profile</span>
            </div>
          </motion.div>

          {/* Right Highlight Metric Gauge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="glass-card rounded-2xl p-8 border border-white/15 text-center flex flex-col items-center justify-center relative overflow-hidden">
              <div className="relative w-44 h-44 flex items-center justify-center">
                {/* Outer SVG Circular Track */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    className="text-white/10"
                    strokeWidth="6"
                    stroke="currentColor"
                    fill="transparent"
                  />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="42"
                    className="text-accent-cyan"
                    strokeWidth="6"
                    strokeDasharray={264}
                    initial={{ strokeDashoffset: 264 }}
                    whileInView={{ strokeDashoffset: 264 * (1 - 9.21 / 10) }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                  />
                </svg>

                {/* Central Value */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-4xl font-extrabold text-white font-display">
                    <CounterNumber value={9.21} decimals={2} />
                  </div>
                  <span className="text-[10px] font-mono text-accent-cyan font-bold tracking-widest uppercase">
                    CGPA / 10.0
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-1">
                <h4 className="font-display font-bold text-lg text-white">Academic Score</h4>
                <p className="text-xs font-mono text-slate-400">
                  Consistently high academic standing across semesters.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10 w-full flex items-center justify-center gap-2 text-xs font-mono text-emerald-400">
                <Award className="w-4 h-4" />
                <span>Distinction Level Standing</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

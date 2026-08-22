import { motion } from 'framer-motion';
import {  MapPin, GraduationCap, Cpu, CheckCircle } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { PROFILE } from '../../data/profile';

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#070709]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="01"
          tagline="PROFILE & BACKGROUND"
          title="ABOUT ME"
          description="A blend of Computer Science fundamentals, full-stack web development, and practical business process automation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Editorial Storytelling */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed"
          >
            {PROFILE.aboutEditorial.map((paragraph, index) => (
              <p
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-white/[0.04] to-transparent border-white/10 text-white font-normal'
                    : 'bg-white/[0.02] border-white/[0.06] hover:border-white/10'
                }`}
              >
                {paragraph}
              </p>
            ))}

            {/* Core Values / Focus Areas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent-cyan shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-sm font-semibold text-white">LMS & Web Development</h4>
                  <p className="text-xs text-slate-400 mt-1">Building and maintaining real-world LMS and web applications with a focus on reliable workflows, user experience, and performance.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-accent-sky shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-mono text-sm font-semibold text-white">Digital Automation & Support</h4>
                  <p className="text-xs text-slate-400 mt-1">Turning manual processes into efficient digital workflows using Zoho, automation, integrations, and practical problem-solving.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Developer Identity Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/15 relative overflow-hidden shadow-2xl">
              {/* Subtle top gradient accent */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent-cyan via-accent-sky to-accent-violet" />

              {/* Developer Identity Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2 font-mono text-xs text-accent-cyan">
                  
                  <span>ABOUT ME</span>
                </div>
                
              </div>

              {/* Profile Details List */}
              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Candidate Name</p>
                  <p className="font-display text-2xl font-black text-white mt-1">
                    ROHIT TRIPATHI
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Academic Track</p>
                    <p className="font-mono text-sm font-bold text-white mt-1 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-accent-cyan" />
                      B.Sc. CS (9.21)
                    </p>
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Location</p>
                    <p className="font-mono text-sm font-bold text-white mt-1 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-accent-sky" />
                      Navi Mumbai
                    </p>
                  </div>
                </div>

                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">College / Institution</p>
                  <p className="text-xs font-mono text-slate-300 mt-1 leading-relaxed">
                    Pillai College of Arts, Commerce and Science, New Panvel
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Professional Identities
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {PROFILE.roles.map((role, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 text-[11px] font-mono rounded-md bg-white/[0.05] border border-white/[0.08] text-slate-300"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech Signature */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
                    <span>LMS • Web • Automation</span>
                  </span>
                  <span className="text-emerald-400">● Available</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

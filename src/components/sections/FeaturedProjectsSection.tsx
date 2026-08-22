import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, CheckCircle2, Terminal, Sparkles, Database, FileSpreadsheet, Server, Eye } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { PROJECTS } from '../../data/projects';
import { Project } from '../../types';
import { useCursor } from '../../hooks/useCursor';

export const FeaturedProjectsSection = ({ onSelectProject }: { onSelectProject: (project: Project) => void }) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const { setCursorVariant, setCursorText } = useCursor();

  const currentProject = PROJECTS[activeProjectIndex] || PROJECTS[0];

  const renderVisualMockup = (project: Project) => {
    switch (project.visualType) {
      case 'lms':
        return (
          <div className="w-full h-full bg-[#0a0d16] p-6 rounded-xl border border-sky-500/20 flex flex-col justify-between font-mono text-xs text-slate-300">
            {/* Top Navigation Bar of LMS */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-sky-400 font-bold">
                <Server className="w-4 h-4" />
                <span>CHARISMIGHT // LMS_ENGINE</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                PRODUCTION SYSTEM
              </span>
            </div>

            {/* Course & Assessment Flow Mockup */}
            <div className="space-y-4 my-auto py-4">
              <div className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.06] space-y-2">
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>COURSE PROGRESSION MODULE</span>
                  <span className="text-sky-400 font-bold">85% COMPLETE</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div className="w-[85%] h-full bg-gradient-to-r from-sky-400 to-cyan-300 rounded-full" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[11px]">
                <div className="p-3 rounded-lg bg-sky-500/5 border border-sky-500/20">
                  <span className="text-slate-400 block text-[10px]">ASSESSMENT STATUS</span>
                  <span className="text-white font-bold">Dynamic Question Bank Active</span>
                </div>
                <div className="p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                  <span className="text-slate-400 block text-[10px]">CERTIFICATE ENGINE</span>
                  <span className="text-emerald-400 font-bold">Verified PDF Output</span>
                </div>
              </div>
            </div>

            {/* Bottom System Ticker */}
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500">
              <span>PHP / Laravel Backend</span>
              <span>Candidate Reassignment: Enabled</span>
            </div>
          </div>
        );

      case 'ticket':
        return (
          <div className="w-full h-full bg-[#0d0f1a] p-6 rounded-xl border border-indigo-500/20 flex flex-col justify-between font-mono text-xs text-slate-300">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-indigo-400 font-bold">
                <Terminal className="w-4 h-4" />
                <span>ZOHO_CREATOR // ITSM_TICKETS</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 text-[10px]">
                DELUGE AUTOMATION
              </span>
            </div>

            <div className="space-y-3 my-auto py-4">
              {[
                { id: 'TKT-2026-084', dept: 'IT Infrastructure', prio: 'URGENT', status: 'In Progress', color: 'text-red-400' },
                { id: 'TKT-2026-085', dept: 'Business Applications', prio: 'HIGH', status: 'Assigned', color: 'text-amber-400' },
                { id: 'TKT-2026-086', dept: 'Digital Maintenance', prio: 'MEDIUM', status: 'Resolved', color: 'text-emerald-400' },
              ].map((row) => (
                <div key={row.id} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-between text-[11px]">
                  <div className="space-y-0.5">
                    <span className="text-white font-bold">{row.id}</span>
                    <p className="text-slate-400 text-[10px]">{row.dept}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold ${row.color}`}>{row.prio}</span>
                    <span className="px-2 py-0.5 rounded bg-white/10 text-slate-300 text-[10px]">{row.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500">
              <span>Auto-Sequence ID Generator</span>
              <span>SLA Escalation Engine</span>
            </div>
          </div>
        );

      case 'workflow':
        return (
          <div className="w-full h-full bg-[#0a120f] p-6 rounded-xl border border-emerald-500/20 flex flex-col justify-between font-mono text-xs text-slate-300">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <Database className="w-4 h-4" />
                <span>CRM & WORKDRIVE PIPELINE</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 text-[10px]">
                ZERO MANUAL ENTRY
              </span>
            </div>

            <div className="space-y-3 my-auto py-4">
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">01</span>
                <div>
                  <p className="text-white font-bold text-[11px]">CRM Deal State Transition</p>
                  <p className="text-slate-400 text-[10px]">Deluge webhook triggers folder provisioning</p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">02</span>
                <div>
                  <p className="text-white font-bold text-[11px]">Role-Based Access Hierarchy</p>
                  <p className="text-slate-400 text-[10px]">WorkDrive folder synced with granular team permissions</p>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-bold">03</span>
                <div>
                  <p className="text-white font-bold text-[11px]">Automated Email & Task Schedule</p>
                  <p className="text-slate-400 text-[10px]">Follow-up generated with dynamic template tags</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500">
              <span>Zoho CRM + Creator + WorkDrive</span>
              <span>100% Data Integrity</span>
            </div>
          </div>
        );

      case 'attendance':
        return (
          <div className="w-full h-full bg-[#120f0a] p-6 rounded-xl border border-amber-500/20 flex flex-col justify-between font-mono text-xs text-slate-300">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <FileSpreadsheet className="w-4 h-4" />
                <span>BIOMETRIC_PUNCH_PARSER.VBA</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 text-[10px]">
                CSV & MACRO ENGINE
              </span>
            </div>

            <div className="space-y-3 my-auto py-4">
              <div className="p-3.5 rounded-lg bg-white/[0.03] border border-white/[0.06] space-y-2">
                <div className="flex justify-between text-[11px]">
                  <span className="text-slate-400">Raw Sensor Log Ingestion</span>
                  <span className="text-emerald-400 font-bold">3,500+ Rows Processed</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-[10px] pt-1">
                  <div className="p-2 rounded bg-black/40 border border-white/5">
                    <span className="text-slate-500 block">First-In</span>
                    <span className="text-white font-bold">09:12 AM</span>
                  </div>
                  <div className="p-2 rounded bg-black/40 border border-white/5">
                    <span className="text-slate-500 block">Last-Out</span>
                    <span className="text-white font-bold">06:45 PM</span>
                  </div>
                  <div className="p-2 rounded bg-black/40 border border-white/5">
                    <span className="text-slate-500 block">Total Hours</span>
                    <span className="text-amber-400 font-bold">9.55 Hrs</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-amber-500/5 border border-amber-500/20 flex items-center justify-between text-[11px]">
                <span className="text-slate-300">HR Executive Monthly Sheet</span>
                <span className="text-amber-400 font-bold">Auto-Calculated</span>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500">
              <span>Weekend & Overtime Rules</span>
              <span>Zero Calculation Mismatch</span>
            </div>
          </div>
        );

      case 'portfolio':
        return (
          <div className="w-full h-full bg-[#080b12] p-6 rounded-xl border border-cyan-500/20 flex flex-col justify-between font-mono text-xs text-slate-300">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2 text-accent-cyan font-bold">
                <Sparkles className="w-4 h-4" />
                <span>ROHIT.TRIPATHI // SPA_CLIENT</span>
              </div>
              <span className="px-2 py-0.5 rounded bg-cyan-500/15 text-accent-cyan text-[10px]">
                REACT + TAILWIND
              </span>
            </div>

            <div className="space-y-3 my-auto py-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-2 text-center">
                <p className="font-display font-black text-xl text-white">ROHIT TRIPATHI</p>
                <p className="text-xs text-slate-400">Cinematic Interactive Personal Showcase</p>
                <div className="flex justify-center gap-2 pt-2">
                  <span className="px-2 py-0.5 rounded bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30 text-[10px]">
                    Framer Motion
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white text-[10px]">
                    TypeScript
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-white text-[10px]">
                    Zero Fake Data
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500">
              <span>Active Port: 5173</span>
              <span className="text-emerald-400">● 60 FPS Smooth Lerp</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative bg-[#070709]">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="04"
          tagline="PORTFOLIO HIGHLIGHTS"
          title="SELECTED WORK"
          description="Real software projects spanning LMS architectures, internal ITSM applications, enterprise workflow automation, and frontend web applications."
        />

        {/* Desktop Split View: Left List, Right Interactive Live Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Project Items List */}
          <div className="lg:col-span-6 space-y-4">
            {PROJECTS.map((project, index) => {
              const isActive = activeProjectIndex === index;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onMouseEnter={() => {
                    setActiveProjectIndex(index);
                    setCursorVariant('project');
                    setCursorText('VIEW');
                  }}
                  onMouseLeave={() => {
                    setCursorVariant('default');
                    setCursorText('');
                  }}
                  onClick={() => onSelectProject(project)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                    isActive
                      ? 'bg-[#0f121d] border-accent-cyan/50 shadow-[0_0_30px_rgba(0,240,255,0.12)]'
                      : 'bg-white/[0.02] border-white/[0.06] hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectIndicator"
                      className="absolute left-0 inset-y-0 w-1.5 bg-accent-cyan"
                    />
                  )}

                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-accent-cyan font-bold">
                          {project.number}
                        </span>
                        <span className="text-white/20">•</span>
                        <span className="text-xs font-mono text-slate-400 uppercase">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed pt-1">
                        {project.description}
                      </p>
                    </div>

                    <div className="shrink-0 p-2 rounded-lg bg-white/[0.04] group-hover:bg-accent-cyan group-hover:text-black text-slate-400 transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Tech stack pills */}
                  <div className="mt-4 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-white/[0.02] text-slate-400">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Project Preview Box (Desktop) */}
          <div className="hidden lg:flex lg:col-span-6 flex-col">
            <div className="glass-card rounded-2xl p-6 border border-white/15 h-full flex flex-col justify-between sticky top-28">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan animate-pulse" />
                  <span className="font-mono text-xs text-white uppercase tracking-wider">
                    LIVE SYSTEM PREVIEW // {currentProject.number}
                  </span>
                </div>
                <button
                  onClick={() => onSelectProject(currentProject)}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded-lg bg-accent-cyan text-slate-950 font-bold hover:bg-white transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>DEEP DIVE</span>
                </button>
              </div>

              {/* Central Mockup Animation */}
              <div className="py-6 flex-1 min-h-[340px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    {renderVisualMockup(currentProject)}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Quick Feature Highlights */}
              <div className="pt-4 border-t border-white/10 space-y-2">
                <p className="text-[11px] font-mono text-accent-cyan uppercase tracking-wider">
                  Key Capabilities:
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
                  {currentProject.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent-sky shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

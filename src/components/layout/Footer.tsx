import { ArrowUp, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { useCursor } from '../../hooks/useCursor';

export const Footer = () => {
  const { setCursorVariant, setCursorText } = useCursor();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#050507] pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/40 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-cyan/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/[0.06]">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <div className="space-y-1">
              <span className="font-display font-black text-2xl sm:text-3xl tracking-tight text-white">
                ROHIT<span className="text-accent-cyan">.</span>TRIPATHI
              </span>
              <p className="text-xs font-mono text-accent-sky/80 uppercase tracking-widest">
                BUILDING DIGITAL EXPERIENCES WITH CODE.
              </p>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Computer Science student & developer specializing in web development, LMS platforms, business systems, and workflow automation based in Panvel, Navi Mumbai.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2">
              <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
              <span>{PROFILE.location}, {PROFILE.locationState}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono text-white/50 uppercase tracking-wider">Navigation</p>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Me', href: '#about' },
                { label: 'What I Do', href: '#capabilities' },
                { label: 'Toolbox & Skills', href: '#skills' },
                { label: 'Selected Projects', href: '#projects' },
                { label: 'Education & Stats', href: '#education' },
                { label: 'Get In Touch', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-accent-cyan transition-colors"
                    onMouseEnter={() => {
                      setCursorVariant('hover');
                      setCursorText('GO');
                    }}
                    onMouseLeave={() => {
                      setCursorVariant('default');
                      setCursorText('');
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-mono text-white/50 uppercase tracking-wider">Connect</p>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${PROFILE.socials.email}`}
                className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-accent-cyan" />
                <span className="truncate">{PROFILE.socials.email}</span>
              </a>
              {PROFILE.socials.github && (
                <a
                  href={PROFILE.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4 text-slate-300" />
                  <span>GitHub Profile</span>
                </a>
              )}
              {PROFILE.socials.linkedin && (
                <a
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-accent-sky" />
                  <span>LinkedIn Profile</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© 2026 Rohit Tripathi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-400">
              Honest Data • Original Architecture
            </span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/30 transition-colors"
              onMouseEnter={() => {
                setCursorVariant('hover');
                setCursorText('TOP');
              }}
              onMouseLeave={() => {
                setCursorVariant('default');
                setCursorText('');
              }}
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

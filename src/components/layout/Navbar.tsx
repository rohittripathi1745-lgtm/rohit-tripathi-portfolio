import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useCursor } from '../../hooks/useCursor';

const NAV_ITEMS = [
  { label: 'HOME', href: '#home', id: 'home' },
  { label: 'ABOUT', href: '#about', id: 'about' },
  { label: 'CAPABILITIES', href: '#capabilities', id: 'capabilities' },
  { label: 'SKILLS', href: '#skills', id: 'skills' },
  { label: 'PROJECTS', href: '#projects', id: 'projects' },
  { label: 'EXPERIENCE', href: '#experience', id: 'experience' },
  { label: 'EDUCATION', href: '#education', id: 'education' },
  { label: 'CONTACT', href: '#contact', id: 'contact' },
];

export const Navbar = ({ onOpenHud }: { onOpenHud?: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setCursorVariant, setCursorText } = useCursor();

  const sectionIds = NAV_ITEMS.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds, 200);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#070709]/80 backdrop-blur-md border-b border-white/[0.06] shadow-lg shadow-black/40'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2 focus:outline-none"
          onMouseEnter={() => {
            setCursorVariant('hover');
            setCursorText('HOME');
          }}
          onMouseLeave={() => {
            setCursorVariant('default');
            setCursorText('');
          }}
        >
          <span className="font-display font-black text-xl sm:text-2xl tracking-tighter text-white transition-colors group-hover:text-accent-cyan">
            ROHIT<span className="text-accent-cyan">.</span>TRIPATHI
          </span>
          <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono uppercase tracking-wider bg-white/5 border border-white/10 rounded text-slate-400">
            DEV
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-1.5 text-xs font-mono tracking-wider transition-all duration-200 rounded-full ${
                  isActive
                    ? 'text-accent-cyan font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-white/[0.04]'
                }`}
                onMouseEnter={() => setCursorVariant('hover')}
                onMouseLeave={() => setCursorVariant('default')}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    className="absolute inset-0 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons: Developer HUD & Connect CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {onOpenHud && (
            <button
              onClick={onOpenHud}
              title="Developer HUD (Ctrl+Shift+R)"
              className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-accent-cyan hover:border-accent-cyan/40 transition-colors"
              onMouseEnter={() => {
                setCursorVariant('hover');
                setCursorText('HUD');
              }}
              onMouseLeave={() => {
                setCursorVariant('default');
                setCursorText('');
              }}
              aria-label="Open Developer HUD"
            >
              <Terminal className="w-4 h-4" />
            </button>
          )}

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-medium uppercase tracking-wider text-slate-900 bg-accent-cyan hover:bg-white rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
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
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          {onOpenHud && (
            <button
              onClick={onOpenHud}
              className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-400 hover:text-accent-cyan"
              aria-label="Open HUD"
            >
              <Terminal className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-[60px] p-4 bg-[#070709]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          >
            <div className="flex flex-col gap-2 py-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-mono tracking-wider transition-colors ${
                      isActive
                        ? 'bg-accent-cyan/15 text-accent-cyan font-bold border border-accent-cyan/30'
                        : 'text-slate-300 hover:bg-white/[0.05] hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />}
                  </a>
                );
              })}
              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-xs font-mono font-bold uppercase tracking-wider text-slate-900 bg-accent-cyan"
                >
                  <span>LET'S CONNECT</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

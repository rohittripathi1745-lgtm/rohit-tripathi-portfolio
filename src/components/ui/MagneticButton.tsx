import { useRef, useState, ReactNode, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'glass';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  download?: boolean | string;
}

export const MagneticButton = ({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  variant = 'primary',
  onMouseEnter,
  onMouseLeave,
  download
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (clientX - centerX) * 0.2;
    const distanceY = (clientY - centerY) * 0.2;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    onMouseLeave?.();
  };

  const variantStyles = {
    primary:
      'bg-accent-cyan text-[#070709] hover:bg-white hover:shadow-[0_0_25px_rgba(0,240,255,0.4)] border border-transparent font-bold',
    secondary:
      'bg-white/10 text-white hover:bg-white/20 border border-white/15 backdrop-blur-md font-medium',
    outline:
      'bg-transparent text-slate-200 border border-white/20 hover:border-accent-cyan hover:text-accent-cyan hover:bg-accent-cyan/5 font-medium',
    glass:
      'glass-card text-white hover:border-accent-cyan/40 hover:bg-accent-cyan/10 font-medium',
  };

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={onMouseEnter}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15, mass: 0.1 }}
      className="inline-block"
    >
      <div
        className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-mono uppercase tracking-wider rounded-lg transition-all duration-300 ${variantStyles[variant]} ${className}`}
      >
        {children}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        onClick={onClick}
        className="inline-block focus:outline-none"
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block focus:outline-none" type="button">
      {content}
    </button>
  );
};

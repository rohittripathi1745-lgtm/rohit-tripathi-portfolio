import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCursor } from '../../hooks/useCursor';

export const CustomCursor = () => {
  const { cursorText, cursorVariant } = useCursor();
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Detect touch / mobile device
    const checkTouch = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
      setIsTouchDevice(isTouch);
    };
    checkTouch();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  const hasText = cursorText.length > 0;

  return (
    <>
      {/* Center Precise Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent-cyan rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          opacity: cursorVariant === 'hidden' ? 0 : 1,
          scale: hasText ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 40, stiffness: 600, mass: 0.1 }}
      />

      {/* Outer Follower Ring / Interactive Pill */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center font-mono text-[10px] font-bold tracking-widest uppercase transition-colors duration-200 ${
          hasText
            ? 'bg-accent-cyan text-[#070709] rounded-full shadow-[0_0_20px_rgba(0,240,255,0.4)] px-3 py-1'
            : cursorVariant === 'hover'
            ? 'border border-accent-cyan bg-accent-cyan/10 rounded-full'
            : cursorVariant === 'project'
            ? 'border border-accent-sky bg-accent-sky/20 rounded-full'
            : 'border border-white/30 rounded-full'
        }`}
        animate={{
          x: hasText ? mousePosition.x - 36 : mousePosition.x - (cursorVariant === 'hover' ? 24 : 18),
          y: hasText ? mousePosition.y - 16 : mousePosition.y - (cursorVariant === 'hover' ? 24 : 18),
          width: hasText ? 'auto' : cursorVariant === 'hover' ? 48 : 36,
          height: hasText ? 32 : cursorVariant === 'hover' ? 48 : 36,
          opacity: cursorVariant === 'hidden' ? 0 : 1,
          scale: cursorVariant === 'hover' ? 1.15 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350, mass: 0.15 }}
      >
        {hasText && <span>{cursorText}</span>}
      </motion.div>
    </>
  );
};

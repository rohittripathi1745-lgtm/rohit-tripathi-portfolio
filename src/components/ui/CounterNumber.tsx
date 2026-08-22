import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CounterNumberProps {
  value: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  fallbackText?: string;
}

export const CounterNumber = ({
  value,
  decimals = 0,
  duration = 1.5,
  prefix = '',
  suffix = '',
  fallbackText,
}: CounterNumberProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const end = value;
    const totalFrames = Math.round((duration * 1000) / 16);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // easeOutExpo
      const current = end * (1 - Math.pow(2, -10 * progress));

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(current);
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, value, duration]);

  if (fallbackText && !value) {
    return <span ref={ref}>{fallbackText}</span>;
  }

  return (
    <span ref={ref} className="font-display font-black tracking-tight">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
};

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  number: string;
  tagline: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export const SectionHeading = ({
  number,
  tagline,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 sm:mb-16 ${align === 'center' ? 'text-center mx-auto max-w-2xl' : 'max-w-3xl'}`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-2 mb-3 ${align === 'center' ? 'justify-center' : ''}`}
      >
        <span className="font-mono text-xs text-accent-cyan font-bold tracking-widest uppercase">
          {number} //
        </span>
        <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
          {tagline}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white uppercase"
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed font-normal"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

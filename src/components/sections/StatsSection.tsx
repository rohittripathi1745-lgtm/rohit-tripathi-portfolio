import { motion } from 'framer-motion';
import { QUICK_STATS } from '../../data/profile';
import { CounterNumber } from '../ui/CounterNumber';

export const StatsSection = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-white/[0.06] bg-[#090b12]/50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUICK_STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 border border-white/[0.08] hover:border-accent-cyan/30 transition-all duration-300 group"
            >
              <div className="flex items-baseline justify-between gap-2">
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-display group-hover:text-accent-cyan transition-colors">
                  {stat.numericValue ? (
                    <CounterNumber
                      value={stat.numericValue}
                      decimals={stat.numericValue % 1 !== 0 ? 2 : 0}
                      suffix={stat.suffix || ''}
                    />
                  ) : (
                    <span>{stat.value}</span>
                  )}
                </div>
                <span className="text-[10px] font-mono text-accent-sky/80 uppercase tracking-widest px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                  {stat.sublabel}
                </span>
              </div>

              <h3 className="mt-2 font-mono text-sm font-semibold text-slate-200 uppercase tracking-wider">
                {stat.label}
              </h3>

              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

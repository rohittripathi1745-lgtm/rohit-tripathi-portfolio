import { PROFILE } from '../../data/profile';

export const StatusBadge = ({ className = '' }: { className?: string }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0d1512] border border-emerald-500/30 text-emerald-400 text-xs font-mono tracking-wider shadow-[0_0_12px_rgba(16,185,129,0.15)] ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>
      <span className="font-semibold uppercase text-[11px]">{PROFILE.statusText}</span>
    </div>
  );
};

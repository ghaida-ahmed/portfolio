import { cn } from '../../lib/cn'

/**
 * Placeholder shown wherever content has not been added yet. Keeps sections
 * visually intentional (rather than blank) while the portfolio is built out
 * incrementally. Replace by passing real data into each section.
 */
export default function EmptyState({ icon: Icon, title, hint, className }) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-2xl border border-dashed',
        'border-slate-300/80 bg-slate-100/40 px-6 py-16 text-center',
        'dark:border-white/10 dark:bg-white/[0.02]',
        className,
      )}
    >
      {Icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-soft ring-1 ring-slate-200/80 dark:bg-white/[0.04] dark:ring-white/10">
          <Icon className="h-6 w-6 text-slate-400 dark:text-slate-500" strokeWidth={1.75} />
        </div>
      )}
      <p className="font-display text-sm font-bold text-slate-700 dark:text-slate-200">{title}</p>
      {hint && (
        <p className="mt-1.5 max-w-sm text-xs leading-relaxed text-slate-400 dark:text-slate-500">
          {hint}
        </p>
      )}
    </div>
  )
}

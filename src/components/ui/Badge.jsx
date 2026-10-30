import { cn } from '../../lib/cn'

const variants = {
  default:
    'bg-slate-100 text-slate-600 ring-slate-200/80 dark:bg-white/[0.05] dark:text-slate-300 dark:ring-white/10',
  accent:
    'bg-accent-50 text-accent-700 ring-accent-200/70 dark:bg-accent-400/10 dark:text-accent-300 dark:ring-accent-400/20',
  outline: 'bg-transparent text-slate-600 ring-slate-300 dark:text-slate-400 dark:ring-white/10',
  success:
    'bg-emerald-50 text-emerald-700 ring-emerald-200/70 dark:bg-emerald-400/10 dark:text-emerald-300 dark:ring-emerald-400/20',
}

/**
 * Small status/label badge with a subtle inset ring. Use for statuses, counts,
 * and entry-type markers.
 */
export default function Badge({ children, variant = 'default', className, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[11px] font-semibold ring-1 ring-inset',
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  )
}

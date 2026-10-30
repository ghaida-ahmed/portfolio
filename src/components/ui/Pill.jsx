import { cn } from '../../lib/cn'

/**
 * Technology / tag pill. Sits above Badge in prominence. Optional leading dot
 * and an interactive hover lift for use in skill and tech-stack lists.
 */
export default function Pill({ children, className, dot = false, interactive = false, ...props }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium',
        'bg-slate-50 text-slate-700 ring-1 ring-inset ring-slate-200/80',
        'dark:bg-white/[0.04] dark:text-slate-300 dark:ring-white/[0.08]',
        interactive &&
          'transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-white hover:text-accent-700 hover:ring-accent-300 hover:shadow-soft dark:hover:bg-white/[0.08] dark:hover:text-accent-200 dark:hover:ring-accent-400/30',
        className,
      )}
      {...props}
    >
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-accent-500" aria-hidden="true" />}
      {children}
    </span>
  )
}

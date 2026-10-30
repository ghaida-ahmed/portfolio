import { cn } from '../../lib/cn'

/**
 * Base surface card — layered shadow, hairline border, theme-aware.
 * `interactive` adds a refined hover lift (transform + shadow + border warmth)
 * on an exponential ease for a premium feel.
 */
export default function Card({ children, className, interactive = false, ...props }) {
  return (
    <div
      className={cn(
        'relative rounded-2xl border border-slate-200/70 bg-white shadow-soft',
        'dark:border-white/[0.06] dark:bg-white/[0.03] dark:shadow-none',
        'dark:before:pointer-events-none dark:before:absolute dark:before:inset-x-0 dark:before:top-0 dark:before:h-px dark:before:rounded-t-2xl dark:before:bg-gradient-to-r dark:before:from-transparent dark:before:via-white/10 dark:before:to-transparent',
        interactive &&
          'group cursor-pointer transition-[transform,box-shadow,border-color] duration-500 ease-out-expo will-change-transform hover:-translate-y-1.5 hover:border-accent-300/70 hover:shadow-lift dark:hover:border-accent-400/25 dark:hover:bg-white/[0.05]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

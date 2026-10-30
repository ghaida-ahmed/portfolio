import { cn } from '../../lib/cn'

const variants = {
  primary:
    'bg-accent-600 text-white shadow-[0_1px_0_0_rgba(255,255,255,0.15)_inset,0_6px_16px_-4px_rgba(83,67,224,0.5)] hover:bg-accent-500 hover:shadow-glow focus-visible:ring-accent-500',
  secondary:
    'bg-white text-slate-800 ring-1 ring-inset ring-slate-200 shadow-soft hover:bg-slate-50 hover:ring-slate-300 dark:bg-white/[0.06] dark:text-slate-100 dark:ring-white/10 dark:hover:bg-white/[0.1]',
  ghost:
    'bg-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-white/[0.06] dark:hover:text-white',
  outline:
    'bg-transparent text-accent-600 ring-1 ring-inset ring-accent-300 hover:bg-accent-50 dark:text-accent-300 dark:ring-accent-400/30 dark:hover:bg-accent-400/10',
}

const sizes = {
  sm: 'px-3 py-1.5 text-xs gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
  lg: 'px-5 py-2.5 text-sm gap-2',
}

/**
 * Polymorphic button — renders an <a> when `href` is supplied, otherwise a
 * <button>. Shared styling for every call-to-action on the site.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  ...props
}) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-xl font-semibold',
    'transition-all duration-300 ease-out-expo active:scale-[0.97]',
    'disabled:pointer-events-none disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  )

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

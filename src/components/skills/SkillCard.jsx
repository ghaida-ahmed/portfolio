import { skillIcons, FallbackSkillIcon } from '../../lib/skillIcons'
import { cn } from '../../lib/cn'

/**
 * Icon card for a single skill. `icon` is a key from the curated skillIcons
 * registry (e.g. "react", "database"); falls back to a generic code glyph.
 */
export default function SkillCard({ name, icon, level, className }) {
  const Icon = (icon && skillIcons[icon]) || FallbackSkillIcon

  return (
    <div
      className={cn(
        'group flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white px-3.5 py-3 shadow-soft',
        'transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:border-accent-300/70 hover:shadow-lift',
        'dark:border-white/[0.06] dark:bg-white/[0.03] dark:hover:border-accent-400/25 dark:hover:bg-white/[0.05]',
        className,
      )}
    >
      <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-50 to-accent-100/50 text-accent-600 ring-1 ring-inset ring-accent-200/50 transition-transform duration-300 ease-out-expo group-hover:scale-105 dark:from-accent-400/15 dark:to-accent-400/[0.06] dark:text-accent-300 dark:ring-accent-400/15">
        <Icon className="h-5 w-5" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">{name}</p>
        {level && (
          <p className="font-mono text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500">
            {level}
          </p>
        )}
      </div>
    </div>
  )
}

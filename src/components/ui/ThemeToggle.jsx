import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'
import { cn } from '../../lib/cn'

/**
 * Dark-mode toggle. Optional per the design brief — remove from the sidebar if
 * a single fixed theme is preferred later.
 */
export default function ThemeToggle({ className }) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={cn(
        'relative inline-flex h-9 w-16 items-center rounded-full p-1',
        'ring-1 ring-inset transition-colors duration-300',
        isDark
          ? 'bg-slate-800 ring-slate-700'
          : 'bg-slate-200 ring-slate-300',
        className,
      )}
    >
      <span
        className={cn(
          'flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-sm',
          'transition-transform duration-300 ease-out',
          isDark ? 'translate-x-7' : 'translate-x-0',
        )}
      >
        {isDark ? (
          <Moon className="h-4 w-4 text-accent-500" strokeWidth={2} />
        ) : (
          <Sun className="h-4 w-4 text-amber-500" strokeWidth={2} />
        )}
      </span>
    </button>
  )
}

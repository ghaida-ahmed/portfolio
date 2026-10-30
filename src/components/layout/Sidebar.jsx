import { UserRound, Download, ArrowUpRight } from 'lucide-react'
import { profile, socials, navSections } from '../../data/profile'
import { useActiveSection } from '../../hooks/useActiveSection'
import SocialIcon from '../ui/SocialIcon'
import ThemeToggle from '../ui/ThemeToggle'
import Button from '../ui/Button'
import { cn } from '../../lib/cn'

const sectionIds = navSections.map((s) => s.id)

/**
 * Sidebar content shared between the fixed desktop rail and the mobile drawer.
 * `onNavigate` lets the mobile drawer close itself after a nav click.
 */
export default function Sidebar({ onNavigate }) {
  const activeId = useActiveSection(sectionIds)
  const activeSocials = socials.filter((s) => s.url)

  return (
    <div className="flex h-full flex-col">
      {/* Profile */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <div className="relative">
          <div className="h-24 w-24 overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-accent-100 to-accent-50 shadow-soft ring-1 ring-accent-200/60 dark:from-accent-400/20 dark:to-slate-800/40 dark:ring-accent-400/20">
            {profile.avatar ? (
              <img
                src={profile.avatar}
                alt={profile.name || 'Profile'}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <UserRound className="h-10 w-10 text-accent-400/70" strokeWidth={1.5} />
              </div>
            )}
          </div>
          {/* Availability dot */}
          <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-slate-50 dark:bg-[#0a0a12]">
            <span className="h-3 w-3 rounded-full bg-emerald-500 ring-2 ring-emerald-500/25" />
          </span>
        </div>

        <h1 className="mt-5 font-display text-[1.6rem] font-extrabold leading-tight tracking-tightest text-slate-900 dark:text-white">
          {profile.name || <span className="text-slate-400 dark:text-slate-600">Your Name</span>}
        </h1>
        <p className="mt-1 text-sm font-semibold text-accent-600 dark:text-accent-400">
          {profile.title || 'Professional Title'}
        </p>
        <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {profile.intro || 'A short introduction about you will appear here.'}
        </p>
      </div>

      {/* Nav */}
      <nav className="mt-9 hidden lg:block" aria-label="Section navigation">
        <ul className="space-y-0.5">
          {navSections.map((item) => {
            const active = activeId === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={onNavigate}
                  aria-current={active ? 'true' : undefined}
                  className={cn(
                    'group relative flex items-center gap-3 rounded-lg py-2 pl-3 pr-3 text-sm font-medium transition-colors duration-300',
                    active
                      ? 'text-slate-900 dark:text-white'
                      : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white',
                  )}
                >
                  <span
                    className={cn(
                      'h-px transition-all duration-300 ease-out-expo',
                      active
                        ? 'w-6 bg-accent-500'
                        : 'w-3 bg-slate-300 group-hover:w-5 group-hover:bg-slate-400 dark:bg-slate-700 dark:group-hover:bg-slate-500',
                    )}
                  />
                  {item.label}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Mobile nav (simple list) */}
      <nav className="mt-6 lg:hidden" aria-label="Section navigation">
        <ul className="grid grid-cols-2 gap-2">
          {navSections.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={onNavigate}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800/60"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer: CV, socials, theme */}
      <div className="mt-8 lg:mt-auto lg:pt-8">
        <Button
          href={profile.cvUrl || undefined}
          target={profile.cvUrl ? '_blank' : undefined}
          rel="noreferrer noopener"
          download={profile.cvUrl ? 'Ghaida_Almughamis_CV.pdf' : undefined}
          variant="primary"
          size="md"
          className="w-full"
        >
          <Download className="h-4 w-4" /> Download CV
        </Button>

        <div className="mt-5 flex items-center justify-between">
          <div className="flex gap-1.5">
            {activeSocials.length > 0
              ? activeSocials.map((s) => (
                  <a
                    key={s.key}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 ring-1 ring-slate-200/80 transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:text-accent-600 hover:ring-accent-300 hover:shadow-soft dark:text-slate-400 dark:ring-white/10 dark:hover:text-accent-300 dark:hover:ring-accent-400/30"
                  >
                    <SocialIcon name={s.icon} className="h-4.5 w-4.5" />
                  </a>
                ))
              : // Placeholder social row until links are added in profile.js
                socials.map((s) => (
                  <span
                    key={s.key}
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-300 ring-1 ring-slate-200/70 dark:text-slate-700 dark:ring-white/[0.06]"
                  >
                    <SocialIcon name={s.icon} className="h-4.5 w-4.5" />
                  </span>
                ))}
          </div>
          <ThemeToggle />
        </div>
      </div>
    </div>
  )
}

export { ArrowUpRight }

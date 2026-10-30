import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Sidebar from './Sidebar'
import ThemeToggle from '../ui/ThemeToggle'
import { profile } from '../../data/profile'

/**
 * App shell:
 * - Desktop (lg+): fixed left sidebar rail + scrolling main column.
 * - Mobile/tablet: top bar with a hamburger that opens a slide-in drawer.
 */
export default function Layout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="min-h-screen">
      {/* Mobile top bar */}
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-200/70 bg-slate-50/80 px-4 py-3 backdrop-blur-md dark:border-white/[0.06] dark:bg-[#0a0a12]/80 lg:hidden">
        <span className="font-display text-sm font-extrabold tracking-tight text-slate-900 dark:text-white">
          {profile.name || 'Portfolio'}
        </span>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open navigation"
            className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 ring-1 ring-slate-200 dark:text-slate-300 dark:ring-slate-700"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
              onClick={() => setDrawerOpen(false)}
            />
            <motion.aside
              className="bg-ambient absolute inset-y-0 left-0 w-[85%] max-w-sm overflow-y-auto bg-slate-50 p-6 shadow-soft-lg dark:bg-[#0a0a12]"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close navigation"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 ring-1 ring-slate-200 dark:text-slate-400 dark:ring-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
              <Sidebar onNavigate={() => setDrawerOpen(false)} />
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop layout */}
      <div className="mx-auto flex w-full max-w-7xl">
        {/* Sticky sidebar rail — stays in view while the main column scrolls */}
        <aside className="bg-ambient sticky top-0 hidden h-screen w-80 flex-shrink-0 flex-col overflow-y-auto border-r border-slate-200/70 p-8 dark:border-white/[0.06] lg:flex">
          <Sidebar />
        </aside>

        {/* Main content */}
        <main className="w-full min-w-0 px-5 pb-20 sm:px-8 lg:px-12 xl:px-16">
          <div className="mx-auto max-w-4xl">{children}</div>
        </main>
      </div>
    </div>
  )
}

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { cn } from '../../lib/cn'

/**
 * Accessible modal dialog rendered into a portal.
 * - Closes on Escape and backdrop click
 * - Locks body scroll while open
 * - Animated entrance/exit via framer-motion
 */
export default function Modal({ open, onClose, children, className, labelledBy }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose?.()
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [open, onClose])

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            className={cn(
              'relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto',
              'rounded-2xl border border-slate-200 bg-white shadow-soft-lg',
              'dark:border-white/10 dark:bg-[#12121c]',
              className,
            )}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close dialog"
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-slate-500 ring-1 ring-slate-200 backdrop-blur transition-colors hover:bg-white hover:text-slate-900 dark:bg-white/[0.08] dark:text-slate-300 dark:ring-white/10 dark:hover:bg-white/[0.14] dark:hover:text-white"
            >
              <X className="h-4.5 w-4.5" strokeWidth={2} />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

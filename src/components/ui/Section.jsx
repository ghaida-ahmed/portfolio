import Reveal from './Reveal'
import { cn } from '../../lib/cn'

/**
 * Section shell for the single-page layout. Provides the scroll anchor id,
 * generous vertical rhythm, and a confident header (large display title, a
 * short accent underline, optional description). Deliberately avoids the
 * uppercase-eyebrow-on-every-section pattern.
 */
export default function Section({ id, title, description, children, className, aside }) {
  return (
    <section id={id} className={cn('scroll-mt-24 py-14 sm:py-20', className)}>
      {(title || description) && (
        <Reveal as="header" className="mb-9">
          <div className="flex items-end justify-between gap-4">
            <div>
              {title && (
                <h2 className="text-[1.7rem] font-extrabold leading-[1.1] text-slate-900 sm:text-4xl dark:text-white">
                  {title}
                </h2>
              )}
              {title && (
                <span
                  className="mt-3 block h-[3px] w-11 rounded-full bg-accent-500"
                  aria-hidden="true"
                />
              )}
            </div>
            {aside && <div className="hidden shrink-0 sm:block">{aside}</div>}
          </div>
          {description && (
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-500 dark:text-slate-400">
              {description}
            </p>
          )}
        </Reveal>
      )}
      {children}
    </section>
  )
}

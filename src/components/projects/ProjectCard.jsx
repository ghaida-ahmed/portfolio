import { ImageIcon, Github, ExternalLink, Play, ArrowUpRight } from 'lucide-react'
import Card from '../ui/Card'
import Pill from '../ui/Pill'
import { cn } from '../../lib/cn'

/**
 * Project card for the browsing grid — product-tile feel. Click opens the
 * detail modal. Gracefully handles missing image / tags.
 */
export default function ProjectCard({ project, onOpen, className }) {
  const { title, description, image, tags = [], githubUrl, liveUrl, demoVideo } = project

  return (
    <Card
      interactive
      onClick={() => onOpen?.(project)}
      className={cn('flex flex-col overflow-hidden', className)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) =>
        (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), onOpen?.(project))
      }
      aria-label={title ? `Open details for ${title}` : 'Open project details'}
    >
      {/* Cover */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200/60 dark:from-slate-800/60 dark:to-slate-900">
        {image ? (
          <img
            src={image}
            alt={title || 'Project preview'}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-[900ms] ease-out-expo group-hover:scale-[1.06]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <ImageIcon className="h-9 w-9 text-slate-300 dark:text-slate-700" strokeWidth={1.5} />
          </div>
        )}

        {/* Bottom gradient scrim for depth */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {demoVideo && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/85 px-2 py-1 text-[11px] font-semibold text-slate-800 shadow-sm backdrop-blur-md dark:bg-slate-900/70 dark:text-white">
            <Play className="h-3 w-3 fill-current" /> Demo
          </span>
        )}

        {/* Hover affordance */}
        <span className="absolute right-3 top-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-white/90 text-slate-900 opacity-0 shadow-soft backdrop-blur transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100 dark:bg-slate-900/80 dark:text-white">
          <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[1.05rem] font-bold tracking-tight text-slate-900 transition-colors group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-300">
          {title || 'Untitled project'}
        </h3>
        {description && (
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {description}
          </p>
        )}

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.slice(0, 4).map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
            {tags.length > 4 && <Pill className="text-slate-400">+{tags.length - 4}</Pill>}
          </div>
        )}

        {/* Quick links */}
        {(githubUrl || liveUrl) && (
          <div className="mt-5 flex items-center gap-1 border-t border-slate-100 pt-4 text-slate-400 dark:border-white/[0.06] dark:text-slate-500">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                onClick={(e) => e.stopPropagation()}
                aria-label="View source on GitHub"
                className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/[0.06] dark:hover:text-white"
              >
                <Github className="h-4 w-4" />
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                onClick={(e) => e.stopPropagation()}
                aria-label="Open live demo"
                className="flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-white/[0.06] dark:hover:text-white"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            <span className="ml-auto font-mono text-[11px] font-medium text-accent-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:text-accent-400">
              view →
            </span>
          </div>
        )}
      </div>
    </Card>
  )
}

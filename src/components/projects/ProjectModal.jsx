import { useState, useMemo, useEffect } from 'react'
import { ImageIcon, Github, ExternalLink } from 'lucide-react'
import Modal from '../ui/Modal'
import Pill from '../ui/Pill'
import Button from '../ui/Button'
import { cn } from '../../lib/cn'

/**
 * Detail view for a single project. Media viewer supports a demo video plus a
 * screenshot gallery (thumbnail strip switches the active frame), followed by
 * the full description, tech tags, and action links.
 */
export default function ProjectModal({ project, open, onClose }) {
  // Build the ordered media list: video first, then screenshots, then cover.
  const media = useMemo(() => {
    if (!project) return []
    const items = []
    if (project.demoVideo)
      items.push({ type: 'video', src: project.demoVideo, poster: project.image })
    ;(project.screenshots || []).forEach((src) => items.push({ type: 'image', src }))
    if (items.length === 0 && project.image)
      items.push({ type: 'image', src: project.image })
    return items
  }, [project])

  const [active, setActive] = useState(0)
  useEffect(() => setActive(0), [project])

  if (!project) return null
  const { title, longDescription, description, tags = [], githubUrl, liveUrl } = project
  const current = media[active]

  return (
    <Modal open={open} onClose={onClose} labelledBy="project-modal-title" className="max-w-3xl">
      {/* Media */}
      <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl bg-slate-100 dark:bg-slate-800">
        {current?.type === 'video' ? (
          <video
            src={current.src}
            poster={current.poster || undefined}
            controls
            playsInline
            className="h-full w-full object-cover"
          />
        ) : current?.type === 'image' ? (
          <img src={current.src} alt={title || 'Project preview'} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <ImageIcon className="h-10 w-10 text-slate-300 dark:text-slate-600" strokeWidth={1.5} />
          </div>
        )}
      </div>

      {/* Thumbnail strip — only when there is more than one media item */}
      {media.length > 1 && (
        <div className="flex gap-2 overflow-x-auto border-b border-slate-100 px-4 py-3 dark:border-white/[0.06]">
          {media.map((m, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`View ${m.type} ${i + 1}`}
              className={cn(
                'relative h-12 w-20 flex-shrink-0 overflow-hidden rounded-lg ring-1 transition-all',
                i === active
                  ? 'ring-2 ring-accent-500'
                  : 'ring-slate-200 opacity-70 hover:opacity-100 dark:ring-white/10',
              )}
            >
              <img
                src={m.type === 'video' ? m.poster : m.src}
                alt=""
                className="h-full w-full object-cover"
              />
              {m.type === 'video' && (
                <span className="absolute inset-0 flex items-center justify-center bg-black/30 text-[10px] font-bold text-white">
                  ▶
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      {/* Content */}
      <div className="p-6 sm:p-7">
        <h3
          id="project-modal-title"
          className="font-display text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          {title || 'Untitled project'}
        </h3>

        {(longDescription || description) && (
          <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
            {longDescription || description}
          </p>
        )}

        {tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Pill key={tag} dot>
                {tag}
              </Pill>
            ))}
          </div>
        )}

        {(githubUrl || liveUrl) && (
          <div className="mt-7 flex flex-wrap gap-3">
            {liveUrl && (
              <Button href={liveUrl} target="_blank" rel="noreferrer noopener" size="lg">
                <ExternalLink className="h-4 w-4" /> Live demo
              </Button>
            )}
            {githubUrl && (
              <Button
                href={githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                variant="secondary"
                size="lg"
              >
                <Github className="h-4 w-4" /> Source code
              </Button>
            )}
          </div>
        )}
      </div>
    </Modal>
  )
}

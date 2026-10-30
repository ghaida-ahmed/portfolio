import { Briefcase, Award, Users, Trophy } from 'lucide-react'
import Card from '../ui/Card'
import Pill from '../ui/Pill'
import Badge from '../ui/Badge'
import { cn } from '../../lib/cn'

// Marker icon per entry type.
const typeIcon = {
  work: Briefcase,
  leadership: Users,
  award: Trophy,
}

/**
 * A single node on the experience timeline. The rail + marker sit on the left;
 * the content lives in an elevated card. Supports work / leadership / award
 * entries with an achievements list and tech tags.
 */
export default function TimelineItem({ entry, isLast = false }) {
  const {
    type = 'work',
    role,
    organization,
    location,
    startDate,
    endDate,
    description,
    achievements = [],
    tags = [],
  } = entry
  const Icon = typeIcon[type] || Briefcase
  const period = [startDate, endDate].filter(Boolean).join(' — ')

  return (
    <div className="relative pl-12 sm:pl-16">
      {/* Rail */}
      {!isLast && (
        <span
          className="absolute left-[17px] top-11 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-slate-200 to-transparent dark:from-white/10 sm:left-[21px]"
          aria-hidden="true"
        />
      )}
      {/* Node marker */}
      <span className="absolute left-0 top-1.5 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-50 to-accent-100/50 text-accent-600 ring-1 ring-inset ring-accent-200/60 dark:from-accent-400/15 dark:to-accent-400/[0.06] dark:text-accent-300 dark:ring-accent-400/20 sm:h-11 sm:w-11">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.75} />
      </span>

      <Card className={cn('p-5 sm:p-6', !isLast && 'mb-5')}>
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-base font-bold tracking-tight text-slate-900 dark:text-white">
                {role}
              </h3>
              {type !== 'work' && (
                <Badge variant="accent" className="capitalize">
                  {type}
                </Badge>
              )}
            </div>
            <p className="mt-0.5 text-sm font-semibold text-accent-600 dark:text-accent-400">
              {organization}
            </p>
          </div>
          {period && (
            <span className="whitespace-nowrap rounded-full bg-slate-100 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-500 dark:bg-white/[0.05] dark:text-slate-400">
              {period}
            </span>
          )}
        </div>

        {location && (
          <p className="mt-1 text-xs text-slate-400 dark:text-slate-500">{location}</p>
        )}

        {description && (
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            {description}
          </p>
        )}

        {achievements.length > 0 && (
          <ul className="mt-4 space-y-2">
            {achievements.map((item, i) => (
              <li
                key={i}
                className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
              >
                <Award
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent-500"
                  strokeWidth={2}
                />
                {item}
              </li>
            ))}
          </ul>
        )}

        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Pill key={tag}>{tag}</Pill>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}

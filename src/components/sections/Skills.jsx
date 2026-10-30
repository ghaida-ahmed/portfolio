import {
  Sparkles,
  Code2,
  Globe,
  Boxes,
  Wrench,
  Workflow,
  FlaskConical,
  Server,
  Database,
  Brain,
  BarChart3,
  Cloud,
} from 'lucide-react'
import Section from '../ui/Section'
import Card from '../ui/Card'
import Pill from '../ui/Pill'
import Reveal from '../ui/Reveal'
import EmptyState from '../ui/EmptyState'
import { highlights } from '../../data/profile'

// Resolve the icon name stored in profile.highlights to a lucide component.
const iconMap = {
  Code2,
  Globe,
  Boxes,
  Wrench,
  Sparkles,
  Workflow,
  FlaskConical,
  Server,
  Database,
  Brain,
  BarChart3,
  Cloud,
}

/**
 * Skills section. Renders the categorized "Technical Highlights" cards. Falls
 * back to a placeholder when empty.
 */
export default function Skills() {
  if (highlights.length === 0) {
    return (
      <Section id="skills" title="Skills" description="Technologies and tools, grouped by category.">
        <EmptyState
          icon={Sparkles}
          title="Skills coming soon"
          hint="Add categories and skills to the `highlights` array in src/data/profile.js."
        />
      </Section>
    )
  }

  return (
    <Section id="skills" title="Skills" description="Technologies and tools, grouped by category.">
      <Reveal stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {highlights.map((group) => {
          const Icon = iconMap[group.icon] || Sparkles
          return (
            <Reveal.Item key={group.label}>
              <Card className="h-full p-5">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-accent-50 to-accent-100/50 text-accent-600 ring-1 ring-inset ring-accent-200/50 dark:from-accent-400/15 dark:to-accent-400/[0.06] dark:text-accent-300 dark:ring-accent-400/15">
                    <Icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </span>
                  <h4 className="font-display text-sm font-bold tracking-tight text-slate-900 dark:text-white">
                    {group.label}
                  </h4>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <Pill key={item} interactive>
                      {item}
                    </Pill>
                  ))}
                </div>
              </Card>
            </Reveal.Item>
          )
        })}
      </Reveal>
    </Section>
  )
}

import { Milestone } from 'lucide-react'
import Section from '../ui/Section'
import EmptyState from '../ui/EmptyState'
import TimelineItem from '../experience/TimelineItem'
import experiencesData from '../../data/experiences.json'

/**
 * Experience & Leadership — vertical timeline of work, leadership, and awards.
 */
export default function Experience() {
  const entries = experiencesData.experiences || []

  return (
    <Section
      id="experience"
      title="Experience & Leadership"
      description="Roles, leadership, and recognition over time."
    >
      {entries.length > 0 ? (
        <div className="mt-2">
          {entries.map((entry, i) => (
            <TimelineItem key={entry.id} entry={entry} isLast={i === entries.length - 1} />
          ))}
        </div>
      ) : (
        <EmptyState
          icon={Milestone}
          title="Timeline coming soon"
          hint="Add entries to src/data/experiences.json to build the timeline."
        />
      )}
    </Section>
  )
}

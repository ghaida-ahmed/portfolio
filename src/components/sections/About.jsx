import { User } from 'lucide-react'
import Section from '../ui/Section'
import Reveal from '../ui/Reveal'
import EmptyState from '../ui/EmptyState'
import { profile } from '../../data/profile'

/**
 * About section. Renders the biography and personal introduction. Falls back to
 * a placeholder when empty.
 */
export default function About() {
  const bio = profile.about || profile.intro
  const paragraphs = bio ? bio.split('\n').filter(Boolean) : []

  if (paragraphs.length === 0) {
    return (
      <Section id="about" title="About">
        <EmptyState
          icon={User}
          title="About content coming soon"
          hint="Add your bio to the `about` field in src/data/profile.js."
        />
      </Section>
    )
  }

  return (
    <Section id="about" title="About">
      <Reveal className="max-w-2xl space-y-4 text-[15px] leading-relaxed text-slate-600 dark:text-slate-300">
        {paragraphs.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </Reveal>
    </Section>
  )
}

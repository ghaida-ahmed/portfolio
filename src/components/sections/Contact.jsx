import { Mail, MapPin } from 'lucide-react'
import Section from '../ui/Section'
import Button from '../ui/Button'
import Card from '../ui/Card'
import SocialIcon from '../ui/SocialIcon'
import { profile, socials } from '../../data/profile'

/**
 * Contact — email CTA, location, and social links. All values are placeholders
 * until profile.js is filled in.
 */
export default function Contact() {
  const activeSocials = socials.filter((s) => s.url)

  return (
    <Section
      id="contact"
      title="Get in touch"
      description="Open to opportunities and collaboration."
    >
      <Card className="p-6 sm:p-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            {profile.email ? (
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900 hover:text-accent-600 dark:text-white dark:hover:text-accent-300"
              >
                <Mail className="h-5 w-5" /> {profile.email}
              </a>
            ) : (
              <p className="inline-flex items-center gap-2 text-lg font-semibold text-slate-400 dark:text-slate-500">
                <Mail className="h-5 w-5" /> your.email@example.com
              </p>
            )}
            {profile.location && (
              <p className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <MapPin className="h-4 w-4" /> {profile.location}
              </p>
            )}
          </div>

          <Button href={profile.email ? `mailto:${profile.email}` : undefined} size="lg">
            <Mail className="h-4 w-4" /> Send a message
          </Button>
        </div>

        {activeSocials.length > 0 && (
          <div className="mt-6 flex gap-2 border-t border-slate-100 pt-6 dark:border-white/[0.06]">
            {activeSocials.map((s) => (
              <a
                key={s.key}
                href={s.url}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-500 ring-1 ring-slate-200/80 transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:text-accent-600 hover:ring-accent-300 hover:shadow-soft dark:text-slate-400 dark:ring-white/10 dark:hover:text-accent-300 dark:hover:ring-accent-400/30"
              >
                <SocialIcon name={s.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        )}
      </Card>
    </Section>
  )
}

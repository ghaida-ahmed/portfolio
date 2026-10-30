import { ScrollText } from 'lucide-react'
import Section from '../ui/Section'
import EmptyState from '../ui/EmptyState'
import Reveal from '../ui/Reveal'
import CertificationCard from '../certifications/CertificationCard'
import certificationsData from '../../data/certifications.json'

/**
 * Certifications — grid of credential cards.
 */
export default function Certifications() {
  const certs = certificationsData.certifications || []

  return (
    <Section
      id="certifications"
      title="Certifications"
      description="Professional certifications and credentials."
    >
      {certs.length > 0 ? (
        <Reveal stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {certs.map((cert) => (
            <Reveal.Item key={cert.id}>
              <CertificationCard certification={cert} />
            </Reveal.Item>
          ))}
        </Reveal>
      ) : (
        <EmptyState
          icon={ScrollText}
          title="Certifications coming soon"
          hint="Add credentials to src/data/certifications.json to list them here."
        />
      )}
    </Section>
  )
}

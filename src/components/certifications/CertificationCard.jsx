import { BadgeCheck, ExternalLink, Award } from 'lucide-react'
import Card from '../ui/Card'

/**
 * Certification card — badge image (or icon fallback), issuer, date, and an
 * optional verification link.
 */
export default function CertificationCard({ certification }) {
  const { name, issuer, issueDate, credentialUrl, image } = certification

  return (
    <Card className="flex items-start gap-4 p-5" interactive={!!credentialUrl}>
      <span className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-accent-50 to-accent-100/50 ring-1 ring-inset ring-accent-200/50 dark:from-accent-400/15 dark:to-accent-400/[0.06] dark:ring-accent-400/15">
        {image ? (
          <img src={image} alt="" className="h-full w-full object-contain" />
        ) : (
          <Award className="h-7 w-7 text-accent-600 dark:text-accent-300" strokeWidth={1.5} />
        )}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <BadgeCheck className="h-4 w-4 flex-shrink-0 text-accent-500" />
          <h3 className="truncate text-sm font-semibold text-slate-900 dark:text-white">{name}</h3>
        </div>
        {issuer && <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{issuer}</p>}
        {issueDate && (
          <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">{issueDate}</p>
        )}
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-accent-600 hover:underline dark:text-accent-400"
          >
            Verify <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </Card>
  )
}

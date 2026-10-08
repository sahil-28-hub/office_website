import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { TrainingDurationPage } from '@/views/TrainingPages'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema, faqPageSchema } from '@/lib/structuredData'
import {
  FORMATS,
  TRAINING_DOMAINS,
  domainFaqs,
  getFormat,
  getTrainingDomain,
  trainingPath,
} from '@/data/trainingTracks'

/* /training/<domain>/<duration> — one domain at one length: 45-days,
   6-weeks or 6-months. Content: data/trainingTracks.ts. */

/* No dynamicParams = false here, on purpose. With it, a path that is
   not prerendered is a hard 404 — and when a CMS save revalidates the
   layout these pages sit under, the regenerated entry can be that 404,
   cached until the next deploy. Unknown addresses are refused by
   notFound() below instead, which is decided per request and cannot go
   stale. */

export function generateStaticParams() {
  return TRAINING_DOMAINS.flatMap((domain) =>
    FORMATS.map((format) => ({ domain: domain.slug, duration: format.key }))
  )
}

type Props = { params: Promise<{ domain: string; duration: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { domain: slug, duration } = await params
  const domain = getTrainingDomain(slug)
  const format = getFormat(duration)
  if (!domain || !format) return {}

  return {
    title: `${format.short} ${domain.name} Training in Ludhiana`,
    description: `${format.length} ${domain.name} training in Ludhiana at techcadd. ${format.summary}`,
    alternates: { canonical: trainingPath(domain.slug, format.key) },
  }
}

export default async function TrainingDurationRoute({ params }: Props) {
  const { domain: slug, duration } = await params
  const domain = getTrainingDomain(slug)
  const format = getFormat(duration)
  if (!domain || !format) notFound()

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: `${domain.name} Training`, url: trainingPath(domain.slug) },
          { name: format.label, url: trainingPath(domain.slug, format.key) },
        ])}
      />
      <JsonLd data={faqPageSchema(domainFaqs(domain))} />
      <TrainingDurationPage domain={domain} format={format} />
    </>
  )
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { TrainingDomainPage } from '@/views/TrainingPages'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema, faqPageSchema, itemListSchema } from '@/lib/structuredData'
import { FORMATS, TRAINING_DOMAINS, domainFaqs, getTrainingDomain, trainingPath } from '@/data/trainingTracks'

/* /training/<domain> — one Internship & Training domain, with a card
   for each duration. Content: data/trainingTracks.ts. */

/* No dynamicParams = false here, on purpose. With it, a path that is
   not prerendered is a hard 404 — and when a CMS save revalidates the
   layout these pages sit under, the regenerated entry can be that 404,
   cached until the next deploy. Unknown addresses are refused by
   notFound() below instead, which is decided per request and cannot go
   stale. */

export function generateStaticParams() {
  return TRAINING_DOMAINS.map((domain) => ({ domain: domain.slug }))
}

type Props = { params: Promise<{ domain: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { domain: slug } = await params
  const domain = getTrainingDomain(slug)
  if (!domain) return {}

  return {
    title: `${domain.name} Training in Ludhiana — 45 Days, 6 Weeks & 6 Months`,
    description: `${domain.name} industrial training and internship in Ludhiana: 45 days, 6 weeks and 6 months programmes at techcadd, Bharat Nagar Chowk. ${domain.tagline}`,
    alternates: { canonical: trainingPath(domain.slug) },
  }
}

export default async function TrainingDomainRoute({ params }: Props) {
  const { domain: slug } = await params
  const domain = getTrainingDomain(slug)
  if (!domain) notFound()

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Training', url: '/courses' },
          { name: `${domain.name} Training`, url: trainingPath(domain.slug) },
        ])}
      />
      <JsonLd
        data={itemListSchema(
          FORMATS.map((format) => ({
            name: `${format.short} ${domain.name} Training`,
            url: trainingPath(domain.slug, format.key),
          }))
        )}
      />
      <JsonLd data={faqPageSchema(domainFaqs(domain))} />
      <TrainingDomainPage domain={domain} />
    </>
  )
}

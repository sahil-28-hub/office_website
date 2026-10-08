import type { Metadata } from 'next'
import DisclaimerPage from '@/views/DisclaimerPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structuredData'
import { DISCLAIMER } from '@/data/legal'

export const metadata: Metadata = {
  title: DISCLAIMER.metaTitle,
  description: DISCLAIMER.hero.lead,
  alternates: { canonical: DISCLAIMER.path },
  robots: { index: false, follow: true },
}

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Disclaimer', url: DISCLAIMER.path },
])

export default function DisclaimerRoute() {
  return (
    <>
      <JsonLd data={BREADCRUMB} />
      <DisclaimerPage />
    </>
  )
}

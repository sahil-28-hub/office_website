import type { Metadata } from 'next'
import TermsPage from '@/views/TermsPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structuredData'
import { TERMS } from '@/data/legal'

export const metadata: Metadata = {
  title: TERMS.metaTitle,
  description: TERMS.hero.lead,
  alternates: { canonical: TERMS.path },
  robots: { index: false, follow: true },
}

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Terms & Conditions', url: TERMS.path },
])

export default function TermsRoute() {
  return (
    <>
      <JsonLd data={BREADCRUMB} />
      <TermsPage />
    </>
  )
}

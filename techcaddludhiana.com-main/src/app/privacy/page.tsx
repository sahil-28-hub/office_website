import type { Metadata } from 'next'
import PrivacyPolicyPage from '@/views/PrivacyPolicyPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structuredData'
import { PRIVACY_POLICY } from '@/data/legal'

export const metadata: Metadata = {
  title: PRIVACY_POLICY.metaTitle,
  description: PRIVACY_POLICY.hero.lead,
  alternates: { canonical: PRIVACY_POLICY.path },
  robots: { index: false, follow: true },
}

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Privacy Policy', url: PRIVACY_POLICY.path },
])

export default function PrivacyRoute() {
  return (
    <>
      <JsonLd data={BREADCRUMB} />
      <PrivacyPolicyPage />
    </>
  )
}

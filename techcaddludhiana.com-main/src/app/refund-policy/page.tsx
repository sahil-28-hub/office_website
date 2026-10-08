import type { Metadata } from 'next'
import RefundPolicyPage from '@/views/RefundPolicyPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structuredData'
import { REFUND_POLICY } from '@/data/legal'

export const metadata: Metadata = {
  title: REFUND_POLICY.metaTitle,
  description: REFUND_POLICY.hero.lead,
  alternates: { canonical: REFUND_POLICY.path },
  robots: { index: false, follow: true },
}

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Refund & Cancellation Policy', url: REFUND_POLICY.path },
])

export default function RefundPolicyRoute() {
  return (
    <>
      <JsonLd data={BREADCRUMB} />
      <RefundPolicyPage />
    </>
  )
}

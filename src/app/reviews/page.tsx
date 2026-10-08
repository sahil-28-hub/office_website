import type { Metadata } from 'next'
import ReviewsPage from '@/views/ReviewsPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structuredData'
import { RV_HERO } from '@/data/reviews'
import { cmsFetchList } from '@/lib/cms.server'
import { mapReview, mapTestimonial, mergeVoices } from '@/lib/cms'

export const metadata: Metadata = {
  title: 'Reviews — what techcadd learners say',
  description: RV_HERO.lead,
  alternates: { canonical: '/reviews' },
}

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Reviews', url: '/reviews' },
])

export default async function ReviewsRoute() {
  const [testimonials, reviews] = await Promise.all([
    cmsFetchList('/testimonials', { map: mapTestimonial, limit: 100 }),
    cmsFetchList('/reviews', { map: mapReview, limit: 100 }),
  ])

  return (
    <>
      <JsonLd data={BREADCRUMB} />
      <ReviewsPage initialReviews={mergeVoices(testimonials, reviews)} />
    </>
  )
}

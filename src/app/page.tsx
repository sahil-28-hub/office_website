import type { Metadata } from 'next'
import Home from '@/views/Home'
import { cmsFetchList } from '@/lib/cms.server'
import { mapPost, mapFaq, mapTestimonial, mapReview, mergeVoices } from '@/lib/cms'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
}

async function loadTestimonials() {
  const [testimonials, reviews] = await Promise.all([
    cmsFetchList('/testimonials', { map: mapTestimonial, limit: 24 }),
    cmsFetchList('/reviews', { map: mapReview, limit: 24 })
  ])

  return mergeVoices(testimonials, reviews)
}

export default async function HomePage() {
  const [posts, faqs, testimonials] = await Promise.all([
    cmsFetchList('/blogs', { map: mapPost, limit: 6 }),
    cmsFetchList('/faqs?featured=1', { map: mapFaq }),
    loadTestimonials(),
  ])

  return <Home initialPosts={posts} initialFaqs={faqs} initialTestimonials={testimonials} />
}

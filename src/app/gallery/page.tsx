import type { Metadata } from 'next'
import GalleryPage from '@/views/GalleryPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structuredData'
import { cmsFetchList } from '@/lib/cms.server'
import { mapGalleryPhotos } from '@/lib/cms'

export const metadata: Metadata = {
  title: 'Gallery — inside the techcadd Ludhiana campus',
  description: 'Photographs from inside the techcadd Ludhiana campus — labs, batches and events.',
  alternates: { canonical: '/gallery' },
}

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Gallery', url: '/gallery' },
])

export default async function GalleryRoute() {
  const albums = await cmsFetchList('/gallery', { limit: 50 })
  const photos = albums ? mapGalleryPhotos(albums) : null

  return (
    <>
      <JsonLd data={BREADCRUMB} />
      <GalleryPage photos={photos} />
    </>
  )
}

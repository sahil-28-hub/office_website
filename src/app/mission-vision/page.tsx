import type { Metadata } from 'next'
import MissionVisionPage from '@/views/MissionVisionPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structuredData'
import { MV_HERO } from '@/data/missionVision'

export const metadata: Metadata = {
  title: 'Mission and Vision — techcadd Ludhiana',
  description: MV_HERO.lead,
  alternates: { canonical: '/mission-vision' },
}

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Mission and Vision', url: '/mission-vision' },
])

export default function MissionVisionRoute() {
  return (
    <>
      <JsonLd data={BREADCRUMB} />
      <MissionVisionPage />
    </>
  )
}

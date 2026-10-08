import type { Metadata } from 'next'
import TeamPage from '@/views/TeamPage'
import JsonLd from '@/components/seo/JsonLd'
import { personSchema, breadcrumbSchema } from '@/lib/structuredData'
import { TEAM_HERO, TEAM_MEMBERS } from '@/data/team'

export const metadata: Metadata = {
  title: 'Our Team — the people behind techcadd',
  description: TEAM_HERO.lead,
  alternates: { canonical: '/team' },
}

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Team', url: '/team' },
])

export default function TeamRoute() {
  return (
    <>
      <JsonLd data={TEAM_MEMBERS.map(personSchema)} />
      <JsonLd data={BREADCRUMB} />
      <TeamPage />
    </>
  )
}

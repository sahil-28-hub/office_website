import type { Metadata } from 'next'
import BranchPage from '@/views/BranchPage'
import JsonLd from '@/components/seo/JsonLd'
import { educationalOrgSchema, breadcrumbSchema } from '@/lib/structuredData'
import { BRANCHES, getBranch } from '@/data/branches'

export function generateStaticParams() {
  return BRANCHES.map((branch) => ({ slug: branch.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const branch = getBranch(slug)

  if (!branch) return { title: 'Campus not found — techcadd', robots: { index: false, follow: true } }

  return {
    title: branch.metaTitle,
    description: branch.hero.lead,
    alternates: { canonical: `/branches/${branch.slug}` },
  }
}

export default async function BranchRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const branch = getBranch(slug)

  return (
    <>
      {branch && (
        <>
          <JsonLd data={educationalOrgSchema(branch)} />
          <JsonLd
            data={breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: branch.city, url: `/branches/${branch.slug}` },
            ])}
          />
        </>
      )}
      <BranchPage slug={slug} />
    </>
  )
}

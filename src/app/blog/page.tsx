import type { Metadata } from 'next'
import BlogPage from '@/views/BlogPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structuredData'
import { BLOG_HERO } from '@/data/blog'
import { cmsFetchList } from '@/lib/cms.server'
import { mapPost } from '@/lib/cms'

export const metadata: Metadata = {
  title: 'Blogs — techcadd on courses, careers and code',
  description: BLOG_HERO.lead,
  alternates: { canonical: '/blog' },
}

const BREADCRUMB = breadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
])

export default async function BlogRoute() {
  const posts = await cmsFetchList('/blogs', { map: mapPost })

  return (
    <>
      <JsonLd data={BREADCRUMB} />
      <BlogPage initialPosts={posts} />
    </>
  )
}

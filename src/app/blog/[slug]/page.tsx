import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostPage from '@/views/BlogPostPage'
import JsonLd from '@/components/seo/JsonLd'
import { articleSchema, breadcrumbSchema } from '@/lib/structuredData'
import { BLOG_HERO, POSTS } from '@/data/blog'
import { cmsFetchRecordWithState, cmsFetchSlugs } from '@/lib/cms.server'
import { mapPostDetail } from '@/lib/cms'

export async function generateStaticParams() {
  const slugs = new Set(POSTS.map((post) => post.id))
  for (const slug of await cmsFetchSlugs('/blogs')) slugs.add(slug)
  return [...slugs].map((slug) => ({ slug }))
}

async function resolvePost(slug: string): Promise<{
  post: Record<string, any> | null
  state: string
  fromCms: boolean
}> {
  const { record, state } = await cmsFetchRecordWithState(`/blogs/${encodeURIComponent(slug)}`, {
    map: mapPostDetail,
  })
  if (record) return { post: record, state, fromCms: true }

  const bundled = POSTS.find((entry) => entry.id === slug)
  return {
    post: bundled
      ? { ...bundled, body: '', metaTitle: bundled.title, metaDescription: bundled.excerpt }
      : null,
    state,
    fromCms: false,
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const { post } = await resolvePost(slug)

  if (!post) return { title: 'Article — techcadd', robots: { index: false, follow: true } }

  const title = post.metaTitle ? `${post.metaTitle} — techcadd` : `${post.title} — techcadd`
  const description = post.metaDescription || post.excerpt || ''
  const image = post.cover || BLOG_HERO.image

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { title, description, images: [image], type: 'article' },
  }
}

export default async function BlogPostRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { post, state, fromCms } = await resolvePost(slug)

  /* A slug that exists in neither the CMS nor the bundled list is
     genuinely not found — return a proper 404 status. */
  if (!post && state === 'missing') notFound()

  return (
    <>
      {post && (
        <>
          <JsonLd
            data={articleSchema({
              id: post.slug || post.id,
              title: post.title,
              excerpt: post.excerpt || post.metaDescription || '',
              date: post.date,
              tag: post.tag,
              image: post.cover || BLOG_HERO.image,
            })}
          />
          <JsonLd
            data={breadcrumbSchema([
              { name: 'Home', url: '/' },
              { name: 'Blog', url: '/blog' },
              { name: post.title, url: `/blog/${slug}` },
            ])}
          />
        </>
      )}
      <BlogPostPage
        slug={slug}
        initialPost={fromCms ? post : null}
        initialState={fromCms ? 'ready' : state}
      />
    </>
  )
}

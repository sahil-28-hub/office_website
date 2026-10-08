import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CmsPage from '@/views/CmsPage'
import JsonLd from '@/components/seo/JsonLd'
import { breadcrumbSchema } from '@/lib/structuredData'
import { cmsFetchRecord, cmsFetchList } from '@/lib/cms.server'
import { mapPost, cmsAsset } from '@/lib/cms'
import { COURSE_SEO_SLUG, SEO_SLUG_TO_COURSE } from '@/data/courses/path'
import { CourseRouteView, courseMetadata } from '@/components/course/CourseRoute'

/* ==================================================================
   /<slug> — a page written in the CMS, or a course at the address named
   for its city.

   TWO KINDS OF PAGE, ONE SEGMENT

   /python-course-in-ludhiana is a course; /some-landing-page is a page
   an editor wrote. Both are a single segment at the root, so both come
   through here. The CMS page is looked for first and wins: an editor
   who has written a page at an address has said what belongs there,
   and "View on site" in the CMS has to open that page. Only when there
   is none is the slug read as a course address — see
   data/courses/path.ts.


   The last place the CMS could not reach. An editor could write a
   page, give it an SEO block, mark it for the navigation and publish
   it, and the website had no route that would render it: /public/
   pages/:slug answered correctly and nothing ever asked.

   WHY A ROOT-LEVEL DYNAMIC SEGMENT IS SAFE HERE

   A static segment always wins over a dynamic one in the App Router,
   so /about, /courses, /faq and every other real route still resolve
   to their own folder. This catches only what nothing else claims.

   It does mean this route decides what a 404 is for the whole top
   level of the site. `notFound()` is therefore called for anything the
   CMS does not publish under that slug, which renders src/app/
   not-found.tsx exactly as before.

   There is no /public/pages list endpoint, so `generateStaticParams`
   prerenders the pages that asked to be in the navigation — the ones
   with a link pointing at them — and anything else renders on demand
   the first time it is asked for.
================================================================== */

export async function generateStaticParams() {
  const pages = await cmsFetchList<{ slug: string }>('/nav-pages')
  const slugs = new Set(Object.values(COURSE_SEO_SLUG))
  for (const page of pages ?? []) {
    if (typeof page?.slug === 'string' && page.slug) slugs.add(page.slug)
  }
  return [...slugs].map((slug) => ({ slug }))
}

/** The published page, or null. Deduped by Next across metadata and render. */
async function getPage(slug: string) {
  return cmsFetchRecord<Record<string, any>>(`/pages/${encodeURIComponent(slug)}`)
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const page = await getPage(slug)

  /* not a CMS page: a course address, if it is one */
  if (!page && SEO_SLUG_TO_COURSE[slug]) return courseMetadata(SEO_SLUG_TO_COURSE[slug])

  /* No page, no metadata worth emitting — the route renders a 404
     below and a title describing a page that does not exist would be
     indexed against it. */
  if (!page) return { title: 'Page not found — techcadd', robots: { index: false, follow: true } }

  /* The layout's template appends the brand, so one an editor typed on
     the end of the meta title is taken off rather than printed twice. */
  const title = String(page.seo?.metaTitle || page.title).replace(/\s*[|—–-]\s*techcadd\s*$/i, '')
  const description = page.seo?.metaDescription || ''
  const image = cmsAsset(page.seo?.ogImage?.url)

  return {
    title,
    description,
    /* The editor's canonical when they set one — a page that exists to
       serve two addresses needs to name the real one. */
    alternates: { canonical: page.seo?.canonicalUrl || `/${slug}` },
    ...(page.seo?.keywords?.length ? { keywords: page.seo.keywords } : {}),
    openGraph: {
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  }
}

export default async function CmsPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const page = await getPage(slug)

  /* not a CMS page: a course address, if it is one */
  if (!page && SEO_SLUG_TO_COURSE[slug]) {
    return <CourseRouteView slug={SEO_SLUG_TO_COURSE[slug]} />
  }

  if (!page) notFound()

  /* Only when the page actually asks for them. A page with no `blogs`
     block should not cost a second CMS request on every render. */
  const wantsPosts = Array.isArray(page.sections)
    ? page.sections.some((section: any) => section?.type === 'blogs' && section?.visible !== false)
    : false

  const posts = wantsPosts ? await cmsFetchList('/blogs', { map: mapPost, limit: 3 }) : null

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: page.title, url: `/${slug}` },
        ])}
      />
      <CmsPage page={page} posts={posts ?? []} />
    </>
  )
}

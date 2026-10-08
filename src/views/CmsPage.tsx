'use client'

import SmartLink from '../components/common/SmartLink'
import PageHero from '../components/kit/PageHero'
import PageCta from '../components/kit/PageCta'
import PageIcon from '../components/kit/icons'
import { useFilteredReveal } from '../hooks/usePageMotion'
import VideoPlayer from '../components/common/VideoPlayer'
import { videoEmbed } from '../lib/videoEmbed'
import ArticleToc from '../components/kit/ArticleToc'
import { createTocIds, indexHeadings, type TocItem } from '../lib/articleToc'
import '../components/kit/page-kit.css'
import '../components/kit/BlogPost.css'

/* ------------------------------------------------------------------
   A page written in the CMS.

   The CMS has had a Pages module from the start — title, slug, an SEO
   block, and since migration 021 a list of ordered blocks. Nothing on
   the website read it, so a page an editor wrote and published had no
   address that rendered it. This is that address.

   NO NEW DESIGN

   Every class here already exists. The banner is the same PageHero
   the blog, FAQ and reviews pages open on; the prose is
   `.tc-article-body`, which is what a CMS-authored blog post already
   renders through, so a paragraph written in the CMS looks the same
   whichever module it was written in; the closing band is PageCta.

   An editor is choosing what a page says, not what the site looks
   like — so there is nothing here they can set that would produce a
   page in a different style from the rest.

   THE BLOCKS

   Five types, matching the ENUM in migration 021:

     rich-text  a run of prose
     image      a figure
     video      a YouTube/Vimeo embed, or a link if it is neither
     cta        a heading and one button
     blogs      the latest posts

   A block the CMS adds later that this does not know renders nothing,
   rather than an empty band with a heading over it.
------------------------------------------------------------------ */

type Section = {
  id: string
  type: string
  title?: string
  body?: string
  media?: { url?: string; alt?: string; width?: number; height?: number }
  linkUrl?: string
  linkLabel?: string
  linkTarget?: string
  visible?: boolean
}

type Post = { id: string; slug: string; title: string; excerpt: string; href: string }

/** A link an editor typed, with the safe attributes for its target. */
function BlockLink({ href, label, target }: { href: string; label: string; target?: string }) {
  const external = /^https?:\/\//i.test(href)
  const newTab = target === '_blank' || (external && target !== '_self')

  return (
    <SmartLink
      className="ap-btn ap-btn--dark"
      href={href}
      {...(newTab ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
    >
      {label}
      <PageIcon name="arrowRight" size={18} />
    </SmartLink>
  )
}

function Block({
  section,
  posts,
  titleId
}: {
  section: Section
  posts: Post[]
  /* set when the page index links to this block's heading */
  titleId?: string
}) {
  /* An editor can hide a block without deleting it. */
  if (section.visible === false) return null

  switch (section.type) {
    case 'rich-text':
      if (!section.title && !section.body?.trim()) return null
      return (
        <section className="ap-light ap-sec">
          <div className="shell tc-lede" data-reveal>
            {section.title && <h2 className="ap-title" id={titleId}>{section.title}</h2>}
            {section.body?.trim() && (
              /* Authored in the CMS by a signed-in editor, and rendered
                 through the same class a blog post's body uses — see
                 the note at the top of this file. */
              <div className="tc-article-body" dangerouslySetInnerHTML={{ __html: section.body }} />
            )}
          </div>
        </section>
      )

    case 'image': {
      if (!section.media?.url) return null
      return (
        <section className="ap-light ap-sec">
          <div className="shell" data-reveal>
            <figure className="tc-article-cover">
              <img
                src={section.media.url}
                alt={section.media.alt || section.title || ''}
                width={section.media.width}
                height={section.media.height}
                loading="lazy"
                decoding="async"
              />
              {section.title && <figcaption>{section.title}</figcaption>}
            </figure>
          </div>
        </section>
      )
    }

    case 'video': {
      const embed = videoEmbed(section.linkUrl)
      if (!embed) {
        /* Not a video host this page can frame. The address is still
           worth offering — an editor put it there on purpose. */
        if (!section.linkUrl) return null
        return (
          <section className="ap-light ap-sec">
            <div className="shell tc-lede" data-reveal>
              {section.title && <h2 className="ap-title">{section.title}</h2>}
              <BlockLink
                href={section.linkUrl}
                label={section.linkLabel || 'Watch the video'}
                target={section.linkTarget}
              />
            </div>
          </section>
        )
      }

      return (
        <section className="ap-light ap-sec">
          <div className="shell" data-reveal>
            {section.title && <h2 className="ap-title">{section.title}</h2>}
            {/* Click-to-play, in place. The same component the course
                pages and testimonials use, so a video behaves the same
                wherever an editor puts one. */}
            <VideoPlayer url={section.linkUrl} title={section.title || 'Video'} />
          </div>
        </section>
      )
    }

    case 'cta':
      if (!section.linkUrl) return null
      return (
        <PageCta
          eyebrow="Next step"
          title={section.title || 'Talk to a counsellor'}
          lead={section.body ? section.body.replace(/<[^>]*>/g, ' ').trim() : undefined}
          primary={{ label: section.linkLabel || 'Continue', href: section.linkUrl }}
          secondary={{ label: 'Contact us', href: '/contact' }}
        />
      )

    case 'blogs':
      if (!posts.length) return null
      return (
        <section className="ap-light ap-sec">
          <div className="shell">
            <div className="tc-lede" data-reveal>
              <h2 className="ap-title">{section.title || 'From the blog'}</h2>
            </div>
            <ul className="tc-courses">
              {posts.map((post) => (
                <li key={post.id}>
                  <article className="tc-course tone-blue">
                    <div className="tc-course-body">
                      <h3>{post.title}</h3>
                      <p>{post.excerpt}</p>
                      <SmartLink className="tc-course-more" href={post.href}>
                        Read the article
                        <PageIcon name="arrowRight" size={18} />
                      </SmartLink>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )

    default:
      /* A block type this build does not know — a newer CMS, an older
         site. Nothing is better than a heading over an empty band. */
      return null
  }
}

/**
 * @param page  the published CMS page
 * @param posts recent articles, for a `blogs` block. Fetched by the
 *   route only when the page actually has one.
 */
export default function CmsPage({ page, posts = [] }: { page: any; posts?: Post[] }) {
  const sections: Section[] = Array.isArray(page.sections) ? page.sections : []
  const hasBlocks = sections.some((section) => section.visible !== false)

  /* Rebuilt when the page changes, for the same reason the index pages
     do it: the reveal observer snapshots its targets on mount, and a
     different page is a different set of them. */
  const ref = useFilteredReveal(`${page.slug}:${sections.length}`)

  /* The index down the left: every h2 and h3 in the page's prose, plus
     the titles of its rich-text blocks.

     It stops at the first call-to-action block. That block is a
     full-bleed dark band, and a rail that stayed pinned through it
     would be sitting on top of it — so the rail covers the run of
     writing before it, which on nearly every page is all of it. */
  const firstCta = sections.findIndex(
    (section) => section.type === 'cta' && section.visible !== false
  )
  const indexedSections = firstCta < 0 ? sections : sections.slice(0, firstCta)
  const laterSections = firstCta < 0 ? [] : sections.slice(firstCta)

  const nextId = createTocIds()
  const toc: TocItem[] = []
  const content = indexHeadings(page.content, nextId)
  toc.push(...content.toc)

  const titleIds = new Map<string, string>()
  const prose = indexedSections.map((section) => {
    if (section.type !== 'rich-text' || section.visible === false) return section
    if (section.title) {
      const id = nextId(section.title)
      titleIds.set(section.id, id)
      toc.push({ id, label: section.title, level: 2 })
    }
    const body = indexHeadings(section.body, nextId)
    /* Under a block title, the block's own headings read one level down. */
    toc.push(...body.toc.map((item) => (section.title ? { ...item, level: 3 as const } : item)))
    return { ...section, body: body.html }
  })

  /* One heading is not worth a rail. */
  const showToc = toc.length > 1

  return (
    <div className="tc-page tc-page--post" ref={ref}>
      <main id="main">
        <PageHero
          eyebrow={page.eyebrow || 'techcadd'}
          title={page.title}
          accent={undefined}
          lead={page.lead || page.seo?.metaDescription || ''}
          image="/lab-demo.webp"
          stats={undefined}
          facts={undefined}
          actions={undefined}
          id="page-top"
        />

        {/*
          `content` is the page's original single blob of prose, and
          migration 021 deliberately left it in place: a page written
          before blocks existed still has its writing there. It renders
          above the blocks, which is where it sat before there were
          any.
        */}
        <div className={showToc ? 'tc-toc-run' : undefined}>
          {showToc && (
            <div className="tc-toc-rail">
              <ArticleToc toc={toc} />
            </div>
          )}

          {page.content?.trim() && (
            <section className="ap-light ap-sec">
              <div className="shell tc-lede" data-reveal>
                <div className="tc-article-body" dangerouslySetInnerHTML={{ __html: content.html }} />
              </div>
            </section>
          )}

          {prose.map((section) => (
            <Block
              key={section.id}
              section={section}
              posts={posts}
              titleId={titleIds.get(section.id)}
            />
          ))}
        </div>

        {laterSections.map((section) => (
          <Block key={section.id} section={section} posts={posts} />
        ))}

        {/* A page with nothing on it at all is a mistake worth saying
            out loud rather than a blank screen with a banner. */}
        {!page.content?.trim() && !hasBlocks && (
          <section className="ap-light ap-sec">
            <div className="shell tcp-empty" data-reveal>
              <h2>This page has not been written yet.</h2>
              <p>It has been published in the CMS but carries no content so far.</p>
              <div className="tcp-empty-actions">
                <SmartLink className="ap-btn ap-btn--dark" href="/courses">
                  Browse courses
                  <PageIcon name="arrowRight" size={18} />
                </SmartLink>
              </div>
            </div>
          </section>
        )}

        {/* The closing band every other page has, unless the editor
            already ended the page with a call to action of their own. */}
        {!sections.some((section) => section.type === 'cta' && section.visible !== false) && (
          <PageCta
            eyebrow="Get in touch"
            title="Still have a question?"
            lead="Tell us what you are trying to learn and we will point you at the right course."
            primary={{ label: 'Contact us', href: '/contact' }}
            secondary={{ label: 'Browse courses', href: '/courses' }}
          />
        )}
      </main>
    </div>
  )
}

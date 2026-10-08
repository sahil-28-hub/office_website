'use client'

import { useCallback, useEffect, useState } from 'react'
import {
  ADMIN_ORIGINS,
  PREVIEW_DRAFT,
  PREVIEW_NOTICE,
  PREVIEW_READY,
  PREVIEW_SCROLL,
  isAdminOrigin,
  type PreviewKind
} from './preview-protocol'
import CoursePage from '../../views/CoursePage'
import CmsPage from '../../views/CmsPage'
import BlogPostPage from '../../views/BlogPostPage'
import EventPage from '../../views/EventPage'
import { courseFromCms } from '../../lib/courseFromCms'
import { cmsAsset, mapEvent, mapPostDetail } from '../../lib/cms'
import { scrollTargets } from '../../lib/courseSectionOrder'

/* ------------------------------------------------------------------
   What the CMS's preview pane frames.

   The pane posts the editor's unsaved form state in and this renders
   it with the site's real components, so what an editor sees is the
   page they are about to publish rather than an approximation of it.

   THIS HALF DID NOT EXIST

   The CMS has shipped a preview pane, a protocol module and a checker
   script for it; the website's end was lost somewhere in the move from
   Vite to Next — the checker still pointed at `components/preview/` at
   the repo root, which the migration emptied. So the pane framed a 404
   and the preview had never once worked.

   NOTHING IS SAVED AND NOTHING IS FETCHED

   The draft arrives by postMessage, not through the database, which is
   the whole point: it is content that does not exist yet. This route
   therefore reads nothing from the CMS API and writes nothing back.

   ORIGIN CHECKED BOTH WAYS

   A frame that renders whatever it is sent and reports back on it must
   not take instructions from any page that happens to embed it —
   `isAdminOrigin` gates the inbound messages, and every reply names a
   single origin rather than '*'.
------------------------------------------------------------------ */

/**
 * Sections the website renders from its own bundled copy rather than
 * from the CMS record, so an editor is told rather than left wondering
 * why their edit did not appear.
 *
 * A course page's FAQs and testimonials are linked by id in the CMS
 * (`faqIds`, `reviewIds`) and carry no text on the course itself, so
 * the page falls back to the generated set — see courseFromCms.
 */
const UNEDITABLE: Record<PreviewKind, string[]> = {
  course: ['faqs', 'testimonials', 'salary', 'compare'],
  page: [],
  blog: [],
  event: []
}

/*
  Block images, with their addresses resolved against the CMS.

  The CMS sends full addresses now, but a draft from a build that does
  not would carry "/uploads/photo.png" — which this page would ask its
  own host for and get a 404. `cmsAsset` is what the live site applies to
  every uploaded file, so the preview applies it too; an address that is
  already absolute passes through untouched.
*/
function withPublicMedia(draft: Record<string, any> | null) {
  if (!draft || !Array.isArray(draft.sections)) return draft
  return {
    ...draft,
    sections: draft.sections.map((block: any) =>
      block?.media?.url ? { ...block, media: { ...block.media, url: cmsAsset(block.media.url) } } : block
    )
  }
}

export default function PreviewFrame({ kind }: { kind: PreviewKind }) {
  const [draft, setDraft] = useState<Record<string, any> | null>(null)

  /** Replies go to the admin that framed us, never to '*'. */
  const reply = useCallback((message: Record<string, unknown>, origin: string) => {
    window.parent?.postMessage(message, origin)
  }, [])

  /* Marks the document while a preview is mounted, so preview.css can
     drop the cookie notice. Inside the CMS the frame is a third-party
     context with its own storage, so the notice would come back on every
     load and sit over the page the editor is trying to check. */
  useEffect(() => {
    document.documentElement.classList.add('is-preview')
    return () => document.documentElement.classList.remove('is-preview')
  }, [])

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      if (!isAdminOrigin(event.origin)) return

      const data = event.data as { type?: string; kind?: string; payload?: any; section?: string }
      /* Two panes can be open in two tabs; each only wants its own. */
      if (!data || data.kind !== kind) return

      if (data.type === PREVIEW_DRAFT) {
        setDraft(withPublicMedia(data.payload ?? null))
        return
      }

      if (data.type === PREVIEW_SCROLL && data.section) {
        /*
          The editor moved to a section, so the preview follows.

          By id. The CMS sends the band's real element id; an older
          build sends its own section name ('hero', 'modules'), which
          `scrollTargets` translates — nothing on the page is called that,
          so without the translation every tab scrolled nowhere. A
          section the page did not render — one the editor has hidden,
          or one with no content yet — simply has no element, and doing
          nothing is better than jumping somewhere arbitrary.
        */
        const target = scrollTargets(data.section)
          .map((id) => document.getElementById(id))
          .find(Boolean)
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    window.addEventListener('message', onMessage)

    /*
      Announce readiness to every origin the admin may be on.

      The pane posts its first draft only after hearing this: posting
      on the iframe's `load` event would race, because the frame fires
      `load` before React has mounted this listener.
    */
    for (const origin of ADMIN_ORIGINS) {
      reply({ type: PREVIEW_READY, kind }, origin)
      reply({ type: PREVIEW_NOTICE, kind, uneditable: UNEDITABLE[kind] }, origin)
    }

    return () => window.removeEventListener('message', onMessage)
  }, [kind, reply])

  if (!draft) {
    return (
      <div className="pv-empty">
        <p>Waiting for the editor…</p>
        <p className="pv-empty-note">
          This page renders the draft the CMS sends it. Opening it directly shows nothing,
          which is expected.
        </p>
      </div>
    )
  }

  if (kind === 'page') {
    /* The page view reads `sections` and `content`, which is exactly
       what the pane sends — no mapping needed. */
    return <CmsPage page={draft} posts={[]} />
  }

  if (kind === 'blog') {
    /* Through the same mapper the live article goes through, so the
       date, the reading time and the cover are worked out the same way.

       The state is 'preview' rather than 'ready': the article renders
       for anything that is not loading or an error, and the comment
       thread — which would ask the CMS about a slug that may not be
       saved yet — only mounts on 'ready'. */
    const post = mapPostDetail({ ...draft, title: draft.title || 'Untitled article' })
    return <BlogPostPage slug={draft.slug || 'preview'} initialPost={post} initialState="preview" />
  }

  if (kind === 'event') {
    return <EventPage event={mapEvent({ ...draft, title: draft.title || 'Untitled event' })} />
  }

  /*
    A draft has no saved record behind it, so the whole course is built
    from the message — the same path a CMS-only course takes on the
    live site, through the same factory. `slug` and `title` are the two
    fields `courseFromCms` needs before it will build anything; a form
    opened blank has neither yet.
  */
  const course = courseFromCms(draft)

  if (!course) {
    return (
      <div className="pv-empty">
        <p>Give the course a title and a slug to see it here.</p>
      </div>
    )
  }

  return <CoursePage slug={course.slug} cmsCourse={course} />
}

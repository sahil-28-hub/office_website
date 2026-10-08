import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PreviewFrame from '@/components/preview/PreviewFrame'
import type { PreviewKind } from '@/components/preview/preview-protocol'
import './preview.css'

/* ==================================================================
   /preview/<course|page|blog|event> — what the CMS's editor frames.

   The CMS has shipped a preview pane, a protocol module and a checker
   script for it since it was built. This route is the other end, and
   it did not exist: the checker still looked for the website's half at
   `components/preview/` in the repo root, which the move to Next
   emptied, so the pane had been framing a 404 the whole time.

   Never indexed and never cached. It renders unsaved drafts posted in
   by an editor, so there is nothing here a crawler should see and
   nothing that would be correct a second time.
================================================================== */

export const metadata: Metadata = {
  title: 'Preview — techcadd CMS',
  robots: { index: false, follow: false, nocache: true },
}

/* The draft arrives by postMessage, so there is nothing to prerender
   and nothing to revalidate. */
export const dynamic = 'force-dynamic'

const KINDS = ['course', 'page', 'blog', 'event'] as const

export function generateStaticParams() {
  return KINDS.map((kind) => ({ kind }))
}

export default async function PreviewRoute({
  params,
}: {
  params: Promise<{ kind: string }>
}) {
  const { kind } = await params

  /* Only the kinds the protocol names. Anything else is a typo in a URL,
     not a preview. */
  if (!KINDS.includes(kind as PreviewKind)) notFound()

  return <PreviewFrame kind={kind as PreviewKind} />
}

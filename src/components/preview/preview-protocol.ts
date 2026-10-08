/**
 * The website half of the contract in the CMS's
 * src/components/preview/previewProtocol.ts. The two files must agree; they
 * are separate only because the apps do not share a module graph.
 *
 * The CMS ships a checker for exactly this — `npm run check:protocol` in
 * cms-techcadd/frontend compares the `PREVIEW_*` constants in both files and
 * fails if they drift. It is worth running after touching either side,
 * because the failure it catches is silent: the pane posts a draft, the frame
 * listens for a different string, and the preview shows nothing at all with
 * no error in either console.
 */

export const PREVIEW_READY = 'techcadd:preview-ready'
export const PREVIEW_DRAFT = 'techcadd:preview-draft'
export const PREVIEW_SCROLL = 'techcadd:preview-scroll'

/** Sent back to the pane: things about the rendered page worth surfacing. */
export const PREVIEW_NOTICE = 'techcadd:preview-notice'

export type PreviewKind = 'course' | 'page' | 'blog' | 'event'

/**
 * Where the CMS admin is served from — the only origin this page will accept
 * a draft from, and the only one it posts back to.
 *
 * A preview frame renders unsaved content and reports on it, so a wildcard
 * here would let any page that framed us feed it content and read the
 * replies. Comma-separated because Vite falls back to 5174/5175 when 5173 is
 * taken, and the CMS's own CORS list carries the same three for the same
 * reason.
 */
const RAW =
  process.env.NEXT_PUBLIC_CMS_ADMIN_ORIGIN ??
  'http://localhost:5173,http://localhost:5174,http://localhost:5175'

export const ADMIN_ORIGINS = RAW.split(',')
  .map((origin) => origin.trim().replace(/\/$/, ''))
  .filter(Boolean)

/** Is this message from an origin allowed to drive the preview? */
export function isAdminOrigin(origin: string): boolean {
  return ADMIN_ORIGINS.includes(origin.replace(/\/$/, ''))
}

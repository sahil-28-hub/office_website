'use client'

import { createContext, useContext } from 'react'
import type { SiteSettings } from '../../lib/siteSettings'

/* ==================================================================
   The business's own details, available anywhere below the layout.

   WHY A CONTEXT AND NOT MORE PROPS

   The footer and the contact page take these as props, which is right:
   each is rendered by one route that already fetches them.

   The closing CTA band is different. It prints the phone number and it
   is mounted from sixteen different views — the home page, every
   course page, the blog, the FAQ, the legal pages. Threading a prop
   through sixteen call sites, several of them lazily imported, would
   mean sixteen chances to miss one, and a missed one is exactly the
   bug this exists to fix: a page quoting a different phone number from
   the page beside it.

   So the layout resolves the settings once and publishes them here,
   and the CTA reads them wherever it happens to be mounted.

   The default is the bundled copy, so a component rendered outside the
   provider — a test, a storybook, a stray render — still prints a real
   number rather than nothing.
================================================================== */

const SiteSettingsContext = createContext<SiteSettings | null>(null)

export function SiteSettingsProvider({
  settings,
  children
}: {
  settings: SiteSettings
  children: React.ReactNode
}) {
  return <SiteSettingsContext.Provider value={settings}>{children}</SiteSettingsContext.Provider>
}

/**
 * The resolved site settings, or `null` outside the provider.
 *
 * Returning null rather than throwing: a component that only wants the
 * phone number should fall back to its bundled one, not take the page
 * down because of where it was mounted.
 */
export function useSiteSettings(): SiteSettings | null {
  return useContext(SiteSettingsContext)
}

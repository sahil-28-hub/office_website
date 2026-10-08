import type { Metadata } from 'next'
import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import BookDemoModal from '@/components/common/BookDemoModal'
import CookieConsent from '@/components/common/CookieConsent'
import Cursor from '@/components/common/Cursor'
import JsonLd from '@/components/seo/JsonLd'
import BhuviChat from '@/components/common/BhuviChat'
import FloatingDock from '@/components/common/FloatingDock'
import { organizationSchema, websiteSchema, SITE_URL } from '@/lib/structuredData'
import { getSiteSettings } from '@/lib/siteSettings'
import { SiteSettingsProvider } from '@/components/common/SiteSettingsProvider'
import { cmsFetchList } from '@/lib/cms.server'
import '@/styles/tokens.css'
import '@/styles/base.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
})

const SITE_TITLE =
  'TechCadd Computer Education | Best Computer Training Institute Ludhiana – IT, AI, Tally, Digital Marketing, CAD/CAM & AutoCAD'
const SITE_DESCRIPTION =
  'TechCadd Computer Education — a leading computer training institute in Ludhiana for IT, AI, Tally, Digital Marketing, CAD/CAM & AutoCAD. Practical, job-focused training with placement support.'
const SITE_DESCRIPTION_SHORT =
  'Practical, job-focused training in IT, AI, Tally, Digital Marketing, CAD/CAM & AutoCAD, with placement support.'

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings()

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: SITE_TITLE,
      template: '%s | techcadd',
    },
    description: SITE_DESCRIPTION,
    keywords: [
      'techcadd',
      'computer training institute Ludhiana',
      'IT courses Ludhiana',
      'AI course Ludhiana',
      'Python course Ludhiana',
      'Java course Ludhiana',
      'MERN Stack course',
      'data science course Ludhiana',
      'digital marketing course Ludhiana',
      'cyber security course',
      'cloud computing course',
      'industrial training Ludhiana',
      'best computer institute Punjab',
      'Tally course Ludhiana',
      'CAD/CAM course Ludhiana',
      'AutoCAD course Ludhiana',
      'graphic design course Ludhiana',
    ],
    authors: [{ name: 'TechCadd Computer Education' }],
    creator: 'techcadd',
    publisher: 'TechCadd Computer Education',
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
    alternates: {
      canonical: '/',
    },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      siteName: settings.siteName,
      title: SITE_TITLE,
      description: SITE_DESCRIPTION_SHORT,
      images: [
        {
          url: '/tece_new_logo.png',
          width: 900,
          height: 231,
          alt: 'TechCadd — Your Skill & Technology Partner',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_TITLE,
      description: SITE_DESCRIPTION_SHORT,
      images: ['/tece_new_logo.png'],
    },
    icons: {
      icon: [
        { url: '/favicons/favicon.ico', sizes: 'any' },
        { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
      apple: '/favicons/apple-touch-icon.png',
    },
    manifest: '/favicons/site.webmanifest',
    other: {
      'theme-color': '#0b1a4d',
      /* Where this business is, for a search that is local. Region and
         place only: no coordinates are published on this site, and a
         guessed pair would pin the centre in the wrong street. */
      'geo.region': 'IN-PB',
      'geo.placename': 'Ludhiana',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [settings, navPages] = await Promise.all([
    getSiteSettings(),
    cmsFetchList<{ slug: string; label: string; placement: string }>('/nav-pages')
  ])

  const inHeader = (navPages ?? []).filter((page) => page.placement === 'header')
  const inFooter = (navPages ?? []).filter((page) => page.placement === 'footer')

  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plusJakarta.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <JsonLd data={organizationSchema(settings)} />
        <JsonLd data={websiteSchema()} />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteSettingsProvider settings={settings}>
          <Navbar navPages={inHeader} />
          {children}
          <Footer settings={settings} navPages={inFooter} />
          {/* bottom-right: WhatsApp, with the social dock above it */}
          <FloatingDock />
        </SiteSettingsProvider>
        {/* bottom-left: Ask Bhuvi */}
        <BhuviChat />
        <BookDemoModal />
        <CookieConsent />
        <Cursor />
      </body>
    </html>
  )
}

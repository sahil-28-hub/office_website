import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Page not found — techcadd',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Page not found</p>
      <Link
        href="/"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#2563eb',
          color: '#fff',
          borderRadius: '0.375rem',
          textDecoration: 'none',
        }}
      >
        Go back home
      </Link>
    </div>
  )
}

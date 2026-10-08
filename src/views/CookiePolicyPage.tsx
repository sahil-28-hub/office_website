'use client'

import LegalPage from '@/components/legal/LegalPage'
import { COOKIE_POLICY } from '../data/legal'

export default function CookiePolicyPage() {
  return <LegalPage doc={COOKIE_POLICY} />
}

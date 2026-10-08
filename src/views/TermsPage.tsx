'use client'

import LegalPage from '@/components/legal/LegalPage'
import { TERMS } from '../data/legal'

export default function TermsPage() {
  return <LegalPage doc={TERMS} />
}

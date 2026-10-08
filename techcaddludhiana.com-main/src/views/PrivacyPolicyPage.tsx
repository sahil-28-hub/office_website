'use client'

import LegalPage from '@/components/legal/LegalPage'
import { PRIVACY_POLICY } from '../data/legal'

export default function PrivacyPolicyPage() {
  return <LegalPage doc={PRIVACY_POLICY} />
}

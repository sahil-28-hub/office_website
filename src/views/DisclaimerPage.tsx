'use client'

import LegalPage from '@/components/legal/LegalPage'
import { DISCLAIMER } from '../data/legal'

export default function DisclaimerPage() {
  return <LegalPage doc={DISCLAIMER} />
}

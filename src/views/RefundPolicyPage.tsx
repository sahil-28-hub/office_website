'use client'

import LegalPage from '@/components/legal/LegalPage'
import { REFUND_POLICY } from '../data/legal'

export default function RefundPolicyPage() {
  return <LegalPage doc={REFUND_POLICY} />
}

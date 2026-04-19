import { FlavoursPageContent } from '@/components/flavours/FlavoursPageContent'
import { PageLayout } from '@/components/layout/PageLayout'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Flavours",
  description: "Explore our delicious range of roasted makhana flavours - from Classic Salted to fiery Peri Peri, there's a Crunchley for everyone.",
}

export default function FlavoursPage() {
  return (
    <PageLayout>
      <FlavoursPageContent />
    </PageLayout>
  )
}

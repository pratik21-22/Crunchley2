import { HomePageContent } from '@/components/home/HomePageContent'
import { PageLayout } from '@/components/layout/PageLayout'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description: "Crunchley - Premium roasted makhana in bold flavours, made for healthy everyday snacking.",
}

export default function HomePage() {
  return (
    <PageLayout>
      <HomePageContent />
    </PageLayout>
  )
}

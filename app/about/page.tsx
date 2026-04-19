import { AboutPageContent } from '@/components/about/AboutPageContent'
import { PageLayout } from '@/components/layout/PageLayout'
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description: "Discover the Crunchley story - a healthy snacks brand starting with roasted makhana and expanding into more nutritious snack categories.",
}

export default function AboutPage() {
  return (
    <PageLayout>
      <AboutPageContent />
    </PageLayout>
  )
}

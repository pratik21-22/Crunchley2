import { ContactFormSection } from '@/components/contact/ContactFormSection'
import { ContactInfoSidebar } from '@/components/contact/ContactInfoSidebar'

export function ContactMainSection() {
  return (
    <section className="border-t border-border bg-secondary/30 py-16 lg:py-24">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-10 lg:gap-12 lg:grid-cols-2">
            <ContactFormSection />
            <ContactInfoSidebar />
          </div>
        </div>
      </div>
    </section>
  )
}

import { PageHero } from '@/components/shared/PageHero'
import { ContactMainSection } from '@/components/contact/ContactMainSection'
import { ContactMethodsSection } from '@/components/contact/ContactMethodsSection'
import { FaqCtaSection } from '@/components/contact/ContactFormSection'

export function ContactPageContent() {
  return (
    <>
      <PageHero
        badge="Get In Touch"
        title="We'd Love to"
        titleHighlight="Hear From You"
        description="Have questions about our products, orders, or partnerships? Our friendly team is here to help you crunch into happiness."
        variant="primary"
      />
      <ContactMethodsSection />
      <ContactMainSection />
      <FaqCtaSection />
    </>
  )
}

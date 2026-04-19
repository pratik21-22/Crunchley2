import { PageHero } from '@/components/shared/PageHero'
import { BenefitsStrip } from '@/components/business/BenefitsStrip'
import { BusinessEnquiryFormSection } from '@/components/business/BusinessEnquiryFormSection'
import { TrustSection } from '@/components/business/TrustSection'

export function BusinessPageContent() {
  return (
    <>
      <PageHero
        badge="Partner With Us"
        title="Grow Your Business with"
        titleHighlight="Crunchley"
        description="Join our network of successful retailers, distributors, and food service partners. Let's create something extraordinary together."
        variant="primary"
      />
      <BenefitsStrip />
      <BusinessEnquiryFormSection />
      <TrustSection />
    </>
  )
}

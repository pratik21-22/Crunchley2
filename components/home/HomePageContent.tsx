import { BusinessCTA } from '@/components/home/BusinessCTA'
import { FeaturedFlavours } from '@/components/home/FeaturedFlavours'
import { HeroSection } from '@/components/home/HeroSection'
import { Testimonials } from '@/components/home/Testimonials'
import { TrustStrip } from '@/components/home/TrustStrip'
import { WhyCrunchley } from '@/components/home/WhyCrunchley'

export function HomePageContent() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <FeaturedFlavours />
      <WhyCrunchley />
      <Testimonials />
      <BusinessCTA />
    </>
  )
}

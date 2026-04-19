import { PageHero } from '@/components/shared/PageHero'
import { FlavourHighlightsStrip } from '@/components/flavours/FlavourHighlightsStrip'
import { FlavoursCtaSection } from '@/components/flavours/FlavoursCtaSection'
import { FlavoursGrid } from '@/components/flavours/FlavoursGrid'
import { FlavoursNutritionSection } from '@/components/flavours/FlavoursNutritionSection'

export function FlavoursPageContent() {
  return (
    <>
      <PageHero
        badge="Our Collection"
        title="Discover Your"
        titleHighlight="Perfect Flavour"
        description="From the classic crunch to bold adventures, explore our range of handcrafted makhana snacks. There's a Crunchley for every mood and moment."
      />
      <FlavourHighlightsStrip />
      <FlavoursGrid />
      <FlavoursCtaSection />
      <FlavoursNutritionSection />
    </>
  )
}

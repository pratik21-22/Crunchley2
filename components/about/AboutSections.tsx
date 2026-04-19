import Image from 'next/image'
import { SectionTitle } from '@/components/shared/SectionTitle'
import { aboutValues, missionVision, qualityCards } from '@/data/about'

export function AboutHeroSection() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-secondary via-background to-secondary/50" />
      <div className="container mx-auto px-5 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 mb-5 text-sm font-medium text-accent bg-accent/10 rounded-full">
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] text-balance">
              Building a Better <span className="text-primary">Healthy Snacks</span> Brand
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl text-pretty leading-relaxed">
              Crunchley is a healthy snacks brand focused on everyday nutrition and taste. We are starting with roasted makhana and steadily expanding into more wholesome snack categories.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/20 rounded-3xl blur-3xl" aria-hidden="true" />
            <Image
              src="/images/about-hero.jpg"
              alt="Lotus seed harvesting at golden hour"
              width={600}
              height={500}
              className="relative rounded-3xl object-cover shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export function BrandStorySection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionTitle badge="The Beginning" title="Why We Started Crunchley" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                Crunchley began with a practical question: why should people choose between better nutrition and better taste? We wanted to build snacks that fit real routines - office breaks, school tiffins, travel, and everyday cravings.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                We started with roasted makhana because it is naturally light, versatile, and familiar to Indian households. It gave us the right foundation to develop flavourful snacks with a cleaner, roasted profile.
              </p>
            </div>
            <div className="space-y-5">
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                Our team has focused on roasting methods, ingredient selection, and flavour development so each product balances crunch, taste, and nutrition in a way people can enjoy regularly.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base lg:text-lg">
                As we grow, Crunchley is expanding beyond makhana into roasted dry fruits and other nutritious snack formats - always with the same commitment to honest quality and great flavour.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function MissionVisionSection() {
  return (
    <section className="py-20 lg:py-28 bg-primary">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {[missionVision.mission, missionVision.vision].map((item) => (
            <article
              key={item.title}
              className="bg-primary-foreground/10 backdrop-blur-sm p-8 lg:p-10 rounded-2xl lg:rounded-3xl border border-primary-foreground/20"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-accent flex items-center justify-center mb-5 lg:mb-6">
                <item.icon size={26} className="text-accent-foreground" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-primary-foreground mb-4">{item.title}</h3>
              <p className="text-primary-foreground/80 text-base lg:text-lg leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PhilosophySection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl" aria-hidden="true" />
            <Image
              src="/images/about-quality.jpg"
              alt="Quality craftsmanship in production"
              width={600}
              height={500}
              className="relative rounded-3xl object-cover shadow-xl"
            />
          </div>

          <div className="order-1 lg:order-2">
            <SectionTitle badge="Our Philosophy" title="Healthy Snacking, Built for Everyday Life" align="left" className="mb-6" />
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              We believe healthy snacking should be practical, delicious, and easy to trust. Our products are designed for real lifestyles where people want convenient options without compromising on ingredient quality.
            </p>
            <p className="mt-4 text-muted-foreground text-base lg:text-lg leading-relaxed">
              We are beginning this journey with roasted makhana and taking the same approach forward into new categories like roasted dry fruits and other nutritious snacks. Each launch follows the same standard: balanced nutrition, bold flavours, and transparent quality.
            </p>

            <div className="mt-8 lg:mt-10 grid grid-cols-2 gap-4 lg:gap-6">
              <div className="text-center p-5 lg:p-6 bg-card rounded-xl lg:rounded-2xl border border-border">
                <span className="text-3xl lg:text-4xl font-bold text-accent">Roasted</span>
                <p className="mt-2 text-sm text-muted-foreground">Not Fried Approach</p>
              </div>
              <div className="text-center p-5 lg:p-6 bg-card rounded-xl lg:rounded-2xl border border-border">
                <span className="text-3xl lg:text-4xl font-bold text-accent">Growing</span>
                <p className="mt-2 text-sm text-muted-foreground">Healthy Snack Portfolio</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function QualitySection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-5 lg:px-8">
        <SectionTitle
          badge="Why Choose Us"
          title="What Makes Crunchley Different"
          description="A healthy snacks brand built on better processes, better ingredients, and a long-term product vision."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {qualityCards.map((item) => (
            <article
              key={item.title}
              className="bg-card p-6 lg:p-8 rounded-2xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-accent/10 flex items-center justify-center mb-5 lg:mb-6">
                <item.icon size={26} className="text-accent" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ValuesSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-5 lg:px-8">
        <SectionTitle badge="What We Stand For" title="Our Core Values" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {aboutValues.map((value) => (
            <article
              key={value.title}
              className="group bg-card p-6 lg:p-8 rounded-2xl border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 lg:w-16 lg:h-16 mx-auto rounded-xl lg:rounded-2xl bg-accent/10 flex items-center justify-center mb-5 lg:mb-6 group-hover:bg-accent group-hover:scale-105 transition-all duration-300">
                <value.icon size={28} className="text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{value.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

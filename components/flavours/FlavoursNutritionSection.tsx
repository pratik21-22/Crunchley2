import { SectionTitle } from '@/components/shared/SectionTitle'
import { nutritionStats } from '@/data/flavours'

export function FlavoursNutritionSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionTitle badge="Why Makhana?" title="The Superfood Behind the Crunch" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {nutritionStats.map((stat) => (
              <div key={stat.label} className="text-center p-5 lg:p-6 bg-card rounded-xl lg:rounded-2xl border border-border">
                <span className="text-3xl lg:text-4xl font-bold text-accent">{stat.value}</span>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 lg:mt-8 text-center text-muted-foreground text-sm">
            *Nutritional values are approximate and may vary based on flavour.
          </p>
        </div>
      </div>
    </section>
  )
}

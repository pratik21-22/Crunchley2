import { Flame, Leaf, Sparkles } from 'lucide-react'
import { flavourHighlights } from '@/data/flavours'

const iconMap = { Flame, Leaf, Sparkles }

export function FlavourHighlightsStrip() {
  return (
    <section className="py-8 lg:py-10 bg-primary">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {flavourHighlights.map((item) => {
            const Icon = iconMap[item.icon]
            return (
              <div key={item.title} className="flex items-center gap-4 justify-center md:justify-start">
                <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary-foreground text-sm lg:text-base">{item.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

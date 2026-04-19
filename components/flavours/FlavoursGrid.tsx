import Image from 'next/image'
import { flavours } from '@/data/flavours'

export function FlavoursGrid() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {flavours.map((flavour) => (
            <article
              key={flavour.name}
              className="group bg-card rounded-2xl lg:rounded-3xl overflow-hidden border border-border hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden">
                <div
                  className={`absolute inset-0 bg-linear-to-br ${flavour.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10`}
                  aria-hidden="true"
                />
                <Image
                  src={flavour.image}
                  alt={flavour.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div
                  className="absolute inset-0 bg-linear-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                  aria-hidden="true"
                />

                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-30">
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-accent text-accent-foreground rounded-full">
                    {flavour.tagline}
                  </span>
                </div>
              </div>

              <div className="p-5 lg:p-6">
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {flavour.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3 text-sm lg:text-base">
                  {flavour.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {flavour.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

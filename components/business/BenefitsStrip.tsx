import { businessBenefits } from '@/data/business'

export function BenefitsStrip() {
  return (
    <section className="border-b border-border bg-card py-10 lg:py-12">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {businessBenefits.map((benefit) => (
            <div key={benefit.title} className="flex items-start gap-3 lg:gap-4">
              <div className="flex h-11 w-11 lg:h-12 lg:w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <benefit.icon className="h-5 w-5 lg:h-6 lg:w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm lg:text-base">{benefit.title}</h3>
                <p className="text-xs lg:text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

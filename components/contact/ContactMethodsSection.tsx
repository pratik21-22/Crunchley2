import Link from 'next/link'
import { contactMethods } from '@/data/contact'

export function ContactMethodsSection() {
  return (
    <section className="py-14 lg:py-20">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactMethods.map((method) => (
            <Link
              key={method.title}
              href={method.href}
              className="group rounded-xl lg:rounded-2xl border border-border bg-card p-5 lg:p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <div className="mb-4 flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <method.icon className="h-6 w-6 lg:h-7 lg:w-7 text-primary" />
              </div>
              <h3 className="mb-1 font-semibold text-foreground">{method.title}</h3>
              <p className="mb-1 text-foreground text-sm lg:text-base">{method.value}</p>
              <p className="text-xs lg:text-sm text-muted-foreground">{method.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

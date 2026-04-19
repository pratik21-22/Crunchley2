import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SectionTitle } from '@/components/shared/SectionTitle'

export function FlavoursCtaSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-5 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <SectionTitle
            badge="Can't Decide?"
            title="Try Our Variety Pack"
            description="Experience all six flavours in one pack. Perfect for finding your favourite or sharing with friends and family."
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Contact Us to Order
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/business-enquiry"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Business Enquiry
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

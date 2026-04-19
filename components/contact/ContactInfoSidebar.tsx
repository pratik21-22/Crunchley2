import Link from 'next/link'
import { Clock, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { officeHours, socialLinks } from '@/data/contact'

export function ContactInfoSidebar() {
  return (
    <div className="flex flex-col gap-5 lg:gap-6">
      <div className="rounded-xl lg:rounded-2xl border border-border bg-card p-5 lg:p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <Clock className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-base lg:text-lg font-semibold text-foreground">Office Hours</h3>
        </div>
        <div className="space-y-2.5">
          {officeHours.map((item) => (
            <div key={item.day} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{item.day}</span>
              <span className="font-medium text-foreground">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl lg:rounded-2xl border border-border bg-card p-5 lg:p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
            <MapPin className="h-5 w-5 text-primary" />
          </div>
          <h3 className="text-base lg:text-lg font-semibold text-foreground">Visit Us</h3>
        </div>
        <address className="not-italic text-muted-foreground text-sm lg:text-base leading-relaxed">
          <p>Crunchley</p>
          <p>Anandpuri Ward No. 23, Shivpuri</p>
          <p>Purnia, Bihar 854301</p>
          <p>India</p>
        </address>
        <Button variant="outline" size="sm" className="mt-4" asChild>
          <Link href="https://maps.google.com/?q=Anandpuri+Ward+No.+23,+Shivpuri,+Purnia,+Bihar+854301" target="_blank" rel="noopener noreferrer">
            Get Directions
          </Link>
        </Button>
      </div>

      <div className="rounded-xl lg:rounded-2xl border border-border bg-card p-5 lg:p-6">
        <h3 className="mb-3 lg:mb-4 text-base lg:text-lg font-semibold text-foreground">Follow Us</h3>
        <p className="mb-4 text-sm text-muted-foreground">
          Stay updated with our latest products, offers, and healthy snacking tips.
        </p>
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 lg:h-12 lg:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={social.label}
            >
              <social.icon className="h-5 w-5" />
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-xl lg:rounded-2xl bg-accent/10 p-5 lg:p-6">
        <h3 className="mb-3 font-semibold text-foreground">Looking for something else?</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link href="/flavours">View Our Flavours</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/business-enquiry">Business Enquiry</Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href="/about">About Us</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

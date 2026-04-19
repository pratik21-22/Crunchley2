import Link from 'next/link'
import { Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { contactMethods, footerQuickLinks, footerSocialLinks } from '@/data/site'

const socialIconMap = {
  Instagram,
  Twitter,
  'Twitter / X': Twitter,
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-5 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-block text-2xl font-bold tracking-tight hover:text-accent transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary rounded-sm"
            >
              Crunchley
            </Link>
            <p className="mt-4 text-primary-foreground/75 text-sm leading-relaxed max-w-xs">
              Premium, healthy snacks crafted with care. Experience the perfect
              crunch in every bite.
            </p>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-5 text-accent">Quick Links</h3>
            <ul className="space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/75 hover:text-accent transition-colors duration-300 text-sm inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-5 text-accent">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/75 text-sm leading-relaxed">
                  {contactMethods.addressLines[0]}
                  <br />
                  {contactMethods.addressLines[1]}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent shrink-0" />
                <a
                  href={contactMethods.phoneHref}
                  className="text-primary-foreground/75 hover:text-accent transition-colors duration-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                >
                  {contactMethods.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent shrink-0" />
                <a
                  href={contactMethods.emailHref}
                  className="text-primary-foreground/75 hover:text-accent transition-colors duration-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
                >
                  {contactMethods.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-5 text-accent">Follow Us</h3>
            <div className="flex gap-3">
              {footerSocialLinks.map((social) => {
                const Icon = socialIconMap[social.label as keyof typeof socialIconMap]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-11 h-11 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-primary hover:scale-105 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
            <p className="mt-5 text-primary-foreground/60 text-sm leading-relaxed">
              Stay connected for the latest flavours and special offers.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              &copy; {new Date().getFullYear()} Crunchley. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-primary-foreground/60 hover:text-accent transition-colors duration-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-primary-foreground/60 hover:text-accent transition-colors duration-300 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

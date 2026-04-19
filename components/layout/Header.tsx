"use client"

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks } from '@/data/site'
import { MobileMenu } from '@/components/layout/MobileMenu'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out',
        isScrolled
          ? 'bg-card/92 backdrop-blur-xl shadow-[0_12px_32px_-16px_rgba(20,52,37,0.45)] py-3'
          : 'bg-transparent py-4 lg:py-5'
      )}
    >
      <nav className="container mx-auto px-5 lg:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 rounded-xl p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="relative flex h-10 w-10 items-center justify-center rounded-[14px] bg-primary shadow-[0_12px_24px_-16px_rgba(20,52,37,0.82)] ring-1 ring-primary/30">
            <span className="text-[0.86rem] font-black tracking-[0.006em] text-accent">C</span>
            <span className="absolute inset-1.25 rounded-[10px] border border-accent/42" aria-hidden="true" />
            <span className="absolute bottom-1.5 right-1.5 h-1 w-1 rounded-full bg-accent/60" aria-hidden="true" />
          </span>
          <span className="text-[1.03rem] md:text-[1.16rem] font-extrabold uppercase tracking-[0.062em] text-accent leading-none whitespace-nowrap [text-shadow:0_1px_0_rgba(0,0,0,0.08)]">
            Crunchley
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1.5 rounded-full border border-border/80 bg-card/60 backdrop-blur px-1.5 py-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                    isActive
                      ? 'text-primary-foreground bg-primary shadow-[0_10px_22px_-16px_rgba(20,52,37,0.85)] ring-1 ring-primary/50'
                      : 'text-foreground/70 hover:text-foreground hover:bg-secondary/60'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2.5 -mr-2.5 text-foreground hover:text-primary hover:bg-secondary/60 rounded-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">{isMobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        links={navLinks}
        pathname={pathname}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  )
}

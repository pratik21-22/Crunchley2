import Link from 'next/link'
import { cn } from '@/lib/utils'

interface NavLink {
  href: string
  label: string
}

interface MobileMenuProps {
  isOpen: boolean
  links: NavLink[]
  pathname: string
  onClose: () => void
}

export function MobileMenu({ isOpen, links, pathname, onClose }: MobileMenuProps) {
  return (
    <>
      <div
        className={cn(
          'lg:hidden fixed inset-0 top-15 bg-foreground/20 backdrop-blur-sm transition-opacity duration-300 z-40',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={cn(
          'lg:hidden fixed top-15 left-0 right-0 bg-card/95 backdrop-blur-xl border-b border-border shadow-xl z-50 transition-all duration-300 ease-out',
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
      >
        <ul className="container mx-auto px-5 py-4 flex flex-col gap-1.5">
          {links.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'flex items-center py-3.5 px-4 rounded-xl transition-all duration-300 font-semibold',
                    isActive
                      ? 'text-primary-foreground bg-primary shadow-[0_12px_24px_-18px_rgba(20,52,37,0.78)] ring-1 ring-primary/50'
                      : 'text-foreground/70 hover:text-primary hover:bg-secondary/60'
                  )}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

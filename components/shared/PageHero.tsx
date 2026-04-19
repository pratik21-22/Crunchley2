import { cn } from '@/lib/utils'

interface PageHeroProps {
  badge?: string
  title: string
  titleHighlight?: string
  description?: string
  variant?: 'primary' | 'secondary'
  children?: React.ReactNode
  className?: string
}

export function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  variant = 'secondary',
  children,
  className,
}: PageHeroProps) {
  const isPrimary = variant === 'primary'

  return (
    <section
      className={cn(
        'relative overflow-hidden py-20 lg:py-28',
        isPrimary ? 'bg-primary' : 'bg-linear-to-br from-secondary via-background to-secondary/50',
        className
      )}
    >
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className={cn(
            'absolute top-10 right-1/4 h-72 w-72 rounded-full blur-3xl',
            isPrimary ? 'bg-accent' : 'bg-primary'
          )}
        />
        <div
          className={cn(
            'absolute bottom-10 left-1/4 h-56 w-56 rounded-full blur-3xl',
            isPrimary ? 'bg-primary-foreground' : 'bg-accent'
          )}
        />
      </div>

      <div className="container relative mx-auto px-5 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <span
              className={cn(
                'mb-5 inline-block rounded-full px-4 py-1.5 text-sm font-medium',
                isPrimary ? 'bg-accent/20 text-accent' : 'bg-accent/10 text-accent'
              )}
            >
              {badge}
            </span>
          )}
          <h1
            className={cn(
              'text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance leading-tight',
              isPrimary ? 'text-primary-foreground' : 'text-foreground'
            )}
          >
            {title}{' '}
            {titleHighlight && (
              <span className={isPrimary ? 'text-accent' : 'text-primary'}>
                {titleHighlight}
              </span>
            )}
          </h1>
          {description && (
            <p
              className={cn(
                'mx-auto mt-6 max-w-2xl text-lg text-pretty leading-relaxed',
                isPrimary ? 'text-primary-foreground/80' : 'text-muted-foreground'
              )}
            >
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  )
}

import { cn } from '@/lib/utils'

interface SectionTitleProps {
  badge?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionTitle({
  badge,
  title,
  description,
  align = 'center',
  className,
}: SectionTitleProps) {
  return (
    <div className={cn('mb-12 lg:mb-16', align === 'center' && 'text-center', className)}>
      {badge && (
        <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium text-accent bg-accent/10 rounded-full">
          {badge}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-muted-foreground text-lg leading-relaxed text-pretty',
            align === 'center' && 'max-w-2xl mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}

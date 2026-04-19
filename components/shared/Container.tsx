import { cn } from '@/lib/utils'

type ContainerProps = React.HTMLAttributes<HTMLDivElement>

export function Container({ className, ...props }: ContainerProps) {
  return <div className={cn('container mx-auto px-5 lg:px-8', className)} {...props} />
}

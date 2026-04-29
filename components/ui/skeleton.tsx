import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        'rounded-md animate-pulse bg-neutral-200/90 dark:bg-neutral-700/70',
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }

import { cn } from '@/lib/utils'

/** Soft gold wash — CSS only, no SVG gaussian blur */
export function Spotlight({ className }) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,58,0.22),transparent_55%)]',
        className,
      )}
      aria-hidden
    />
  )
}

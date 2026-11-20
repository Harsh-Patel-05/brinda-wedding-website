import { cn } from '@/lib/utils'

/** Decorative gold divider used under section headings */
export function SectionOrnament({ className }) {
  return (
    <div className={cn('mx-auto mt-5 flex items-center justify-center gap-3', className)} aria-hidden>
      <span className="h-px w-10 bg-gradient-to-r from-transparent to-gold/70 md:w-14" />
      <span className="h-1.5 w-1.5 rotate-45 border border-gold/80" />
      <span className="h-px w-10 bg-gradient-to-l from-transparent to-gold/70 md:w-14" />
    </div>
  )
}

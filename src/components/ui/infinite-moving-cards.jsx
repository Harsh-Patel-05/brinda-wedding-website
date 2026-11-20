import { cn } from '@/lib/utils'

export function InfiniteMovingCards({ items, direction = 'left', speed = 'slow', className }) {
  const duration = speed === 'fast' ? '25s' : speed === 'normal' ? '40s' : '55s'

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
      }}
    >
      <ul
        className={cn(
          'flex w-max gap-5 py-4 animate-marquee',
          direction === 'right' && '[animation-direction:reverse]',
        )}
        style={{ animationDuration: duration }}
      >
        {[...items, ...items].map((item, idx) => (
          <li
            key={`${item.id}-${idx}`}
            className="relative w-[min(82vw,300px)] shrink-0 rounded-xl border border-gold/20 bg-bg-secondary/90 p-5 sm:w-[300px] sm:p-6 md:w-[360px]"
          >
            <blockquote className="space-y-4">
              <p className="text-sm leading-relaxed text-text-muted md:text-base">
                “{item.quote}”
              </p>
              <footer>
                <div className="font-display text-lg text-text-primary">{item.name}</div>
                <div className="text-xs tracking-wide text-gold/80">{item.role}</div>
              </footer>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}

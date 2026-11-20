import { Marquee } from '@/components/ui/marquee'
import { siteConfig } from '@/data/siteConfig'

export function MarqueeStrip() {
  return (
    <section
      id="marquee"
      className="relative overflow-hidden border-y border-gold/15 bg-bg-secondary py-5"
      aria-label="Services marquee"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-16 bg-gradient-to-r from-bg-secondary to-transparent md:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-16 bg-gradient-to-l from-bg-secondary to-transparent md:w-24" />
      <Marquee speed={28} pauseOnHover>
        {siteConfig.marqueeItems.map((item) => (
          <span
            key={item}
            className="flex items-center gap-8 whitespace-nowrap px-2 font-display text-lg tracking-wide text-gold-light/90 md:text-xl"
          >
            {item}
            <span className="inline-block h-1.5 w-1.5 rotate-45 bg-gold/60" aria-hidden />
          </span>
        ))}
      </Marquee>
    </section>
  )
}

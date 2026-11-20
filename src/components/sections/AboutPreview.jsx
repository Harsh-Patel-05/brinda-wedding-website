import { Link } from 'react-router-dom'
import { siteConfig } from '@/data/siteConfig'
import { BlurFade } from '@/components/ui/blur-fade'
import { NumberTicker } from '@/components/ui/number-ticker'
import { SectionOrnament } from '@/components/ui/section-ornament'
import { TitleWithScript } from '@/components/ui/title-with-script'
import { Magnetic } from '@/components/ui/magnetic'
import { Button } from '@/components/ui/button'
import { asset } from '@/lib/utils'

export function AboutPreview() {
  const copy = siteConfig.sectionCopy

  return (
    <section className="section-pad overflow-hidden">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <BlurFade>
          <div className="relative overflow-hidden rounded-xl">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={asset('/portfolio/mukesh-hima-2.jpg')}
                alt={`${siteConfig.owner} at a wedding shoot`}
                width={800}
                height={1000}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gold/25" />
          </div>
        </BlurFade>

        <div>
          <BlurFade delay={0.1}>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">{copy.aboutEyebrow}</p>
            <TitleWithScript parts={copy.aboutTitle} className="heading-section font-display" />
            <SectionOrnament className="mx-0 justify-start" />
          </BlurFade>
          <BlurFade delay={0.15}>
            <p className="mt-5 leading-relaxed text-text-muted">{siteConfig.aboutShort}</p>
          </BlurFade>

          <div className="mt-8 grid grid-cols-3 gap-2 border-y border-gold/15 py-6 sm:mt-10 sm:gap-4 sm:py-8">
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="min-w-0 text-center">
                <div className="font-display text-xl text-gold-light sm:text-2xl md:text-4xl">
                  <NumberTicker value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-wider text-text-muted sm:text-[11px] md:text-xs">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <BlurFade delay={0.2}>
            <Magnetic className="mt-8">
              <Button asChild variant="outline">
                <Link to="/about">{copy.aboutCta}</Link>
              </Button>
            </Magnetic>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}

import { siteConfig } from '@/data/siteConfig'
import { Seo } from '@/components/layout/Seo'
import { BlurFade } from '@/components/ui/blur-fade'
import { NumberTicker } from '@/components/ui/number-ticker'
import { TitleWithScript } from '@/components/ui/title-with-script'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function About() {
  const copy = siteConfig.pageCopy.about

  return (
    <>
      <Seo title="About" path="/about" />
      <section className="section-pad page-top">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <BlurFade>
            <div className="overflow-hidden rounded-xl">
              {/* TODO: replace with real portrait of Parth Patel */}
              <img
                src="/portfolio/visweta-wedding.jpg"
                alt={`${siteConfig.owner}, wedding photographer at Brinda Wedding`}
                width={900}
                height={1100}
                className="aspect-[4/5] w-full object-cover"
                loading="lazy"
              />
            </div>
          </BlurFade>

          <div>
            <BlurFade>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">{copy.eyebrow}</p>
              <TitleWithScript
                as="h1"
                parts={copy.title}
                className="heading-display font-display"
              />
            </BlurFade>
            <BlurFade delay={0.1}>
              {siteConfig.aboutLong.map((para) => (
                <p key={para.slice(0, 24)} className="mt-5 leading-relaxed text-text-muted">
                  {para}
                </p>
              ))}
            </BlurFade>

            <div className="mt-8 grid grid-cols-3 gap-2 border-y border-gold/15 py-6 sm:mt-10 sm:gap-4 sm:py-8">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <div className="font-display text-xl text-gold-light sm:text-3xl">
                    <NumberTicker value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-[10px] uppercase tracking-wider text-text-muted sm:text-xs">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ProcessTimeline />
      <FinalCTA />
    </>
  )
}

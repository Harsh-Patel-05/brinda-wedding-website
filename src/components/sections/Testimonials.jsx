import { testimonials } from '@/data/testimonials'
import { siteConfig } from '@/data/siteConfig'
import { BlurFade } from '@/components/ui/blur-fade'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { SectionOrnament } from '@/components/ui/section-ornament'
import { TitleWithScript } from '@/components/ui/title-with-script'

export function Testimonials() {
  const copy = siteConfig.sectionCopy

  return (
    <section className="section-pad overflow-hidden bg-bg-secondary grain">
      <div className="container-wide relative z-[2]">
        <BlurFade className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">{copy.testimonialsEyebrow}</p>
          <TitleWithScript
            parts={copy.testimonialsTitle}
            className="heading-section font-display"
          />
          <SectionOrnament />
        </BlurFade>
        <InfiniteMovingCards items={testimonials} speed="slow" />
      </div>
    </section>
  )
}

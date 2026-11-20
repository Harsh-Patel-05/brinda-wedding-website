import { siteConfig } from '@/data/siteConfig'
import { BlurFade } from '@/components/ui/blur-fade'
import { SectionOrnament } from '@/components/ui/section-ornament'
import { TitleWithScript } from '@/components/ui/title-with-script'

export function ProcessTimeline() {
  const copy = siteConfig.sectionCopy

  return (
    <section className="section-pad bg-bg-secondary grain">
      <div className="container-narrow relative z-[2]">
        <BlurFade className="mb-14 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">{copy.processEyebrow}</p>
          <TitleWithScript parts={copy.processTitle} className="heading-section font-display" />
          <SectionOrnament />
        </BlurFade>

        <div className="relative mx-auto max-w-2xl pl-8 md:pl-12">
          <div className="absolute bottom-2 left-3 top-2 w-px bg-gold/25 md:left-4" aria-hidden />

          <ol className="space-y-10">
            {siteConfig.process.map((step, i) => (
              <BlurFade key={step.step} delay={i * 0.06}>
                <li className="relative list-none">
                  <span className="absolute -left-[1.85rem] top-1 flex h-6 w-6 items-center justify-center rounded-full border border-gold bg-bg-primary text-[10px] text-gold md:-left-[2.35rem] md:h-7 md:w-7">
                    {step.step}
                  </span>
                  <h3 className="font-display text-xl text-text-primary sm:text-2xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted md:text-base">
                    {step.description}
                  </p>
                </li>
              </BlurFade>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

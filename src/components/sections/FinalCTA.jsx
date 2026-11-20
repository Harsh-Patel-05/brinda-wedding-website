import { Link } from 'react-router-dom'
import { siteConfig } from '@/data/siteConfig'
import { BlurFade } from '@/components/ui/blur-fade'
import { Spotlight } from '@/components/ui/spotlight'
import { SectionOrnament } from '@/components/ui/section-ornament'
import { TitleWithScript } from '@/components/ui/title-with-script'
import { Magnetic } from '@/components/ui/magnetic'
import { Button } from '@/components/ui/button'
import { Particles } from '@/components/ui/particles'

export function FinalCTA() {
  const copy = siteConfig.sectionCopy

  return (
    <section className="relative overflow-hidden section-pad">
      <div className="absolute inset-0 bg-bg-elevated" />
      <Spotlight className="opacity-100" />
      <Particles count={10} className="z-[1] opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,58,0.14),transparent_60%)]" />

      <div className="container-narrow relative z-[2] text-center">
        <BlurFade>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">{copy.ctaEyebrow}</p>
          <TitleWithScript parts={copy.ctaTitle} className="heading-display font-display" />
          <SectionOrnament />
          <p className="mx-auto mt-5 max-w-lg px-1 text-sm text-text-muted sm:text-base">
            {copy.ctaSubtitle}
          </p>
          <div className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 px-2 sm:flex-row sm:items-center sm:px-0">
            <Magnetic className="w-full sm:w-auto">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/contact">{copy.ctaPrimary}</Link>
              </Button>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <a href={`tel:${siteConfig.phoneTel}`}>
                  {copy.ctaSecondary} · {siteConfig.phoneDisplay}
                </a>
              </Button>
            </Magnetic>
          </div>
        </BlurFade>
      </div>
    </section>
  )
}

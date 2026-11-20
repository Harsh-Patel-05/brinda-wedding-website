import { Link } from 'react-router-dom'
import { Camera, Heart, Aperture, Film, Plane, BookOpen } from 'lucide-react'
import { services } from '@/data/services'
import { siteConfig } from '@/data/siteConfig'
import { BlurFade } from '@/components/ui/blur-fade'
import { TiltCard } from '@/components/ui/tilt-card'
import { BorderBeam } from '@/components/ui/border-beam'
import { SectionOrnament } from '@/components/ui/section-ornament'
import { TitleWithScript } from '@/components/ui/title-with-script'
import { Button } from '@/components/ui/button'
import { Magnetic } from '@/components/ui/magnetic'

const ICONS = { Camera, Heart, Aperture, Film, Plane, BookOpen }

export function ServicesGrid() {
  const copy = siteConfig.sectionCopy

  return (
    <section className="section-pad bg-bg-secondary grain">
      <div className="container-wide relative z-[2]">
        <BlurFade className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">{copy.servicesEyebrow}</p>
          <TitleWithScript parts={copy.servicesTitle} className="heading-section font-display" />
          <SectionOrnament />
          <p className="mt-4 text-text-muted">{copy.servicesSubtitle}</p>
        </BlurFade>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = ICONS[service.icon] || Camera
            return (
              <BlurFade key={service.id} delay={i * 0.08}>
                <TiltCard className="h-full">
                  <article className="group relative h-full overflow-hidden rounded-xl border border-gold/15 bg-bg-primary/80 p-6 transition duration-500 hover:border-gold/40 hover:shadow-[0_0_32px_rgba(212,168,58,0.12)]">
                    <BorderBeam duration={10 + i} />
                    <div className="relative z-[2]">
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold transition duration-500 group-hover:bg-gold/10 group-hover:shadow-[0_0_20px_rgba(212,168,58,0.25)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-xl text-text-primary transition group-hover:text-gold-light">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-text-muted">{service.short}</p>
                    </div>
                  </article>
                </TiltCard>
              </BlurFade>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Magnetic>
            <Button asChild variant="outline">
              <Link to="/services">{copy.servicesCta}</Link>
            </Button>
          </Magnetic>
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { Camera, Heart, Aperture, Film, Plane, BookOpen } from 'lucide-react'
import { services } from '@/data/services'
import { siteConfig } from '@/data/siteConfig'
import { Seo } from '@/components/layout/Seo'
import { BlurFade } from '@/components/ui/blur-fade'
import { TitleWithScript } from '@/components/ui/title-with-script'
import { Button } from '@/components/ui/button'
import { FinalCTA } from '@/components/sections/FinalCTA'

const ICONS = { Camera, Heart, Aperture, Film, Plane, BookOpen }

export default function Services() {
  const copy = siteConfig.pageCopy.services

  return (
    <>
      <Seo title="Services" path="/services" />
      <section className="section-pad page-top">
        <div className="container-wide">
          <BlurFade className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">{copy.eyebrow}</p>
            <TitleWithScript as="h1" parts={copy.title} className="heading-display font-display" />
            <p className="mt-4 text-sm text-text-muted sm:text-base">{copy.subtitle}</p>
          </BlurFade>

          <div className="space-y-12 sm:space-y-16 md:space-y-24">
            {services.map((service, i) => {
              const Icon = ICONS[service.icon] || Camera
              const reverse = i % 2 === 1
              return (
                <BlurFade key={service.id} delay={0.05}>
                  <article
                    className={`grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-14 ${
                      reverse ? 'lg:[&>div:first-child]:order-2' : ''
                    }`}
                  >
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={service.image}
                        alt={service.title}
                        width={900}
                        height={700}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 text-gold">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl">{service.title}</h2>
                      <p className="mt-3 text-sm leading-relaxed text-text-muted sm:mt-4 sm:text-base">
                        {service.description}
                      </p>
                      <Button asChild className="mt-5 w-full sm:mt-6 sm:w-auto" variant="outline">
                        <Link to="/contact">Ask about {service.title}</Link>
                      </Button>
                    </div>
                  </article>
                </BlurFade>
              )
            })}
          </div>
        </div>
      </section>
      <FinalCTA />
    </>
  )
}

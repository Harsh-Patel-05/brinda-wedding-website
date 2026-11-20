import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { packages } from '@/data/packages'
import { siteConfig } from '@/data/siteConfig'
import { Seo } from '@/components/layout/Seo'
import { BlurFade } from '@/components/ui/blur-fade'
import { TitleWithScript } from '@/components/ui/title-with-script'
import { Button } from '@/components/ui/button'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { cn } from '@/lib/utils'

export default function Packages() {
  const copy = siteConfig.pageCopy.packages

  return (
    <>
      <Seo title="Packages" path="/packages" />
      <section className="section-pad page-top">
        <div className="container-wide">
          <BlurFade className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">{copy.eyebrow}</p>
            <TitleWithScript as="h1" parts={copy.title} className="heading-display font-display" />
            <p className="mt-4 text-sm text-text-muted sm:text-base">{copy.subtitle}</p>
          </BlurFade>

          <div className="mx-auto grid max-w-md gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((pkg, i) => (
              <BlurFade
                key={pkg.id}
                delay={i * 0.1}
                className={pkg.popular ? 'sm:col-span-2 lg:col-span-1' : ''}
              >
                <article
                  className={cn(
                    'relative flex h-full flex-col rounded-xl border p-5 sm:p-7 md:p-8',
                    pkg.popular
                      ? 'border-gold bg-bg-elevated shadow-[0_0_40px_rgba(212,168,58,0.15)] lg:-translate-y-2'
                      : 'border-gold/20 bg-bg-secondary',
                  )}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold-gradient px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-bg-primary">
                      Most booked
                    </span>
                  )}
                  <h2 className="font-display text-2xl text-text-primary sm:text-3xl">{pkg.name}</h2>
                  <p className="mt-2 text-sm text-text-muted">{pkg.description}</p>
                  <div className="mt-6">
                    <div className="text-xs uppercase tracking-wider text-gold/80">{pkg.priceNote}</div>
                    <div className="font-display text-3xl text-gold-light sm:text-4xl">{pkg.price}</div>
                  </div>
                  <ul className="mt-8 flex-1 space-y-3">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-text-muted">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={pkg.popular ? 'default' : 'outline'}
                    className="mt-8 w-full"
                  >
                    <Link to="/contact">Ask about {pkg.name}</Link>
                  </Button>
                </article>
              </BlurFade>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-text-muted">{copy.note}</p>
        </div>
      </section>
      <FAQSection />
      <FinalCTA />
    </>
  )
}

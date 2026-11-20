import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { packages } from '@/data/packages'
import { siteConfig } from '@/data/siteConfig'
import { BlurFade } from '@/components/ui/blur-fade'
import { SectionOrnament } from '@/components/ui/section-ornament'
import { TitleWithScript } from '@/components/ui/title-with-script'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function PackagesPreview() {
  const copy = siteConfig.sectionCopy

  return (
    <section className="section-pad">
      <div className="container-wide">
        <BlurFade className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">{copy.packagesEyebrow}</p>
          <TitleWithScript parts={copy.packagesTitle} className="heading-section font-display" />
          <SectionOrnament />
          <p className="mt-4 text-text-muted">{copy.packagesSubtitle}</p>
        </BlurFade>

        <div className="mx-auto grid max-w-md gap-6 sm:max-w-none sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
          {packages.map((pkg, i) => (
            <BlurFade
              key={pkg.id}
              delay={i * 0.1}
              className={pkg.popular ? 'sm:col-span-2 lg:col-span-1' : ''}
            >
              <article
                className={cn(
                  'relative flex h-full flex-col rounded-xl border p-5 transition duration-500 hover:-translate-y-1 sm:p-7',
                  pkg.popular
                    ? 'border-gold bg-bg-elevated shadow-[0_0_40px_rgba(212,168,58,0.15)] hover:shadow-[0_0_50px_rgba(212,168,58,0.25)]'
                    : 'border-gold/20 bg-bg-secondary hover:border-gold/40 hover:shadow-[0_0_28px_rgba(212,168,58,0.1)]',
                )}
              >
                {pkg.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold-gradient px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-bg-primary">
                    Most booked
                  </span>
                )}
                <h3 className="font-display text-2xl text-text-primary">{pkg.name}</h3>
                <p className="mt-2 text-sm text-text-muted">{pkg.description}</p>
                <div className="mt-6">
                  <div className="text-xs uppercase tracking-wider text-gold/80">{pkg.priceNote}</div>
                  <div className="font-display text-2xl text-gold-light sm:text-3xl md:text-4xl">
                    {pkg.price}
                  </div>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text-muted">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant={pkg.popular ? 'default' : 'outline'} className="mt-8 w-full">
                  <Link to="/contact">Ask about {pkg.name}</Link>
                </Button>
              </article>
            </BlurFade>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="link">
            <Link to="/packages">{copy.packagesCta} →</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

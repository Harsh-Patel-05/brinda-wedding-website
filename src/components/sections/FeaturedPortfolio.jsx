import { useState } from 'react'
import { Link } from 'react-router-dom'
import { featuredPortfolio } from '@/data/portfolio'
import { siteConfig } from '@/data/siteConfig'
import { BlurFade } from '@/components/ui/blur-fade'
import { Lightbox } from '@/components/ui/lightbox'
import { SectionOrnament } from '@/components/ui/section-ornament'
import { TitleWithScript } from '@/components/ui/title-with-script'
import { Magnetic } from '@/components/ui/magnetic'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function FeaturedPortfolio() {
  const [index, setIndex] = useState(null)
  const copy = siteConfig.sectionCopy

  return (
    <section className="section-pad">
      <div className="container-wide">
        <BlurFade className="mb-12 max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">{copy.portfolioEyebrow}</p>
          <TitleWithScript parts={copy.portfolioTitle} className="heading-section font-display" />
          <SectionOrnament className="mx-0 justify-start" />
        </BlurFade>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {featuredPortfolio.map((item, i) => (
            <div key={item.id} className="mb-4 break-inside-avoid">
              <button
                type="button"
                className="group relative block w-full overflow-hidden rounded-lg text-left"
                onClick={() => setIndex(i)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={item.span === 'tall' ? 900 : 700}
                  loading={i < 2 ? 'eager' : 'lazy'}
                  decoding="async"
                  className={cn(
                    'w-full object-cover transition duration-500 ease-out group-hover:scale-[1.03]',
                    item.span === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/5]',
                  )}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/20 to-transparent opacity-40 transition duration-400 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="font-display text-lg text-text-primary">{item.title}</div>
                  <div className="text-xs tracking-wide text-gold-light">
                    {item.category}
                    {item.location ? ` · ${item.location}` : ''}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Magnetic>
            <Button asChild>
              <Link to="/portfolio">{copy.portfolioCta}</Link>
            </Button>
          </Magnetic>
        </div>
      </div>

      <Lightbox
        items={featuredPortfolio}
        index={index}
        open={index !== null}
        onClose={() => setIndex(null)}
        onChange={setIndex}
      />
    </section>
  )
}

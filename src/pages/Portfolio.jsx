import { useMemo, useState } from 'react'
import { portfolioCategories, portfolioItems } from '@/data/portfolio'
import { siteConfig } from '@/data/siteConfig'
import { Seo } from '@/components/layout/Seo'
import { BlurFade } from '@/components/ui/blur-fade'
import { Lightbox } from '@/components/ui/lightbox'
import { SectionOrnament } from '@/components/ui/section-ornament'
import { TitleWithScript } from '@/components/ui/title-with-script'
import { cn } from '@/lib/utils'

export default function Portfolio() {
  const [category, setCategory] = useState('All')
  const [index, setIndex] = useState(null)
  const copy = siteConfig.pageCopy.portfolio

  const filtered = useMemo(
    () =>
      category === 'All'
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === category),
    [category],
  )

  return (
    <>
      <Seo title="Portfolio" path="/portfolio" />
      <section className="section-pad page-top">
        <div className="container-wide">
          <BlurFade className="mb-8 max-w-2xl sm:mb-10">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">{copy.eyebrow}</p>
            <TitleWithScript as="h1" parts={copy.title} className="heading-display font-display" />
            <SectionOrnament className="mx-0 justify-start" />
            <p className="mt-4 text-sm text-text-muted sm:text-base">{copy.subtitle}</p>
          </BlurFade>

          <div
            className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:mb-10 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
            role="tablist"
            aria-label="Portfolio categories"
          >
            {portfolioCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={category === cat}
                className={cn(
                  'min-h-11 shrink-0 whitespace-nowrap rounded-full border px-4 text-sm transition',
                  category === cat
                    ? 'border-gold bg-gold/15 text-gold-light'
                    : 'border-gold/20 text-text-muted hover:border-gold/40 hover:text-gold-light',
                )}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {filtered.map((item) => (
              <div key={item.id} className="mb-4 break-inside-avoid">
                <button
                  type="button"
                  className="group relative block w-full overflow-hidden rounded-lg"
                  onClick={() => setIndex(filtered.findIndex((f) => f.id === item.id))}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={item.span === 'tall' ? 900 : 700}
                    loading="lazy"
                    decoding="async"
                    className={cn(
                      'w-full object-cover transition duration-500 group-hover:scale-[1.03]',
                      item.span === 'tall' ? 'aspect-[3/4]' : 'aspect-[4/5]',
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/85 via-transparent opacity-0 transition group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 transition group-hover:opacity-100">
                    <div className="font-display text-lg">{item.title}</div>
                    <div className="text-xs text-gold-light">
                      {item.category}
                      {item.location ? ` · ${item.location}` : ''}
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        items={filtered}
        index={index}
        open={index !== null}
        onClose={() => setIndex(null)}
        onChange={setIndex}
      />
    </>
  )
}

import { siteConfig } from '@/data/siteConfig'
import { BlurFade } from '@/components/ui/blur-fade'
import { TitleWithScript } from '@/components/ui/title-with-script'
import { InstagramIcon } from '@/components/ui/social-icons'

export function InstagramStrip() {
  const copy = siteConfig.sectionCopy

  return (
    <section className="section-pad pb-10 pt-16">
      <div className="container-wide">
        <BlurFade className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gold">{copy.instagramEyebrow}</p>
            <TitleWithScript
              parts={copy.instagramTitle}
              className="heading-section font-display md:text-4xl"
            />
          </div>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-gold-light hover:underline"
          >
            <InstagramIcon className="h-4 w-4" />
            Follow on Instagram
          </a>
        </BlurFade>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {siteConfig.instagramPlaceholders.map((src, i) => (
            <BlurFade key={src} delay={i * 0.05}>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden rounded-lg"
              >
                {/* TODO: replace with real Instagram embeds / posts */}
                <img
                  src={src}
                  alt={`Recent work sample ${i + 1}`}
                  width={400}
                  height={400}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-bg-primary/50 opacity-0 transition group-hover:opacity-100">
                  <InstagramIcon className="h-6 w-6 text-gold-light" />
                </div>
              </a>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  )
}

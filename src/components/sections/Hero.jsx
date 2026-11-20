import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { Button } from '@/components/ui/button'
import { Magnetic } from '@/components/ui/magnetic'
import { Particles } from '@/components/ui/particles'
import { SplitHeadline } from '@/components/ui/split-headline'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useSiteReady } from '@/hooks/useSiteReady'
import { EASE } from '@/lib/animations'

const HERO_IMAGES = [
  '/portfolio/archi-brijesh.jpg',
  '/portfolio/mukesh-hima-1.jpg',
  '/portfolio/vidhi-krupal.jpg',
]

export function Hero() {
  const reduced = useReducedMotion()
  const ready = useSiteReady()
  const [slide, setSlide] = useState(0)
  const showContent = ready || reduced

  useEffect(() => {
    if (reduced || !ready) return undefined
    const id = setInterval(() => {
      setSlide((s) => (s + 1) % HERO_IMAGES.length)
    }, 6500)
    return () => clearInterval(id)
  }, [reduced, ready])

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-24 sm:pb-24 sm:pt-28 md:pb-16 md:pt-24">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={HERO_IMAGES[slide]}
            src={HERO_IMAGES[slide]}
            alt=""
            width={1600}
            height={2000}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center"
            initial={reduced || !showContent ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduced ? undefined : { opacity: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            fetchPriority={slide === 0 ? 'high' : 'low'}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 via-bg-primary/60 to-bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,#0A1C26_90%)]" />
      </div>

      {showContent && <Particles count={14} className="z-[1]" />}

      <div className="container-wide relative z-[2] mx-auto w-full px-4 text-center sm:px-6 md:px-10">
        <motion.div
          initial={false}
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        >
          <motion.p
            className="mb-3 text-[10px] uppercase tracking-[0.28em] text-gold/90 sm:mb-4 sm:text-xs sm:tracking-[0.35em]"
            initial={false}
            animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            {siteConfig.brand} · by {siteConfig.owner}
          </motion.p>

          {showContent && (
            <SplitHeadline
              className="mx-auto max-w-4xl justify-center font-display text-[2rem] leading-[1.15] text-text-primary xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              parts={[
                { text: 'Capturing Your' },
                { text: 'Forever', script: true },
              ]}
            />
          )}

          <motion.p
            className="mx-auto mt-4 max-w-xl px-1 text-sm leading-relaxed text-text-muted sm:mt-5 sm:text-base md:text-lg"
            initial={false}
            animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ delay: showContent ? 0.08 : 0, duration: 0.45, ease: EASE }}
          >
            {siteConfig.description}
          </motion.p>

          <motion.div
            className="mt-7 flex w-full flex-col items-stretch justify-center gap-3 px-2 sm:mt-8 sm:flex-row sm:items-center sm:px-0"
            initial={false}
            animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ delay: showContent ? 0.12 : 0, duration: 0.45, ease: EASE }}
          >
            <Magnetic className="w-full sm:w-auto">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/portfolio">See our work</Link>
              </Button>
            </Magnetic>
            <Magnetic className="w-full sm:w-auto">
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link to="/contact">Check your date</Link>
              </Button>
            </Magnetic>
          </motion.div>

          <div className="mt-8 flex justify-center gap-2 sm:mt-10" role="tablist" aria-label="Hero slides">
            {HERO_IMAGES.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={slide === i}
                aria-label={`Slide ${i + 1}`}
                className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full p-3"
                onClick={() => setSlide(i)}
              >
                <span
                  className={`block h-1.5 rounded-full transition-all duration-500 ${
                    slide === i ? 'w-8 bg-gold' : 'w-1.5 bg-gold/35'
                  }`}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#marquee"
        className="absolute bottom-4 left-1/2 z-[2] hidden -translate-x-1/2 flex-col items-center gap-1 text-gold-light/80 sm:bottom-6 sm:flex"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={showContent ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="relative flex h-10 w-6 items-start justify-center rounded-full border border-gold/40 pt-1.5">
          <span className={`h-1.5 w-1 rounded-full bg-gold ${reduced ? '' : 'animate-float-y'}`} />
        </span>
        <ChevronDown className={`h-4 w-4 opacity-70 ${reduced ? '' : 'animate-float-y'}`} />
      </motion.a>
    </section>
  )
}

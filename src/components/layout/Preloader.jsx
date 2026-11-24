import { useEffect, useRef, useState } from 'react'
import {
  AnimatePresence,
  motion,
  animate,
  useMotionValue,
  useSpring,
  useTransform,
} from 'motion/react'
import logo from '@/assets/logo.jpg'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { EASE } from '@/lib/animations'

const STATUS_COPY = [
  { until: 28, text: 'Setting the frame' },
  { until: 58, text: 'Gathering moments' },
  { until: 86, text: 'Preparing your gallery' },
  { until: 101, text: 'Almost ready' },
]

/**
 * Preloader → home: wake the site FIRST, then open curtains over it.
 */
export function Preloader() {
  const reduced = useReducedMotion()
  const [phase, setPhase] = useState('loading') // loading | exit | done
  const [percent, setPercent] = useState(0)
  const [status, setStatus] = useState(STATUS_COPY[0].text)
  const finished = useRef(false)
  const progress = useMotionValue(0)
  // Soft spring so bar + % never feel jumpy
  const smooth = useSpring(progress, {
    stiffness: reduced ? 120 : 38,
    damping: reduced ? 24 : 18,
    mass: 0.85,
  })
  const barScale = useTransform(smooth, [0, 100], [0, 1])
  const tipLeft = useTransform(barScale, (s) => `calc(${Math.max(0, s) * 100}% - 5px)`)
  const tipOpacity = useTransform(smooth, [0, 4, 96, 100], [0, 1, 1, 0.35])

  const revealHome = () => {
    document.body.style.overflow = ''
    window.dispatchEvent(new Event('brinda:ready'))
  }

  const unmount = () => {
    if (finished.current) return
    finished.current = true
    revealHome()
    setPhase('done')
  }

  const beginExit = () => {
    if (finished.current || phase === 'exit' || phase === 'done') return
    revealHome()
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!finished.current) setPhase('exit')
      })
    })
  }

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const hardCap = window.setTimeout(unmount, reduced ? 900 : 7500)

    const unsub = smooth.on('change', (v) => {
      // Snap to 100 once we're essentially there (spring asymptotes otherwise)
      const next = v >= 99.2 ? 100 : Math.min(99, Math.round(v))
      setPercent(next)
      const line = STATUS_COPY.find((s) => next < s.until)
      if (line) setStatus(line.text)
    })

    if (reduced) {
      progress.jump(100)
      smooth.jump(100)
      setPercent(100)
      const t = window.setTimeout(beginExit, 160)
      return () => {
        clearTimeout(hardCap)
        clearTimeout(t)
        unsub()
        document.body.style.overflow = ''
      }
    }

    // Steady climb, then hard-land on 100% before curtains open
    const controls = animate(progress, 100, {
      duration: 3.8,
      ease: [0.4, 0.0, 0.2, 1],
      onComplete: () => {
        if (finished.current) return
        progress.jump(100)
        smooth.jump(100)
        setPercent(100)
        setStatus(STATUS_COPY[STATUS_COPY.length - 1].text)
        window.setTimeout(beginExit, 480)
      },
    })

    return () => {
      controls.stop()
      clearTimeout(hardCap)
      unsub()
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduced, progress, smooth])

  useEffect(() => {
    if (phase !== 'exit') return undefined
    const t = window.setTimeout(unmount, 900)
    return () => clearTimeout(t)
  }, [phase])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[200] overflow-hidden"
          role="status"
          aria-live="polite"
          aria-label="Loading Brinda Wedding"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          {/*
            No permanent full-screen base under the curtains.
            Curtains themselves are the cover — when they open, HOME shows.
          */}
          <motion.div
            className="absolute inset-x-0 top-0 z-[2] h-[52%] bg-[#07151c]"
            animate={phase === 'exit' ? { y: '-110%' } : { y: 0 }}
            transition={{ duration: 0.85, ease: EASE }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 z-[2] h-[52%] bg-[#07151c]"
            animate={phase === 'exit' ? { y: '110%' } : { y: 0 }}
            transition={{ duration: 0.85, ease: EASE }}
          />

          <motion.div
            className="absolute inset-0 z-[5] flex flex-col items-center justify-center px-6"
            animate={
              phase === 'exit'
                ? { opacity: 0, scale: 0.985 }
                : { opacity: 1, scale: 1 }
            }
            transition={{ duration: 0.35, ease: EASE }}
          >
            {/* Fill behind branding so no gap between curtain halves during load */}
            <div className="absolute inset-0 bg-[#07151c]" />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 55% at 50% 42%, rgba(20,52,69,0.95) 0%, #07151c 72%)',
              }}
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  'radial-gradient(rgba(240,207,122,0.5) 0.6px, transparent 0.6px)',
                backgroundSize: '4px 4px',
              }}
              aria-hidden
            />

            <div
              className="pointer-events-none absolute inset-5 border border-gold/10 sm:inset-8"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute left-5 top-5 h-8 w-8 border-l border-t border-gold/45 sm:left-8 sm:top-8 sm:h-10 sm:w-10"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute right-5 top-5 h-8 w-8 border-r border-t border-gold/45 sm:right-8 sm:top-8 sm:h-10 sm:w-10"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-5 left-5 h-8 w-8 border-b border-l border-gold/45 sm:bottom-8 sm:left-8 sm:h-10 sm:w-10"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute bottom-5 right-5 h-8 w-8 border-b border-r border-gold/45 sm:bottom-8 sm:right-8 sm:h-10 sm:w-10"
              aria-hidden
            />

            <div
              className="pointer-events-none absolute left-1/2 top-[40%] h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-80 sm:w-80"
              style={{
                background:
                  'radial-gradient(circle, rgba(212,168,58,0.28) 0%, rgba(212,168,58,0.08) 42%, transparent 70%)',
              }}
              aria-hidden
            />

            <motion.div
              className="relative mb-7 sm:mb-9"
              initial={{ opacity: 0, scale: 0.82 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.85, ease: EASE }}
            >
              <span
                className="pointer-events-none absolute -inset-3 rounded-full border border-gold/25 sm:-inset-4"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute -inset-1.5 rounded-full border border-gold/40 sm:-inset-2"
                aria-hidden
              />
              <img
                src={logo}
                alt="Brinda Wedding"
                width={148}
                height={148}
                className="relative block h-[7.25rem] w-[7.25rem] rounded-full object-cover sm:h-36 sm:w-36 md:h-40 md:w-40"
                style={{
                  boxShadow:
                    '0 0 0 1px rgba(212,168,58,0.55), 0 0 48px rgba(212,168,58,0.4), 0 12px 40px rgba(0,0,0,0.35)',
                }}
              />
            </motion.div>

            <motion.p
              className="brand-mark relative text-center font-script text-[2.5rem] font-medium italic tracking-wide text-white sm:text-5xl md:text-[3.5rem]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.7, ease: EASE }}
            >
              Brinda <span className="text-gold-light">Wedding</span>
            </motion.p>

            <motion.div
              className="relative mt-4 flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.32, duration: 0.55 }}
            >
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-gold/60 sm:w-12" aria-hidden />
              <p className="text-center text-[9px] uppercase tracking-[0.42em] text-text-muted sm:text-[10px] sm:tracking-[0.48em]">
                Capturing Your Forever
              </p>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-gold/60 sm:w-12" aria-hidden />
            </motion.div>

            <motion.div
              className="relative mt-12 w-[14rem] sm:mt-14 sm:w-80"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.55 }}
            >
              <div className="mb-3.5 flex items-end justify-between gap-4">
                <span className="text-[9px] uppercase tracking-[0.32em] text-gold/75 sm:text-[10px]">
                  Loading
                </span>
                <span
                  className="inline-flex min-w-[3.25rem] items-baseline justify-end font-display text-[1.35rem] leading-none tabular-nums text-gold-light sm:min-w-[3.5rem] sm:text-[1.5rem]"
                  aria-live="polite"
                >
                  {String(percent).padStart(2, '0')}
                  <span className="ml-0.5 text-[11px] font-sans tracking-wide text-gold/65">
                    %
                  </span>
                </span>
              </div>

              <div
                className="relative h-[4px] overflow-hidden rounded-full bg-[#0d2430] ring-1 ring-gold/20"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percent}
              >
                <motion.div
                  className="absolute inset-y-0 left-0 origin-left overflow-hidden rounded-full"
                  style={{
                    scaleX: barScale,
                    width: '100%',
                    background:
                      'linear-gradient(90deg, #A8802A 0%, #D4A83A 40%, #F0CF7A 78%, #fff4c8 100%)',
                    boxShadow: '0 0 16px rgba(240,207,122,0.4)',
                  }}
                >
                  {!reduced && (
                    <motion.div
                      className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                      animate={{ x: ['-100%', '320%'] }}
                      transition={{
                        duration: 1.6,
                        ease: 'easeInOut',
                        repeat: Infinity,
                        repeatDelay: 0.55,
                      }}
                    />
                  )}
                </motion.div>
                <motion.span
                  className="pointer-events-none absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-gold-light"
                  style={{
                    left: tipLeft,
                    opacity: tipOpacity,
                    boxShadow: '0 0 10px rgba(240,207,122,0.85)',
                  }}
                  aria-hidden
                />
              </div>

              <p className="mt-3.5 text-center text-[9px] tracking-[0.24em] text-text-muted/75 sm:text-[10px]">
                {status}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

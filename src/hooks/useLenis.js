import { useEffect } from 'react'
import { useReducedMotion } from './useReducedMotion'

/** Smooth scroll on desktop only — native scroll is smoother on touch / low-power devices */
export function useLenis() {
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) return undefined
    if (window.matchMedia('(pointer: coarse)').matches) return undefined
    if (window.matchMedia('(max-width: 1023px)').matches) return undefined

    let cleanup = () => {}

    ;(async () => {
      const [{ default: Lenis }, gsapMod, stMod] = await Promise.all([
        import('lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])
      const gsap = gsapMod.default
      const { ScrollTrigger } = stMod
      gsap.registerPlugin(ScrollTrigger)

      const lenis = new Lenis({
        duration: 0.8,
        smoothWheel: true,
        syncTouch: false,
        autoRaf: true,
      })

      lenis.on('scroll', ScrollTrigger.update)
      ScrollTrigger.refresh()

      cleanup = () => {
        lenis.destroy()
      }
    })()

    return () => cleanup()
  }, [reduced])
}

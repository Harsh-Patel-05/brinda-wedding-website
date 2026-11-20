import { useEffect, useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { cn } from '@/lib/utils'

/** Light gold dust — paused when off-screen; skipped on mobile */
export function Particles({ className, count = 16 }) {
  const canvasRef = useRef(null)
  const reduced = useReducedMotion()
  const isMobile = useMediaQuery('(max-width: 767px)')

  useEffect(() => {
    if (reduced || isMobile) return undefined
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d', { alpha: true })
    let raf = 0
    let particles = []
    let visible = true
    let last = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        r: Math.random() * 1.4 + 0.3,
        vx: (Math.random() - 0.5) * 0.2,
        vy: Math.random() * -0.28 - 0.04,
        a: Math.random() * 0.4 + 0.12,
      }))
    }

    const draw = (time) => {
      if (!visible) {
        raf = 0
        return
      }
      // Cap ~30fps — fine for ambient dust
      if (time - last < 32) {
        raf = requestAnimationFrame(draw)
        return
      }
      last = time
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.y < -4) p.y = canvas.offsetHeight + 4
        if (p.x < -4) p.x = canvas.offsetWidth + 4
        if (p.x > canvas.offsetWidth + 4) p.x = -4
        ctx.beginPath()
        ctx.fillStyle = `rgba(240, 207, 122, ${p.a})`
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
        if (visible && !raf) raf = requestAnimationFrame(draw)
      },
      { threshold: 0.05 },
    )
    io.observe(canvas)

    resize()
    raf = requestAnimationFrame(draw)
    window.addEventListener('resize', resize, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      window.removeEventListener('resize', resize)
    }
  }, [count, reduced, isMobile])

  if (reduced || isMobile) return null

  return (
    <canvas
      ref={canvasRef}
      className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}
      aria-hidden
    />
  )
}

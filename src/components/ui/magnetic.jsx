import { useRef } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { cn } from '@/lib/utils'

/** Subtle magnetic pull — direct DOM transform, no React re-renders */
export function Magnetic({ children, className, strength = 0.22 }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const fine = useMediaQuery('(hover: hover) and (pointer: fine)')

  if (reduced || !fine) {
    return <div className={className}>{children}</div>
  }

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`
  }

  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate3d(0,0,0)'
  }

  return (
    <div
      ref={ref}
      className={cn('inline-flex will-change-transform transition-transform duration-200 ease-out', className)}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  )
}

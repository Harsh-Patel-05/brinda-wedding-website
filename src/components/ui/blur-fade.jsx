import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { EASE } from '@/lib/animations'
import { cn } from '@/lib/utils'

/** Fade/slide reveal — no CSS filter blur (that tanks scroll FPS) */
export function BlurFade({
  children,
  className,
  delay = 0,
  duration = 0.55,
  yOffset = 16,
  once = true,
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-8% 0px' })
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yOffset }}
      animate={inView ? { opacity: 1, y: 0 } : undefined}
      transition={{ delay, duration, ease: EASE }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}

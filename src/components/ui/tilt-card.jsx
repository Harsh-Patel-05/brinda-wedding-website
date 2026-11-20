import { useRef, useState } from 'react'
import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cn } from '@/lib/utils'

export function TiltCard({ children, className, maxTilt = 8 }) {
  const ref = useRef(null)
  const reduced = useReducedMotion()
  const [style, setStyle] = useState({ rotateX: 0, rotateY: 0 })

  const onMove = (e) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const midX = rect.width / 2
    const midY = rect.height / 2
    setStyle({
      rotateY: ((x - midX) / midX) * maxTilt,
      rotateX: -((y - midY) / midY) * maxTilt,
    })
  }

  const onLeave = () => setStyle({ rotateX: 0, rotateY: 0 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 900,
      }}
      animate={style}
      transition={{ type: 'spring', stiffness: 220, damping: 18 }}
      className={cn('relative', className)}
    >
      {children}
    </motion.div>
  )
}

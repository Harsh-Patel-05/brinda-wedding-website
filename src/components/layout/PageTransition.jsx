import { useRef } from 'react'
import { motion } from 'motion/react'
import { pageTransition } from '@/lib/animations'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/** Skip fade-from-black on first paint so preloader opens onto a visible home. */
export function PageTransition({ children }) {
  const reduced = useReducedMotion()
  const isFirstMount = useRef(true)

  if (reduced) return <div>{children}</div>

  const skipEnter = isFirstMount.current
  isFirstMount.current = false

  return (
    <motion.div
      initial={skipEnter ? false : 'initial'}
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {children}
    </motion.div>
  )
}

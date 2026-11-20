import { motion } from 'motion/react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { EASE } from '@/lib/animations'
import { cn } from '@/lib/utils'

/** Lightweight SplitText-style word reveal */
export function SplitHeadline({
  parts,
  className,
  delay = 0.2,
}) {
  const reduced = useReducedMotion()

  if (reduced) {
    return (
      <h1 className={cn(className)}>
        {parts.map((p, i) =>
          p.script ? (
            <span key={i} className="font-script text-gold-gradient italic">
              {p.text}{' '}
            </span>
          ) : (
            <span key={i}>{p.text} </span>
          ),
        )}
      </h1>
    )
  }

  let wordIndex = 0

  return (
    <h1 className={cn('flex flex-wrap justify-center gap-x-3 gap-y-1', className)}>
      {parts.map((part, pi) => {
        const words = part.text.split(' ')
        return words.map((word, wi) => {
          const i = wordIndex++
          return (
            <motion.span
              key={`${pi}-${wi}`}
              className={cn(
                'inline-block overflow-hidden',
                part.script &&
                  'font-script text-[1.15em] text-gold-gradient italic leading-none sm:text-[1.2em]',
              )}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: delay * 0.35 + i * 0.04, duration: 0.4, ease: EASE }}
            >
              {word}
            </motion.span>
          )
        })
      })}
    </h1>
  )
}

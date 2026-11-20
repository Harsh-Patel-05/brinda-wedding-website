import { useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Lightbox({ items, index, open, onClose, onChange }) {
  const item = index != null ? items[index] : null

  const go = useCallback(
    (dir) => {
      if (!items.length) return
      const next = (index + dir + items.length) % items.length
      onChange(next)
    },
    [index, items.length, onChange],
  )

  useEffect(() => {
    if (!open) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') go(-1)
      if (e.key === 'ArrowRight') go(1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose, go])

  // Basic swipe support
  useEffect(() => {
    if (!open) return undefined
    let startX = 0
    const onStart = (e) => {
      startX = e.changedTouches[0].clientX
    }
    const onEnd = (e) => {
      const dx = e.changedTouches[0].clientX - startX
      if (Math.abs(dx) > 50) go(dx > 0 ? -1 : 1)
    }
    window.addEventListener('touchstart', onStart, { passive: true })
    window.addEventListener('touchend', onEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', onStart)
      window.removeEventListener('touchend', onEnd)
    }
  }, [open, go])

  return (
    <AnimatePresence>
      {open && item && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={item.title}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg-primary/95 p-3 backdrop-blur-md sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Close lightbox"
            className="absolute right-3 top-3 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-bg-primary/60 text-gold-light hover:bg-gold/10 sm:right-4 sm:top-4"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Previous image"
            className="absolute left-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 text-gold-light hover:bg-gold/10 md:left-6"
            onClick={(e) => {
              e.stopPropagation()
              go(-1)
            }}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            aria-label="Next image"
            className="absolute right-2 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 text-gold-light hover:bg-gold/10 md:right-6"
            onClick={(e) => {
              e.stopPropagation()
              go(1)
            }}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <motion.figure
            key={item.id}
            className={cn('relative max-h-[85vh] max-w-5xl')}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={item.image}
              alt={item.title}
              className="max-h-[78vh] w-auto rounded-lg object-contain shadow-2xl"
              width={1200}
              height={800}
            />
            <figcaption className="mt-4 text-center">
              <div className="font-display text-xl text-text-primary">{item.title}</div>
              <div className="text-sm text-text-muted">
                {item.category}
                {item.location ? ` · ${item.location}` : ''}
              </div>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

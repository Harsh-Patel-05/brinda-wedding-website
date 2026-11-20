import { useEffect, useState } from 'react'

let globalReady = false

if (typeof window !== 'undefined') {
  window.addEventListener('brinda:ready', () => {
    globalReady = true
  })
}

/** Becomes true after the preloader finishes. */
export function useSiteReady() {
  const [ready, setReady] = useState(globalReady)

  useEffect(() => {
    if (globalReady) {
      setReady(true)
      return undefined
    }

    const onReady = () => {
      globalReady = true
      setReady(true)
    }

    window.addEventListener('brinda:ready', onReady)

    // Failsafe if preloader never completes
    const fallback = window.setTimeout(() => {
      if (!globalReady) {
        globalReady = true
        setReady(true)
        document.body.style.overflow = ''
        window.dispatchEvent(new Event('brinda:ready'))
      }
    }, 5000)

    return () => {
      window.removeEventListener('brinda:ready', onReady)
      clearTimeout(fallback)
    }
  }, [])

  return ready
}

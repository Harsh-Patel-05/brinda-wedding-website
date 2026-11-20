import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Preloader } from './Preloader'
import { FloatingActions } from './FloatingActions'
import { PageTransition } from './PageTransition'
import { useLenis } from '@/hooks/useLenis'
import { useEffect } from 'react'

export function AppShell() {
  const location = useLocation()
  useLenis()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [location.pathname])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[300] focus:rounded-md focus:bg-gold focus:px-4 focus:py-2 focus:text-bg-primary"
      >
        Skip to content
      </a>
      <Preloader />
      <Navbar />
      <main id="main-content">
        <AnimatePresence mode="wait">
          <PageTransition key={location.pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

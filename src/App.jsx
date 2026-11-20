import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import Home from '@/pages/Home'

const Portfolio = lazy(() => import('@/pages/Portfolio'))
const Services = lazy(() => import('@/pages/Services'))
const About = lazy(() => import('@/pages/About'))
const Packages = lazy(() => import('@/pages/Packages'))
const Contact = lazy(() => import('@/pages/Contact'))
const NotFound = lazy(() => import('@/pages/NotFound'))

/** Invisible fallback — never show a spinner; brand Preloader covers first paint. */
function QuietFallback() {
  return <div className="min-h-[40vh] bg-bg-primary" aria-hidden />
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<AppShell />}>
          <Route index element={<Home />} />
          <Route
            path="portfolio"
            element={
              <Suspense fallback={<QuietFallback />}>
                <Portfolio />
              </Suspense>
            }
          />
          <Route
            path="services"
            element={
              <Suspense fallback={<QuietFallback />}>
                <Services />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<QuietFallback />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="packages"
            element={
              <Suspense fallback={<QuietFallback />}>
                <Packages />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<QuietFallback />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<QuietFallback />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

import { Link } from 'react-router-dom'
import { siteConfig } from '@/data/siteConfig'
import { Seo } from '@/components/layout/Seo'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  const copy = siteConfig.pageCopy.notFound

  return (
    <>
      <Seo title="Page not found" path="/404" />
      <section className="flex min-h-[70vh] flex-col items-center justify-center px-4 pt-28 text-center">
        <p className="font-script text-5xl font-medium italic text-gold-light">404</p>
        <h1 className="mt-4 font-display text-3xl md:text-4xl">{copy.title}</h1>
        <p className="mt-3 max-w-md text-text-muted">{copy.subtitle}</p>
        <Button asChild className="mt-8">
          <Link to="/">{copy.cta}</Link>
        </Button>
      </section>
    </>
  )
}

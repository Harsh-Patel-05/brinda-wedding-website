import { Seo } from '@/components/layout/Seo'
import { Hero } from '@/components/sections/Hero'
import { MarqueeStrip } from '@/components/sections/MarqueeStrip'
import { AboutPreview } from '@/components/sections/AboutPreview'
import { ServicesGrid } from '@/components/sections/ServicesGrid'
import { FeaturedPortfolio } from '@/components/sections/FeaturedPortfolio'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { PackagesPreview } from '@/components/sections/PackagesPreview'
import { Testimonials } from '@/components/sections/Testimonials'
import { InstagramStrip } from '@/components/sections/InstagramStrip'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Seo path="/" />
      <Hero />
      <MarqueeStrip />
      <AboutPreview />
      <ServicesGrid />
      <FeaturedPortfolio />
      <ProcessTimeline />
      <PackagesPreview />
      <Testimonials />
      <InstagramStrip />
      <FAQSection />
      <FinalCTA />
    </>
  )
}

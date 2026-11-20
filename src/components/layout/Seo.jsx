import { useEffect } from 'react'
import { siteConfig } from '@/data/siteConfig'

export function Seo({
  title,
  description = siteConfig.description,
  path = '/',
}) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${siteConfig.brand}`
      : `${siteConfig.brand} | Premium Wedding Photography`
    document.title = fullTitle

    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        if (selector.includes('property=')) {
          el.setAttribute('property', selector.match(/property="([^"]+)"/)[1])
        } else {
          el.setAttribute('name', selector.match(/name="([^"]+)"/)[1])
        }
        document.head.appendChild(el)
      }
      el.setAttribute(attr, value)
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', description)

    let jsonLd = document.getElementById('jsonld-business')
    if (!jsonLd) {
      jsonLd = document.createElement('script')
      jsonLd.id = 'jsonld-business'
      jsonLd.type = 'application/ld+json'
      document.head.appendChild(jsonLd)
    }
    jsonLd.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'PhotographBusiness',
      name: siteConfig.brand,
      description: siteConfig.description,
      telephone: siteConfig.phoneTel,
      email: siteConfig.email,
      url: typeof window !== 'undefined' ? window.location.origin + path : path,
      image: '/favicon.jpg',
      founder: {
        '@type': 'Person',
        name: siteConfig.owner,
      },
      areaServed: siteConfig.location,
      priceRange: '₹₹₹',
      sameAs: [
        siteConfig.social.instagram,
        siteConfig.social.youtube,
        siteConfig.social.facebook,
      ],
    })
  }, [title, description, path])

  return null
}

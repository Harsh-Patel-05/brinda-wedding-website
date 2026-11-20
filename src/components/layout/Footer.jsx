import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'
import logo from '@/assets/logo.jpg'
import { siteConfig } from '@/data/siteConfig'
import { buildWhatsAppUrl } from '@/lib/utils'
import { InstagramIcon, YoutubeIcon, FacebookIcon } from '@/components/ui/social-icons'

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()
  const wa = buildWhatsAppUrl(
    siteConfig.whatsapp,
    `Hi ${siteConfig.owner}, I'd like to book a consultation with ${siteConfig.brand}.`,
  )

  const social = [
    { label: 'Instagram', href: siteConfig.social.instagram, Icon: InstagramIcon },
    { label: 'YouTube', href: siteConfig.social.youtube, Icon: YoutubeIcon },
    { label: 'WhatsApp', href: wa, Icon: WhatsAppIcon },
    { label: 'Facebook', href: siteConfig.social.facebook, Icon: FacebookIcon },
  ]

  return (
    <footer className="relative border-t border-gold/15 bg-bg-secondary grain">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="container-wide relative z-[2] grid gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-3 md:px-10 lg:px-16">
        <div>
          <Link to="/" className="inline-flex max-w-full items-center gap-3">
            <img
              src={logo}
              alt=""
              width={48}
              height={48}
              className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-gold/40 sm:h-12 sm:w-12"
            />
            <div className="min-w-0">
              <div className="font-script text-2xl text-text-primary sm:text-3xl">Brinda Wedding</div>
              <div className="text-[10px] tracking-widest text-text-muted uppercase sm:text-xs">
                by {siteConfig.owner}
              </div>
            </div>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-muted">
            Wedding photography and films by {siteConfig.owner}. Based in {siteConfig.location} —
            happy to travel for your celebration.
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg text-gold-light">Quick Links</h2>
          <ul className="grid grid-cols-2 gap-2">
            {siteConfig.nav.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-sm text-text-muted transition hover:text-gold-light"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-display text-lg text-gold-light">Connect</h2>
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="mb-4 inline-flex min-h-11 items-center gap-2 text-text-primary transition hover:text-gold-light"
          >
            <Phone className="h-4 w-4 text-gold" />
            {siteConfig.phoneDisplay}
          </a>
          <div className="flex gap-3">
            {social.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 text-gold-light transition hover:bg-gold/10"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10 px-4 py-5 text-center text-xs text-text-muted sm:px-6">
        © {year} {siteConfig.brand}. All rights reserved.
      </div>
    </footer>
  )
}

import { useState } from 'react'
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { Seo } from '@/components/layout/Seo'
import { BlurFade } from '@/components/ui/blur-fade'
import { SectionOrnament } from '@/components/ui/section-ornament'
import { TitleWithScript } from '@/components/ui/title-with-script'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { buildMailto, buildWhatsAppUrl } from '@/lib/utils'

const EVENT_TYPES = [
  'Wedding',
  'Pre-Wedding',
  'Engagement',
  'Maternity',
  'Baby Shoot',
  'Other',
]

const initial = {
  name: '',
  phone: '',
  eventDate: '',
  eventType: 'Wedding',
  location: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setErrors((err) => ({ ...err, [key]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, ''))) {
      next.phone = 'Enter a valid 10-digit Indian mobile number'
    }
    if (!form.eventDate) next.eventDate = 'Select your event date'
    if (!form.location.trim()) next.location = 'Share the event location'
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = 'Tell us a little more (at least 10 characters)'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const buildMessage = () =>
    [
      `Hi ${siteConfig.owner},`,
      ``,
      `I found ${siteConfig.brand} and wanted to check availability.`,
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Event date: ${form.eventDate}`,
      `Event type: ${form.eventType}`,
      `Location: ${form.location}`,
      ``,
      form.message,
    ].join('\n')

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    const text = buildMessage()
    const wa = buildWhatsAppUrl(siteConfig.whatsapp, text)
    window.open(wa, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const onMailto = () => {
    if (!validate()) return
    window.location.href = buildMailto(
      siteConfig.email,
      `Enquiry — ${form.eventType} (${form.eventDate})`,
      buildMessage(),
    )
  }

  return (
    <>
      <Seo title="Contact" path="/contact" />
      <section className="section-pad page-top">
        <div className="container-wide grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <BlurFade>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">
                {siteConfig.pageCopy.contact.eyebrow}
              </p>
              <TitleWithScript
                as="h1"
                parts={siteConfig.pageCopy.contact.title}
                className="heading-display font-display"
              />
              <SectionOrnament className="mx-0 justify-start" />
              <p className="mt-4 text-sm text-text-muted sm:text-base">
                {siteConfig.pageCopy.contact.subtitle}
              </p>
            </BlurFade>

            <BlurFade delay={0.1} className="mt-8 space-y-4">
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="flex min-h-11 items-center gap-3 text-text-primary hover:text-gold-light"
              >
                <Phone className="h-5 w-5 text-gold" />
                Call {siteConfig.phoneDisplay}
              </a>
              <a
                href={buildWhatsAppUrl(
                  siteConfig.whatsapp,
                  `Hi ${siteConfig.owner}, I wanted to ask about wedding photography availability.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-11 items-center gap-3 text-text-primary hover:text-gold-light"
              >
                <MessageCircle className="h-5 w-5 text-gold" />
                WhatsApp enquiry
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex min-h-11 items-center gap-3 text-text-primary hover:text-gold-light"
              >
                <Mail className="h-5 w-5 shrink-0 text-gold" />
                <span className="break-all">{siteConfig.email}</span>
              </a>
              <p className="flex items-start gap-3 text-text-muted">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                {siteConfig.location}
              </p>
            </BlurFade>

            <BlurFade delay={0.15} className="mt-10 overflow-hidden rounded-xl border border-gold/20">
              {/* TODO: replace with real Google Maps embed */}
              <div className="flex aspect-[16/10] items-center justify-center bg-bg-secondary text-center text-sm text-text-muted">
                <div>
                  <MapPin className="mx-auto mb-2 h-6 w-6 text-gold" />
                  Map placeholder — add Google Maps embed here
                </div>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="relative overflow-hidden rounded-xl border border-gold/20 bg-bg-secondary p-4 shadow-[0_0_40px_rgba(10,28,38,0.4)] sm:p-6 md:p-8"
              noValidate
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    className="mt-2"
                    value={form.name}
                    onChange={update('name')}
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    className="mt-2"
                    inputMode="tel"
                    value={form.phone}
                    onChange={update('phone')}
                    placeholder="10-digit mobile"
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone && <p className="mt-1 text-xs text-red-300">{errors.phone}</p>}
                </div>
                <div>
                  <Label htmlFor="eventDate">Event date</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    className="mt-2"
                    value={form.eventDate}
                    onChange={update('eventDate')}
                    aria-invalid={!!errors.eventDate}
                  />
                  {errors.eventDate && (
                    <p className="mt-1 text-xs text-red-300">{errors.eventDate}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="eventType">Event type</Label>
                  <select
                    id="eventType"
                    className="mt-2 flex h-11 w-full rounded-md border border-gold/20 bg-bg-primary px-4 text-sm text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    value={form.eventType}
                    onChange={update('eventType')}
                  >
                    {EVENT_TYPES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    className="mt-2"
                    value={form.location}
                    onChange={update('location')}
                    placeholder="City / venue"
                    aria-invalid={!!errors.location}
                  />
                  {errors.location && (
                    <p className="mt-1 text-xs text-red-300">{errors.location}</p>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    className="mt-2"
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell us about your celebration..."
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-300">{errors.message}</p>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button type="submit" className="flex-1">
                  Send via WhatsApp
                </Button>
                <Button type="button" variant="outline" className="flex-1" onClick={onMailto}>
                  Email instead
                </Button>
              </div>

              {submitted && (
                <p className="mt-4 text-sm text-gold-light" role="status">
                  {siteConfig.pageCopy.contact.formSuccess}
                </p>
              )}
            </form>
          </BlurFade>
        </div>
      </section>
    </>
  )
}

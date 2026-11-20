import { asset } from '@/lib/utils'

/** Editable site-wide settings for Brinda Wedding */
export const siteConfig = {
  brand: 'Brinda Wedding',
  owner: 'Parth Patel',
  phone: '8347122490',
  phoneDisplay: '83471 22490',
  phoneTel: '+918347122490',
  whatsapp: '918347122490',
  email: 'hello@brindawedding.com', // TODO: replace with real email
  tagline: 'Capturing Your Forever',
  description:
    'We photograph real emotions — the laughter, the quiet tears, and the little glances that make your wedding day yours.',
  location: 'Baroda | Mehsana, Gujarat',
  social: {
    instagram: 'https://www.instagram.com/brinda.wedding/',
    youtube: 'https://www.youtube.com/channel/UCbfSZdVsB-kFdh953eg8UKA',
    facebook: 'https://www.instagram.com/frameby_parth/',
  },
  nav: [
    { label: 'Home', path: '/' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Packages', path: '/packages' },
    { label: 'Contact', path: '/contact' },
  ],
  marqueeItems: [
    'Weddings',
    'Pre-Wedding',
    'Engagements',
    'Candid Moments',
    'Cinematic Films',
    'Maternity',
    'Baby Shoots',
  ],
  stats: [
    { value: 500, suffix: '+', label: 'Weddings' },
    { value: 8, suffix: '+', label: 'Years' },
    { value: 1000, suffix: '+', label: 'Happy Couples' },
  ],
  aboutShort:
    'Led by Parth Patel, Brinda Wedding is a small team that shows up calmly on your big day. We don’t rush you into poses — we stay close enough to catch the real moments, and far enough that your family can just enjoy the celebration.',
  aboutLong: [
    'Brinda Wedding started with a simple belief: the best wedding photos don’t look staged. They look like you — laughing with friends, holding your mother’s hand before the pheras, or stealing a quiet look across a crowded hall.',
    'Based in Baroda and Mehsana, Parth and the team travel for destination weddings across India. Whether it’s an intimate home ceremony or a multi-day celebration, we plan with you, shoot with care, and deliver a gallery you’ll actually want to revisit for years.',
  ],
  process: [
    {
      step: '01',
      title: 'Enquiry',
      description:
        'Tell us your date, city, and what kind of wedding you’re planning. We’ll reply on WhatsApp and answer your questions honestly.',
    },
    {
      step: '02',
      title: 'Planning',
      description:
        'We talk through your events — mehendi, sangeet, pheras, reception — and build a simple plan so nothing important is missed.',
    },
    {
      step: '03',
      title: 'Shoot Day',
      description:
        'On the day, we stay present but not pushy. You’ll get candid coverage, family portraits, and the key rituals filmed with care.',
    },
    {
      step: '04',
      title: 'Editing',
      description:
        'We carefully select and colour-grade your photos and film so they feel warm, natural, and true to the day.',
    },
    {
      step: '05',
      title: 'Delivery',
      description:
        'You get a private online gallery, and optional albums or prints if you’d like something you can hold forever.',
    },
  ],
  sectionCopy: {
    aboutEyebrow: 'Our Story',
    aboutTitle: ['A calm eye for', 'real', 'moments'],
    aboutCta: 'Know more about Parth',
    servicesEyebrow: 'What We Do',
    servicesTitle: ['Everything your', 'day', 'needs'],
    servicesSubtitle:
      'From the first ritual to the last dance — photos and films made to feel personal, not forced.',
    servicesCta: 'See all services',
    portfolioEyebrow: 'Featured Work',
    portfolioTitle: ['Stories we’ve been', 'trusted', 'with'],
    portfolioCta: 'Browse full portfolio',
    processEyebrow: 'How It Works',
    processTitle: ['Simple steps,', 'clear', 'process'],
    packagesEyebrow: 'Packages',
    packagesTitle: ['Pick what fits', 'your', 'celebration'],
    packagesSubtitle:
      'Starting prices you can compare easily. Every package can be adjusted for your events and budget.',
    packagesCta: 'Compare packages',
    testimonialsEyebrow: 'From Our Couples',
    testimonialsTitle: ['Words from people', 'we’ve', 'worked with'],
    instagramEyebrow: 'Instagram',
    instagramTitle: ['A peek at', 'recent', 'work'],
    faqEyebrow: 'Questions',
    faqTitle: ['Things couples', 'usually', 'ask'],
    ctaEyebrow: 'Ready when you are',
    ctaTitle: ['Let’s talk about', 'your', 'date'],
    ctaSubtitle:
      'Send a quick message to Parth with your wedding date. We’ll get back with availability and a clear plan.',
    ctaPrimary: 'Send an enquiry',
    ctaSecondary: 'Call now',
  },
  pageCopy: {
    portfolio: {
      eyebrow: 'Portfolio',
      title: ['Work that feels', 'honest'],
      subtitle:
        'Weddings, pre-weddings, engagements, candid moments and films — real couples from @brinda.wedding.',
    },
    services: {
      eyebrow: 'Services',
      title: ['Photos & films for', 'every', 'part of the day'],
      subtitle: 'Choose what you need — or ask us to build a mix that fits your events.',
    },
    about: {
      eyebrow: 'About',
      title: ['Hello, I’m', 'Parth'],
    },
    packages: {
      eyebrow: 'Packages',
      title: ['Clear packages,', 'honest', 'pricing'],
      subtitle:
        'These are starting points. Tell us your dates and events, and we’ll customise a quote for you.',
      note: '* Drone and same-day edits depend on venue rules and package. Final prices are confirmed after a short chat.',
    },
    contact: {
      eyebrow: 'Contact',
      title: ['Tell us about', 'your', 'wedding'],
      subtitle: 'Fill the form and we’ll open WhatsApp with your details ready. Or just call.',
      formSuccess: 'WhatsApp should open with your message. If it doesn’t, tap Email instead.',
    },
    notFound: {
      title: 'This page isn’t here',
      subtitle: 'The link may be old or typed wrong. Let’s get you back home.',
      cta: 'Go to homepage',
    },
  },
  instagramPlaceholders: [
    asset('/portfolio/mukesh-hima-1.jpg'),
    asset('/portfolio/archi-brijesh.jpg'),
    asset('/portfolio/vidhi-krupal.jpg'),
    asset('/portfolio/visweta-wedding.jpg'),
    asset('/portfolio/het-nency.jpg'),
    asset('/portfolio/krupa-jaimin.jpg'),
  ],
}

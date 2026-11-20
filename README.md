# Brinda Wedding — Premium Wedding Photography Website

Frontend-only React site for **Brinda Wedding** (Parth Patel · 8347122490).

## Stack

- React (Vite) + JavaScript
- React Router
- Tailwind CSS v4
- Motion (`motion/react`)
- GSAP + ScrollTrigger
- Lenis smooth scroll
- Radix-based UI primitives (shadcn-style)

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Edit content

All client-editable copy lives in `src/data/`:

| File | Contents |
|------|----------|
| `siteConfig.js` | Brand, phone, social links, stats, process, marquee |
| `services.js` | Service titles & descriptions |
| `portfolio.js` | Gallery items & categories |
| `packages.js` | Pricing packages |
| `testimonials.js` | Client quotes |
| `faqs.js` | FAQ accordion |

Replace Unsplash placeholder images (search for `TODO` comments) with real photos. Logo: `src/assets/logo.jpg` / `public/favicon.jpg`.

## Contact form

Frontend-only: submit opens a prefilled WhatsApp chat (`wa.me/918347122490`) with mailto fallback.

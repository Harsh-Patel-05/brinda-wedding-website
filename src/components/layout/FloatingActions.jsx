import { motion } from 'motion/react'
import { MessageCircle, Phone } from 'lucide-react'
import { siteConfig } from '@/data/siteConfig'
import { buildWhatsAppUrl } from '@/lib/utils'
import { useSiteReady } from '@/hooks/useSiteReady'
import { EASE } from '@/lib/animations'

export function FloatingActions() {
  const ready = useSiteReady()
  const wa = buildWhatsAppUrl(
    siteConfig.whatsapp,
    `Hi ${siteConfig.owner}, I'd like to enquire about wedding photography with ${siteConfig.brand}.`,
  )

  return (
    <motion.div
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(0.75rem,env(safe-area-inset-right))] z-50 flex flex-col gap-2.5 sm:bottom-6 sm:right-5 sm:gap-3 md:bottom-8 md:right-6"
      initial={{ opacity: 0, y: 24, scale: 0.9 }}
      animate={ready ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24 }}
      transition={{ delay: 0.15, duration: 0.55, ease: EASE }}
    >
      <a
        href={`tel:${siteConfig.phoneTel}`}
        aria-label="Call now"
        className="group flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-bg-secondary/90 text-gold-light shadow-lg backdrop-blur transition hover:scale-110 hover:bg-gold/15 hover:shadow-[0_0_24px_rgba(212,168,58,0.35)] sm:h-12 sm:w-12 md:h-14 md:w-14"
      >
        <Phone className="h-5 w-5 transition group-hover:scale-110" />
      </a>
      <a
        href={wa}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] transition hover:scale-110 sm:h-12 sm:w-12 md:h-14 md:w-14"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full border border-[#25D366]/70" />
        <MessageCircle className="relative h-5 w-5" />
      </a>
    </motion.div>
  )
}

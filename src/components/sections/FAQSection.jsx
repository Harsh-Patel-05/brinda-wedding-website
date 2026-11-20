import { faqs } from '@/data/faqs'
import { siteConfig } from '@/data/siteConfig'
import { BlurFade } from '@/components/ui/blur-fade'
import { SectionOrnament } from '@/components/ui/section-ornament'
import { TitleWithScript } from '@/components/ui/title-with-script'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQSection() {
  const copy = siteConfig.sectionCopy

  return (
    <section className="section-pad bg-bg-secondary grain">
      <div className="container-narrow relative z-[2]">
        <BlurFade className="mb-10 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">{copy.faqEyebrow}</p>
          <TitleWithScript parts={copy.faqTitle} className="heading-section font-display" />
          <SectionOrnament />
        </BlurFade>

        <BlurFade delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={`item-${faq.id}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </BlurFade>
      </div>
    </section>
  )
}

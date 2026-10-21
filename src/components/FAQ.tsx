import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Reveal, SectionHeading } from '@/components/ui';

const FAQS = [
  {
    q: 'How long does a website take?',
    a: 'Most websites are delivered within 5–7 days depending on content and revisions.',
  },
  {
    q: 'Do you provide domain and hosting?',
    a: 'Yes. Webora can help you purchase, configure and manage your domain and hosting. These costs are separate from the website development package and depend on the provider and plan selected.',
  },
  {
    q: 'Can I purchase my own domain and hosting?',
    a: 'Yes. You can purchase them yourself, or Webora can arrange and manage them for you.',
  },
  {
    q: 'Can you redesign my existing website?',
    a: 'Yes. Webora can redesign outdated websites and improve their mobile experience and conversion flow.',
  },
  {
    q: 'Will my website work on mobile?',
    a: 'Yes. Every Webora website is designed to be responsive across phones, tablets and desktops.',
  },
  {
    q: 'Can customers contact me through WhatsApp?',
    a: 'Yes. WhatsApp enquiry buttons can be integrated throughout the website.',
  },
  {
    q: 'Do you provide maintenance?',
    a: 'Yes. Optional monthly maintenance and website support plans are available.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, Answered."
          subtitle="Everything you need to know before getting your website built with Webora."
        />

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.q} delay={i * 50}>
                <div
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isOpen ? 'border-gold-400/30 bg-ink-800' : 'border-white/8 bg-ink-850'
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-cream-50 sm:text-lg">{faq.q}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen ? 'bg-gold-400 text-ink-950' : 'bg-white/5 text-cream-300'
                      }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-400 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-cream-400">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

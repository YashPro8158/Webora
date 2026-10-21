import { Check, X, Sparkles } from 'lucide-react';
import { Reveal, SectionHeading, WhatsAppCTA } from '@/components/ui';

const PLANS = [
  {
    name: 'Starter',
    price: 'Starting ₹9,999',
    popular: false,
    features: [
      '4–5 page website',
      'Mobile responsive design',
      'WhatsApp integration',
      'Contact form',
      'Google Maps',
      'Basic SEO',
      'SSL configuration',
      '1 revision',
      '7-day delivery',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Business',
    price: 'Starting ₹14,999',
    popular: true,
    features: [
      '7–8 page website',
      'Premium custom design',
      'WhatsApp integration',
      'Contact form',
      'Google Maps',
      'Gallery / portfolio',
      'Testimonials section',
      'Basic SEO',
      'SSL configuration',
      '2 revisions',
      '7-day delivery',
    ],
    cta: 'Get Started',
  },
];

const INCLUDED = [
  'Website design & development',
  'Mobile responsive design',
  'WhatsApp integration',
  'Contact form',
  'Google Maps',
  'Basic SEO',
  'SSL configuration',
  'Revisions as mentioned in the package',
];

const NOT_INCLUDED = [
  'Domain registration',
  'Hosting / server charges',
  'Paid third-party services',
  'Premium plugins or paid APIs, if required',
];

export function Pricing() {
  return (
    <section id="pricing" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[600px] -translate-x-1/2 rounded-full bg-gold-500/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple Pricing. No Surprises."
          subtitle="Choose the package that fits your business."
        />

        {/* Price cards */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 120}>
              <div
                className={`relative flex h-full flex-col gap-7 rounded-3xl border p-8 transition-all duration-500 ${
                  plan.popular
                    ? 'border-gold-400/30 bg-gradient-to-b from-ink-800 to-ink-850 shadow-glow ring-1 ring-gold-400/10'
                    : 'border-white/[0.07] bg-ink-850/60 hover:border-white/[0.14] hover:bg-ink-800/70'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-gradient-to-b from-gold-400 to-gold-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-ink-950 shadow-[0_8px_24px_-8px_rgba(232,178,90,0.6)]">
                    <Sparkles className="h-3.5 w-3.5" />
                    Most Popular
                  </span>
                )}

                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-cream-50">{plan.name}</h3>
                  <p className="text-lg font-semibold text-gold-400">{plan.price}</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-cream-500">
                    Website design &amp; development
                  </p>
                </div>

                <ul className="flex flex-col gap-3.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-cream-200">
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          plan.popular ? 'bg-gold-400/15 text-gold-400' : 'bg-white/5 text-cream-400'
                        }`}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-3 pt-2">
                  <WhatsAppCTA
                    variant={plan.popular ? 'primary' : 'secondary'}
                    size="md"
                    className="w-full"
                    message={`Hi Webora, I'm interested in the ${plan.name} package (${plan.price}). Can you share more details?`}
                  >
                    {plan.cta}
                  </WhatsAppCTA>
                  <p className="text-center text-xs leading-relaxed text-cream-500">
                    Domain &amp; hosting are not included. We can arrange and manage them for you at an
                    additional cost.
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* What's included / not included */}
        <Reveal delay={150}>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-white/[0.07] bg-ink-850/40">
            <div className="grid grid-cols-1 divide-y divide-white/8 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
              <div className="p-7">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cream-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/15 text-emerald-400">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  Included
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {INCLUDED.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-cream-200">
                      <Check className="h-3.5 w-3.5 shrink-0 text-emerald-400/80" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-7">
                <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-cream-300">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-400/15 text-red-400">
                    <X className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  Not Included
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {NOT_INCLUDED.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-cream-400">
                      <X className="h-3.5 w-3.5 shrink-0 text-red-400/70" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Domain & hosting CTA */}
        <Reveal delay={200}>
          <div className="mx-auto mt-6 flex max-w-4xl flex-col items-center justify-between gap-4 rounded-2xl border border-white/[0.07] bg-ink-850/40 px-7 py-5 text-center sm:flex-row sm:text-left">
            <p className="text-sm leading-relaxed text-cream-400">
              Need domain &amp; hosting? Webora can arrange and manage them for you.{' '}
              <span className="text-cream-200">Ask us for a custom quote.</span>
            </p>
            <WhatsAppCTA
              variant="secondary"
              size="sm"
              className="shrink-0"
              message="Hi Webora, I'd like to know the domain and hosting options for my website."
            >
              Ask About Hosting &amp; Domain
            </WhatsAppCTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { Smartphone, MessageCircle, Zap, Search } from 'lucide-react';
import { Reveal } from '@/components/ui';

const FEATURES = [
  {
    num: '01',
    icon: Smartphone,
    title: 'Built For Mobile',
    description:
      'Most local customers discover businesses from their phones. Your website will look great on every screen.',
  },
  {
    num: '02',
    icon: MessageCircle,
    title: 'WhatsApp Ready',
    description:
      'Make it easy for potential customers to start a conversation with one tap.',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Fast & Modern',
    description:
      'Clean, lightweight websites designed for a smooth browsing experience.',
  },
  {
    num: '04',
    icon: Search,
    title: 'Search Ready',
    description:
      'SEO-friendly structure to help your business build a stronger online presence.',
  },
];

export function WhyWebora() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="absolute inset-0 dot-bg opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Left: heading (sticky on desktop) */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/8 bg-white/[0.03] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-400 backdrop-blur">
                <span className="h-1 w-1 rounded-full bg-gold-400" />
                Why Webora
              </span>
            </Reveal>
            <Reveal delay={80} variant="blur">
              <h2 className="text-balance text-4xl font-bold leading-[1.04] text-cream-50 sm:text-5xl md:text-[3.25rem]">
                Not Just A<br />Pretty Website.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="max-w-md text-pretty text-base leading-relaxed text-cream-400 sm:text-[17px]">
                Your website should help your business get enquiries. Every Webora website
                is built with that goal in mind.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-2 flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4">
                <div className="flex -space-x-2">
                  {['from-gold-400/30 to-gold-500/20', 'from-blue-400/30 to-blue-500/20', 'from-emerald-400/30 to-emerald-500/20'].map((t, i) => (
                    <span key={i} className={`h-8 w-8 rounded-full bg-gradient-to-br ${t} ring-2 ring-ink-900`} />
                  ))}
                </div>
                <p className="text-sm text-cream-300">
                  Built around <span className="font-semibold text-cream-100">your customers</span>, not a template.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: feature rows */}
          <div className="flex flex-col">
            {FEATURES.map((f, i) => (
              <Reveal key={f.num} delay={i * 100}>
                <div className="group relative flex items-start gap-6 border-b border-white/[0.06] py-8 first:pt-0 last:border-b-0">
                  {/* Number */}
                  <span className="hidden font-display text-5xl font-extrabold leading-none text-white/[0.04] transition-colors duration-500 group-hover:text-gold-400/15 sm:block sm:w-16 sm:shrink-0">
                    {f.num}
                  </span>
                  {/* Icon */}
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cream-100 transition-all duration-500 group-hover:border-gold-400/25 group-hover:text-gold-400">
                    <f.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  {/* Content */}
                  <div className="flex flex-col gap-2 pt-1">
                    <h3 className="text-xl font-semibold text-cream-50 sm:text-2xl">{f.title}</h3>
                    <p className="max-w-md text-pretty text-sm leading-relaxed text-cream-400 sm:text-base">
                      {f.description}
                    </p>
                  </div>
                  {/* Hover accent */}
                  <span className="absolute left-0 top-1/2 h-8 w-px -translate-y-1/2 scale-y-0 bg-gradient-to-b from-transparent via-gold-400/60 to-transparent transition-transform duration-500 group-hover:scale-y-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

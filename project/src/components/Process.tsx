import { ClipboardList, PenTool, Rocket } from 'lucide-react';
import { Reveal, SectionHeading } from '@/components/ui';

const STEPS = [
  {
    num: '01',
    icon: ClipboardList,
    title: 'Tell Us About Your Business',
    description: 'Share your business details, services, branding and goals.',
  },
  {
    num: '02',
    icon: PenTool,
    title: 'We Design & Build',
    description: 'We create a professional website tailored to your business.',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Go Live',
    description: 'Approve the website, connect your domain and start receiving enquiries.',
  },
];

export function Process() {
  return (
    <section id="process" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="From Idea To Live Website In 3 Simple Steps."
          subtitle="A clear, straightforward process designed to get your business online without the back-and-forth."
        />

        {/* Desktop: horizontal timeline with connecting cards */}
        <div className="relative mt-16 hidden md:block">
          <div className="grid grid-cols-3 gap-6">
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 120}>
                <div className="group relative flex flex-col items-center text-center">
                  {/* Card */}
                  <div className="relative flex w-full flex-col items-center gap-5 rounded-2xl border border-white/[0.06] bg-ink-850/60 p-8 transition-all duration-500 hover:border-white/[0.12] hover:bg-ink-800/80">
                    <div className="relative">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-b from-ink-750 to-ink-850 text-cream-100 shadow-card transition-all duration-500 group-hover:border-gold-400/25 group-hover:text-gold-400">
                        <step.icon className="h-7 w-7" strokeWidth={1.5} />
                      </div>
                      <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-b from-gold-300 to-gold-500 font-display text-xs font-bold text-ink-950 shadow-[0_4px_12px_-2px_rgba(232,178,90,0.5)]">
                        {step.num}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-cream-50">{step.title}</h3>
                    <p className="max-w-xs text-sm leading-relaxed text-cream-400">{step.description}</p>
                  </div>
                  {/* Connector arrow */}
                  {i < STEPS.length - 1 && (
                    <div className="absolute top-1/2 -right-3 z-10 hidden -translate-y-1/2 lg:block">
                      <svg className="h-5 w-5 text-cream-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="relative mt-12 md:hidden">
          <div className="absolute bottom-0 left-[27px] top-6 w-px bg-gradient-to-b from-gold-400/40 via-gold-400/15 to-transparent" />
          <div className="flex flex-col gap-8">
            {STEPS.map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <div className="flex gap-5">
                  <div className="relative shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-b from-ink-750 to-ink-850 text-cream-100">
                      <step.icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                    <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-b from-gold-300 to-gold-500 font-display text-[10px] font-bold text-ink-950">
                      {step.num}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5 pt-1">
                    <h3 className="text-lg font-semibold text-cream-50">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-cream-400">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

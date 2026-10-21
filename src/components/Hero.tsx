import { MessageCircle, Smartphone, Zap, ArrowRight, Play, Star } from 'lucide-react';
import { WhatsAppCTA } from '@/components/ui';
import { BrowserMockup } from '@/components/BrowserMockup';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-36 sm:pb-24 lg:pt-40">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950/0 via-ink-950/30 to-ink-900" />
      {/* Ambient glows */}
      <div className="absolute -top-32 right-[-10%] h-[520px] w-[520px] rounded-full bg-gold-500/10 blur-[140px]" />
      <div className="absolute top-32 left-[-8%] h-[360px] w-[360px] rounded-full bg-blue-500/5 blur-[120px]" />
      {/* Top edge highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        {/* Left column */}
        <div className="flex flex-col items-start gap-7">
          <div className="animate-fade-up inline-flex items-center gap-2.5 rounded-full border border-white/8 bg-white/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-400 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-400" />
            </span>
            Web Design For Local Businesses
          </div>

          <h1 className="animate-fade-up text-balance text-[2.75rem] font-extrabold leading-[0.98] tracking-tighter text-cream-50 [animation-delay:80ms] sm:text-6xl lg:text-[4.25rem]">
            Websites That Turn{' '}
            <span className="gold-shimmer">Local Businesses</span>{' '}
            Into Leads.
          </h1>

          <p className="animate-fade-up max-w-xl text-pretty text-base leading-relaxed text-cream-400 [animation-delay:160ms] sm:text-lg">
            Fast, modern and mobile-first websites designed to make your business look
            professional and turn visitors into calls, WhatsApp enquiries and customers.
          </p>

          <div className="animate-fade-up flex flex-col gap-3 [animation-delay:240ms] sm:flex-row sm:items-center">
            <WhatsAppCTA size="lg" message="Hi Webora, I'd like to get a free website demo for my business.">
              Get a Free Website Demo
            </WhatsAppCTA>
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-7 py-3.5 text-[15px] font-semibold text-cream-100 backdrop-blur transition-all hover:bg-white/[0.07] hover:border-white/20"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              View Our Work
            </a>
          </div>

          <p className="animate-fade-up flex items-center gap-2 text-sm text-cream-500 [animation-delay:320ms]">
            <ArrowRight className="h-3.5 w-3.5 text-gold-400" />
            Built for businesses that want more enquiries — not just another website.
          </p>

          {/* Stats row */}
          <div className="animate-fade-up mt-2 flex w-full max-w-lg items-center gap-6 border-t border-white/[0.06] pt-6 [animation-delay:400ms]">
            <Stat value="5–7" label="Day delivery" />
            <Divider />
            <Stat value="100%" label="Mobile-first" />
            <Divider />
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1 text-gold-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span className="text-xs text-cream-500">Business-focused</span>
            </div>
          </div>
        </div>

        {/* Right column: browser mockup + floating UI */}
        <div className="animate-fade-up relative [animation-delay:300ms]">
          <div className="relative">
            {/* Glow behind mockup */}
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-gold-500/12 via-transparent to-blue-500/8 blur-3xl" />

            {/* Decorative accent line */}
            <div className="absolute -left-10 top-8 hidden h-px w-8 bg-gradient-to-r from-gold-400/40 to-transparent lg:block" />
            <div className="absolute -right-10 bottom-16 hidden h-px w-8 bg-gradient-to-l from-gold-400/40 to-transparent lg:block" />

            <BrowserMockup url="atelier-interiors.webora.studio" className="relative">
              <InteriorsHeroMockup />
            </BrowserMockup>

            {/* Floating UI elements */}
            <FloatingCard
              className="animate-float -left-4 top-16"
              icon={<MessageCircle className="h-4 w-4 text-[#25D366]" />}
              iconBg="bg-[#25D366]/15"
              topLabel="New"
              bottomLabel="WhatsApp Enquiry"
              indicator={<span className="h-2 w-2 rounded-full bg-[#25D366]" />}
            />

            <FloatingCard
              className="animate-float-slow -right-4 top-44"
              icon={<Smartphone className="h-4 w-4 text-gold-400" />}
              iconBg="bg-gold-400/15"
              topLabel="100%"
              bottomLabel="Mobile Optimized"
            />

            <FloatingCard
              className="animate-float -bottom-4 left-12 [animation-delay:1.5s]"
              icon={<Zap className="h-4 w-4 text-blue-400" />}
              iconBg="bg-blue-400/15"
              topLabel="Under 1s"
              bottomLabel="Fast Loading"
            />
          </div>
        </div>
      </div>

      {/* Trust strip — refined */}
      <div className="relative mx-auto mt-24 max-w-7xl px-5 sm:px-8">
        <p className="mb-5 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-600">
          Trusted by local businesses across India
        </p>
        <div className="mask-fade-r overflow-hidden">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-sm font-medium text-cream-400">
            {['Interior Designers', 'Clinics & Dentists', 'CA & Consultants', 'Real Estate', 'Salons & Gyms', 'Photographers', 'Restaurants', 'Coaches'].map((label) => (
              <span key={label} className="flex items-center gap-2.5 whitespace-nowrap">
                <span className="h-1 w-1 rounded-full bg-gold-400/70" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="font-display text-2xl font-bold text-cream-50">{value}</span>
      <span className="text-xs text-cream-500">{label}</span>
    </div>
  );
}

function Divider() {
  return <span className="h-8 w-px bg-white/[0.08]" />;
}

function FloatingCard({
  className,
  icon,
  iconBg,
  topLabel,
  bottomLabel,
  indicator,
}: {
  className: string;
  icon: React.ReactNode;
  iconBg: string;
  topLabel: string;
  bottomLabel: string;
  indicator?: React.ReactNode;
}) {
  return (
    <div
      className={`absolute hidden rounded-xl border border-white/10 bg-ink-850/90 px-3.5 py-2.5 shadow-card backdrop-blur-md sm:flex sm:items-center sm:gap-2.5 ${className}`}
    >
      <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${iconBg}`}>{icon}</span>
      <div>
        <p className="text-[10px] text-cream-500">{topLabel}</p>
        <p className="text-xs font-semibold text-cream-100">{bottomLabel}</p>
      </div>
      {indicator}
    </div>
  );
}

/* ── Rich interior-design website mockup for the hero ── */
function InteriorsHeroMockup() {
  return (
    <div className="bg-[#181410] text-white">
      {/* Site nav */}
      <div className="flex items-center justify-between px-6 py-4">
        <span className="font-display text-sm font-bold tracking-tight">Atelier</span>
        <div className="hidden gap-5 text-[10px] text-white/60 sm:flex">
          <span>Projects</span>
          <span>Studio</span>
          <span>Journal</span>
          <span className="rounded-full bg-white/10 px-3 py-1 text-white">Contact</span>
        </div>
      </div>
      {/* Hero area with layered gradients simulating an image */}
      <div className="relative h-48 overflow-hidden sm:h-56">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a3a28] via-[#2e2418] to-[#181410]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(232,178,90,0.15),transparent_60%)]" />
        <div className="absolute inset-0 grid-bg opacity-15" />
        {/* Faux content blocks */}
        <div className="absolute right-5 top-5 h-16 w-24 rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm" />
        <div className="relative flex h-full flex-col justify-end p-5">
          <p className="text-[9px] uppercase tracking-[0.2em] text-gold-300/80">Residential Interior Design</p>
          <h3 className="mt-1.5 font-display text-xl font-bold leading-tight sm:text-2xl">
            Spaces Designed<br />Around How You Live
          </h3>
        </div>
      </div>
      {/* Project cards */}
      <div className="grid grid-cols-3 gap-2 p-4">
        {[
          { label: 'Living', tone: 'from-[#4a3a28] to-[#2e2418]' },
          { label: 'Kitchen', tone: 'from-[#3a4a3a] to-[#1e2a1e]' },
          { label: 'Bedroom', tone: 'from-[#4a3a3a] to-[#2a1e1e]' },
        ].map((card) => (
          <div key={card.label} className="rounded-md bg-white/5 p-2">
            <div className={`mb-1.5 h-12 rounded bg-gradient-to-br ${card.tone}`} />
            <p className="text-[8px] text-white/60">{card.label} Design</p>
          </div>
        ))}
      </div>
      {/* CTA strip */}
      <div className="flex items-center justify-between border-t border-white/[0.06] bg-white/[0.02] px-5 py-3">
        <span className="text-[10px] text-white/70">Book a consultation</span>
        <span className="rounded-full bg-[#25D366] px-3 py-1 text-[9px] font-semibold text-white">
          WhatsApp Us
        </span>
      </div>
    </div>
  );
}

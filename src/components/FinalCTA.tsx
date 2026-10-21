import { WhatsAppCTA, Reveal } from '@/components/ui';
import { whatsappLink } from '@/config';

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      {/* Ambient glow field */}
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/[0.12] blur-[160px]" />
      <div className="absolute left-[15%] top-[10%] h-[280px] w-[280px] rounded-full bg-blue-500/[0.06] blur-[110px]" />
      <div className="absolute right-[15%] bottom-[10%] h-[280px] w-[280px] rounded-full bg-gold-400/[0.08] blur-[110px]" />

      {/* Dot texture */}
      <div className="absolute inset-0 dot-bg opacity-30" />

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal variant="blur">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-gradient-to-b from-ink-800/70 to-ink-850/80 p-10 backdrop-blur-xl shadow-soft sm:p-16 lg:p-20">
            {/* Top edge highlight */}
            <div className="absolute -top-px left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />
            {/* Inner subtle gradient */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-b from-gold-400/[0.04] to-transparent" />

            <div className="relative flex flex-col items-center gap-7">
              <span className="inline-flex items-center gap-2.5 rounded-full border border-white/8 bg-white/[0.03] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-400 backdrop-blur">
                <span className="h-1 w-1 rounded-full bg-gold-400" />
                Free Website Demo
              </span>

              <h2 className="text-balance text-4xl font-extrabold leading-[0.98] tracking-tight text-cream-50 sm:text-5xl md:text-6xl">
                Your Customers Are{' '}
                <span className="gold-shimmer">Already Searching.</span>
              </h2>

              <p className="text-balance text-2xl font-semibold leading-tight text-cream-200 sm:text-3xl">
                Make Sure They Find A Business They Trust.
              </p>

              <p className="max-w-xl text-pretty text-base leading-relaxed text-cream-400 sm:text-lg">
                Get a professional website built around your business and your customers.
              </p>

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
                <WhatsAppCTA
                  size="lg"
                  message="Hi Webora, I'd like to get my free website demo. Here are my business details:"
                >
                  Get My Free Website Demo
                </WhatsAppCTA>
                <a
                  href={whatsappLink('Hi Webora, I have a few questions about getting a website for my business.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/12 bg-white/[0.03] px-7 py-3.5 text-[15px] font-semibold text-cream-100 backdrop-blur transition-all hover:bg-white/[0.07] hover:border-white/25"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-[#25D366]" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                  Chat On WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

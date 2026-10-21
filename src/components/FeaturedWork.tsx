import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Reveal, SectionHeading, WhatsAppCTA } from '@/components/ui';
import { BrowserMockup } from '@/components/BrowserMockup';
import { navigate } from '@/hooks/useHashRoute';

interface Project {
  name: string;
  category: string;
  description: string;
  demoRoute: string;
  url: string;
  preview: React.ReactNode;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    name: 'Atelier Interiors',
    category: 'Interior Design',
    description: 'A premium website concept for a residential interior design studio.',
    demoRoute: '/demos/interiors',
    url: 'atelier-interiors.webora.studio',
    tags: ['Portfolio', 'Gallery', 'WhatsApp Booking'],
    preview: <InteriorsPreview />,
  },
  {
    name: 'SmileCare Dental',
    category: 'Dental Clinic',
    description: 'A trust-focused clinic website designed to drive appointment enquiries.',
    demoRoute: '/demos/dental',
    url: 'smilecare-dental.webora.studio',
    tags: ['Appointments', 'Services', 'Reviews'],
    preview: <DentalPreview />,
  },
  {
    name: 'Arora & Co.',
    category: 'Chartered Accountant',
    description: 'A professional website concept for a modern CA and tax consultancy.',
    demoRoute: '/demos/ca',
    url: 'arora-co.webora.studio',
    tags: ['GST', 'ITR Filing', 'Advisory'],
    preview: <CaPreview />,
  },
  {
    name: 'PrimeNest Realty',
    category: 'Real Estate',
    description: 'A lead-focused website concept for a property consultancy.',
    demoRoute: '/demos/real-estate',
    url: 'primenest-realty.webora.studio',
    tags: ['Listings', 'Lead Capture', 'Search'],
    preview: <RealEstatePreview />,
  },
];

export function FeaturedWork() {
  return (
    <section id="work" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Featured Work"
          title="Realistic Website Concepts. Ready For Your Business."
          subtitle="Explore website concepts designed specifically for local businesses."
        />

        <div className="mt-16 flex flex-col gap-6 lg:gap-8">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={i * 60} variant="blur">
              <article
                className={`group grid grid-cols-1 items-center gap-8 rounded-3xl border border-white/[0.06] bg-ink-850/70 p-6 transition-all duration-500 hover:border-white/[0.12] hover:bg-ink-800/80 lg:grid-cols-2 lg:gap-14 lg:p-10 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Browser mockup */}
                <div className="relative">
                  <div className="absolute -inset-5 rounded-3xl bg-gradient-to-tr from-gold-500/8 via-transparent to-transparent opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
                  {/* Tilt on hover for depth */}
                  <div className="relative transition-transform duration-700 group-hover:-translate-y-1">
                    <BrowserMockup url={project.url}>{project.preview}</BrowserMockup>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full border border-gold-400/25 bg-gold-400/[0.08] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-gold-300">
                      {project.category}
                    </span>
                    <span className="text-xs text-cream-500">Concept Demo</span>
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight text-cream-50 sm:text-4xl">
                    {project.name}
                  </h3>
                  <p className="max-w-md text-pretty text-base leading-relaxed text-cream-400">
                    {project.description}
                  </p>

                  {/* Feature tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs text-cream-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => navigate(project.demoRoute)}
                      className="group/btn inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] px-5 py-2.5 text-sm font-semibold text-cream-100 ring-1 ring-white/10 transition-all hover:bg-white/[0.08] hover:ring-white/20"
                    >
                      View Live Demo
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                    <WhatsAppCTA
                      variant="ghost"
                      size="sm"
                      externalIcon={false}
                      message={`Hi Webora, I'd like to see a demo like the ${project.name} website for my business.`}
                    >
                      See What Yours Could Look Like
                    </WhatsAppCTA>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Bottom prompt */}
        <Reveal delay={120}>
          <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center">
            <p className="text-pretty text-lg text-cream-300">
              Don't see your industry? We build for every local business.
            </p>
            <WhatsAppCTA variant="secondary" size="md" message="Hi Webora, I don't see my industry listed. Can you build a website for my type of business?">
              Ask About Your Business
            </WhatsAppCTA>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── In-mockup website previews — each with distinct visual identity ── */

function InteriorsPreview() {
  return (
    <div className="bg-[#181410] text-white">
      <div className="flex items-center justify-between px-5 py-3">
        <span className="font-display text-xs font-bold">Atelier</span>
        <div className="hidden gap-4 text-[8px] text-white/60 sm:flex">
          <span>Projects</span><span>Studio</span><span>Journal</span>
          <span className="rounded-full bg-white/10 px-2.5 py-0.5">Contact</span>
        </div>
      </div>
      <div className="relative h-36 overflow-hidden sm:h-44">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4a3a28] via-[#2e2418] to-[#181410]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(232,178,90,0.12),transparent_60%)]" />
        <div className="absolute right-4 top-4 h-14 w-20 rounded bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm" />
        <div className="relative flex h-full flex-col justify-end p-4">
          <p className="text-[8px] uppercase tracking-[0.2em] text-gold-300/80">Residential Interior Design</p>
          <h3 className="mt-1 font-display text-base font-bold leading-tight sm:text-lg">Spaces Designed Around How You Live</h3>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 p-3">
        {[
          { l: 'Living', t: 'from-[#4a3a28] to-[#2e2418]' },
          { l: 'Kitchen', t: 'from-[#3a4a3a] to-[#1e2a1e]' },
          { l: 'Bedroom', t: 'from-[#4a3a3a] to-[#2a1e1e]' },
        ].map((c) => (
          <div key={c.l} className="rounded bg-white/5 p-1.5">
            <div className={`mb-1 h-10 rounded bg-gradient-to-br ${c.t}`} />
            <p className="text-[7px] text-white/60">{c.l} Design</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-2.5">
        <span className="text-[8px] text-white/70">Book a consultation</span>
        <span className="rounded-full bg-[#25D366] px-2.5 py-0.5 text-[7px] font-semibold">WhatsApp Us</span>
      </div>
    </div>
  );
}

function DentalPreview() {
  return (
    <div className="bg-[#0e2a2a] text-white">
      <div className="flex items-center justify-between px-5 py-3">
        <span className="font-display text-xs font-bold text-teal-200">SmileCare</span>
        <div className="hidden gap-4 text-[8px] text-white/60 sm:flex">
          <span>Services</span><span>Team</span><span>Reviews</span>
          <span className="rounded-full bg-teal-400 px-2.5 py-0.5 text-[#0e2a2a]">Book Now</span>
        </div>
      </div>
      <div className="relative h-36 overflow-hidden sm:h-44">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a4a4a] via-[#123535] to-[#0e2a2a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(45,212,191,0.12),transparent_60%)]" />
        <div className="relative flex h-full flex-col justify-end p-4">
          <p className="text-[8px] uppercase tracking-[0.2em] text-teal-200/80">Dental Clinic</p>
          <h3 className="mt-1 font-display text-base font-bold leading-tight sm:text-lg">Gentle Care For Every Smile</h3>
          <span className="mt-2 inline-flex w-fit rounded-full bg-[#25D366] px-2.5 py-0.5 text-[7px] font-semibold">Book Appointment</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 p-3">
        {[
          { l: 'Root Canal', t: 'from-teal-400/20 to-transparent' },
          { l: 'Cleaning', t: 'from-teal-400/15 to-transparent' },
          { l: 'Braces', t: 'from-teal-400/20 to-transparent' },
        ].map((c) => (
          <div key={c.l} className="rounded bg-white/5 p-1.5">
            <div className={`mb-1 h-10 rounded bg-gradient-to-br ${c.t}`} />
            <p className="text-[7px] text-white/70">{c.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CaPreview() {
  return (
    <div className="bg-[#0f1419] text-white">
      <div className="flex items-center justify-between px-5 py-3">
        <span className="font-display text-xs font-bold">Arora & Co.</span>
        <div className="hidden gap-4 text-[8px] text-white/60 sm:flex">
          <span>Services</span><span>About</span><span>Clients</span>
          <span className="rounded-full bg-blue-400 px-2.5 py-0.5 text-[#0f1419]">Contact</span>
        </div>
      </div>
      <div className="relative h-36 overflow-hidden sm:h-44">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a2530] via-[#141c24] to-[#0f1419]" />
        <div className="absolute inset-0 grid-bg opacity-12" />
        <div className="absolute right-4 top-4 flex gap-1.5">
          <div className="h-8 w-8 rounded bg-blue-400/15" />
          <div className="h-8 w-8 rounded bg-white/8" />
        </div>
        <div className="relative flex h-full flex-col justify-end p-4">
          <p className="text-[8px] uppercase tracking-[0.2em] text-blue-300/80">Chartered Accountants</p>
          <h3 className="mt-1 font-display text-base font-bold leading-tight sm:text-lg">Trusted Tax & Advisory</h3>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 p-3">
        {[
          { l: 'GST', d: 'Filing' },
          { l: 'ITR', d: 'Returns' },
          { l: 'Audit', d: 'Assurance' },
        ].map((c) => (
          <div key={c.l} className="rounded bg-white/5 p-1.5 text-center">
            <p className="text-[8px] font-bold text-blue-300">{c.l}</p>
            <p className="mt-0.5 text-[6px] text-white/50">{c.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function RealEstatePreview() {
  return (
    <div className="bg-[#101a14] text-white">
      <div className="flex items-center justify-between px-5 py-3">
        <span className="font-display text-xs font-bold text-emerald-200">PrimeNest</span>
        <div className="hidden gap-4 text-[8px] text-white/60 sm:flex">
          <span>Listings</span><span>About</span><span>Agents</span>
          <span className="rounded-full bg-emerald-400 px-2.5 py-0.5 text-[#101a14]">Enquire</span>
        </div>
      </div>
      <div className="relative h-36 overflow-hidden sm:h-44">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a28] via-[#142a1c] to-[#101a14]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(52,211,153,0.1),transparent_60%)]" />
        <div className="relative flex h-full flex-col justify-end p-4">
          <p className="text-[8px] uppercase tracking-[0.2em] text-emerald-200/80">Property Consultancy</p>
          <h3 className="mt-1 font-display text-base font-bold leading-tight sm:text-lg">Find Your Next Address</h3>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-3">
        {[
          { l: '2BHK · ₹62L', t: 'from-emerald-400/20 to-transparent' },
          { l: '3BHK · ₹95L', t: 'from-emerald-400/15 to-transparent' },
        ].map((c) => (
          <div key={c.l} className="rounded bg-white/5 p-1.5">
            <div className={`mb-1 h-10 rounded bg-gradient-to-br ${c.t}`} />
            <p className="text-[7px] text-white/70">{c.l}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-white/[0.06] px-4 py-2.5">
        <span className="text-[8px] text-white/70">Talk to an advisor</span>
        <span className="text-[7px] font-semibold text-emerald-300">Enquire →</span>
      </div>
    </div>
  );
}

import { Menu, Phone, MessageCircle, ArrowRight, Star } from 'lucide-react';
import { DemoLayout } from '@/components/DemoLayout';

export function InteriorsDemo() {
  return (
    <DemoLayout brand="Atelier Interiors" category="Interior Design">
      <div className="bg-[#1a1614] text-white">
        {/* Nav */}
        <header className="sticky top-[49px] z-40 border-b border-white/8 bg-[#1a1614]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <span className="font-display text-lg font-bold tracking-tight">Atelier Interiors</span>
            <nav className="hidden gap-7 text-sm text-white/70 md:flex">
              <span className="cursor-pointer hover:text-white">Projects</span>
              <span className="cursor-pointer hover:text-white">Studio</span>
              <span className="cursor-pointer hover:text-white">Journal</span>
              <span className="cursor-pointer hover:text-white">Contact</span>
            </nav>
            <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-medium">Book Consultation</span>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3a2e22] via-[#241d16] to-[#1a1614]" />
          <div className="absolute inset-0 grid-bg opacity-20" />
          <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-300/80">Residential Interior Design · Delhi NCR</p>
            <h1 className="mt-4 max-w-2xl font-display text-5xl font-bold leading-[1.05] md:text-6xl">
              Spaces Designed<br />Around How You Live.
            </h1>
            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-white/70">
              We craft warm, modern interiors for homes that feel considered, functional and unmistakably yours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white">
                <MessageCircle className="h-4 w-4" /> WhatsApp Us
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium">
                View Projects <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </div>
        </section>

        {/* Portfolio grid */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold-300/80">Selected Work</p>
              <h2 className="mt-2 font-display text-3xl font-bold">Recent Projects</h2>
            </div>
            <span className="hidden text-sm text-white/50 md:block">12 projects</span>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { title: 'The Walnut Residence', tag: '3BHK · Gurugram', tone: 'from-[#4a3a2a] to-[#2a2018]' },
              { title: 'Mosaic Apartment', tag: '2BHK · Noida', tone: 'from-[#3a4a3a] to-[#1e2a1e]' },
              { title: 'Cedar Villa', tag: '4BHK · Delhi', tone: 'from-[#4a3a3a] to-[#2a1e1e]' },
            ].map((p) => (
              <div key={p.title} className="group overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02]">
                <div className={`relative h-48 bg-gradient-to-br ${p.tone}`}>
                  <div className="absolute inset-0 grid-bg opacity-20" />
                </div>
                <div className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-xs text-white/50">{p.tag}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="border-t border-white/8 bg-white/[0.02] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl font-bold">What We Do</h2>
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              {[
                { t: 'Full Home Interiors', d: 'End-to-end design, sourcing and execution.' },
                { t: 'Modular Kitchens', d: 'Functional kitchens built around your space.' },
                { t: 'Space Planning', d: 'Layouts that make every square foot count.' },
              ].map((s) => (
                <div key={s.t} className="rounded-2xl border border-white/8 bg-[#1a1614] p-6">
                  <h3 className="font-display text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-white/60">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <div className="flex justify-center gap-1 text-gold-300">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
          </div>
          <p className="mt-6 text-pretty text-xl font-medium leading-relaxed text-white/90">
            "Atelier transformed our apartment into a home that actually feels like us. Every detail was considered."
          </p>
          <p className="mt-4 text-sm text-white/50">— Riya & Karan, Gurugram</p>
        </section>

        {/* Contact strip */}
        <section className="border-t border-white/8 bg-[#221b15] py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
            <div>
              <h2 className="font-display text-2xl font-bold">Let's design your space.</h2>
              <p className="mt-1 text-sm text-white/60">Book a free consultation on WhatsApp.</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold">
              <Phone className="h-4 w-4" /> Book Now
            </span>
          </div>
        </section>
      </div>
    </DemoLayout>
  );
}

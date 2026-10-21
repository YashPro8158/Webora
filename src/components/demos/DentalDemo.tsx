import { Phone, Clock, Calendar, MessageCircle, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { DemoLayout } from '@/components/DemoLayout';

export function DentalDemo() {
  return (
    <DemoLayout brand="SmileCare Dental" category="Dental Clinic">
      <div className="bg-[#0e2a2a] text-white">
        <header className="sticky top-[49px] z-40 border-b border-white/8 bg-[#0e2a2a]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <span className="font-display text-lg font-bold text-teal-200">SmileCare Dental</span>
            <nav className="hidden gap-7 text-sm text-white/70 md:flex">
              <span className="cursor-pointer hover:text-white">Services</span>
              <span className="cursor-pointer hover:text-white">Team</span>
              <span className="cursor-pointer hover:text-white">Reviews</span>
              <span className="cursor-pointer hover:text-white">Contact</span>
            </nav>
            <span className="rounded-full bg-teal-400 px-4 py-2 text-xs font-bold text-[#0e2a2a]">Book Appointment</span>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a4a4a] via-[#123535] to-[#0e2a2a]" />
          <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
            <p className="text-xs uppercase tracking-[0.25em] text-teal-200/80">Dental Clinic · Delhi NCR</p>
            <h1 className="mt-4 max-w-2xl font-display text-5xl font-bold leading-[1.05] md:text-6xl">
              Gentle Care For<br />Every Smile.
            </h1>
            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-white/70">
              Modern, painless dentistry for the whole family. Book your appointment in seconds — walk out smiling.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold">
                <Calendar className="h-4 w-4" /> Book Appointment
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium">
                <Phone className="h-4 w-4" /> Call Clinic
              </span>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/60">
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-teal-300" /> Open Mon–Sat</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-teal-300" /> Sterilized equipment</span>
              <span className="flex items-center gap-2"><Star className="h-4 w-4 text-teal-300" /> 4.9 · 320+ reviews</span>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-bold">Our Services</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-4">
            {[
              { t: 'Root Canal', d: 'Painless RCT with modern tools.' },
              { t: 'Teeth Cleaning', d: 'Scaling & polishing for healthy gums.' },
              { t: 'Braces & Aligners', d: 'Straighten your smile discreetly.' },
              { t: 'Dental Implants', d: 'Permanent solutions for missing teeth.' },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-white/8 bg-white/[0.03] p-6">
                <div className="mb-3 h-10 w-10 rounded-lg bg-teal-400/15" />
                <h3 className="font-semibold">{s.t}</h3>
                <p className="mt-1.5 text-sm text-white/60">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why choose */}
        <section className="border-t border-white/8 bg-white/[0.02] py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div>
                <h2 className="font-display text-3xl font-bold">Why Patients Trust Us</h2>
                <ul className="mt-6 flex flex-col gap-4">
                  {['Experienced, gentle dentists', 'Transparent pricing, no surprises', 'Same-day emergency appointments', 'Family-friendly clinic'].map((l) => (
                    <li key={l} className="flex items-center gap-3 text-sm text-white/80">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-400/20 text-teal-300">✓</span>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-white/8 bg-[#123535] p-7">
                <div className="flex gap-1 text-teal-300">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-pretty text-lg font-medium leading-relaxed">
                  "I've never felt this comfortable at a dentist. The team explained everything and there was zero pain."
                </p>
                <p className="mt-4 text-sm text-white/50">— Anjali Mehta</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact strip */}
        <section className="border-t border-white/8 bg-[#163a3a] py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
            <div>
              <h2 className="font-display text-2xl font-bold">Book your appointment today.</h2>
              <p className="mt-1 text-sm text-white/60">Available Mon–Sat, 10am–8pm.</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold">
              <MessageCircle className="h-4 w-4" /> WhatsApp Clinic
            </span>
          </div>
        </section>
      </div>
    </DemoLayout>
  );
}

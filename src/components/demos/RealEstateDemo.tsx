import { MapPin, BedDouble, Bath, Maximize, Phone, ArrowRight, Search } from 'lucide-react';
import { DemoLayout } from '@/components/DemoLayout';

export function RealEstateDemo() {
  return (
    <DemoLayout brand="PrimeNest Realty" category="Real Estate">
      <div className="bg-[#101a14] text-white">
        <header className="sticky top-[49px] z-40 border-b border-white/8 bg-[#101a14]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <span className="font-display text-lg font-bold tracking-tight text-emerald-200">PrimeNest Realty</span>
            <nav className="hidden gap-7 text-sm text-white/70 md:flex">
              <span className="cursor-pointer hover:text-white">Listings</span>
              <span className="cursor-pointer hover:text-white">About</span>
              <span className="cursor-pointer hover:text-white">Agents</span>
              <span className="cursor-pointer hover:text-white">Contact</span>
            </nav>
            <span className="rounded-full bg-emerald-400 px-4 py-2 text-xs font-bold text-[#101a14]">Enquire Now</span>
          </div>
        </header>

        {/* Hero with search */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a28] via-[#142a1c] to-[#101a14]" />
          <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-200/80">Property Consultancy · Delhi NCR</p>
            <h1 className="mt-4 max-w-2xl font-display text-5xl font-bold leading-[1.05] md:text-6xl">
              Find Your<br />Next Address.
            </h1>
            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-white/70">
              Verified homes and investment properties across Delhi NCR. Talk to a real advisor — not a call centre.
            </p>
            {/* search bar */}
            <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 sm:flex-row">
              <div className="flex flex-1 items-center gap-2 rounded-lg bg-[#0a1209] px-4 py-3">
                <MapPin className="h-4 w-4 text-emerald-300" />
                <input placeholder="Location — e.g. Gurugram, Noida" className="w-full bg-transparent text-sm text-white placeholder:text-white/40 outline-none" />
              </div>
              <span className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400 px-6 py-3 text-sm font-bold text-[#101a14]">
                <Search className="h-4 w-4" /> Search
              </span>
            </div>
          </div>
        </section>

        {/* Listings */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-emerald-200/80">Featured Listings</p>
              <h2 className="mt-2 font-display text-3xl font-bold">Properties For You</h2>
            </div>
            <span className="hidden text-sm text-white/50 md:block">Showing 4 of 48</span>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              { title: '2BHK · Sector 56, Gurugram', price: '₹62 L', tag: 'Ready to Move' },
              { title: '3BHK · Noida Extension', price: '₹95 L', tag: 'Under Construction' },
              { title: '4BHK Villa · South Delhi', price: '₹3.2 Cr', tag: 'Premium' },
              { title: 'Studio · Dwarka Expressway', price: '₹38 L', tag: 'Investment' },
            ].map((p) => (
              <div key={p.title} className="group overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03]">
                <div className="relative h-44 bg-gradient-to-br from-emerald-400/20 via-[#1a3a28] to-[#101a14]">
                  <span className="absolute left-3 top-3 rounded-full bg-emerald-400 px-3 py-1 text-[10px] font-bold text-[#101a14]">{p.tag}</span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{p.title}</h3>
                    <span className="font-display text-lg font-bold text-emerald-300">{p.price}</span>
                  </div>
                  <div className="mt-3 flex gap-4 text-xs text-white/50">
                    <span className="flex items-center gap-1"><BedDouble className="h-3.5 w-3.5" /> 2 Beds</span>
                    <span className="flex items-center gap-1"><Bath className="h-3.5 w-3.5" /> 2 Baths</span>
                    <span className="flex items-center gap-1"><Maximize className="h-3.5 w-3.5" /> 1,200 sqft</span>
                  </div>
                  <button className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-300">
                    Enquire on WhatsApp <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact strip */}
        <section className="border-t border-white/8 bg-[#142a1c] py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
            <div>
              <h2 className="font-display text-2xl font-bold">Looking for the right property?</h2>
              <p className="mt-1 text-sm text-white/60">Talk to a PrimeNest advisor today.</p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold">
              <Phone className="h-4 w-4" /> Contact Advisor
            </span>
          </div>
        </section>
      </div>
    </DemoLayout>
  );
}

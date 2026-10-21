import { Phone, FileText, ArrowRight, ShieldCheck, Briefcase } from 'lucide-react';
import { DemoLayout } from '@/components/DemoLayout';

export function CaDemo() {
  return (
    <DemoLayout brand="Arora & Co." category="Chartered Accountant">
      <div className="bg-[#0f1419] text-white">
        <header className="sticky top-[49px] z-40 border-b border-white/8 bg-[#0f1419]/90 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <span className="font-display text-lg font-bold tracking-tight">Arora & Co.</span>
            <nav className="hidden gap-7 text-sm text-white/70 md:flex">
              <span className="cursor-pointer hover:text-white">Services</span>
              <span className="cursor-pointer hover:text-white">About</span>
              <span className="cursor-pointer hover:text-white">Clients</span>
              <span className="cursor-pointer hover:text-white">Insights</span>
            </nav>
            <span className="rounded-full bg-blue-400 px-4 py-2 text-xs font-bold text-[#0f1419]">Contact</span>
          </div>
        </header>

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a2530] via-[#141c24] to-[#0f1419]" />
          <div className="absolute inset-0 grid-bg opacity-15" />
          <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
            <p className="text-xs uppercase tracking-[0.25em] text-blue-300/80">Chartered Accountants · Delhi NCR</p>
            <h1 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-[1.05] md:text-6xl">
              Trusted Tax &<br />Advisory, Simplified.
            </h1>
            <p className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-white/70">
              From GST and income tax to business advisory — we help individuals and companies stay compliant and grow with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-400 px-6 py-3 text-sm font-bold text-[#0f1419]">
                <FileText className="h-4 w-4" /> Book Consultation
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium">
                <Phone className="h-4 w-4" /> Call Us
              </span>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="font-display text-3xl font-bold">Our Services</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { t: 'GST & Indirect Tax', d: 'Registration, filing and compliance support.' },
              { t: 'Income Tax Returns', d: 'Accurate ITR filing for individuals & businesses.' },
              { t: 'Audit & Assurance', d: 'Statutory and internal audits you can rely on.' },
              { t: 'Business Advisory', d: 'Strategic guidance for growth and compliance.' },
              { t: 'Company Registration', d: 'Start your business the right way.' },
              { t: 'Accounting & Bookkeeping', d: 'Clean books, accurate reports, monthly review.' },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-colors hover:border-blue-400/20">
                <Briefcase className="h-6 w-6 text-blue-300" />
                <h3 className="mt-4 font-semibold">{s.t}</h3>
                <p className="mt-1.5 text-sm text-white/60">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="border-t border-white/8 bg-white/[0.02] py-16">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
            {[
              { n: '12+', l: 'Years Experience' },
              { n: '500+', l: 'Happy Clients' },
              { n: '1,200+', l: 'Returns Filed' },
              { n: '100%', l: 'Compliance Rate' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="font-display text-4xl font-bold text-blue-300">{s.n}</p>
                <p className="mt-1 text-sm text-white/50">{s.l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact strip */}
        <section className="border-t border-white/8 bg-[#141c24] py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-blue-300" />
              <div>
                <h2 className="font-display text-2xl font-bold">Let's handle your compliance.</h2>
                <p className="mt-1 text-sm text-white/60">Book a confidential consultation today.</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold">
              <ArrowRight className="h-4 w-4" /> Get In Touch
            </span>
          </div>
        </section>
      </div>
    </DemoLayout>
  );
}

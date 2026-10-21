import {
  Armchair,
  Stethoscope,
  Calculator,
  Building2,
  Scissors,
  Camera,
  ArrowRight,
} from 'lucide-react';
import { Reveal, SectionHeading } from '@/components/ui';
import { navigate } from '@/hooks/useHashRoute';

const BUSINESS_TYPES = [
  {
    icon: Armchair,
    title: 'Interior Designers',
    description: 'Showcase your portfolio with a website that feels as refined as your work.',
    demo: '/demos/interiors',
    accent: 'from-amber-400/15',
  },
  {
    icon: Stethoscope,
    title: 'Clinics & Dentists',
    description: 'Build trust and drive appointment enquiries with a clean clinic website.',
    demo: '/demos/dental',
    accent: 'from-teal-400/15',
  },
  {
    icon: Calculator,
    title: 'CA & Consultants',
    description: 'A professional online presence that signals credibility and expertise.',
    demo: '/demos/ca',
    accent: 'from-blue-400/15',
  },
  {
    icon: Building2,
    title: 'Real Estate',
    description: 'List properties and capture leads with a fast, search-friendly website.',
    demo: '/demos/real-estate',
    accent: 'from-emerald-400/15',
  },
  {
    icon: Scissors,
    title: 'Salons & Gyms',
    description: 'Attract local customers and let them book or enquire in one tap.',
    demo: '/demos/interiors',
    accent: 'from-pink-400/15',
  },
  {
    icon: Camera,
    title: 'Photographers',
    description: 'A gallery-first website that lets your photography do the talking.',
    demo: '/demos/interiors',
    accent: 'from-violet-400/15',
  },
];

export function BusinessTypes() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Who We Build For"
          title="Built For Businesses Like Yours."
          subtitle="Whether you're a local professional or a growing service business, Webora builds websites around the way your customers actually buy."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {BUSINESS_TYPES.map((type, i) => (
            <Reveal key={type.title} delay={i * 70}>
              <button
                onClick={() => navigate(type.demo)}
                className="group relative flex h-full w-full flex-col items-start gap-4 overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-850/60 p-7 text-left transition-all duration-500 hover:border-white/[0.12] hover:bg-ink-800/80 hover:-translate-y-0.5"
              >
                <div
                  className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${type.accent} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="flex w-full items-center justify-between">
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cream-100 transition-all duration-500 group-hover:scale-105 group-hover:border-gold-400/20 group-hover:text-gold-400">
                    <type.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <ArrowRight className="h-4 w-4 text-cream-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold text-cream-50">{type.title}</h3>
                  <p className="text-sm leading-relaxed text-cream-400">{type.description}</p>
                </div>
                <span className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold-400/80 transition-colors group-hover:text-gold-300">
                  View Demo
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

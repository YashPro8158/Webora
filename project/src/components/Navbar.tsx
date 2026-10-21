import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrolled } from '@/hooks/useScrolled';
import { WhatsAppCTA } from '@/components/ui';
import { SITE_CONFIG, whatsappLink } from '@/config';
import { navigate } from '@/hooks/useHashRoute';

const NAV_LINKS = [
  { label: 'Work', route: '/#work' },
  { label: 'Services', route: '/#services' },
  { label: 'Pricing', route: '/#pricing' },
  { label: 'Process', route: '/#process' },
  { label: 'Contact', route: '/#contact' },
];

export function Navbar() {
  const scrolled = useScrolled(16);
  const [open, setOpen] = useState(false);

  const goHome = () => navigate('/');

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled ? 'glass-strong shadow-soft' : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
          {/* Brand */}
          <button onClick={goHome} className="group flex items-center gap-2.5" aria-label="Webora home">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-b from-ink-750 to-ink-850 font-display text-lg font-extrabold text-cream-50 ring-1 ring-white/10 transition-all group-hover:ring-gold-400/30">
              W
            </span>
            <span className="font-display text-lg font-extrabold tracking-tight text-cream-50">
              {SITE_CONFIG.brand}
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.02] px-2 py-1.5 backdrop-blur md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.route}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-cream-400 transition-colors hover:bg-white/[0.06] hover:text-cream-50"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <WhatsAppCTA size="sm">Get a Free Demo</WhatsAppCTA>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-cream-100 ring-1 ring-white/10 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-30 md:hidden">
          <div
            className="absolute inset-0 bg-ink-950/80 backdrop-blur-xl"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-x-4 top-[68px] rounded-2xl border border-white/10 bg-ink-850/95 p-6 shadow-soft backdrop-blur-xl">
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.route}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-medium text-cream-200 transition-colors hover:bg-white/5 hover:text-cream-50"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-4 flex flex-col gap-3 border-t border-white/[0.06] pt-4">
              <WhatsAppCTA
                size="md"
                className="w-full"
                message="Hi Webora, I'd like to get a free website demo for my business."
              >
                Get a Free Demo
              </WhatsAppCTA>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-cream-200"
              >
                Chat On WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

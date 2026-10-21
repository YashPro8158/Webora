import { Mail, Instagram, MessageCircle, MapPin } from 'lucide-react';
import { SITE_CONFIG, whatsappLink } from '@/config';
import { navigate } from '@/hooks/useHashRoute';

const FOOTER_LINKS = [
  { label: 'Work', route: '/#work' },
  { label: 'Services', route: '/#services' },
  { label: 'Pricing', route: '/#pricing' },
  { label: 'FAQ', route: '/#faq' },
  { label: 'Contact', route: '/#contact' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-ink-950">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <button onClick={() => navigate('/')} className="group flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-800 font-display text-lg font-extrabold text-cream-50 ring-1 ring-white/10">
                W
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight text-cream-50">
                {SITE_CONFIG.brand}
              </span>
            </button>
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-cream-500">
              {SITE_CONFIG.tagline}
            </p>
            <span className="mt-2 inline-flex items-center gap-2 text-sm text-cream-400">
              <MapPin className="h-4 w-4 text-gold-400" />
              {SITE_CONFIG.location}
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-500">Explore</h4>
            <ul className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.route}
                    className="text-sm text-cream-300 transition-colors hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-cream-500">Contact</h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-cream-300 transition-colors hover:text-gold-400"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2.5 text-sm text-cream-300 transition-colors hover:text-gold-400"
                >
                  <Mail className="h-4 w-4 text-gold-400" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-cream-300 transition-colors hover:text-gold-400"
                >
                  <Instagram className="h-4 w-4 text-pink-400" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-sm text-cream-500">© 2026 {SITE_CONFIG.brand}. All rights reserved.</p>
          <p className="text-xs text-cream-600">Designed & built in Delhi NCR, India.</p>
        </div>
      </div>
    </footer>
  );
}

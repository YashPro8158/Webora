import { ArrowLeft, ExternalLink } from 'lucide-react';
import { WhatsAppCTA } from '@/components/ui';
import { navigate } from '@/hooks/useHashRoute';
import { whatsappLink } from '@/config';

interface DemoLayoutProps {
  brand: string;
  category: string;
  children: React.ReactNode;
  /** The "real" URL this demo imitates — shown as a link back to Webora */
  accentColor?: string;
}

/** Shared chrome for all demo pages — a back-to-Webora bar + the website concept. */
export function DemoLayout({ brand, category, children }: DemoLayoutProps) {
  return (
    <div className="min-h-screen bg-ink-950">
      {/* Demo notice bar */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-ink-900/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3">
          <button
            onClick={() => navigate('/')}
            className="group inline-flex items-center gap-2 text-sm font-medium text-cream-300 transition-colors hover:text-cream-50"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to Webora
          </button>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-cream-500 sm:inline">
              {brand} — {category} concept demo
            </span>
            <WhatsAppCTA size="sm" message={`Hi Webora, I saw the ${brand} demo and I'd like a website like this for my business.`}>
              Get One Like This
            </WhatsAppCTA>
          </div>
        </div>
      </div>

      {/* The website concept itself */}
      {children}

      {/* Footer CTA to convert demo viewers */}
      <div className="border-t border-white/10 bg-ink-900 py-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 px-5 text-center">
          <p className="text-pretty text-lg font-semibold text-cream-100">
            Like what you see? This is a concept — your website can look this good.
          </p>
          <p className="text-sm text-cream-400">
            Get a free demo tailored to your business, built by Webora.
          </p>
          <div className="mt-1 flex flex-col gap-3 sm:flex-row">
            <WhatsAppCTA size="md" message={`Hi Webora, I liked the ${brand} demo. I'd like a free demo for my business.`}>
              Get My Free Demo
            </WhatsAppCTA>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-cream-200 hover:bg-white/5"
            >
              Talk To Webora
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

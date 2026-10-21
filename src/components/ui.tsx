import { whatsappLink } from '@/config';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  variant?: 'up' | 'blur';
}

/** Wraps children with a scroll-triggered reveal animation. */
export function Reveal({ children, className = '', delay = 0, as = 'div', variant = 'up' }: RevealProps) {
  const Tag = as as any;
  const baseClass = variant === 'blur' ? 'reveal-blur' : 'reveal';
  return (
    <Tag
      className={`${baseClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      ref={(el: HTMLElement | null) => {
        if (!el) return;
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add('is-visible');
                obs.disconnect();
              }
            });
          },
          { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
        );
        obs.observe(el);
      }}
    >
      {children}
    </Tag>
  );
}

interface WhatsAppCTAProps {
  children: React.ReactNode;
  message?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  externalIcon?: boolean;
}

/** Reusable WhatsApp call-to-action button. */
export function WhatsAppCTA({
  children,
  message,
  variant = 'primary',
  size = 'md',
  className = '',
  externalIcon = true,
}: WhatsAppCTAProps) {
  const sizes = {
    sm: 'px-4 py-2 text-[13px]',
    md: 'px-6 py-3 text-sm',
    lg: 'px-7 py-3.5 text-[15px]',
  };

  const variants = {
    primary:
      'bg-gradient-to-b from-gold-300 via-gold-400 to-gold-500 text-ink-950 hover:from-gold-200 hover:via-gold-300 hover:to-gold-400 shadow-[0_8px_28px_-10px_rgba(232,178,90,0.55)] hover:shadow-[0_12px_36px_-10px_rgba(232,178,90,0.7)]',
    secondary:
      'bg-white/[0.04] text-cream-100 border border-white/10 hover:bg-white/[0.08] hover:border-white/20 backdrop-blur',
    ghost: 'text-cream-400 hover:text-cream-100 hover:bg-white/5',
  };

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {variant === 'primary' && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
      <span className="relative flex items-center gap-2">
        {children}
        {externalIcon && (
          <svg
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 17L17 7M17 7H8M17 7v9" />
          </svg>
        )}
      </span>
    </a>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-6 ${
        align === 'center' ? 'items-center text-center' : 'items-start text-left'
      } ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/8 bg-white/[0.03] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-cream-400 backdrop-blur">
            <span className="h-1 w-1 rounded-full bg-gold-400" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={80} variant="blur">
        <h2 className="max-w-3xl text-balance text-4xl font-bold leading-[1.04] text-cream-50 sm:text-5xl md:text-[3.25rem]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p
            className={`max-w-2xl text-pretty text-base leading-relaxed text-cream-400 sm:text-[17px] ${
              align === 'center' ? 'mx-auto' : ''
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

interface WhatsAppFabProps {
  message?: string;
}

/** Floating WhatsApp button fixed to bottom-right of screen. */
export function WhatsAppFab({ message }: WhatsAppFabProps) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Webora on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_40px_-8px_rgba(37,211,102,0.55)] transition-transform duration-300 hover:scale-110 active:scale-95"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
      <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-7 w-7" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.464 3.488" />
      </svg>
    </a>
  );
}

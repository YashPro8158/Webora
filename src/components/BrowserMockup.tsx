import { ArrowUpRight, Lock, RefreshCw } from 'lucide-react';

interface BrowserMockupProps {
  url: string;
  children?: React.ReactNode;
  className?: string;
  dark?: boolean;
}

/** A premium browser-window frame wrapping website content. */
export function BrowserMockup({
  url,
  children,
  className = '',
  dark = false,
}: BrowserMockupProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/[0.08] bg-ink-850 shadow-soft ring-1 ring-black/40 ${className}`}
    >
      {/* Browser top bar */}
      <div className="flex items-center gap-3 border-b border-white/[0.06] bg-gradient-to-b from-ink-800 to-ink-850 px-4 py-2.5">
        {/* Traffic lights */}
        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57] ring-1 ring-black/20" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e] ring-1 ring-black/20" />
          <span className="h-3 w-3 rounded-full bg-[#28c840] ring-1 ring-black/20" />
        </div>

        {/* Tab pill */}
        <div className="ml-2 hidden items-center gap-2 rounded-t-lg rounded-br-md bg-ink-850 px-3 py-1.5 sm:flex">
          <span className="h-3.5 w-3.5 rounded-sm bg-gradient-to-br from-white/15 to-white/5" />
          <span className="max-w-[120px] truncate text-[11px] text-cream-400">{url.replace('www.', '')}</span>
          <span className="ml-1 text-cream-600 text-[11px]">×</span>
        </div>

        {/* URL bar */}
        <div className="mx-auto flex w-full max-w-xs items-center gap-2 rounded-md border border-white/[0.06] bg-ink-900/80 px-3 py-1.5">
          <Lock className="h-3 w-3 text-emerald-400/70" strokeWidth={2.5} />
          <span className="truncate text-[11px] text-cream-400">{url}</span>
          <RefreshCw className="ml-auto h-3 w-3 text-cream-600" strokeWidth={2} />
        </div>

        <div className="hidden w-8 sm:block" />
      </div>
      {/* Content */}
      <div className={dark ? 'bg-ink-900' : 'bg-white'}>{children}</div>
    </div>
  );
}

interface ProjectLinkProps {
  href: string;
  children: React.ReactNode;
}

export function ProjectLink({ href, children }: ProjectLinkProps) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-1 text-sm font-semibold text-gold-400 transition-colors hover:text-gold-300"
    >
      {children}
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </a>
  );
}

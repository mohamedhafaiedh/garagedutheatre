import Link from 'next/link';
import { PHONE_DISPLAY, PHONE_HREF, QUOTE_HREF } from '@/lib/site';

const ICONS = {
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
  mail: <><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
  pin: <><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>,
  right: <path d="m9 18 6-6-6-6" />,
  left: <path d="m15 18-6-6 6-6" />,
  arrow: <><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>,
  check: <path d="M20 6 9 17l-5-5" />,
  // Atouts
  bolt: <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />,
  badge: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />,
  euro: <><path d="M4 10h12" /><path d="M4 14h9" /><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2" /></>,
  // Services
  oil: <><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" /><path d="M9.5 15.5a2.5 2.5 0 0 0 2.5 2.5" /></>,
  brake: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /><path d="M12 5.5v.01M18.5 12h.01M12 18.5v.01M5.5 12h.01" /><path d="M4.5 6.5A10 10 0 0 1 9 2.5" strokeWidth={3.2} /></>,
  belt: <><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="2.5" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" /></>,
  suspension: <><path d="M12 2v3" /><path d="M12 19v3" /><path d="M6.5 5h11" /><path d="M6.5 19h11" /><path d="M17 5 7 8.5l10 3.5-10 3.5L17 19" /></>,
  battery: <><rect x="2.5" y="7" width="19" height="13" rx="2" /><path d="M6 7V4.5h3V7" /><path d="M15 7V4.5h3V7" /><path d="M6 13.5h3.5" /><path d="M14.5 13.5H18" /><path d="M16.25 11.75v3.5" /></>,
  tyre: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /><path d="M12 7v4M12 13v4M7 12h4M13 12h4" /></>,
  clipboard: <><rect width="8" height="4" x="8" y="2" rx="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="m9 14 2 2 4-4" /></>,
  exhaust: <><path d="M2 10h11.5a3 3 0 0 1 0 6H2" /><path d="M6.5 10v6" /><circle cx="20" cy="7.5" r="2.5" /><circle cx="20.5" cy="15.5" r="1.5" /><circle cx="17" cy="20" r="1" /></>,
  // Étapes
  quote: <><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /><path d="M10 9H8" /><path d="M16 13H8" /><path d="M16 17H8" /></>,
  calendar: <><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="m9 16 2 2 4-4" /></>,
  garage: <><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></>,
  // Pages légales
  building: <><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" /></>,
  server: <><rect width="20" height="8" x="2" y="2" rx="2" /><rect width="20" height="8" x="2" y="14" rx="2" /><path d="M6 6h.01" /><path d="M6 18h.01" /></>,
  lock: <><rect width="18" height="11" x="3" y="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></>,
  cookie: <><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" /><path d="M8.5 8.5v.01" /><path d="M16 15.5v.01" /><path d="M12 12v.01" /><path d="M11 17v.01" /><path d="M7 14v.01" /></>,
  user: <><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></>,
  scale: <><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" /><path d="M7 21h10" /><path d="M12 3v18" /><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" /></>,
  file: <><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" /><path d="M14 2v4a2 2 0 0 0 2 2h4" /></>,
  shield: <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />,
  // Mentions légales (modèle commun) : propriété intellectuelle et données personnelles
  copyright: <><circle cx="12" cy="12" r="10" /><path d="M14.83 14.83a4 4 0 1 1 0-5.66" /></>,
  shieldCheck: <><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></>
};

export type IconName = keyof typeof ICONS;

export function Icon({ name, className = 'h-5 w-5', strokeWidth = 2 }: { name: IconName; className?: string; strokeWidth?: number }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
    >
      {ICONS[name]}
    </svg>
  );
}

export function GoogleG({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 48 48">
      <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.6-.4-3.9z" />
      <path fill="#FF3D00" d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
      <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
      <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.6-.4-3.9z" />
    </svg>
  );
}

export function Stars({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <svg key={i} className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
        </svg>
      ))}
    </span>
  );
}

/* Sur-titre : trait jaune + petites capitales (rappel des barres du logo) */
export function Eyebrow({ children, tone = 'light' }: { children: React.ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <p className={`flex items-center gap-3 text-xs font-bold tracking-[0.22em] uppercase ${tone === 'dark' ? 'text-white/80' : 'text-steel'}`}>
      <span aria-hidden="true" className="h-[3px] w-8 bg-brand" />
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  eyebrow,
  align = 'center',
  tone = 'light'
}: {
  children: React.ReactNode;
  eyebrow?: string;
  align?: 'center' | 'left';
  tone?: 'light' | 'dark';
}) {
  return (
    <div data-reveal className={`flex flex-col gap-4 ${align === 'center' ? 'items-center text-center' : 'items-start'}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 className={`font-display text-3xl font-extrabold tracking-normal text-balance sm:text-4xl ${tone === 'dark' ? 'text-white' : 'text-ink'}`}>
        {children}
      </h2>
    </div>
  );
}

const btnBase =
  'm-press inline-flex items-center justify-center gap-2.5 rounded-md font-bold whitespace-nowrap transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink';

export function CallButton({ className = '', label }: { className?: string; label?: string }) {
  return (
    <a
      href={PHONE_HREF}
      aria-label={`Appeler le ${PHONE_DISPLAY}`}
      className={`${btnBase} bg-brand px-6 py-3.5 text-base text-ink hover:bg-brand-strong ${className}`}
    >
      <Icon name="phone" className="h-5 w-5" />
      {label ?? PHONE_DISPLAY}
    </a>
  );
}

export function QuoteButton({ className = '', tone = 'light', children }: { className?: string; tone?: 'light' | 'dark'; children?: React.ReactNode }) {
  const colors =
    tone === 'dark'
      ? 'border-white text-white hover:bg-white hover:text-ink focus-visible:outline-white'
      : 'border-ink text-ink hover:bg-ink hover:text-white';
  return (
    <Link href={QUOTE_HREF} className={`${btnBase} border-2 px-6 py-3 text-base ${colors} ${className}`}>
      {children ?? 'Obtenir un devis gratuit'}
    </Link>
  );
}

/* Tuile d'icône douce (fond jaune pâle, pictogramme noir) pour les infos de contact */
export function IconTile({ name, className = 'h-11 w-11' }: { name: IconName; className?: string }) {
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-md bg-brand-soft text-ink ${className}`}>
      <Icon name={name} />
    </span>
  );
}

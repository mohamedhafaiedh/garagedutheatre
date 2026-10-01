import Image from 'next/image';
import Link from 'next/link';
import CurrentYear from './CurrentYear';
import HomeLink from './HomeLink';
import { Icon, type IconName } from './ui';
import { ADDRESS, EMAIL, EMERGENCY_PHONE_DISPLAY, EMERGENCY_PHONE_HREF, HOURS, MAPS_URL, NAV_LINKS, PHONE_DISPLAY, PHONE_HREF, QUOTE_HREF, SITE_NAME } from '@/lib/site';

function ContactLine({ icon, href, children, external }: { icon: IconName; href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        className="group flex items-center gap-3 text-[15px] text-white/80 transition hover:text-white"
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/[0.07] text-brand transition group-hover:bg-brand group-hover:text-ink">
          <Icon name={icon} className="h-[18px] w-[18px]" />
        </span>
        <span className="min-w-0 break-words">{children}</span>
      </a>
    </li>
  );
}

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-white uppercase">
      <span aria-hidden="true" className="h-[3px] w-6 bg-brand" />
      {children}
    </h2>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_0.8fr_1fr] lg:gap-10">
          <div>
            <HomeLink className="inline-block">
              <Image src="/images/logo-meca-services-blanc.png" alt={SITE_NAME} width={231} height={195} className="h-28 w-auto" />
            </HomeLink>
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/65">
              Garage de réparation automobile toutes marques à Paris. Un service de proximité qui allie qualité de service et
              rapidité d&apos;intervention.
            </p>
          </div>

          <div>
            <ColumnTitle>Contact</ColumnTitle>
            <ul className="space-y-3">
              <ContactLine icon="pin" href={MAPS_URL} external>
                {ADDRESS.short}
              </ContactLine>
              <ContactLine icon="phone" href={PHONE_HREF}>
                {PHONE_DISPLAY}
              </ContactLine>
              <ContactLine icon="mobile" href={EMERGENCY_PHONE_HREF}>
                {EMERGENCY_PHONE_DISPLAY}{' '}
                <span className="ml-2.5 inline-block rounded-sm bg-brand px-1.5 py-0.5 align-[1px] text-[10px] leading-none font-bold tracking-[0.14em] text-ink uppercase">
                  Urgences
                </span>
              </ContactLine>
              <ContactLine icon="mail" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </ContactLine>
            </ul>
          </div>

          <nav aria-label="Plan du site">
            <ColumnTitle>Navigation</ColumnTitle>
            <ul className="space-y-3">
              {[...NAV_LINKS, { href: QUOTE_HREF, label: 'Devis' }].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="m-underline text-[15px] text-white/80 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <ColumnTitle>Heures d&apos;ouverture</ColumnTitle>
            <dl className="divide-y divide-white/10 text-[15px]">
              {HOURS.map((h) => (
                <div key={h.days} className="flex items-center justify-between gap-4 py-2.5 first:pt-0">
                  <dt className="text-white/65">{h.days}</dt>
                  <dd className="font-semibold whitespace-nowrap">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 py-6 text-xs text-white/55 sm:flex-row sm:items-center">
          <p>
            <CurrentYear serverYear={new Date().getFullYear()} /> © {SITE_NAME}. Tous droits réservés.
          </p>
          <Link href="/mentions-legales/" className="m-underline font-semibold transition hover:text-white">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}

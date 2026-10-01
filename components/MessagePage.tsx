import Link from 'next/link';
import { Icon, type IconName } from './ui';
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/site';

/* Page courte centrée (remerciement, page introuvable) avec les coordonnées directes */
export default function MessagePage({ icon, title, children }: { icon: IconName; title: string; children: React.ReactNode }) {
  const rows = [
    { label: 'Adresse', value: `${ADDRESS.street}, ${ADDRESS.postalCode} ${ADDRESS.city}` },
    { label: 'Téléphone', value: PHONE_DISPLAY, href: PHONE_HREF },
    { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` }
  ];
  return (
    <main id="contenu" className="bg-mist px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="m-rise mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand text-ink">
          <Icon name={icon} className="h-8 w-8" strokeWidth={2.4} />
        </span>
        <h1 className="m-rise-lcp mt-7 font-display text-3xl font-extrabold text-balance text-ink sm:text-4xl">{title}</h1>
        <div className="m-rise mt-5 text-lg leading-relaxed text-steel [--rise-delay:0.12s]">{children}</div>

        <div className="m-rise mt-10 rounded-lg border border-line bg-white p-6 text-left [--rise-delay:0.2s] sm:p-8">
          <p className="text-[11px] font-bold tracking-[0.2em] text-steel uppercase">Nos coordonnées directes</p>
          <dl className="mt-3 divide-y divide-line">
            {rows.map((r) => (
              <div key={r.label} className="flex flex-col gap-1 py-3 sm:flex-row sm:items-center sm:justify-between">
                <dt className="text-sm text-steel">{r.label}</dt>
                <dd className="font-semibold text-ink">
                  {r.href ? (
                    <a href={r.href} className="m-underline">
                      {r.value}
                    </a>
                  ) : (
                    r.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <Link
          href="/"
          className="m-press mt-10 inline-flex items-center gap-2.5 rounded-md bg-ink px-6 py-3.5 font-bold text-white transition hover:bg-ink-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          Retour à l&apos;accueil
          <Icon name="arrow" className="h-4 w-4 text-brand" />
        </Link>
      </div>
    </main>
  );
}

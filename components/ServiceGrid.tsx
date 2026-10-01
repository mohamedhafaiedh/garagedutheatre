import Link from 'next/link';
import { Icon } from './ui';
import { SERVICES } from '@/lib/site';

/* Grille des 8 services : au survol, la carte passe en noir et l'icône en jaune */
export default function ServiceGrid({ linked = true }: { linked?: boolean }) {
  return (
    <ul data-reveal-stagger className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {SERVICES.map((service, i) => {
        const inner = (
          <>
            <span className="flex h-16 w-16 items-center justify-center rounded-md bg-white text-ink shadow-sm transition-colors duration-400 group-hover:bg-brand">
              <Icon name={service.icon} className="h-8 w-8" strokeWidth={1.6} />
            </span>
            <span className="mt-auto flex items-end justify-between gap-3 pt-8">
              <span className="font-display text-base font-bold text-ink transition-colors duration-400 group-hover:text-white sm:text-lg">
                {service.title}
              </span>
              <span aria-hidden="true" className="font-display text-xs font-bold text-steel/60 transition-colors duration-400 group-hover:text-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
            </span>
          </>
        );
        const cardClass =
          'group flex h-full min-h-44 flex-col rounded-lg border border-line bg-mist p-5 transition-colors duration-400 hover:border-ink hover:bg-ink sm:p-6';
        return (
          <li key={service.title} data-reveal>
            {linked ? (
              <Link href="/nos-services/" className={`${cardClass} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink`}>
                {inner}
              </Link>
            ) : (
              <div className={cardClass}>{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

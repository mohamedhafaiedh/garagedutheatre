import Link from 'next/link';
import { Icon } from './ui';
import { PHONE_DISPLAY, PHONE_HREF, QUOTE_HREF } from '@/lib/site';

/* Bandeau d'appel en jaune du logo, commun aux pages */
export default function CtaBand() {
  return (
    <section className="bg-brand">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div data-reveal>
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.22em] text-ink/70 uppercase">
            <span aria-hidden="true" className="h-[3px] w-8 bg-ink" />
            Une voiture à réparer ?
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-extrabold text-balance text-ink sm:text-4xl">
            Contactez-nous pour demander un devis ou prendre un RDV
          </h2>
        </div>

        <div data-reveal className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:shrink-0 lg:flex-col xl:flex-row">
          <Link
            href={QUOTE_HREF}
            className="m-press inline-flex items-center justify-center gap-2.5 rounded-md bg-ink px-6 py-3.5 font-bold whitespace-nowrap text-white transition hover:bg-ink-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Obtenir un devis gratuit
            <Icon name="arrow" className="h-4 w-4 text-brand" />
          </Link>
          <Link
            href="/contact/"
            className="m-press inline-flex items-center justify-center rounded-md border-2 border-ink px-6 py-3 font-bold whitespace-nowrap text-ink transition hover:bg-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            Nous contacter
          </Link>
          <a href={PHONE_HREF} className="m-underline inline-flex items-center justify-center gap-2 px-2 py-3 font-bold whitespace-nowrap text-ink sm:hidden">
            <Icon name="phone" className="h-4 w-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

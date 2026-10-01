import PageHero from '@/components/PageHero';
import QuoteForm from '@/components/QuoteForm';
import { CallButton, Icon } from '@/components/ui';
import { EMERGENCY_PHONE_DISPLAY, EMERGENCY_PHONE_HREF, HOURS } from '@/lib/site';

export default function QuotePage() {
  return (
    <main id="contenu">
      <PageHero eyebrow="Devis gratuit" title="Demande de devis">
        Remplissez le formulaire de contact ci-dessous et recevez sous 24h notre devis gratuit sur la prestation que vous
        souhaitez
      </PageHero>

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1.4fr_0.6fr] lg:gap-14 lg:px-8">
          <div className="m-rise relative rounded-lg [--rise-delay:0.1s] border border-line bg-white p-6 shadow-[0_24px_50px_-24px_rgb(17_17_17/0.25)] sm:p-10">
            <span aria-hidden="true" className="absolute inset-x-8 top-0 h-1 rounded-b bg-brand" />
            <QuoteForm variant="devis" />
          </div>

          {/* Alternative au formulaire : l'appel direct, avec les horaires */}
          <aside className="m-rise [--rise-delay:0.2s] rounded-lg bg-ink p-7 text-white lg:sticky lg:top-24">
            <p className="font-display text-xl font-bold">Vous préférez appeler ?</p>
            <CallButton className="mt-5 w-full" />
            {/* Portable d'urgence : bouton secondaire, contour clair */}
            <a
              href={EMERGENCY_PHONE_HREF}
              aria-label={`Urgences : appeler le ${EMERGENCY_PHONE_DISPLAY}`}
              className="m-press mt-3 flex w-full items-center justify-center gap-2.5 rounded-md border border-white/25 px-6 py-3.5 text-base font-bold whitespace-nowrap text-white transition hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Icon name="mobile" className="h-5 w-5 text-brand" />
              {EMERGENCY_PHONE_DISPLAY}
              <span className="rounded-sm bg-brand px-1.5 py-0.5 text-[10px] leading-none font-bold tracking-[0.14em] text-ink uppercase">
                Urgences
              </span>
            </a>
            <p className="mt-7 flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-white/60 uppercase">
              <Icon name="clock" className="h-4 w-4 text-brand" />
              Heures d&apos;ouverture
            </p>
            <dl className="mt-2 divide-y divide-white/10 text-[15px]">
              {HOURS.map((h) => (
                <div key={h.days} className="flex items-center justify-between gap-4 py-2.5">
                  <dt className="text-white/65">{h.days}</dt>
                  <dd className="font-semibold whitespace-nowrap">{h.time}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}

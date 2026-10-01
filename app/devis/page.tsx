import PageHero from '@/components/PageHero';
import QuoteForm from '@/components/QuoteForm';
import { CallButton, Icon } from '@/components/ui';
import { HOURS } from '@/lib/site';

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

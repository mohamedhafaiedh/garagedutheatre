import CtaBand from '@/components/CtaBand';
import PageHero from '@/components/PageHero';
import PartnerBand from '@/components/PartnerBand';
import { Icon } from '@/components/ui';
import { SERVICES } from '@/lib/site';

export default function ServicesPage() {
  return (
    <main id="contenu">
      <PageHero eyebrow="Entretien et réparation" title="Nos services" />

      <section className="pt-20 pb-12 sm:pt-24">
        <ul data-reveal-stagger className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {SERVICES.map((service, i) => (
            <li
              key={service.title}
              data-reveal
              className="group flex gap-5 rounded-lg border border-line bg-white p-6 transition-colors duration-400 hover:border-ink sm:gap-6 sm:p-8"
            >
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-mist text-ink transition-colors duration-400 group-hover:bg-brand">
                <Icon name={service.icon} className="h-8 w-8" strokeWidth={1.6} />
              </span>
              <div>
                <p aria-hidden="true" className="font-display text-xs font-bold text-steel/60">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="mt-1 font-display text-xl font-bold text-ink">{service.title}</h2>
                <p className="mt-3 leading-relaxed text-steel">{service.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <PartnerBand />
      <CtaBand />
    </main>
  );
}

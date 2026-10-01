import CtaBand from '@/components/CtaBand';
import Hero from '@/components/home/Hero';
import Perks from '@/components/home/Perks';
import PartnerBand from '@/components/PartnerBand';
import Steps from '@/components/home/Steps';
import Reviews from '@/components/Reviews';
import ServiceGrid from '@/components/ServiceGrid';
import { SectionTitle } from '@/components/ui';

export default function HomePage() {
  return (
    <main id="contenu">
      <Hero />
      <Perks />

      <section className="pt-20 pb-12 sm:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionTitle eyebrow="Entretien et réparation">Nos services</SectionTitle>
          <div className="mt-12">
            <ServiceGrid />
          </div>
        </div>
      </section>

      <PartnerBand />
      <Steps />
      <Reviews />
      <CtaBand />
    </main>
  );
}

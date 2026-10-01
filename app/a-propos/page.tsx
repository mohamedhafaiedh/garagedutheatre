import Image from 'next/image';
import Link from 'next/link';
import CtaBand from '@/components/CtaBand';
import PageHero from '@/components/PageHero';
import { Icon } from '@/components/ui';

export default function AboutPage() {
  return (
    <main id="contenu">
      <PageHero eyebrow="Garage automobile multimarque à Paris" title="Qui sommes-nous ?" />

      <section className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div data-reveal className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p className="font-display text-2xl leading-snug font-bold text-ink">
              MECA Services est un garage de réparation automobile situé au 15e arrondissement de Paris.
            </p>
            <p>
              Bénéficiant de la confiance d’une dizaine de clients au quotidien, nous vous offrons une expertise avancée dans
              la mécanique automobile pour toutes les marques du marché.
            </p>
            <p>
              Nous sommes à votre disposition pour vous conseiller et accompagner dans l’entretien et la réparation de votre
              voiture dans les meilleures conditions et les meilleurs prix.
            </p>
            <p className="flex gap-4 rounded-lg bg-mist p-5 text-base">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-soft text-ink">
                <Icon name="clock" />
              </span>
              <span>Le garage est ouvert de 9h à 18h en milieu de semaine et ouvre ses portes aussi chaque samedi de 9h à 13h.</span>
            </p>
            <Link
              href="/nos-services/"
              className="m-press mt-3 inline-flex items-center gap-2.5 rounded-md bg-ink px-6 py-3.5 text-base font-bold text-white transition hover:bg-ink-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Découvrir nos services
              <Icon name="arrow" className="h-4 w-4 text-brand" />
            </Link>
          </div>

          {/* Photo encadrée : aplat jaune décalé, rappel du logo */}
          <div data-reveal className="relative mr-4 mb-4 sm:mr-5 sm:mb-5">
            <div aria-hidden="true" className="absolute -right-4 -bottom-4 h-2/3 w-2/3 rounded-lg bg-brand sm:-right-5 sm:-bottom-5" />
            <div className="m-zoom relative overflow-hidden rounded-lg">
              <Image
                src="/images/InkedIMG_0993.jpg"
                alt="L'entrée de l'atelier MECA Services, rue du Théâtre à Paris 15e"
                width={1360}
                height={1020}
                sizes="(min-width: 1024px) 600px, 100vw"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </main>
  );
}

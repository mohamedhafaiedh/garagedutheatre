import Image from 'next/image';
import QuoteForm from '../QuoteForm';
import { Eyebrow, GoogleG, Icon, Stars } from '../ui';
import { GOOGLE_RATING, PHONE_DISPLAY, PHONE_HREF } from '@/lib/site';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      {/* Photo d'atelier en noir et blanc : le jaune du logo reste la seule couleur de la page */}
      <Image
        src="/images/hero-atelier.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-ink via-ink/85 to-ink/45" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-ink/70 to-transparent" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-24">
        <div className="m-rise-group">
          <Eyebrow tone="dark">Garage automobile multimarque à Paris</Eyebrow>
          <h1 className="m-rise-lcp mt-6 font-display text-4xl leading-[1.08] font-extrabold tracking-normal text-balance text-white sm:text-5xl lg:text-[3.5rem]">
            Pour un entretien <span className="text-brand">rapide et fiable</span> de votre véhicule
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Situé au 139 rue du Théâtre dans le 15e arrondissement de Paris, le garage MECA Services vous offre son expertise
            acquise depuis plusieurs années dans la réparation multimarque.
          </p>

          <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
            <a
              href={PHONE_HREF}
              aria-label={`Appeler le ${PHONE_DISPLAY}`}
              className="m-press inline-flex items-center justify-center gap-3 rounded-md bg-brand px-6 py-3.5 text-base font-bold whitespace-nowrap text-ink transition hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Icon name="phone" className="h-5 w-5" />
              {PHONE_DISPLAY}
            </a>

            <div className="flex items-center gap-3 rounded-md border border-white/15 bg-white/[0.06] px-4 py-2.5 backdrop-blur-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white">
                <GoogleG className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="flex items-center gap-2 text-white">
                  <strong className="font-display text-lg font-extrabold">{GOOGLE_RATING}</strong>
                  <span className="text-brand">
                    <Stars className="h-4 w-4" />
                  </span>
                </p>
                <p className="text-xs text-white/60">Avis Google</p>
              </div>
            </div>
          </div>
        </div>

        <div id="devis" className="m-rise scroll-mt-24 [--rise-delay:0.2s]">
          <div className="relative rounded-lg bg-white p-6 shadow-[0_30px_60px_-20px_rgb(0_0_0/0.6)] sm:p-8">
            {/* Barre jaune en tête de carte, comme les barres du logo */}
            <span aria-hidden="true" className="absolute inset-x-8 top-0 h-1 rounded-b bg-brand" />
            <h2 className="mb-6 text-center font-display text-2xl font-extrabold tracking-normal text-ink">Obtenir un devis rapide</h2>
            <QuoteForm variant="devis" compact />
          </div>
        </div>
      </div>
    </section>
  );
}

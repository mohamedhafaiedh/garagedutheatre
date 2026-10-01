import Image from 'next/image';
import { Icon, SectionTitle } from '../ui';
import { STEPS } from '@/lib/site';

export default function Steps() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 sm:py-24">
      <Image src="/images/atelier-moteur.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-[0.12]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle tone="dark" eyebrow="Comment ça marche">
          Réparer votre véhicule en 3 étapes simples
        </SectionTitle>

        <ol data-reveal-stagger className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Fil qui relie les étapes (ordinateur) */}
          <span aria-hidden="true" className="absolute top-8 right-[16.6%] left-[16.6%] hidden border-t-2 border-dashed border-white/20 md:block" />
          {STEPS.map((step, i) => (
            <li key={step.title} data-reveal className="relative flex flex-col items-center text-center">
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-brand text-ink ring-8 ring-ink">
                <Icon name={step.icon} className="h-7 w-7" />
                <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white font-display text-xs font-extrabold text-ink">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 max-w-xs leading-relaxed text-white/65">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

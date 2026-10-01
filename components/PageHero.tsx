import Image from 'next/image';
import { Eyebrow } from './ui';

/* Bandeau de titre des pages intérieures : même photo noir et blanc que l'accueil, plus discrète */
export default function PageHero({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Image src="/images/hero-atelier.jpg" alt="" fill preload sizes="100vw" className="-z-20 object-cover object-[70%_center] opacity-35" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-r from-ink via-ink/85 to-ink/40" />
      <div className="m-rise-group mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        {eyebrow && <Eyebrow tone="dark">{eyebrow}</Eyebrow>}
        <h1 className="m-rise-lcp mt-5 font-display text-4xl font-extrabold text-balance text-white sm:text-5xl">{title}</h1>
        {children && <div className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{children}</div>}
      </div>
    </section>
  );
}

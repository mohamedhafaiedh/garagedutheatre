import { Icon, type IconName } from './ui';

export const legalLink = 'text-ink underline decoration-brand decoration-2 underline-offset-2 hover:decoration-ink';

// Structure reprise des mentions légales de Cap Alu / GoNext : carte de 900 px, sections à icône
export function LegalSection({ icon, title, children }: { icon: IconName; title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-3 flex items-center gap-3">
        <span className="shrink-0 rounded-md bg-brand-soft p-2 text-ink">
          <Icon name={icon} className="h-5 w-5" />
        </span>
        <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">{title}</h2>
      </div>
      <div className="space-y-3 pl-3.5 sm:pl-12">{children}</div>
    </section>
  );
}

export function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

export default function LegalPage({ title, intro, children }: { title: string; intro?: React.ReactNode; children: React.ReactNode }) {
  return (
    <main id="contenu" className="bg-mist py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[900px] px-4 sm:px-6">
        <div className="relative rounded-lg border border-line bg-white p-6 shadow-[0_20px_50px_rgb(17_17_17/0.06)] sm:p-12">
          <span aria-hidden="true" className="absolute inset-x-10 top-0 h-1 rounded-b bg-brand" />
          <h1 className="m-rise-lcp mb-8 border-b border-line pb-5 text-center font-display text-3xl font-extrabold text-ink sm:text-4xl">
            {title}
          </h1>
          <div className="m-rise space-y-9 text-[15px] leading-relaxed text-steel [--rise-delay:0.12s] sm:text-base">
            {intro && <p className="italic">{intro}</p>}
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}

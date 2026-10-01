import { IconTile, type IconName } from './ui';

/* Modèle commun des mentions légales (skill mentions-legales, référence Driver Line) :
   introduction LCEN, puis 5 rubriques à icône avec ancres fixes. Carte de 900 px, comme Cap Alu. */
export function LegalSection({ id, icon, title, children }: { id: string; icon: IconName; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="mb-4 flex items-center gap-3">
        <IconTile name={icon} />
        <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">{title}</h2>
      </div>
      {/* Le texte s'aligne sous le titre, pas sous la tuile */}
      <div className="space-y-3 sm:pl-14">{children}</div>
    </section>
  );
}

export function LegalSubtitle({ children }: { children: React.ReactNode }) {
  return <h3 className="pt-2 font-display text-base font-bold text-ink sm:text-lg">{children}</h3>;
}

// Tableau libellé → valeur : les lignes vides ne sont pas affichées, le tableau entier non plus s'il est vide
export function LegalFacts({ rows }: { rows: [string, React.ReactNode][] }) {
  const filled = rows.filter(([, value]) => (typeof value === 'string' ? value.trim() !== '' : Boolean(value)));
  if (!filled.length) return null;
  return (
    <dl className="divide-y divide-line border-y border-line">
      {filled.map(([label, value]) => (
        <div key={label} className="grid gap-1 py-2.5 sm:grid-cols-[minmax(0,230px)_minmax(0,1fr)] sm:gap-6">
          <dt className="font-semibold text-ink">{label}</dt>
          <dd>{value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="font-semibold text-ink">{children}</strong>;
}

export default function LegalPage({
  title,
  subtitle,
  intro,
  children,
}: {
  title: string;
  subtitle?: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main id="contenu" className="bg-mist py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[900px] px-4 sm:px-6">
        <div className="relative rounded-lg border border-line bg-white p-6 shadow-[0_20px_50px_rgb(17_17_17/0.06)] sm:p-12">
          <span aria-hidden="true" className="absolute inset-x-10 top-0 h-1 rounded-b bg-brand" />
          <div className="m-rise-lcp mb-8 border-b border-line pb-5 text-center">
            <h1 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">{title}</h1>
            {subtitle && <p className="mx-auto mt-3 max-w-xl text-[15px] text-steel sm:text-base">{subtitle}</p>}
          </div>
          <div className="m-rise space-y-9 text-[15px] leading-relaxed text-steel [--rise-delay:0.12s] sm:text-base">
            {intro && <p className="border-b border-line pb-8 italic">{intro}</p>}
            {children}
          </div>
        </div>
      </div>
    </main>
  );
}

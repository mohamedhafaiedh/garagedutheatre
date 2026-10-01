import { Icon } from '../ui';
import { PERKS } from '@/lib/site';

export default function Perks() {
  return (
    <section aria-label="Nos atouts" className="border-b border-line bg-white">
      <ul data-reveal-stagger className="mx-auto grid max-w-7xl divide-line px-4 sm:grid-cols-3 sm:divide-x sm:px-6 lg:px-8">
        {PERKS.map((perk) => (
          <li key={perk.title} data-reveal className="flex items-center gap-4 py-6 sm:justify-center sm:py-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand text-ink">
              <Icon name={perk.icon} className="h-6 w-6" />
            </span>
            <p className="font-display text-lg font-bold text-ink">{perk.title}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

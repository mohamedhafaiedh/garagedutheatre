import { GoogleG, SectionTitle, Stars } from './ui';
import { GOOGLE_RATING, REVIEWS } from '@/lib/site';

type Review = (typeof REVIEWS)[number];

function initials(name: string) {
  // Premier et dernier mot (« Marion de Peretti » → MP)
  const words = name.split(' ').filter((w) => /^\p{L}/u.test(w));
  return `${words[0]?.[0] ?? ''}${words.length > 1 ? words[words.length - 1][0] : ''}`.toUpperCase();
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <figure className="flex w-[300px] shrink-0 flex-col rounded-lg border border-line bg-white p-6 sm:w-[360px]">
      <div className="flex items-center justify-between">
        <span className="text-[#f4b400]">
          <Stars />
        </span>
        <GoogleG className="h-4 w-4" />
      </div>
      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-soft">« {review.text} »</blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-line pt-4">
        <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-display text-xs font-bold text-brand">
          {initials(review.name)}
        </span>
        <span className="font-display font-bold text-ink">{review.name}</span>
      </figcaption>
    </figure>
  );
}

/* Ligne d'avis qui défile en boucle ; la liste est doublée pour un raccord invisible.
   Pause au survol ; avec « réduire les animations », simple défilement horizontal manuel. */
function MarqueeRow({ reviews, reverse = false }: { reviews: Review[]; reverse?: boolean }) {
  const duration = `${Math.max(reviews.length, 3) * 9}s`;
  return (
    <div className="marquee group">
      <div className={`marquee-track ${reverse ? 'marquee-reverse' : ''}`} style={{ '--marquee-duration': duration } as React.CSSProperties}>
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1 || undefined} className="flex shrink-0 items-stretch gap-4 pr-4">
            {reviews.map((review) => (
              <li key={review.name} className="flex">
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default function Reviews() {
  // Deux lignes : la première part vers la gauche, la seconde vers la droite
  const half = Math.ceil(REVIEWS.length / 2);
  const rows = REVIEWS.length >= 6 ? [REVIEWS.slice(0, half), REVIEWS.slice(half)] : [REVIEWS, [...REVIEWS].reverse()];

  return (
    <section className="bg-mist py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionTitle align="left" eyebrow="Avis Google">
            Ce que pensent nos clients
          </SectionTitle>
          <div data-reveal className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm">
              <GoogleG className="h-6 w-6" />
            </span>
            <div className="leading-tight">
              <p className="flex items-center gap-2">
                <strong className="font-display text-2xl font-extrabold text-ink">{GOOGLE_RATING}</strong>
                <span className="text-[#f4b400]">
                  <Stars />
                </span>
              </p>
              <p className="text-xs text-steel">Note sur Google</p>
            </div>
          </div>
        </div>

        {/* Dans la largeur standard du contenu, comme les autres blocs */}
        <div data-reveal className="mt-12 space-y-4">
          <MarqueeRow reviews={rows[0]} />
          <MarqueeRow reviews={rows[1]} reverse />
        </div>
      </div>
    </section>
  );
}

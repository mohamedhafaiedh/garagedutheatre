import Image from 'next/image';

// Hauteurs ajustées à la forme de chaque logo pour un poids visuel égal
const PARTNERS = [
  { src: '/images/Valeo_Logo.png', alt: 'Valeo', width: 957, height: 455, h: 'h-12' },
  { src: '/images/ACDelco_logo.png', alt: 'ACDelco', width: 1024, height: 207, h: 'h-7' },
  { src: '/images/Bosch-logo.png', alt: 'Bosch', width: 433, height: 97, h: 'h-7' },
  { src: '/images/Logo_of_company_Delphi_Technologies_LLC_as_of_Nov_2018.png', alt: 'Delphi Technologies', width: 654, height: 253, h: 'h-10' },
  { src: '/images/LuK_logo.png', alt: 'LuK', width: 1017, height: 768, h: 'h-12' }
];

/* Marques de pièces, en couleurs d'origine (accueil et page Nos services) */
export default function PartnerBand() {
  return (
    <section aria-label="Nos marques partenaires" className="bg-white">
      {/* Fond blanc (le gris a été écarté) ; filet limité à la largeur du contenu */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul data-reveal className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 border-t border-line py-12 sm:gap-x-16">
          {PARTNERS.map((p) => (
            <li key={p.alt}>
              <Image src={p.src} alt={p.alt} width={p.width} height={p.height} sizes="160px" className={`${p.h} w-auto`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

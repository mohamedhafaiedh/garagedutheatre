import type { Metadata, Viewport } from 'next';
import { Archivo, Inter } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RevealOnScroll from '@/components/RevealOnScroll';
import { ADDRESS, EMAIL, SERVICES, SITE_NAME, SITE_URL } from '@/lib/site';
import './globals.css';

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

const title = 'MECA Services – Réparation Automobile Paris 15';
const description =
  'Garage automobile multimarque au 139 rue du Théâtre, Paris 15e : révision, freinage, distribution, pneus, pré-contrôle technique. Devis gratuit.';
const shareDescription =
  'Garage automobile multimarque au 139 rue du Théâtre, Paris 15e. Entretien, réparation et devis gratuit.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s – ${SITE_NAME}` },
  description,
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description: shareDescription,
    url: '/',
    siteName: SITE_NAME,
    locale: 'fr_FR',
    type: 'website',
    images: [{ url: '/images/Logo-GT-500-225-px.png', width: 500, height: 225, alt: SITE_NAME }]
  },
  twitter: { card: 'summary_large_image', title, description: shareDescription, images: ['/images/Logo-GT-500-225-px.png'] },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.ico', apple: '/apple-touch-icon.png' }
};

// Couleur de la barre du navigateur sur mobile
export const viewport: Viewport = { themeColor: '#111111' };

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AutoRepair',
      '@id': `${SITE_URL}/#garage`,
      name: SITE_NAME,
      // Nom inscrit sur le logo : aide Google à relier les recherches « garage du théâtre »
      alternateName: 'Garage du Théâtre GT',
      description,
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/images/Logo-GT-500-225-px.png`,
      image: [`${SITE_URL}/images/InkedIMG_0993.jpg`, `${SITE_URL}/images/Logo-GT-500-225-px.png`],
      telephone: '+33145750505',
      email: EMAIL,
      priceRange: '€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: ADDRESS.street,
        postalCode: ADDRESS.postalCode,
        addressLocality: ADDRESS.city,
        addressRegion: 'Île-de-France',
        addressCountry: 'FR'
      },
      geo: { '@type': 'GeoCoordinates', latitude: 48.8454152, longitude: 2.2975072 },
      hasMap: 'https://maps.google.com/?cid=13755241802466310029',
      openingHoursSpecification: [
        { '@type': 'OpeningHoursSpecification', dayOfWeek: DAYS, opens: '09:00', closes: '18:00' },
        { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '09:00', closes: '13:00' }
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Nos services',
        itemListElement: SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.title } }))
      }
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#site`,
      url: `${SITE_URL}/`,
      name: SITE_NAME,
      inLanguage: 'fr-FR',
      publisher: { '@id': `${SITE_URL}/#garage` }
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${archivo.variable} ${inter.variable}`} data-scroll-behavior="smooth">
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a
          href="#contenu"
          className="sr-only z-50 rounded-md bg-brand px-4 py-3 font-bold text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Aller au contenu
        </a>
        <Header />
        {children}
        <Footer />
        <RevealOnScroll />
      </body>
    </html>
  );
}

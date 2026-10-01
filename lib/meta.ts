import type { Metadata } from 'next';
import { SITE_NAME } from './site';

// Titre, description, canonique et partage d'une page intérieure
export function pageMeta(path: string, title: string, description: string, extra: Metadata = {}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} – ${SITE_NAME}`,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'fr_FR',
      type: 'website',
      images: [{ url: '/images/Logo-GT-500-225-px.png', width: 500, height: 225, alt: SITE_NAME }]
    },
    twitter: { card: 'summary_large_image', title: `${title} – ${SITE_NAME}`, description },
    ...extra
  };
}

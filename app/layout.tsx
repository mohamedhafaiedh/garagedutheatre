import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://garagedutheatre.fr"),
  title: {
    default: "Garage du Théâtre GT – Réparation Automobile Paris 15",
    template: "%s – Garage du Théâtre GT",
  },
  description:
    "Garage automobile multimarque au 139 rue du Théâtre, Paris 15e. Réparation mécanique, diagnostic, révision constructeur, carrosserie et devis gratuit.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Garage du Théâtre GT – Réparation Automobile Paris 15",
    description:
      "Garage automobile multimarque au 139 rue du Théâtre, Paris 15e. Réparation mécanique, entretien, carrosserie et devis gratuit.",
    url: "https://garagedutheatre.fr/",
    siteName: "Garage du Théâtre GT",
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  "name": "Garage du Théâtre GT",
  "alternateName": "Meca Services",
  "image": "https://garagedutheatre.fr/images/Logo-GT-500-225-px.png",
  "@id": "https://garagedutheatre.fr/#autorepair",
  "url": "https://garagedutheatre.fr",
  "telephone": "+33145750505",
  "email": "garagedutheatre@gmail.com",
  "priceRange": "€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "139 Rue du Théâtre",
    "addressLocality": "Paris",
    "postalCode": "75015",
    "addressCountry": "FR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 48.845392,
    "longitude": 2.297590
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "13:00"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="home wp-singular page-template-default page page-id-16524 wp-custom-logo wp-theme-konstruk elementor-default elementor-kit-6 elementor-page elementor-page-16524">
        {children}
      </body>
    </html>
  );
}

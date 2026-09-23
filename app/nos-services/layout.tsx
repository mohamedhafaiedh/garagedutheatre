import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos services",
  description: "Prestations mécaniques et entretien toutes marques au Garage du Théâtre GT : révision, freinage, amortisseurs, diagnostic électronique, climatisation et carrosserie.",
  alternates: {
    canonical: "https://garagedutheatre.fr/nos-services/",
  },
  openGraph: {
    title: "Nos services – Garage du Théâtre GT",
    description: "Prestations mécaniques et entretien toutes marques au Garage du Théâtre GT : révision, freinage, amortisseurs, diagnostic électronique, climatisation et carrosserie.",
    url: "https://garagedutheatre.fr/nos-services/",
    siteName: "Garage du Théâtre GT",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://garagedutheatre.fr/images/Logo-GT-500-225-px.png",
        width: 500,
        height: 225,
        alt: "Garage du Théâtre GT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos services – Garage du Théâtre GT",
    description: "Prestations mécaniques et entretien toutes marques au Garage du Théâtre GT : révision, freinage, amortisseurs, diagnostic électronique, climatisation et carrosserie.",
    images: ["https://garagedutheatre.fr/images/Logo-GT-500-225-px.png"],
  },
};

export default function NosServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

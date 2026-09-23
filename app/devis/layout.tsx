import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demande de devis gratuit",
  description: "Demandez votre devis gratuit en ligne auprès du Garage du Théâtre GT à Paris 15. Réponse rapide sous 24h pour la réparation ou l'entretien de votre voiture.",
  alternates: {
    canonical: "https://garagedutheatre.fr/devis/",
  },
  openGraph: {
    title: "Demande de devis gratuit – Garage du Théâtre GT",
    description: "Demandez votre devis gratuit en ligne auprès du Garage du Théâtre GT à Paris 15. Réponse rapide sous 24h pour la réparation ou l'entretien de votre voiture.",
    url: "https://garagedutheatre.fr/devis/",
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
    title: "Demande de devis gratuit – Garage du Théâtre GT",
    description: "Demandez votre devis gratuit en ligne auprès du Garage du Théâtre GT à Paris 15. Réponse rapide sous 24h pour la réparation ou l'entretien de votre voiture.",
    images: ["https://garagedutheatre.fr/images/Logo-GT-500-225-px.png"],
  },
};

export default function DevisLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

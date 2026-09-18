import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demande de devis gratuit",
  description: "Demandez votre devis gratuit en ligne auprès du Garage du Théâtre GT à Paris 15. Réponse rapide sous 24h pour la réparation ou l'entretien de votre voiture.",
  alternates: {
    canonical: "/devis",
  },
  openGraph: {
    title: "Demande de devis gratuit – Garage du Théâtre GT",
    description: "Demandez votre devis gratuit en ligne auprès du Garage du Théâtre GT à Paris 15. Réponse rapide sous 24h pour la réparation ou l'entretien de votre voiture.",
    url: "https://garagedutheatre.fr/devis",
    siteName: "Garage du Théâtre GT",
    locale: "fr_FR",
    type: "website",
  },
};

export default function DevisLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

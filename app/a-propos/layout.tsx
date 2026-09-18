import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: "Découvrez l'équipe et l'histoire du Garage du Théâtre GT à Paris 15. Expertise mécanique multimarque acquise depuis plusieurs années dans la réparation automobile.",
  alternates: {
    canonical: "/a-propos",
  },
  openGraph: {
    title: "À propos – Garage du Théâtre GT",
    description: "Découvrez l'équipe et l'histoire du Garage du Théâtre GT à Paris 15. Expertise mécanique multimarque acquise depuis plusieurs années dans la réparation automobile.",
    url: "https://garagedutheatre.fr/a-propos",
    siteName: "Garage du Théâtre GT",
    locale: "fr_FR",
    type: "website",
  },
};

export default function AProposLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

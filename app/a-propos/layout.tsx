import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: "Découvrez l'équipe et l'histoire du Garage du Théâtre GT à Paris 15. Expertise mécanique multimarque acquise depuis plusieurs années dans la réparation automobile.",
  alternates: {
    canonical: "https://garagedutheatre.fr/a-propos/",
  },
  openGraph: {
    title: "À propos – Garage du Théâtre GT",
    description: "Découvrez l'équipe et l'histoire du Garage du Théâtre GT à Paris 15. Expertise mécanique multimarque acquise depuis plusieurs années dans la réparation automobile.",
    url: "https://garagedutheatre.fr/a-propos/",
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
    title: "À propos – Garage du Théâtre GT",
    description: "Découvrez l'équipe et l'histoire du Garage du Théâtre GT à Paris 15. Expertise mécanique multimarque acquise depuis plusieurs années dans la réparation automobile.",
    images: ["https://garagedutheatre.fr/images/Logo-GT-500-225-px.png"],
  },
};

export default function AProposLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

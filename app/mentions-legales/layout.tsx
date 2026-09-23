import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Consultez les mentions légales et informations juridiques du site web du Garage du Théâtre GT (Meca Services) à Paris 15e.",
  alternates: {
    canonical: "https://garagedutheatre.fr/mentions-legales/",
  },
  openGraph: {
    title: "Mentions légales – Garage du Théâtre GT",
    description: "Consultez les mentions légales et informations juridiques du site web du Garage du Théâtre GT (Meca Services) à Paris 15e.",
    url: "https://garagedutheatre.fr/mentions-legales/",
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
    title: "Mentions légales – Garage du Théâtre GT",
    description: "Consultez les mentions légales et informations juridiques du site web du Garage du Théâtre GT (Meca Services) à Paris 15e.",
    images: ["https://garagedutheatre.fr/images/Logo-GT-500-225-px.png"],
  },
};

export default function MentionsLegalesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

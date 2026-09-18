import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Consultez les mentions légales et informations juridiques du site web du Garage du Théâtre GT (Meca Services) à Paris 15e.",
  alternates: {
    canonical: "/mentions-legales",
  },
  openGraph: {
    title: "Mentions légales – Garage du Théâtre GT",
    description: "Consultez les mentions légales et informations juridiques du site web du Garage du Théâtre GT (Meca Services) à Paris 15e.",
    url: "https://garagedutheatre.fr/mentions-legales",
    siteName: "Garage du Théâtre GT",
    locale: "fr_FR",
    type: "website",
  },
};

export default function MentionsLegalesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

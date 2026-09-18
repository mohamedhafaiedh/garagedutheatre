import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité, respect du RGPD, protection des données personnelles et gestion des cookies du site Garage du Théâtre GT.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Politique de confidentialité – Garage du Théâtre GT",
    description: "Politique de confidentialité, respect du RGPD, protection des données personnelles et gestion des cookies du site Garage du Théâtre GT.",
    url: "https://garagedutheatre.fr/privacy-policy",
    siteName: "Garage du Théâtre GT",
    locale: "fr_FR",
    type: "website",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité, respect du RGPD, protection des données personnelles et gestion des cookies du site Garage du Théâtre GT.",
  alternates: {
    canonical: "https://garagedutheatre.fr/privacy-policy/",
  },
  openGraph: {
    title: "Politique de confidentialité – Garage du Théâtre GT",
    description: "Politique de confidentialité, respect du RGPD, protection des données personnelles et gestion des cookies du site Garage du Théâtre GT.",
    url: "https://garagedutheatre.fr/privacy-policy/",
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
    title: "Politique de confidentialité – Garage du Théâtre GT",
    description: "Politique de confidentialité, respect du RGPD, protection des données personnelles et gestion des cookies du site Garage du Théâtre GT.",
    images: ["https://garagedutheatre.fr/images/Logo-GT-500-225-px.png"],
  },
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Accès",
  description: "Contactez le Garage du Théâtre GT au 139 Rue du Théâtre, 75015 Paris. Téléphone : 01 45 75 05 05. Horaires : Lun-Ven 09:00-18:00, Sam 09:00-13:00.",
  alternates: {
    canonical: "https://garagedutheatre.fr/contact/",
  },
  openGraph: {
    title: "Contact & Accès – Garage du Théâtre GT",
    description: "Contactez le Garage du Théâtre GT au 139 Rue du Théâtre, 75015 Paris. Téléphone : 01 45 75 05 05. Horaires : Lun-Ven 09:00-18:00, Sam 09:00-13:00.",
    url: "https://garagedutheatre.fr/contact/",
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
    title: "Contact & Accès – Garage du Théâtre GT",
    description: "Contactez le Garage du Théâtre GT au 139 Rue du Théâtre, 75015 Paris. Téléphone : 01 45 75 05 05. Horaires : Lun-Ven 09:00-18:00, Sam 09:00-13:00.",
    images: ["https://garagedutheatre.fr/images/Logo-GT-500-225-px.png"],
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

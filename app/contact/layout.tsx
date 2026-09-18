import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Accès",
  description: "Contactez le Garage du Théâtre GT au 139 Rue du Théâtre, 75015 Paris. Téléphone : 01 45 75 05 05. Horaires : Lun-Ven 09:00-18:00, Sam 09:00-13:00.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Accès – Garage du Théâtre GT",
    description: "Contactez le Garage du Théâtre GT au 139 Rue du Théâtre, 75015 Paris. Téléphone : 01 45 75 05 05. Horaires : Lun-Ven 09:00-18:00, Sam 09:00-13:00.",
    url: "https://garagedutheatre.fr/contact",
    siteName: "Garage du Théâtre GT",
    locale: "fr_FR",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}

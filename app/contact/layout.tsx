import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('/contact/', 'Contact & Accès', 'Contactez MECA Services au 139 Rue du Théâtre, 75015 Paris. Téléphone : 01 45 75 05 05. Horaires : Lun-Ven 09:00-18:00, Sam 09:00-13:00.');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

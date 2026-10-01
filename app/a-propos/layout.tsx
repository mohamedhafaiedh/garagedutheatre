import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('/a-propos/', 'À propos', 'MECA Services, garage de réparation automobile multimarque au 139 rue du Théâtre, Paris 15e. Ouvert du lundi au vendredi de 9h à 18h et le samedi de 9h à 13h.');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

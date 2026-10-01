import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('/mentions-legales/', 'Mentions légales', 'Mentions légales du site garagedutheatre.fr, édité par MECA Services, garage multimarque à Paris 15e : éditeur, hébergeur, données personnelles et cookies.');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

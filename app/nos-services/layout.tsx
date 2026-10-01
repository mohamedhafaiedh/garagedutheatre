import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('/nos-services/', 'Nos services', 'Révision et vidange, freinage, distribution, suspensions, batterie, pneus, pré-contrôle technique et échappement : les services de MECA Services, garage multimarque à Paris 15.');

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

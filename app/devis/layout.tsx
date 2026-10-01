import { pageMeta } from '@/lib/meta';

export const metadata = pageMeta('/devis/', 'Demande de devis gratuit', "Demandez votre devis gratuit en ligne auprès de MECA Services à Paris 15. Réponse sous 24h pour la réparation ou l'entretien de votre voiture.");

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

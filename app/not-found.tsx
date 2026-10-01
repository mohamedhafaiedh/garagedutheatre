import type { Metadata } from 'next';
import MessagePage from '@/components/MessagePage';

export const metadata: Metadata = {
  title: 'Page introuvable',
  robots: { index: false, follow: false }
};

export default function NotFound() {
  return (
    <MessagePage icon="garage" title="Cette page est introuvable">
      L&apos;adresse demandée n&apos;existe pas ou a été déplacée. Revenez à l&apos;accueil ou contactez-nous directement.
    </MessagePage>
  );
}

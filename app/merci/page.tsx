import type { Metadata } from 'next';
import MessagePage from '@/components/MessagePage';

// Page de conversion : jamais indexée, absente du sitemap
export const metadata: Metadata = {
  title: 'Merci pour votre message',
  robots: { index: false, follow: false },
  alternates: { canonical: '/merci/' }
};

export default function ThankYouPage() {
  return (
    <MessagePage icon="check" title="Merci pour votre message !">
      Votre demande a bien été transmise à l&apos;équipe de MECA Services. Nous étudierons votre requête et reviendrons vers
      vous dans les meilleurs délais (sous 24h ouvrées).
    </MessagePage>
  );
}

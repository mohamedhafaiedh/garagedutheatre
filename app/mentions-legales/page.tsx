import LegalPage, { LegalSection, Strong, legalLink } from '@/components/LegalPage';
import { EMAIL, PHONE_HREF, SITE_URL } from '@/lib/site';

// Page légale unique : mentions LCEN puis informations RGPD (cible #confidentialite du lien des formulaires)
export default function LegalNoticePage() {
  const mail = (
    <a href={`mailto:${EMAIL}`} className={legalLink}>
      {EMAIL}
    </a>
  );

  return (
    <LegalPage
      title="Mentions légales"
      intro="Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique (LCEN) et au Règlement général sur la protection des données (RGPD), nous portons à la connaissance des visiteurs du site les informations suivantes."
    >
      <LegalSection icon="building" title="Éditeur et hébergement">
        <p>
          Le site <Strong>{SITE_URL.replace('https://', '')}</Strong> est édité par <Strong>MECA SERVICES</Strong>, SAS au
          capital de 5 000 €, dont le siège est au 139 rue du Théâtre, 75015 Paris (SIRET 944 784 099 00011).
        </p>
        <p>
          Téléphone :{' '}
          <a href={PHONE_HREF} className={legalLink}>
            +33 1 45 75 05 05
          </a>{' '}
          · E-mail : {mail} · Directeur de la publication : M. Ramzi Hadfi.
        </p>
        <p>
          Le site est hébergé par <Strong>Netlify, Inc.</Strong> (
          <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className={legalLink}>
            www.netlify.com
          </a>
          ).
        </p>
      </LegalSection>

      <LegalSection icon="shield" title="Propriété intellectuelle et responsabilité">
        <p>
          MECA Services est propriétaire ou détient les droits d’usage de tous les éléments du site (textes, images,
          graphismes, logo, icônes). Les marques et logos des fabricants de pièces cités restent la propriété de leurs
          détenteurs. Toute reproduction ou adaptation, totale ou partielle, sans autorisation écrite préalable est
          interdite et constitue une contrefaçon (articles L.335-2 et suivants du Code de la propriété intellectuelle).
        </p>
        <p>
          Les informations du site sont de nature générale et ne constituent ni un devis ni un engagement contractuel.
          MECA Services ne pourra être tenue pour responsable des dommages directs ou indirects résultant de l’utilisation
          de ce site ou des sites qui lui sont liés.
        </p>
      </LegalSection>

      <div id="confidentialite" className="scroll-mt-28">
        <LegalSection icon="lock" title="Données personnelles">
          <p>
            Le responsable du traitement est <Strong>MECA SERVICES</Strong>. Nous collectons uniquement ce que vous saisissez
            dans nos formulaires : pour une demande de devis, le service souhaité, le modèle, l’année et l’immatriculation
            du véhicule, la description de la demande, vos nom, téléphone et e-mail ; pour un message, vos nom, prénom,
            e-mail, téléphone et message. La page d’envoi et la date sont jointes automatiquement.
          </p>
          <p>
            Ces données servent uniquement à répondre à votre demande (devis, rappel, rendez-vous), sur la base des mesures
            précontractuelles prises à votre demande (article 6.1.b du RGPD). Seule l’équipe de MECA Services y a accès ;
            elles transitent par notre hébergeur Netlify, sous-traitant technique situé aux États-Unis, avec les garanties
            prévues par le RGPD. Elles ne sont jamais vendues ni utilisées à des fins publicitaires, et sont conservées au
            maximum 3 ans après notre dernier échange.
          </p>
        </LegalSection>
      </div>

      <LegalSection icon="user" title="Vos droits">
        <p>
          Vous pouvez accéder à vos données, les rectifier, les effacer, en limiter l’utilisation, vous y opposer ou en
          demander la portabilité en écrivant à {mail}. Nous répondons sous un mois. En cas de désaccord, vous pouvez saisir
          la CNIL (
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className={legalLink}>
            www.cnil.fr
          </a>
          ).
        </p>
      </LegalSection>

      <LegalSection icon="cookie" title="Cookies">
        <p>
          Ce site n’utilise <Strong>aucun cookie publicitaire ni de mesure d’audience</Strong>. Seuls peuvent être déposés
          les éléments techniques strictement nécessaires à son fonctionnement, qui ne demandent pas votre consentement.
          Vous pouvez à tout moment les consulter ou les supprimer depuis les réglages de votre navigateur.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

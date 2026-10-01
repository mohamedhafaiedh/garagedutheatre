import LegalPage, { LegalFacts, LegalSection, LegalSubtitle } from '@/components/LegalPage';
import { COMPANY, COMPANY_NAME, LEGAL_NAME_WITH_FORM } from '@/lib/site';

// Page légale unique (modèle commun, skill mentions-legales) : mentions LCEN puis informations RGPD.
// Les valeurs viennent de data/company.json ; une valeur vide n'est pas affichée. Aucun lien cliquable (e-mail, téléphone, sites).
export default function LegalNoticePage() {
  const hasCreator = COMPANY.creator.name.trim() !== '';

  return (
    <LegalPage
      title="Mentions légales"
      subtitle="Informations sur l’éditeur du site, son hébergeur et la protection de vos données personnelles."
      intro="Conformément aux articles 6-III et 19 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique (LCEN), nous portons à la connaissance des utilisateurs et visiteurs du site les informations suivantes."
    >
      <LegalSection id="editeur" icon="building" title="Éditeur du site">
        <LegalFacts
          rows={[
            ['Dénomination sociale', LEGAL_NAME_WITH_FORM],
            ['Capital social', COMPANY.shareCapital],
            ['Siège social', COMPANY.registeredOffice],
            ['SIREN', COMPANY.siren],
            ['N° de TVA intracommunautaire', COMPANY.vatNumber],
            ['Téléphone', COMPANY.phone],
            ['E-mail', COMPANY.email],
            ['Directeur de la publication', COMPANY.publicationDirector],
          ]}
        />
      </LegalSection>

      <LegalSection id="hebergement" icon="server" title={hasCreator ? 'Hébergement et réalisation' : 'Hébergement'}>
        <LegalFacts
          rows={[
            ['Hébergeur', COMPANY.host.name],
            ['Site web', COMPANY.host.website],
            ['Téléphone', COMPANY.host.phone],
          ]}
        />
        {/* Créateur du site : affiché seulement si son nom est renseigné */}
        {hasCreator && (
          <>
            <LegalSubtitle>Conception et réalisation</LegalSubtitle>
            <LegalFacts
              rows={[
                ['Réalisation', COMPANY.creator.name],
                ['Site web', COMPANY.creator.website],
                ['Téléphone', COMPANY.creator.phone],
                ['E-mail', COMPANY.creator.email],
              ]}
            />
          </>
        )}
      </LegalSection>

      <LegalSection id="propriete" icon="copyright" title="Propriété intellectuelle et responsabilité">
        <p>
          L’ensemble des éléments du site (textes, logo, photographies, mise en page) est la propriété de {COMPANY_NAME} ou fait
          l’objet d’une autorisation d’utilisation. Les marques et logos des fabricants de pièces cités restent la propriété de
          leurs détenteurs. Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite
          préalable est interdite (articles L.335-2 et suivants du Code de la propriété intellectuelle).
        </p>
        <p>
          Les informations du site sont fournies à titre indicatif et ne constituent ni un devis ni un engagement contractuel.{' '}
          {COMPANY_NAME} ne saurait être tenue responsable du contenu des sites vers lesquels il renvoie.
        </p>
      </LegalSection>

      <LegalSection id="confidentialite" icon="shieldCheck" title="Données personnelles">
        <p>
          {COMPANY_NAME} est responsable du traitement des données personnelles collectées sur ce site. Ces données sont
          traitées conformément au Règlement général sur la protection des données (RGPD) et à la loi Informatique et Libertés.
        </p>
        <LegalSubtitle>Données collectées et finalités</LegalSubtitle>
        <p>
          Via le formulaire de devis : service souhaité, modèle, année et immatriculation du véhicule, description de la demande,
          nom, téléphone et e-mail. Via le formulaire de contact : nom, prénom, e-mail, téléphone et message. Elles servent à :
        </p>
        <ul className="list-disc space-y-1.5 pl-6 marker:text-brand-strong">
          <li>
            répondre à votre demande (devis, rappel, rendez-vous) et organiser l’intervention : mesures précontractuelles et
            exécution du contrat (article 6.1.b du RGPD) ;
          </li>
          <li>respecter nos obligations comptables et fiscales : obligation légale (article 6.1.c du RGPD).</li>
        </ul>
        <LegalSubtitle>Destinataires et conservation</LegalSubtitle>
        <p>
          Les données sont destinées exclusivement à {COMPANY_NAME} et à ses prestataires techniques (hébergement, mesure
          d’audience), qui agissent en qualité de sous-traitants. Certains d’entre eux peuvent traiter des données hors de
          l’Union européenne ; ces transferts sont encadrés par les garanties prévues par le RGPD. Les données ne sont jamais
          vendues ni cédées à des tiers.
        </p>
        <ul className="list-disc space-y-1.5 pl-6 marker:text-brand-strong">
          <li>Demandes sans suite : 3 ans à compter du dernier contact.</li>
          <li>
            Données clients : pendant la durée de la relation commerciale, puis selon les durées légales (10 ans pour les pièces
            comptables).
          </li>
        </ul>
        <LegalSubtitle>Vos droits</LegalSubtitle>
        <p>
          Vous disposez d’un droit d’accès, de rectification, d’effacement, de limitation, de portabilité et d’opposition, ainsi
          que du droit de retirer votre consentement à tout moment et de définir des directives sur le sort de vos données après
          votre décès. Pour les exercer, écrivez-nous à {COMPANY.email} ; nous répondons dans un délai d’un mois. Vous pouvez aussi
          introduire une réclamation auprès de la CNIL (www.cnil.fr).
        </p>
      </LegalSection>

      <LegalSection id="cookies" icon="cookie" title="Cookies">
        <p>
          Ce site utilise Google Tag Manager et Google Analytics pour mesurer son audience et améliorer son contenu. Ces outils
          déposent des cookies uniquement si vous les acceptez.
        </p>
        <p>
          Lors de votre première visite, un bandeau vous permet d’accepter ou de refuser ces cookies. Votre choix est conservé
          6 mois et vous pouvez le modifier à tout moment ; les cookies de mesure d’audience ont une durée de vie de 13 mois au
          maximum. Vous pouvez également configurer votre navigateur pour bloquer ou supprimer les cookies.
        </p>
      </LegalSection>
    </LegalPage>
  );
}

// Données du garage : une seule source pour les pages, le pied de page et le JSON-LD.
// Coordonnées et informations légales de l'entreprise : data/company.json (saisies une seule fois).
import company from '@/data/company.json';

export const SITE_URL = 'https://garagedutheatre.fr';
export const COMPANY = company;
export const SITE_NAME = company.tradeName;
// Nom utilisé dans les textes légaux : dénomination sociale si renseignée, sinon nom commercial
export const COMPANY_NAME = company.legalName.trim() || company.tradeName;
// Ligne « Dénomination sociale » des mentions légales : la forme juridique suit le nom après une virgule
// (« MECA Services, SAS »). Vide si la dénomination n'est pas renseignée.
export const LEGAL_NAME_WITH_FORM = company.legalName.trim()
  ? [company.legalName.trim(), company.legalForm.trim()].filter(Boolean).join(', ')
  : '';

const digits = (phone: string) => phone.replace(/[^\d+]/g, '');
export const PHONE_E164 = digits(company.phone);
export const PHONE_HREF = `tel:${PHONE_E164}`;
// Affiché au format national (01 45 75 05 05) sur le site
export const PHONE_DISPLAY = company.phone.replace(/^\+33\s?/, '0');
// Portable pour les urgences (en plus du fixe)
export const EMERGENCY_PHONE_HREF = `tel:${digits(company.emergencyPhone)}`;
export const EMERGENCY_PHONE_DISPLAY = company.emergencyPhone.replace(/^\+33\s?/, '0');
export const EMAIL = company.email;

export const ADDRESS = {
  ...company.address,
  // Forme courte : « 139 Rue du Théâtre, Paris 15 »
  short: `${company.address.street}, ${company.address.city} ${Number(company.address.postalCode.slice(-2))}`
};

export const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=139+Rue+du+Th%C3%A9%C3%A2tre+75015+Paris';

export const HOURS = [
  { days: 'Lundi - Vendredi', short: 'Lun - Ven', time: '09:00 - 18:00' },
  { days: 'Samedi', short: 'Samedi', time: '09:00 - 13:00' }
];

// Note publique de la fiche Google du garage (relevée le 30/09/2026)
export const GOOGLE_RATING = '4,9';

export const NAV_LINKS = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos/', label: 'À propos' },
  { href: '/nos-services/', label: 'Nos services' },
  { href: '/contact/', label: 'Contact' }
];

export const QUOTE_HREF = '/devis/';

export const SERVICES = [
  {
    icon: 'oil',
    title: 'Révision et vidange',
    text: "Faites une vidange de qualité et économique avec nos forfaits incluant pièces de rechange et main d'oeuvre. Nous utilisons les meilleures huiles du marché pour optimiser les performances de votre voiture."
  },
  {
    icon: 'brake',
    title: 'Freinage',
    text: 'Entretenez le système de freinage de votre véhicule. Nous faisons le diagnostic et le remplacement de vos plaquettes de frein, disques ou encore liquides de freinage.'
  },
  {
    icon: 'belt',
    title: 'Distribution',
    text: 'Détectez toute usure de votre courroie de distribution pour une meilleure longévité de votre moteur'
  },
  {
    icon: 'suspension',
    title: 'Roulements et suspensions',
    text: 'Roulements, triangles, rotules, amortisseurs et autres éléments de suspension de votre véhicule. Maintenez ces éléments pour maximiser la sécurité et entretenir la durée de vie de votre véhicule.'
  },
  {
    icon: 'battery',
    title: 'Batterie',
    text: "Nos techniciens sont à votre disposition pour diagnostiquer l'état de votre batterie et vous conseiller le meilleur moment de la remplacer."
  },
  {
    icon: 'tyre',
    title: 'Pneumatique',
    text: 'Montage, équilibrage, réparation ou encore permutation de vos pneus, Gardez vos pneus en excellent état vous garantit le meilleur confort de conduite possible.'
  },
  {
    icon: 'clipboard',
    title: 'Pré-contrôle technique',
    text: 'Détectez toute défaillance dans votre véhicule préalablement à son contrôle technique et anticipez les réparations nécessaires'
  },
  {
    icon: 'exhaust',
    title: 'Echappement',
    text: "Nous faisons le montage et la réparation de l'échappement de votre véhicule ce qui réduira le bruit, améliorera le rendement du moteur et réduira les émissions polluantes."
  }
] as const;

export const PERKS = [
  { icon: 'bolt', title: 'Service rapide' },
  { icon: 'badge', title: 'Expertise' },
  { icon: 'euro', title: 'Prix compétitifs' }
] as const;

export const STEPS = [
  {
    icon: 'quote',
    title: 'Demandez un devis',
    text: 'En nous appelant au téléphone ou via le formulaire de votre site, décrivez-nous votre besoin et nous vous proposerons notre meilleur prix.'
  },
  {
    icon: 'calendar',
    title: 'Prenez RDV',
    text: 'Réservez le créneau qui vous arrange le plus, par téléphone ou par e-mail et sans besoin de vous déplacer, en fonction de nos disponibilités'
  },
  {
    icon: 'garage',
    title: 'Réparez votre voiture',
    text: 'Une fois dans notre garage, notre équipe vous servira dans les plus courts délais possibles et à des prix très compétitifs'
  }
] as const;

type Review = { name: string; text: string; placeholder?: boolean };

// Avis Google authentiques (fiche du garage).
// placeholder: true = avis provisoire à remplacer ; jamais affiché dans le build de production.
const ALL_REVIEWS: Review[] = [
  {
    name: 'Adrian Molina Aguilar',
    text: 'Top! Un vrai passionné des voitures à qui on peut vraiment faire confiance. J’ai amené mes 4 voitures.'
  },
  {
    name: 'Nicolas Massonneau',
    text: 'Très bon tarifs et garagiste arrangeant, j’ai pu amener mes pièces et récupérer les anciennes changées afin de les renvoyer chez oscaro.'
  },
  {
    name: 'Jean-Luc Vinet',
    text: 'Super accueil, disponible, répare l essentiel a des prix très corrects pour Paris. Vu dans son garage des autos courantes comme des autos anciennes ou d exception, mini, DS, ferrari, porsche, Lamborghini.'
  },
  {
    name: 'Marion de Peretti',
    text: 'Accueil et service +++: très sympa, très honnête et très réactif. Comme un vrai garage d’avant. Un vrai garage d’aujourd’hui. Je recommande vraiment.'
  },
  {
    name: 'Marianne Mançon',
    text: 'Garage réactif et au top. Un collègue ukrainien est tombé en panne, le garage l’a accepté dans l’urgence et l’a dépanné. Merci encore pour votre compréhension et votre bienveillance. Le collègue a pu rentrer en Ukraine grâce à vous. Merci.'
  },
  {
    name: 'Augelet Adèle',
    text: 'J’ai confié mon Audi Quattro Allroad, qui est la prunelle de mes yeux, à ce garage et je ne le regrette pas. L’équipe est incroyablement tenace : ils ne lâchent rien pour trouver l’origine d’une panne. Le devis a été respecté et les tarifs sont très cohérents. J’ai particulièrement apprécié qu’ils ne poussent pas à la consommation inutile de pièces neuves quand ce n’est pas nécessaire. En plus d’être super gentils, ils m’ont rendu la voiture nickel, intérieur comme extérieur. Je suis trop heureuse, merci encore !'
  },
  {
    name: 'Eliya',
    text: 'Je suis tombé par hasard sur ce garage en urgence juste avant de partir en vacances et ils ont été très reactif, arrangement et efficace ! J’ai enfin trouve mon garage reference a Paris et je le recommande vivement !'
  },
  {
    name: 'Abibatou SY DIA',
    text: 'J’y suis allée jeudi 26 pour une révision simple. Même pas 2 minutes après avoir déposé ma voiture j’ai été rappelée pour que je constate l’état de mon véhicule et notamment ma courroie qui contrairement au concessionnaire où j’avais acheté mon VL d’occasion n’a jamais été changée. Ils ont fait un travail formidable, en toute transparence et à un prix défiant toute concurrence. J’ai trouvé ce garage grâce à ChatGpt et confirmé par de nombreux avis et je ne regrette pas ! Merci à toute l’équipe et soyez certains que je reviendrai.'
  },
  {
    name: 'Marion MICHALOWICZ',
    text: 'Excellente expérience dans ce garage. J’y suis allée pour un problème de rouille sur ma voiture et j’ai été très bien conseillée. La réparation est impeccable. L’équipe est très sympathique, les prix sont très compétitifs et les délais annoncés ont été respectés. Je recommande vivement !'
  },
  {
    name: 'Rachi Chi',
    text: 'Rdv pris la veille pour le lendemain pour révision complète et changement de batterie. Travail rapide et efficace, ne pousse pas à la consommation pour rien, suggestions pertinentes. Bon rapport qualité prix et en plus très sympa. Je recommande 👍.'
  }
];

export const REVIEWS = ALL_REVIEWS.filter((r) => !r.placeholder || process.env.NODE_ENV !== 'production');

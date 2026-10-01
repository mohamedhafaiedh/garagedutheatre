'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useId, useState } from 'react';
import { PHONE_DISPLAY, PHONE_HREF, SERVICES } from '@/lib/site';

type Status = 'idle' | 'sending' | 'error';
type Field = {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
  required?: boolean;
  full?: boolean;
};
type Group = { title?: string; fields: Field[]; withService?: boolean; withMessage?: boolean };

const OTHER_SERVICE = 'Autre';

// Champs identiques aux formulaires Netlify déclarés dans public/form.html.
// Devis : d'abord le véhicule et le besoin, puis les coordonnées.
const FORMS: Record<'devis' | 'contact', { subject: string; submit: string; message: { label: string; placeholder: string }; groups: Group[] }> = {
  devis: {
    subject: 'Nouvelle demande de devis',
    submit: "J'obtiens mon devis",
    message: { label: 'Décrire ici le service demandé', placeholder: 'Ex : bruit au freinage, voyant moteur allumé...' },
    groups: [
      {
        title: 'Votre véhicule et votre besoin',
        withService: true,
        withMessage: true,
        fields: [
          { name: 'modele_vehicule', label: 'Modèle du véhicule', type: 'text', placeholder: 'Ex : Peugeot 208' },
          { name: 'annee_vehicule', label: 'Année du véhicule', type: 'text', placeholder: 'Ex : 2019' },
          { name: 'immatriculation', label: 'Immatriculation du véhicule', type: 'text', placeholder: 'Ex : AB-123-CD', full: true }
        ]
      },
      {
        title: 'Vos coordonnées',
        fields: [
          { name: 'nom', label: 'Nom*', type: 'text', placeholder: 'Ex : Martin Dupont', autoComplete: 'name', required: true, full: true },
          { name: 'telephone', label: 'Téléphone*', type: 'tel', placeholder: 'Ex : 06 12 34 56 78', autoComplete: 'tel', required: true },
          { name: 'email', label: 'E-mail*', type: 'email', placeholder: 'Ex : martin@exemple.fr', autoComplete: 'email', required: true }
        ]
      }
    ]
  },
  contact: {
    subject: 'Nouveau message de contact',
    submit: 'Envoyer mon message',
    message: { label: 'Votre message ici', placeholder: 'Ex : je souhaite prendre rendez-vous pour une révision' },
    groups: [
      {
        withMessage: true,
        fields: [
          { name: 'nom', label: 'Nom*', type: 'text', placeholder: 'Ex : Dupont', autoComplete: 'family-name', required: true },
          { name: 'prenom', label: 'Prénom*', type: 'text', placeholder: 'Ex : Martin', autoComplete: 'given-name', required: true },
          { name: 'email', label: 'E-mail*', type: 'email', placeholder: 'Ex : martin@exemple.fr', autoComplete: 'email', required: true },
          { name: 'telephone', label: 'Téléphone*', type: 'tel', placeholder: 'Ex : 06 12 34 56 78', autoComplete: 'tel', required: true }
        ]
      }
    ]
  }
};

// Page de remerciement unique du site (noindex) : sert d'URL de conversion
const THANK_YOU_PATH = '/merci/';
// Netlify Forms ne répond qu'en ligne : en local ou sur le réseau local, l'envoi est simulé
const LOCAL_HOST = /^(localhost|127\.\d+\.\d+\.\d+|\[::1\]|10\.\d+\.\d+\.\d+|192\.168\.\d+\.\d+|172\.(1[6-9]|2\d|3[01])\.\d+\.\d+)$/;

// Événement de conversion pour un futur Google Tag Manager (sans effet tant qu'il n'est pas installé)
function trackSuccess(formName: string) {
  const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: 'form_success', form_name: formName });
}

function parisTimestamp() {
  const now = new Date();
  const opts = { timeZone: 'Europe/Paris' } as const;
  return `${now.toLocaleDateString('fr-FR', { ...opts, day: '2-digit', month: '2-digit', year: 'numeric' })} à ${now.toLocaleTimeString('fr-FR', opts)} (heure de Paris)`;
}

// Libellé centré dans le champ ; au focus (ou une fois rempli) il remonte en haut et laisse voir l'exemple
const inputClass =
  'peer block w-full rounded-md border-[1.5px] border-line bg-white px-4 text-[15px] text-ink transition placeholder:text-transparent hover:border-steel/40 focus:border-ink focus:ring-3 focus:ring-brand/60 focus:outline-none focus:placeholder:text-steel/60';

const labelClass =
  'pointer-events-none absolute left-4 max-w-[calc(100%-2rem)] truncate text-[15px] text-steel transition-all duration-200 peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:font-bold peer-focus:text-ink peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[11px] peer-[:not(:placeholder-shown)]:font-bold peer-autofill:top-2 peer-autofill:translate-y-0 peer-autofill:text-[11px]';

export default function QuoteForm({ variant = 'devis', compact = false }: { variant?: 'devis' | 'contact'; compact?: boolean }) {
  const config = FORMS[variant];
  const [status, setStatus] = useState<Status>('idle');
  const [service, setService] = useState('');
  const router = useRouter();
  const uid = useId();
  const otherChosen = service === OTHER_SERVICE;
  const fieldHeight = compact ? 'h-[52px]' : 'h-14';

  // Netlify Forms : le formulaire est déclaré statiquement dans public/form.html
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.set('pageUrl', window.location.href);
    data.set('timestamp', parisTimestamp());
    data.set('source', 'website');
    setStatus('sending');
    const body = new URLSearchParams(data as unknown as Record<string, string>).toString();

    if (LOCAL_HOST.test(window.location.hostname)) {
      console.info('Envoi simulé en local :', Object.fromEntries(new URLSearchParams(body)));
      router.push(THANK_YOU_PATH);
      return;
    }

    try {
      const res = await fetch('/form.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
      });
      if (!res.ok) throw new Error(String(res.status));
      trackSuccess(variant);
      router.push(THANK_YOU_PATH);
    } catch {
      setStatus('error');
    }
  }

  const renderField = (field: Field) => {
    const id = `${uid}-${field.name}`;
    return (
      <div key={field.name} className={`relative ${field.full ? 'sm:col-span-2' : ''}`}>
        <input
          id={id}
          name={field.name}
          type={field.type}
          placeholder={field.placeholder}
          autoComplete={field.autoComplete}
          required={field.required}
          className={`${inputClass} ${fieldHeight} pt-5 pb-1`}
        />
        <label htmlFor={id} className={`${labelClass} top-1/2 -translate-y-1/2`}>
          {field.label}
        </label>
      </div>
    );
  };

  return (
    <form name={variant} method="POST" onSubmit={onSubmit} className={`grid sm:grid-cols-2 ${compact ? 'gap-3' : 'gap-4'}`}>
      <input type="hidden" name="form-name" value={variant} />
      <input type="hidden" name="subject" value={config.subject} />

      {config.groups.map((group, gi) => (
        <fieldset key={gi} className="contents">
          {group.title && (
            <legend
              className={`flex w-full items-center gap-3 text-[11px] font-bold tracking-[0.2em] text-steel uppercase sm:col-span-2 ${gi > 0 ? 'mt-3' : ''}`}
            >
              <span aria-hidden="true" className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[10px] tracking-normal text-brand">
                {gi + 1}
              </span>
              {group.title}
              <span aria-hidden="true" className="h-px flex-1 bg-line" />
            </legend>
          )}

          {group.withService && (
            <div className="relative sm:col-span-2">
              {/* Libellé toujours en haut : le menu déroulant affiche déjà son texte d'invite */}
              <select
                id={`${uid}-service`}
                name="service"
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className={`${inputClass} ${fieldHeight} cursor-pointer appearance-none pt-5 pr-11 pb-1 ${service ? '' : 'text-steel'}`}
              >
                <option value="" disabled>
                  Choisissez un service
                </option>
                {SERVICES.map((s) => (
                  <option key={s.title} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value={OTHER_SERVICE}>Autre (précisez ci-dessous)</option>
              </select>
              <label htmlFor={`${uid}-service`} className="pointer-events-none absolute top-2 left-4 text-[11px] font-bold text-ink">
                Service souhaité*
              </label>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="pointer-events-none absolute top-1/2 right-4 h-5 w-5 -translate-y-1/2 text-steel"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </div>
          )}

          {group.fields.map(renderField)}

          {/* Toujours visible, quel que soit le service ; obligatoire si « Autre » */}
          {group.withMessage && (
            <div className="relative sm:col-span-2">
              <textarea
                id={`${uid}-message`}
                name="message"
                rows={compact ? 3 : 5}
                required={otherChosen}
                placeholder={otherChosen ? 'Ex : embrayage, bruit suspect, voyant allumé...' : config.message.placeholder}
                className={`${inputClass} resize-y pt-7 pb-3`}
              />
              <label htmlFor={`${uid}-message`} className={`${labelClass} top-4`}>
                {otherChosen ? 'Précisez le service souhaité*' : config.message.label}
              </label>
            </div>
          )}
        </fieldset>
      ))}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="m-press mt-1 rounded-md bg-brand px-6 py-4 text-base font-bold text-ink transition hover:bg-brand-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink disabled:opacity-70 sm:col-span-2"
      >
        {status === 'sending' ? 'Envoi en cours...' : config.submit}
      </button>

      <p className="text-xs leading-relaxed text-steel sm:col-span-2">
        Vos informations servent uniquement à traiter votre demande et ne sont jamais transmises à des tiers.{' '}
        <Link href="/mentions-legales/#confidentialite" className="underline underline-offset-2 hover:text-ink">
          En savoir plus
        </Link>
      </p>

      <div aria-live="polite" className="empty:hidden sm:col-span-2">
        {status === 'error' && (
          <p className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-800">
            L&apos;envoi n&apos;a pas abouti. Réessayez dans un instant ou appelez-nous directement au{' '}
            <a href={PHONE_HREF} className="whitespace-nowrap underline underline-offset-2">
              {PHONE_DISPLAY}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}

import { IconTile, type IconName } from './ui';
import { ADDRESS, EMAIL, HOURS, MAPS_URL, PHONE_DISPLAY, PHONE_HREF } from '@/lib/site';

function Card({ icon, label, href, external, children }: { icon: IconName; label: string; href?: string; external?: boolean; children: React.ReactNode }) {
  const body = (
    <>
      <IconTile name={icon} className="h-12 w-12" />
      <div className="min-w-0">
        <p className="text-[11px] font-bold tracking-[0.2em] text-steel uppercase">{label}</p>
        <div className="mt-1 font-semibold break-words text-ink">{children}</div>
      </div>
    </>
  );
  const cls = 'flex items-center gap-4 rounded-lg border border-line bg-white p-5';
  return href ? (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${cls} transition hover:border-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink`}
    >
      {body}
    </a>
  ) : (
    <div className={cls}>{body}</div>
  );
}

/* Coordonnées : adresse, e-mail, téléphone et horaires (premier écran : entrée au chargement) */
export default function ContactCards() {
  return (
    <div className="m-rise-group grid gap-3">
      <div>
        <Card icon="pin" label="Adresse" href={MAPS_URL} external>
          {ADDRESS.short}
        </Card>
      </div>
      <div>
        <Card icon="phone" label="Téléphone" href={PHONE_HREF}>
          {PHONE_DISPLAY}
        </Card>
      </div>
      <div>
        <Card icon="mail" label="Email" href={`mailto:${EMAIL}`}>
          {EMAIL}
        </Card>
      </div>
      <div>
        <Card icon="clock" label="Heures d'ouverture">
          {HOURS.map((h) => (
            <span key={h.days} className="block font-normal text-ink-soft">
              {h.short} : <strong className="font-semibold text-ink">{h.time}</strong>
            </span>
          ))}
        </Card>
      </div>
    </div>
  );
}

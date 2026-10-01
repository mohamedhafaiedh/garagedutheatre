// Mentions légales : signale, sans bloquer, les informations obligatoires encore vides dans data/company.json
// (elles ne sont pas affichées sur le site tant qu'elles sont vides). Modèle : skill mentions-legales.
// Site en français seul : les rubriques sont définies une seule fois dans app/mentions-legales/page.tsx.
import { readFileSync } from "node:fs";

const company = JSON.parse(readFileSync(new URL("../data/company.json", import.meta.url), "utf8"));

// Obligatoires (LCEN) : on privilégie le SIREN au RCS ; l'adresse de l'hébergeur n'est jamais publiée
const REQUIRED = {
  legalName: "dénomination sociale",
  legalForm: "forme juridique",
  shareCapital: "capital social",
  registeredOffice: "siège social",
  siren: "SIREN",
  publicationDirector: "directeur de la publication",
  "host.name": "hébergeur",
};

const get = (path) => path.split(".").reduce((value, key) => value?.[key], company);
const missing = Object.entries(REQUIRED)
  .filter(([path]) => !String(get(path) ?? "").trim())
  .map(([, label]) => label);

if (missing.length) console.warn(`⚠ Mentions légales : à compléter dans data/company.json (non affiché pour l'instant) : ${missing.join(", ")}`);
else console.log("✓ Mentions légales : informations obligatoires renseignées.");

# Project Context

**Scopul site-ului**
- Site de prezentare pentru academia de fotbal + conversie în înscrieri.
- Colectează datele de înscriere și le trimite prin email și, opțional, în Google Sheets.

**Publicul țintă**
- Părinți/tutori ai copiilor 4–16 ani interesați de antrenamente în București.

**Pagini existente**
- `/` (home)
- `/despre`
- `/grupe-program`
- `/preturi`
- `/inscriere`
- `/contact`
- `/politica-gdpr`

**Fluxuri critice**
- Înscriere: formular -> validare Zod -> `registerAction` -> email (Nodemailer) + Google Sheets (Google APIs) -> fallback `console.log`.
- GDPR: utilizatorul trebuie să bifeze consimțământul GDPR și regulamentul.

**Stack tehnic**
- Next.js (App Router) + TypeScript.
- Tailwind CSS.
- Zod pentru validare.
- Nodemailer pentru email.
- Google Sheets API pentru logarea înscrierilor.

**Hosting**
- GitHub Pages, export static (`next export`).
- Pentru repo tip `username.github.io/NUME_REPO`, se setează `NEXT_PUBLIC_BASE_PATH=/NUME_REPO`.
- Limitare: GitHub Pages nu rulează funcții server-side; email/Sheets necesită backend separat.

**Reguli obligatorii**
- GDPR: consimțământ explicit și pagina de politică GDPR accesibilă.
- Mobile-first și accesibilitate de bază.
- UX clar: formular simplu, mesaje de eroare explicite.

**NU schimba fără decizie explicită**
- Structura de rute și slugs existente.
- Schema de înscriere și câmpurile obligatorii (GDPR + regulament).
- Fluxul de trimitere a înscrierilor (email + Google Sheets).
- Constantele din `lib/constants.ts` (branding + date contact) fără validare cu stakeholder.

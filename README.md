# Academia de Fotbal (Next.js + Tailwind)

## Rulare locală
1. `npm install`
2. `npm run dev`
3. Deschide `http://localhost:3000`

## Variabile de mediu (opțional)
Creează un fișier `.env.local` pe baza `.env.local.example` dacă vrei trimitere email + Google Sheets.

- Dacă nu setezi variabilele, înscrierile vor fi logate în consolă (pentru demo).

## Hosting gratuit pe GitHub Pages (static)
Acest proiect este configurat pentru export static (`next export`) și poate fi publicat pe GitHub Pages.

Pași rapizi:
1. Dacă repo-ul este de tip `username.github.io`, nu seta `NEXT_PUBLIC_BASE_PATH`.
2. Dacă repo-ul este `username.github.io/NUME_REPO`, setează `NEXT_PUBLIC_BASE_PATH=/NUME_REPO` (local sau în GitHub Actions).
3. Rulează `npm run build` (generează folderul `out/`).
4. Publică conținutul din `out/` pe GitHub Pages.

Notă: GitHub Pages este doar pentru site static. Funcțiile server-side (email + Google Sheets) nu rulează pe Pages fără un backend separat.

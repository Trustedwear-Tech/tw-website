# TrustedWear Website

Marketing site for TrustedWear, built with Next.js 15 (App Router) + Tailwind + shadcn/ui.
Deployed to **Firebase App Hosting** in project `trustedwear-website`.

## Local development

```powershell
npm install
npm run dev           # http://localhost:9002
```

Other scripts:

- `npm run build` — production build (`next build`)
- `npm run start` — run the production build locally
- `npm run lint` — ESLint
- `npm run typecheck` — `tsc --noEmit`

## Deployment

The site deploys via **Firebase App Hosting** (configured in `apphosting.yaml` + `firebase.json`).
The App Hosting backend is `studio` in project `trustedwear-website`, serving at:
`https://studio--trustedwear-website.us-central1.hosted.app`

### Authenticate once

```powershell
npm i -g firebase-tools
firebase login
```

### Deploy

```powershell
.\deploy.ps1
```

This runs `npm run build` first as a smoke check, then `firebase deploy --only apphosting --project trustedwear-website`.

Skip the local build check with `.\deploy.ps1 -SkipBuildCheck`. Or, if you already verified the build, just `npm run deploy`.

## Project layout

- `src/app/` — App Router pages (home, products/{adult,kids,memory-assist}, about, contact, demo, enterprise, faq)
- `src/components/sections/` — page sections (Hero, Features, Testimonials, …)
- `src/components/ui/` — shadcn/ui primitives
- `apphosting.yaml` — App Hosting runtime config (instance scaling)
- `firebase.json` / `.firebaserc` — Firebase CLI config
- `deploy.ps1` — wrapper for verified deploys from Windows

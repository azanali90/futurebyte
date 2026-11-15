# FutureByte

Next.js 14 + React + TypeScript + Tailwind CSS. No database required.

## Run on Windows
1. Install Node.js LTS (v18.18 or newer) from https://nodejs.org (accept defaults). Close and reopen your terminal.
2. Check: `node -v` and `npm -v` both print versions.
3. Open PowerShell in this folder (File Explorer > address bar > type `powershell` > Enter).
4. Run `npm install` (a few minutes the first time).
5. Copy `.env.example` to `.env.local` (`copy .env.example .env.local`) and fill in your values.
6. Run `npm run dev`, then open http://localhost:3000.
7. Stop with Ctrl+C. Before deploying, run `npm run typecheck` and `npm run build`.

If PowerShell blocks npm ("running scripts is disabled"), use Command Prompt (cmd) instead, or run
`Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once.

## Structure
- `app/` pages (home, `category/[slug]`, `articles/[slug]`, `search`, legal pages in `[page]`), `sitemap.ts`, `robots.ts`
- `components/` Header, Footer, ArticleCard, AdSlot, Logo
- `lib/articles.ts` helpers and the first two articles; `lib/content/*.ts` the other articles, one file per category; `lib/site.ts` site and categories; `lib/legal.ts` legal pages
- `public/images/` featured images

## Add an article
Open the matching file in `lib/content/` (for example `ai.ts`) and add a new `mk(...)` entry, copying an existing one as a model. Put its image in `public/images/<slug>.svg` (or .jpg/.webp and change the extension in `mk.ts`). Set `factCheck: true` to show the editorial notice until verified.

## Deploy (Vercel)
Push to GitHub, import the repo at vercel.com, set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_CONTACT_EMAIL`, deploy, then add your domain and submit `/sitemap.xml` in Google Search Console.

## Before applying for AdSense
Replace the legal templates with reviewed text, publish more original articles, and add a cookie consent banner if needed for your audience.

## Speed
- Every page except search is pre-built as static HTML, so pages load fast in production (`npm run build` then `npm start`).
- `npm run dev` uses Turbopack for faster startup. If it misbehaves, use `npm run dev:safe`.
- On Windows, keep the project outside OneDrive/Desktop sync folders (for example `C:\dev\futurebyte`) and exclude it from antivirus real-time scanning if development feels slow.
- Use JPG/WebP photos under about 200 KB for featured images; Next.js serves them in modern formats at the right size.

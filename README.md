# Project Documentation

This file provides guidance for working in this repository.

## Project

Marketing/landing site for Buitrago & Villota, a Colombian electoral-law boutique firm. All visible content is in Spanish (es-CO). Built with Astro 6 + Tailwind CSS v4, deployed to Netlify.

## Commands

Uses **pnpm** (not npm).

- `pnpm dev` — dev server at localhost:4321
- `pnpm build` — production build (prerenders all pages + bundles the Netlify SSR function for actions)
- `pnpm preview` — preview the build

No test suite or linter is configured. Prettier is set up with `prettier-plugin-astro` and `prettier-plugin-tailwindcss` (class sorting).

A `.env` with `RESEND_API_KEY` is required for the contact form action (see `.env.template`).

## Architecture

### Content is config-driven

Page copy, SEO metadata, and structured data all flow from `src/config/`:

- `seoConf.ts` — the hub: `COMPANY_INFO` (name, phone, email, address, social/WhatsApp URLs), `MAIN_KEYWORDS`, `generateDynamicSEO()` for per-page meta, and JSON-LD schema generators (Organization, WebSite, LocalBusiness, Service, FAQ, Breadcrumb, Author). Components read contact data and descriptions from `COMPANY_INFO`, never hardcode them.
- `services.ts`, `faqs.ts`, `authorBio.ts` — data arrays rendered by components and injected into schemas.
- `src/utils/navigation.ts` — `MainNavigation` array used by Navbar and Footer.

### Layout and SEO pipeline

Every page wraps content in `src/layouts/MainLayout.astro`, passing `seoProps` (built with `generateDynamicSEO({ pageType: ... })`) and optional page-specific `schemas`. The layout merges those with the base Organization/WebSite schemas and renders them through `SeoHead.astro` (astro-seo). It also mounts Navbar, Footer, the floating WhatsApp button, and Lenis smooth scroll.

### Components

- `src/components/global/` — used on every page (Navbar, Footer, Cta, FAQs)
- `src/components/perpage/<page>/` — page-specific sections (home/, aboutUs/, contact/)
- `src/components/ui/` — reusable pieces (cards, form, WhatsApp button)

Components are pure HTML + Tailwind utility classes — no UI frameworks, no inline `style=""`, no arbitrary values like `h-[220px]`.

### Animations live outside components

GSAP + Lenis are installed; animation code goes in `src/utils/scripts/` (e.g. `animations/home/`, `lennis.js`), imported via `<script>` tags — never inline animation logic in component markup. New components should not add their own animations.

### Styling

Tailwind v4 with the theme defined in `src/styles/global.css` via `@theme`: colors `titaneo` (dark purple background), `gold` (accent), `deep-indigo`, `snow` (off-white text), `deep-dark`. Fonts (Cormorant Garamond for h1–h3, DM Sans for body/links) are applied in `@layer base` and loaded through Astro's font API in `astro.config.mjs` — don't re-declare font families on headings/paragraphs. Use Tailwind v4 gradient syntax (`bg-linear-to-*`, not `bg-gradient-to-*`).

### Assets

- Images: always `<Image />` from `astro:assets` with `alt`, importing from `src/assets/images/`.
- Icons: never inline `<svg>`. Import from `src/assets/icons/` and render as a component (`<LinkedinIcon class="h-5 w-5" />`); SVGs use `fill="currentColor"` so Tailwind text colors apply. Create missing icons in that directory.

### Contact form (server-side)

`src/actions/contact/getContact.ts` is an Astro Action (`accept: "form"`, zod-validated, Spanish error messages) that sends the inquiry email via Resend, styled with the brand palette. Registered in `src/actions/index.ts`; this is the only server-rendered part of the site — everything else is prerendered.

### Path alias

`@/*` → `./src/*` (tsconfig).
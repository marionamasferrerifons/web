# Arquitectura

## Stack
- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- GSAP per a animacions
- Sanity com a CMS headless

## Estructura de `app/`
El lloc és bilingüe (castellà i català) i té **un layout arrel per idioma**, perquè `<html lang>` sigui correcte sense fer dinàmiques les rutes:
- `app/(es)/layout.tsx` — castellà, a l'arrel del domini (`/`, `/enfoque`...). També hi viuen `/clientes` i `/dev`, que no es tradueixen.
- `app/ca/layout.tsx` — català, sota `/ca`. `app/ca/[...rest]` fa que qualsevol URL `/ca/...` inexistent mostri la 404 en català.
- Tots dos fan servir `RootDocument` i `siteMetadata()` de `lib/rootDocument.tsx` (fonts, CSS global, Navbar, Footer, analítica).
- `app/global-not-found.tsx` pinta la 404 de les URL sense ruta (`experimental.globalNotFound` a `next.config.js`), perquè no hi ha `app/layout.tsx`.

Cada ruta castellana és una carpeta amb un `page.tsx` mínim, un component `NomPage.tsx` amb el cos de la pàgina (que rep `locale`) i els components de secció colocats al costat (`NomSection.tsx`). La ruta catalana equivalent és un altre `page.tsx` mínim que importa el mateix `NomPage` amb `locale="ca"`. Rutes actuals (castellà → català):
- `app/(es)/page.tsx` + `app/(es)/home/` → `app/ca/page.tsx` — home
- `app/(es)/enfoque/` → `app/ca/enfocament/`
- `app/(es)/sobre-mi/` → `app/ca/sobre-mi/`
- `app/(es)/servicios/estrategia-de-ia/`, `.../produccion-editorial-con-ia/`, `.../formacion-en-ia/` → `app/ca/serveis/estrategia-dia/`, `.../produccio-editorial-amb-ia/`, `.../formacio-en-ia/` — pàgines de servei; les peces compartides són a `components/service/`
- `app/(es)/servicios/estrategia-editorial/` (només components compartits: testimoni, CTA, llista de casos), `.../ecosistema-produccion-editorial/`, `.../servicios-editoriales/` (sense `page.tsx`: redirecció 301 a `next.config.js`; les seccions es conserven per a la galeria `/dev/gallery`)
- `app/(es)/casos-de-exito/[slug]/` → `app/ca/casos-dexit/[slug]/` — pàgina dinàmica per cas d'èxit. Si un cas encara no té versió catalana publicada, la ruta catalana redirigeix al cas en castellà.

## Idiomes
- `lib/i18n.ts`: tipus `Locale`, taula `ROUTES` amb les rutes equivalents (la fan servir el selector d'idioma, l'hreflang i el sitemap) i helpers (`localizedPath`, `switchLocalePath`, `routeAlternates`...). **Una pàgina nova s'ha d'afegir a `ROUTES`.**
- Textos fixos: `content/<pàgina>/{es,ca}.tsx` (més `content/nav`, `content/shared.tsx` per als components compartits, `content/status.ts` per a 404/error i `content/casos-de-exito` per a les etiquetes de la plantilla de cas). El tipus de cada pàgina és el de la versió castellana: si falta un text al català, TypeScript avisa.
- Selector: `components/LanguageSwitcher.tsx` (pastilla amb desplegable a l'escriptori, `LanguagePills` al menú mòbil). Els enllaços entre idiomes són `<a>` normals perquè canviar de layout arrel implica una càrrega completa.
- Missatges de WhatsApp per tema i idioma: `whatsappFor()` a `lib/constants.ts`.

Els components compartits entre rutes (Navbar, Footer, MobileMenu, dropdowns) viuen a `components/` arrel.

## Integració amb Sanity
- `sanity/client.ts` crea el client (`@sanity/client`), usant `NEXT_PUBLIC_SANITY_PROJECT_ID` i `NEXT_PUBLIC_SANITY_DATASET`, amb `SANITY_API_READ_TOKEN` opcional per a contingut privat.
- `sanity/queries.ts` conté les queries GROQ: `CASE_STUDIES_QUERY`, `CASE_STUDY_BY_SLUG_QUERY`, `CASE_STUDY_CARD_BY_SLUG_QUERY`, `CASE_STUDY_SLUGS_QUERY`, `CASE_STUDY_SLUG_PAIRS_QUERY`, `CASE_STUDY_TRANSLATION_SLUG_QUERY`, `EDITORIAL_PROJECTS_QUERY`, `INDUSTRY_LOGOS_QUERY`, `HOME_TESTIMONIALS_QUERY`, `TESTIMONIAL_BY_PLACEMENT_QUERY`.
- Contingut bilingüe: `caseStudy`, `testimonial` i `editorialProject` tenen els camps `language` (es/ca) i `translationOf` (referència a l'original castellà), definits a `studio/schemaTypes/language.ts`. Les queries reben `$language` i filtren amb `coalesce(language, "es") == $language`: els documents sense idioma compten com a castellà. `sanity/fetchLocalized.ts` torna la versió castellana quan en català no n'hi ha cap (encara no traduït o no publicat).
- Per publicar una traducció: duplicar el document a l'Studio, posar-hi «Català» i enllaçar l'original a «Traducción de». Els testimonis catalans necessiten les seves pròpies «Dónde aparece» (cada idioma té la seva assignació).
- Els tipus de contingut es defineixen a `studio/schemaTypes/`: `caseStudy`, `editorialProject`, `industryLogo`, `testimonial`.
- Si canvies un schema a `studio/`, revisa quines queries de `sanity/queries.ts` en depenen abans de fer deploy.

## `studio/`
Subprojecte independent (Sanity Studio, panell d'administració de contingut). Té el seu propi `package.json`/lockfile — no comparteix `node_modules` amb l'app principal.

# Arquitectura

## Stack
- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind CSS 4
- GSAP per a animacions
- Sanity com a CMS headless

## Estructura de `app/`
Cada ruta és una carpeta amb el seu `page.tsx` i els components de secció colocats al costat (`NomSection.tsx`), en lloc d'un `components/` compartit per pàgina. Rutes actuals:
- `app/page.tsx` + `app/home/` — home
- `app/enfoque/`
- `app/servicios/estrategia-editorial/`, `.../ecosistema-produccion-editorial/`, `.../servicios-editoriales/`
- `app/casos-de-exito/[slug]/` — pàgina dinàmica per cas d'èxit
- `app/sobre-mi/`

Els components compartits entre rutes (Navbar, Footer, MobileMenu, dropdowns) viuen a `components/` arrel.

## Integració amb Sanity
- `sanity/client.ts` crea el client (`@sanity/client`), usant `NEXT_PUBLIC_SANITY_PROJECT_ID` i `NEXT_PUBLIC_SANITY_DATASET`, amb `SANITY_API_READ_TOKEN` opcional per a contingut privat.
- `sanity/queries.ts` conté les queries GROQ: `CASE_STUDIES_QUERY`, `CASE_STUDY_BY_SLUG_QUERY`, `EDITORIAL_PROJECTS_QUERY`, `INDUSTRY_LOGOS_QUERY`, `TESTIMONIAL_BY_PLACEMENT_QUERY`.
- Els tipus de contingut es defineixen a `studio/schemaTypes/`: `caseStudy`, `editorialProject`, `industryLogo`, `testimonial`.
- Si canvies un schema a `studio/`, revisa quines queries de `sanity/queries.ts` en depenen abans de fer deploy.

## `studio/`
Subprojecte independent (Sanity Studio, panell d'administració de contingut). Té el seu propi `package.json`/lockfile — no comparteix `node_modules` amb l'app principal.

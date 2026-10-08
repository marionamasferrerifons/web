# Changelog

Registre de canvis importants del projecte. Format per entrada: **què** ha canviat, **quan**, i **per què**. No cal registrar fixes trivials o typos.

## 2026-10-08
**Què:** S'ha afegit un inventari dels blocs visuals existents (`docs/component-inventory.md`), un resum dels criteris visuals vigents amb les inconsistències detectades (`docs/visual-criteria.md`) i una galeria visual interna de només desenvolupament (`/dev/gallery`, fora de la navegació pública i bloquejada en producció) que renderitza cada bloc amb el seu component real i contingut representatiu. Cap pàgina pública, component ni copy existent s'ha modificat.
**Per què:** Preparar la reorganització de l'oferta en quatre serveis (Estratègia d'IA, Producció editorial amb IA, Implementació d'eines d'IA, Formació en IA) requereix primer un vocabulari compartit sobre quins blocs existeixen, quines variants en són divergències del mateix patró, i quins criteris visuals ja apliquen de facto — abans de redactar copy o retocar cap pàgina.

## 2026-09-02
**Què:** S'ha augmentat la mida del logo del footer (32px → 44px), s'ha actualitzat el tagline ("Sistemas de producción editorial con IA, con el criterio humano en el centro." → "Inteligencia artificial para editoriales educativas.") i s'ha afegit un punt final a "Diseñado con criterio editorial + IA".
**Per què:** El logo del footer quedava massa petit en relació amb el del menú, i el tagline anterior ja no reflectia el posicionament del servei.

## 2026-09-02
**Què:** S'ha reordenat el desplegable "Servicios" del menú i del peu de pàgina perquè "Sistema de producción editorial con IA" aparegui abans que "Servicios editoriales con IA aplicada".
**Per què:** Es vol prioritzar visualment el servei de sistema de producció editorial dins el menú de navegació.

## 2026-09-02
**Què:** S'ha actualitzat el copy del menú de serveis ("Innovación editorial con IA" → "Implementación estratégica de IA") a Navbar i Footer, i s'ha eliminat l'enllaç a "Enfoque" del menú d'escriptori, del menú mòbil i del peu de pàgina.
**Per què:** La pàgina "Enfoque" encara no està operativa i cal llançar la web sense referències a contingut a mig fer; s'aprofita per alinear el copy del servei d'estratègia editorial.

## 2026-08-14
**Què:** S'ha adoptat una estructura de context persistent per al projecte: `CLAUDE.md` ampliat com a contracte d'entrada, `docs/` (architecture, design-system, roadmap), `CHANGELOG.md`, `mejoras/`, `.claude/settings.json`, `.env.example`, `LICENSE` i plantilla de PR a `.github/`.
**Per què:** El repositori no tenia cap context viu més enllà d'un avís sobre la versió de Next.js; les decisions d'arquitectura i disseny es perdien entre converses, i l'historial de git (missatges com "Update page.tsx") no explicava el perquè dels canvis.

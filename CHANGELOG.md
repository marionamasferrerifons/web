# Changelog

Registre de canvis importants del projecte. Format per entrada: **què** ha canviat, **quan**, i **per què**. No cal registrar fixes trivials o typos.

## 2026-10-08
**Què:** S'ha substituït la pàgina `/servicios/estrategia-editorial` per la nova `/servicios/estrategia-de-ia`, amb redisseny complet (capçalera, graella de 6 decisions, procés en 3 passos sense dependència de hover, comparador de 2 modalitats de col·laboració amb subgrid, cas destacat d'Altamar i accions amb WhatsApp), redirecció 301 des de la ruta antiga, i actualització del nom del servei a `Navbar`, `FooterClient` i `ServicesSection`. S'ha retirat `ServiciosClient.tsx` (el component de 905 línies que implementava l'antiga pàgina). S'ha actualitzat `app/dev/gallery/registry.ts` i `docs/component-inventory.md` per reflectir els blocs nous i retirats.
**Per què:** Primera de les quatre pàgines de servei a adoptar el disseny i el copy aprovats a `docs/handoff/estrategia-ia.md`, seguint les decisions preses sobre identitat de color per servei i accessibilitat (contingut sense dependència de hover).
**Ajust posterior (mateix dia):** alineació amb la maqueta aprovada — escala tipogràfica (titulars de targeta `body-xl`/`title-m`, cos `body-l` pes 300), destacat blanc al H1, capçalera de «¿Cómo trabajo?» en dues columnes, separador i icones de check del comparador, botó principal blanc sobre fons de color i gris sobre blanc (cercle de 40px, focus `blue-800`), icona de WhatsApp genèrica, i targeta del cas amb logotip visible, dades en llista amb separadors i botó principal.
**Revisió posterior (mateix dia):** substituït l'únic hex fora de token que quedava al comparador (`#cfece7` → `var(--color-green)`) i corregit un comentari inexacte sobre l'origen del logotip a la targeta d'Altamar. S'ha afegit un camp nou a Sanity (`summaryImage` a `caseStudy`) perquè la fitxa resum tingui una imatge pròpia, independent de la miniatura de llistats (`imageCard`); mentre el document no tingui `summaryImage`, la pàgina cau a `imageCard`. El destacat blanc del H1 (que incompleix contrast AA) es manté deliberadament tal com l'ha deixat la maqueta.

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

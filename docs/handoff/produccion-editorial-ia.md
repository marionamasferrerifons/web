# Handoff · Pàgina «Producción editorial con IA»

Disseny aprovat el 9 d'octubre de 2026 i implementat el mateix dia a la branca `servei-produccio`. Aquest document recull les decisions i el copy final tal com han quedat al codi; és la referència per a canvis futurs.

- **Maqueta (referència visual):** https://claude.ai/artifact/VoXxymP5dYfCUnfCxRgTCL — artboard «Pàgina completa · escriptori». Les exploracions de la secció 2 (graella, il·lustrada, desplegable) també hi són.
- **Copy d'origen:** `Copy_i_components_Produccio_editorial_IA.md` i `Copy_seccion_sistema_produccion_IA.md` (carpeta d'oferta). El copy final és el del codi: es va retocar sobre la maqueta. Les seccions «Forma de treballar» i «Dubtes habituals» del document d'origen es van descartar.
- **Coherència:** reutilitza les peces d'Estrategia de IA (`components/service/`) i els seus criteris (amplades 1160/690 px, títols de secció `title-l`, etiquetes sense opacitat, res rere hover, bloc d'accions comú).

## Decisions

| Tema | Decisió |
|---|---|
| Ruta | `/servicios/produccion-editorial-con-ia`. Redireccions 301 des de `/servicios/servicios-editoriales` i `/servicios/ecosistema-produccion-editorial`. |
| Navegació | Menú i peu amb dues entrades: «Estrategia de IA» i «Producción editorial con IA». |
| Color | Capçalera `--color-orange-400`; titular blanc amb «producción» en `--color-blue-500` (el blanc sobre taronja no arriba a 3:1). |
| WhatsApp | Missatge propi: «Hola, Mariona. Me gustaría comentarte una necesidad de producción de contenidos educativos con IA.» (`WHATSAPP_URL_PRODUCCION`). |
| Cas | Sanity, slug `altamar-produccion-editorial-claude`; copy propi de la pàgina. |
| Testimoni | Sanity, placement `ecosistema-produccion-editorial`, targeta verda. |
| Carrusel | Es manté, redissenyat (vegeu més avall). Fons blanc i targetes grises perquè no es fongui amb el testimoni, que té fons gris. |
| Il·lustracions | Tres SVG unificats en taronja: `public/produccion-creacion.svg` (redibuixada), `public/produccion-revision.svg` (nova), `public/produccion-procesos.svg` (recolorada de `s4-illustration.svg`). Fons `--color-orange-100` (#FAE3C6). |

## Seccions

1. **Capçalera** (`HeroSection`): etiqueta `[PRODUCCIÓN EDITORIAL CON IA]`, H1 «IA aplicada a la producción de contenidos educativos.» a l'esquerra; text i bloc d'accions a sota, desplaçats a la dreta. Taca i vector taronja de l'antiga pàgina (ocults per sota de `lg`).
2. **Tres modalitats** (`ModalitiesSection`): H2 «¿Qué necesitas resolver para cumplir con tu calendario de producción?», tres targetes en graella amb subgrid (il·lustració / text): Creación y edición de contenidos · Revisión y evaluación editorial · Diseño de un sistema de producción.
3. **Sistema de producción** (`ProductionSystemSection`): «¿Qué es un sistema de producción con IA?» amb il·lustració; «Dos formas de ponerlo en marcha» (comparador de dues targetes amb «¿Qué aporta esta alternativa?» i «¿En qué te ayudo?»); «¿Qué aporta a tu editorial?» (quatre beneficis) i enllaç a Estrategia de IA.
4. **Cas Altamar** (`components/service/CaseHighlightSection`): dades Cliente / Enfoque / Alcance / Duración.
5. **Testimoni** (component compartit).
6. **Projectes editorials** (`EditorialProjectsSection`, bloc `project-carousel`): informació sempre visible sota la portada, sense capa blava ni fletxa decorativa; scroll-snap natiu, botons anterior/següent amb `aria-label` que es desactiven als extrems, pista navegable amb teclat; projectes del més recent al més antic.
7. **Tancament** (`CtaSection` amb `ActionButtons`).

## Pendents

- **Home** (`app/home/ServicesSection.tsx`): les targetes 2 i 3 encara apunten a les rutes antigues (funcionen per la redirecció). Es deixa així per decisió de la Mariona (10/10/2026) fins que es redissenyi la home.

## Resolt a la revisió del 10/10/2026

- **Errata**: «Una herramienta propia permite puede conectarse…» → «Una herramienta propia puede conectarse…».
- **Galeria i inventari**: les seccions de les dues pàgines antigues es conserven com a referència (marcades «sense ruta, 301»); s'hi han afegit els blocs nous (`hero-page/produccion`, `svccard-grid/produccion-modalities` i `produccion-options`, `process-steps/produccion-benefits`) i s'ha reescrit la fitxa de `project-carousel`.
- **Contrast del titular**: el blanc sobre `--color-orange-400` dona 2,3:1 (per sota de 3:1). Es manté per decisió de la Mariona.
- **Ordre del carrusel**: tolera anys no numèrics (`parseInt`) i respecta l'«Orden» de Sanity dins un mateix any.
- **Mida òptica**: el testimoni i el tancament compartits ja no fixen `"opsz" 14` en línia (l'hereten del `body`), així que a les pàgines de servei segueixen `.optical-auto` com la resta de seccions.
- **Studio**: l'etiqueta del placement `ecosistema-produccion-editorial` passa a «Servicios — Producción editorial con IA» (el valor no canvia). Cal desplegar l'Studio.

# Handoff · Pàgina «Estrategia de IA»

Disseny aprovat el 8 d'octubre de 2026. Aquest document és la **font de veritat** per implementar-lo: substitueix el copy inicial (`Copy_i_components_Estrategia_IA.md`) i incorpora els canvis fets sobre la maqueta.

- **Maqueta (referència visual):** https://claude.ai/artifact/VU93C7uxfeRkAtGWwy4bMR — artboard «Pàgina completa · escriptori» (i «mòbil 390px»). Es pot llegir amb l'eina Artifact (`action: "read"`, `path: "project/Main.dc.html"`).
- La maqueta és HTML estàtic amb estils inline: és **referència de disseny, no codi a copiar**. Implementa-ho amb les convencions del repo (`docs/design-system.md`, `AGENTS.md`).
- Abans de picar codi: llegeix `CLAUDE.md`, `docs/component-inventory.md` i `docs/visual-criteria.md`. Els identificadors de bloc (`hero-page`, `cta-band`...) són els d'aquest inventari.

## Decisions preses

| Tema | Decisió |
|---|---|
| Ruta | Nova ruta `/servicios/estrategia-de-ia`. Redirecció 301 des de `/servicios/estrategia-editorial`. Actualitzar `app/sitemap.ts`. |
| Nom del servei | «Estrategia de IA» a menú (`components/Navbar.tsx`, `MobileMenu.tsx`), peu (`components/FooterClient.tsx`) i targeta de la home (`app/home/ServicesSection.tsx`). |
| WhatsApp | `+34 622 80 32 03` → `https://wa.me/34622803203?text=` + missatge codificat: «Hola, Mariona. Me gustaría comentarte una cuestión sobre IA en mi editorial.» Constant nova a `lib/constants.ts`. |
| Reserva | `BOOKING_URL` existent, directe al calendari (sense formulari). |
| Testimoni | Es manté (Sanity, `placement: 'estrategia-editorial'` — revisar si cal un placement nou si canvia la ruta). |
| Cas Altamar | Logotip, imatge i dades des de Sanity. Enllaç a `/casos-de-exito/estrategia-de-ia`. Imatge només si existeix (autoritzada). |
| Secció 4 | **Opció B** (`svccard-grid` adaptat): dues targetes al costat, amb il·lustracions (`/section3-illu-2.svg`, `/section3-illu-3.svg`). |
| Llengua | Copy en castellà. |

## Ordre de seccions i copy final

### 1 · Propuesta de valor — `hero-page` (variant estratègia, fons `--color-green`)
- Etiqueta: `[ESTRATEGIA DE IA]`
- H1: «Criterio y dirección para decidir **qué hacer con la IA** en tu editorial.» — el fragment destacat en blanc, la resta en `--color-blue-400`.
- Text: «Te ayudo a resolver decisiones concretas, explorar oportunidades de negocio y dirigir tus iniciativas de IA. Con conocimiento del sector editorial, de la educación y de la tecnología.»
- Bloc d'accions comú (vegeu més avall).
- Vectors decoratius `hero-vector-left/right.svg` com ara; ocults per sota de `lg`.

### 2 · Decisiones concretas — graella regular 3×2 (no masonry, no pastilles)
- H2: «Te ayudo a responder las preguntas que **no puedes seguir aplazando.**» (destacat en `--color-orange-400`).
- Sis targetes blanques (radi 24, padding 32) sobre fons gris, numerades `01`–`06` en DM Mono:
  1. **¿Dónde puede ayudarnos la IA?** — Te ayudo a identificar qué problemas de tu editorial merece la pena abordar con IA y dónde podría aportar valor.
  2. **¿Por dónde empezamos entre tantas ideas?** — Te ayudo a priorizar iniciativas según su valor, viabilidad y encaje con los objetivos de tu editorial.
  3. **¿Qué herramienta de IA incorporamos?** — Te ayudo a comparar alternativas y valorar la inversión, los recursos y las dependencias que implica cada opción.
  4. **¿Tiene sentido esta propuesta de un proveedor?** — Te ayudo a entender y valorar lo que las empresas tecnológicas te ofrecen y te doy pautas para tomar decisiones informadas.
  5. **¿Podemos crear nuevos productos o negocios?** — Te ayudo a explorar oportunidades de negocio a partir de tu catálogo, tu conocimiento y las necesidades de docentes, centros y alumnado.
  6. **¿Por qué no funciona lo que hemos probado?** — Te ayudo a analizar los bloqueos y a decidir si conviene ajustar el enfoque de la iniciativa, replantearla o detenerla antes de comprometer más presupuesto.
- 3 columnes ≥1024px, 2 a tauleta, 1 a mòbil. Al títol 6 la maqueta té un `<br>` manual: substituir per `text-wrap: balance` als `h3`.

### 3 · ¿Cómo trabajo? — `process-steps` adaptat (tot visible, sense hover)
- H2 a l'esquerra: «¿Cómo trabajo?»; a la dreta: «Mi experiencia como editora y docente me permite valorar cómo las decisiones sobre IA afectan a la calidad del contenido publicado, al equipo que lo produce y a quienes lo utilizan.»
- Tres passos en fila, amb línia superior `--color-blue-200`, punt verd i número `01`–`03`:
  1. **Análisis de los retos estratégicos de tu negocio** — Ponemos sobre la mesa tus objetivos, recursos e idiosincrasia para decidir dónde la IA aporta valor.
  2. **Recomendaciones fundamentadas** — Contrastamos alternativas, identificamos riesgos y priorizamos las oportunidades en función de su impacto.
  3. **Hoja de ruta concreta para avanzar con claridad** — Definimos qué hacer a continuación, quién debe participar y cómo valorar los resultados.

### 4 · ¿Cómo podemos colaborar? — opció B (`svccard-grid` adaptat, bloc nou «comparador»)
- H2: «¿Cómo podemos colaborar?» · Text: «Dos formas de trabajar que se adaptan a las necesidades específicas de tu editorial.»
- Marc blanc (radi 24, padding 40) amb dues targetes grises (radi 16, padding 32) **amb la mateixa jerarquia**. Alinear les files entre targetes amb CSS `subgrid` (il·lustració / capçalera / llista / bloc final). A ≤900px, una columna.
- **Targeta 1** — etiqueta `PARA UNA CUESTIÓN CONCRETA` · H3 «Asesoramiento puntual» · «Trabajamos sobre una decisión, un problema o una oportunidad que quieres explorar. Acordamos el objetivo y el alcance según tus necesidades.»
  - ¿En qué te ayudo? — Entender el problema y contrastar las alternativas. / Valorar oportunidades, inversiones o propuestas de proveedores. / Definir una recomendación y los siguientes pasos.
  - ¿Qué te llevas? — Conclusiones y recomendaciones documentadas para avanzar en la cuestión que hayamos acordado.
- **Targeta 2** — etiqueta `PARA DIRIGIR TUS INICIATIVAS DE FORMA SOSTENIBLE` · H3 «Dirección de IA externa» · «Ejerzo la función de directora de IA de tu editorial con la dedicación que necesites y sin que tengas que asumir el coste de una contratación fija.»
  - ¿En qué te ayudo? — Definir los objetivos estratégicos de tu editorial. / Diseñar tu hoja de ruta y el plan de trabajo. / Dirigir y coordinar las iniciativas con tus equipos y proveedores. / Dar seguimiento a presupuestos, avances, riesgos y resultados. / Organizar las responsabilidades y los criterios de decisión sobre IA. / Acompañar los cambios y las decisiones que aparezcan durante la ejecución.
  - ¿Qué te llevas? — Una colaboración recurrente con la dedicación, responsabilidades y capacidad de decisión que acordemos.
- Llistes amb icona de check (cercle + check, `--color-blue-400`). Bloc final en caixa blanca.
- Bloc d'accions comú dins el marc (botó principal en variant sobre fons clar: fons `--color-grey`).

### 5 · Caso Altamar — targeta destacada (basada en `caselist-rows`)
- Targeta `--color-blue-100`, radi 24, dues columnes (7/5); a mòbil, una columna.
- Etiqueta `[CASO DE ÉXITO]` · logotip (Sanity) · H2 «Altamar: de querer incorporar IA a decidir dónde invertir.»
- Paràgrafs: «Altamar necesitaba definir qué papel debía tener la IA en su negocio y qué iniciativas merecía la pena impulsar.» / «En un proyecto de cinco semanas analizamos su contexto, identificamos oportunidades y construimos una hoja de ruta con iniciativas priorizadas, proveedores evaluados y una propuesta de calendario e inversión.» / «El trabajo permitió reorientar el presupuesto hacia una cartera de iniciativas y establecer criterios para decidir qué impulsar y qué aplazar.»
- Columna dreta: imatge (Sanity, opcional) · dades `Cliente: Altamar` / `Servicio: Consultoría estratégica` / `Duración: 5 semanas` · botó «Ver el caso de Altamar».
- Text sobre el blau clar amb `--color-text-secondary-strong` (contrast AA).

### Testimonio — `testimonial-card` existent, sense canvis (Sanity).

### 6 · Primera conversación — `cta-band` (ampliar `CtaSection` amb props, no duplicar)
- H2 «Cuéntame qué necesitas decidir.» · «Reserva una sesión gratuita de una hora para hablar de tu editorial, entender qué necesitáis y valorar si puedo ayudarte.»
- Bloc d'accions comú, botó secundari en variant invertida (vora i text blancs).

## Bloc d'accions comú (seccions 1, 4 i 6)
- Fila: botó principal «Reservar una sesión gratuita» (`BOOKING_URL`) + botó secundari «Hablar por WhatsApp» (icona de bombolla, sense logotip de marca).
- Sota, centrat i comú: «1 hora para entender tu necesidad y valorar cómo puedo ayudarte. O, si lo prefieres, escríbeme y empezamos a hablar.» (14/20px, pes 300, amplada màx. ~460px).
- Mòbil: botons apilats a amplada completa, text a sota.

## Components nous o adaptats
- **Botó compartit** (`fnd-button` → component): variant `primary` (pastilla + cercle taronja amb fletxa, rotació 45° en hover; fons blanc o gris segons el fons de la secció) i variant `secondary` (vora 1.5px, `--color-blue-500` o blanc invertit, sense cercle). Alçada 56px, focus visible (`outline` 3px).
- **Etiqueta de secció** (`fnd-tag` → component): DM Mono 14px majúscules, **sense opacitat**.
- **Comparador** (secció 4): preparat per a 2–4 columnes.
- `CtaSection`: props per a botó secundari i nota.

## Criteris transversals
- Amplada de contingut 1160px; prosa ~690px. Padding de secció `py-96 px-40` (mòbil `py-64 px-20`). H2 sempre `title-l`.
- Res amagat rere hover. Animacions GSAP respectant `prefers-reduced-motion`.
- Només tokens de `app/globals.css`; cap hex nou.

## Pendents de confirmar
- Targeta 2: el subtítol del bloc final és ara «¿Qué te llevas?» (abans «¿Cómo se contrata?»), però el text descriu la modalitat de contractació. Confirmar.
- Destacat blanc del H1 sobre verd: no compleix contrast AA (1,4:1). Decisió actual: blanc.

## Feina associada (segons `CLAUDE.md`)
- Retirar `ServiciosClient.tsx` i la bandera `SHOW_CASE_STUDIES` en crear la ruta nova.
- Afegir els blocs nous a `app/dev/gallery/registry.ts` i regenerar `docs/component-inventory.md`.
- Entrada a `CHANGELOG.md`.
- Verificar a 1440 / 1024 / 768 / 375px, teclat i `npm run build`.

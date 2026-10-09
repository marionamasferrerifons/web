# Criteris visuals existents

Resum del que el codi **aplica avui**. No és un sistema de disseny normalitzat: és una fotografia de l'estat actual, perquè les decisions de la reorganització es prenguin sabent exactament d'on es parteix. On hi ha inconsistència, es documenta com a tal — no s'ha inventat cap coherència que el codi no té.

Els identificadors entre parèntesis (`fnd-color`, `fnd-type`...) remeten als blocs equivalents de `docs/component-inventory.md` i de la galeria (`/dev/gallery`).

## Color (`fnd-color`)

Paleta declarada a `@theme` dins `app/globals.css`:

| Token | Ús real observat |
|---|---|
| `--color-blue-500` | Fons de les capçaleres de pàgina i de la barra de navegació |
| `--color-blue-400` | Color de titular dominant a gairebé totes les seccions |
| `--color-blue-300` | Decoratiu (punts, vores); **no apte com a text** — falla WCAG AA (3,96:1 sobre blanc) |
| `--color-blue-200` / `-100` / `-50` | Text secundari sobre fons fosc, fons de targeta puntual |
| `--color-text-secondary` | Variant enfosquida de `blue-300` creada expressament perquè el text compleixi AA |
| `--color-text-secondary-strong` | Variant encara més fosca, per als dos punts on `text-secondary` tampoc compleix AA (hero verd, targeta `blue-200`) |
| `--color-text-accent` | Variant enfosquida de `--color-orange` perquè el text del botó compleixi AA |
| `--color-orange` | Accent clicable: cercle de fletxa, enllaços en hover |
| `--color-orange-400` | Paraula destacada dins d'un titular («el **criterio**...») |
| `--color-orange-200` | Fons decoratiu puntual (icona de targeta, hero) |
| `--color-grey` | Fons per defecte d'aproximadament el 60% de les seccions |
| `--color-green` | Forma decorativa i variant de color del testimoni |

**Inconsistència (1):** nou colors en hex directe fora de token: `#012c97`, `#d5e4fb` (`ClosingCtaSection`), `#ec937e` (`ImpactStatsSection`, `ThreeLayersConvergeSection`), `#f5917a` (`SystemStepsSection`), `#f0ad5c` (`ServiceOfferingsSection`), `#cfece7` (`ServiciosClient`), `#d4d4d4` (`Navbar`, `MobileMenu`), `#e5e5e5` (`LinkedInSection`), i una crida a `hover:bg-gray-50` (paleta per defecte de Tailwind, no la del projecte) a `EditorialProjectsSection`.

**Inconsistència (2):** `opacity: .65` aplicada sobre `--color-text-secondary` a moltes etiquetes de secció fa baixar el contrast per sota d'AA — precisament el token que `globals.css` ja havia enfosquit per complir-lo.

## Tipografia (`fnd-type`)

DM Sans (text) i DM Mono (etiquetes), via `next/font/google`. Escala declarada a `@theme`:

- **Titulars:** `title-xxl` (64px) → `title-xl` (56px) → `title-l` (48px) → `title-m` (40px) → `title-s` (32px), amb redefinició pròpia per sota de 768px (fins a `title-xxl` → 48px).
- **Cos:** `body-xl` (24px) → `body-l` (20px) → `body-m` (16px) → `body-accent-mono` (14px, mono, per a etiquetes). **Sense variant mòbil.**

Patrons d'ús consistents:
- Titular = frase amb un fragment en `--color-orange-400`.
- Etiqueta de secció (`fnd-tag`) = DM Mono, majúscules, sovint entre claudàtors: `[SERVICIOS]`.

**Inconsistència (7):** no hi ha cap mapatge declarat entre nivell semàntic i token de mida — el mateix `h2` utilitza `title-xxl`, `title-xl` o `title-l` segons la secció, sense cap criteri visible.

**Inconsistència (2):** `body` declara `font-weight: 300` a `globals.css`, però gairebé tots els components el sobreescriuen a `400`. Els subtítols de les pàgines de servei fan servir `300`; els de la home, `400`, per al mateix rol tipogràfic.

## Amplades (`fnd-layout`)

Quatre famílies de facto, sense cap token que les declari:

| Família | Ús |
|---|---|
| ~1400px (1480 / 1440 / 1400...) | Contenidor ple d'una secció |
| ~1160px (1164 / 1165 / 1163 / 1161...) | Contingut dens (targetes, graelles) |
| ~690px (684 / 685 / 689 / 690...) | Prosa i titulars centrats |
| ~453px | Nota lateral al costat d'un titular |

**Inconsistència (5):** més de quaranta valors diferents escrits a mà, molts a 1 px de distància entre si (per exemple 1160/1161/1163/1164/1165), senyal que cada secció es va mesurar i escriure independentment en lloc de triar d'una llista comuna.

## Espaiats

`py` dominant: 40 / 56 / 64 / 80 / 96 / 112px, sense cap criteri declarat sobre quin valor correspon a quin tipus de secció.

**Inconsistència (6):** el padding horitzontal té quatre patrons incompatibles convivint:
- `px-[20px] md:px-[40px]` — el més freqüent
- `md:px-0` — `ServiciosClient.tsx` (hero d'estratègia editorial)
- `px-[20px]` sense pas `md:` — `CtaSection`, `AdvantagesSection`, `CaseStudiesClient`, `TestimonialSection`
- `px-[16px]` — `WorkPrinciplesSection`, `CriterioLayersSection`

## Botons (`fnd-button`)

Patró dominant: pastilla de fons clar + cercle taronja amb fletxa que gira 45° en hover. No existeix com a component — es repeteix a vuit fitxers com a mínim, amb el cercle de la fletxa en **set mides diferents**: 48 / 32 / 30 / 28 / 27 / 24 / 20px.

**Inconsistència:** la parella de color del fons també varia sense criteri — `bg-grey hover:bg-white` en uns llocs, `bg-white hover:bg-grey` en uns altres, pel mateix tipus de botó (per exemple capçalera vs. hero).

## Vores i formes (`fnd-shape`)

Radis en ús: 24 (secció/targeta gran), 20, 16 (targeta interna), 14, 10, 8 (pastilla), 6, 4 (xip d'icona), i `rounded-full` (ple). Un arc asimètric recurrent: `border-radius: 128px 0 0 0`.

Família d'uns ~60 SVG decoratius a `public/`, amb noms lligats a la secció on apareixen (`s5b-ventajas-diagram.svg`, `about-history-shape-orange-top.svg`): no són reutilitzables fora del seu context original.

**Inconsistència (11):** diverses composicions decoratives fan servir coordenades absolutes calibrades per a un llenç de 1400px exactes (`ChallengesSection`, formes de `ValuesSection` a `left: 778px` / `1089px`, blob de `ImpactStatsSection` a 545×576px fixos). Entre 1024px i 1400px (portàtils habituals) la composició no quadra amb la mateixa precisió.

## Comportament adaptable

`lg` (1024px) és la frontera real entre «composició de disseny» (formes a sang, coordenades absolutes, animacions complexes) i «llista apilada» (una columna, formes amagades amb `hidden lg:block`). `md` (768px) es fa servir per a canvis més petits de graella i padding.

---

## Inconsistències detectades (totes verificades al codi)

| # | Fet |
|---|---|
| 1 | Aproximadament el 95% de la tipografia i el color es defineix amb `style` inline; els tokens de `@theme` gairebé mai es consumeixen com a classes Tailwind |
| 2 | `body` declara `font-weight: 300` i gairebé tots els components el sobreescriuen a `400`; els subtítols són `300` a les pàgines de servei i `400` a la home per al mateix rol |
| 3 | Nou colors en hex fora de token (llistats a la secció de color) |
| 4 | `ClosingCtaSection` (variant `cta-band`) duplica `CtaSection` amb deriva pròpia: `clamp(40px,5vw,56px)` en lloc de l'escala tipogràfica, i colors en hex en lloc de tokens |
| 5 | Més de quaranta amplades màximes diferents escrites a mà |
| 6 | Quatre patrons de padding horitzontal incompatibles conviuen al mateix lloc |
| 7 | Mapatge nivell↔mida incoherent: el mateix `h2` fa servir `title-xxl`, `title-xl` o `title-l` segons la secció |
| 8 | L'etiqueta de secció porta `opacity: .65` en unes seccions i no en d'altres; de vegades amb claudàtors (`[SERVICIOS]`) i de vegades sense (`Contexto`, `Reto`, `Solución`, `Resultados`) |
| 9 | `opacity: .65` sobre `--color-text-secondary` baixa el contrast per sota d'AA — just el token que `globals.css` havia enfosquit per complir-lo |
| 10 | **Contingut amagat rere hover només a escriptori**, sense alternativa de teclat ni tàctil: cossos de text a `CriterioShapesSection` (`brandshape-composition`), descripcions dels passos a `SystemStepsSection` (`process-steps`), detall de les setmanes a `ServiciosClient` (`process-steps`), i títol + rol + etapa + editorial sencers a `EditorialProjectsSection` (`project-carousel`) |
| 11 | Composicions amb coordenades absolutes calibrades a un llenç de 1400px exactes: `ChallengesSection`, formes decoratives de `ValuesSection`, blob de `ImpactStatsSection`. Entre 1024px i 1400px no quadren amb la mateixa precisió |
| 12 | `ResultsSection` (`metric-cards`) té exactament 3 estils de targeta codificats i hi accedeix per índex (`cardStyles[i]`) sense cap límit: un quart resultat des de Sanity fallaria (`cardStyles[3]` és `undefined`) en lloc de mostrar-se amb un estil de recanvi |
| 13 | Text provisional (*lorem ipsum*) en producció: titular de `ServicesSection` i subtítol de `CriterioShapesSection` (home), subtítol de la crida a `CaseStudiesSection` a `app/page.tsx`, titular i subtítol sencers de `/enfoque`, i «Beneficio 1» repetit tres vegades a `CriterioLayersSection` |
| 14 | `/enfoque` no apareix al menú ni al peu de pàgina des del 2026-09-02, però continua sent una ruta viva i és a `app/sitemap.ts`, amb el text de farciment del punt 13 |
| 15 | ~~El mateix servei té dos noms diferents~~ — **resolt el 2026-10-08**: `ServicesSection`, `Navbar` i `FooterClient` diuen tots «Estrategia de IA» per a `/servicios/estrategia-de-ia`. Queda per revisar si els altres dos serveis (`/servicios/ecosistema-produccion-editorial`, `/servicios/servicios-editoriales`) tenen la mateixa coherència de nom entre home, menú i peu |
| 16 | Errors de redacció en viu: `[¿QUé INCLUYE?]` amb è minúscula (`SystemStepsSection`); «Cercanía  » amb espais finals (`ValuesSection`) |
| 17 | Acoblament entre contingut i codi: `HEIGHT_OVERRIDES` indexat per nom de client a `LogosSection`, `LUMINANCE_MASK_LOGOS` a `RecoloredLogo`, i `findLogoForClient` aparellant per coincidència de subcadena a `CaseStudiesClient` — un client nou amb un nom que xoqui amb un altre no es resoldria correctament |

---

## Límits d'aquest document

Aquest resum descriu el comportament del codi **en el moment d'escriure'l** (vegeu `CHANGELOG.md` per a la data). No proposa cap sistema de tokens nou ni normalitza cap dels patrons anteriors — això és feina d'una decisió de disseny posterior, no d'aquest inventari.

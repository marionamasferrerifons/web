# Inventari de blocs visuals

> Generat a partir de `app/dev/gallery/registry.ts` — els identificadors d'aquest document, de la galeria (`/dev/gallery`) i de `docs/visual-criteria.md` són els mateixos. Si canvies un bloc, canvia'l allà i torna a generar aquest fitxer.

## Com llegir aquest document

Cada fila documenta un **patró**, no un fitxer. Quan el mateix patró visual s'ha implementat diverses vegades de manera divergent (per exemple, set capçaleres de pàgina diferents), les implementacions reals apareixen juntes com a **variants** del patró, cadascuna amb el seu fitxer i la seva pàgina.

Dues columnes es diferencien explícitament a cada fila:

- **Comportament observat** (funció, pàgines, fitxers, variants, contingut necessari, escriptori/mòbil, limitacions): fets extrets directament del codi.
- **Recomanació**: una proposta a revisar, mai una autorització. 🔴 _Retirar_ vol dir «cal decidir si val la pena mantenir-ho», no «elimina-ho».

La galeria visual interna (`npm run dev` → [http://localhost:3000/dev/gallery](http://localhost:3000/dev/gallery)) permet veure cada bloc renderitzat amb el seu component real.

---

## Blocs que no existeixen

| Bloc que falta | Per què fa falta | El més a prop que hi ha avui |
|---|---|---|
| Comparador de 4 serveis en paral·lel | Falten 3 serveis més per comparar amb el mateix format que `estrategia-collaboration` | `svccard-grid` (variant `estrategia-collaboration`) compara 2 modalitats d'un sol servei amb subgrid — el patró ja existeix, falta aplicar-lo als 4 serveis |
| Preguntes freqüents | Cap FAQ existeix enlloc del lloc | — |
| Preus o paquets | Cap pàgina mostra preu, rang de preu ni paquets | Les úniques xifres són mètriques de resultat (`metric-hero`, `metric-cards`) |
| Selector / diagnòstic «quin servei necessito» | Amb 4 serveis, cal ajudar a triar | `svccard-illustrated` és només una llista d'enllaços, sense cap lògica de selecció |

---

## Fonaments visuals

_Color, tipografia, amplades, espaiats, botons i formes. No són blocs de pàgina: són el material amb que estan fets._

### `fnd-color` — Paleta de color

**Recomanació: 🟢 Conservar** — La paleta és sòlida i la feina de contrast ja està feta i documentada. El que cal adaptar és com es consumeix, no els valors.

| | |
|---|---|
| **Funció** | Els tokens de color declarats a @theme dins app/globals.css: set blaus, tres taronges, verd, gris i blanc, més tres tokens específics de text creats per complir contrast AA. |
| **Quan té sentit** | Qualsevol decisió de fons de secció, color de titular o estat interactiu hauria de sortir d'aqui. Avui els valors es consumeixen majoritariament com a var(--color-...) dins atributs style, no com a classes Tailwind. |
| **Construcció** | Component compartit |
| **Contingut que necessita** | - Cap. Els valors viuen a app/globals.css. |
| **Escriptori** | Els tokens són els mateixos a totes les amplades: cap color canvia per breakpoint. |
| **Mòbil** | Identic a escriptori. |
| **Limitacions observades** | - --color-blue-300 no compleix AA com a text (3,96:1 sobre blanc); per aixo existeix --color-text-secondary. El token decoratiu continua disponible i es pot fer servir per error com a text.<br>- Hi ha nou colors escrits en hex directe que no passen per cap token (vegeu docs/visual-criteria.md, incoherència 3).<br>- No hi ha cap token semàntic (fons de secció, text sobre fons fosc): la decisió es repeteix a cada secció. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `default` — Tots els tokens amb el seu hex real | `app/globals.css` | totes les rutes |  |

### `fnd-type` — Escala tipogràfica

**Recomanació: 🟡 Adaptar** — L'escala és completa i l'override mòbil funciona; el que falta és la regla d'us (quin nivell fa servir quin token) i una variant mòbil per al cos.

| | |
|---|---|
| **Funció** | DM Sans per a text i DM Mono per a etiquetes. Cinc mides de titular (title-xxl 64px -> title-s 32px) i quatre de cos (body-xl 24px -> body-accent-mono 14px), amb interlineat propi a cada pas. |
| **Quan té sentit** | Tota la jerarquia de text. Les cinc mides de titular es redueixen automàticament per sota de 768px via @media a globals.css. |
| **Construcció** | Component compartit |
| **Contingut que necessita** | - Cap. Les mides viuen a app/globals.css. |
| **Escriptori** | Mides completes: titulars de 64 a 32px. |
| **Mòbil** | Per sota de 768px els cinc tokens de titular es redefineixen (64->48, 56->48, 48->40, 40->32, 32->24). Les mides de cos no canvien. |
| **Limitacions observades** | - Les mides de cos no tenen variant mòbil: body-xl continua fent 24px en una pantalla de 390px.<br>- body-m té interlineat 20px per una mida de 16px (ratio 1,25): just per a text llarg, i hi ha components que el sobreescriuen a 24px sense token.<br>- El font-weight: 300 del body queda sobreescrit a 400 gairebé a tot arreu, de manera que el pes per defecte declarat no és el que es veu.<br>- No hi ha cap mapatge declarat entre nivell semàntic (h1/h2/h3) i token de mida: el mateix h2 fa servir tres mides diferents segons la secció. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `default` — Escala sencera amb la mida calculada real | `app/globals.css` | totes les rutes |  |

### `fnd-layout` — Amplades i espaiats

**Recomanació: 🟡 Adaptar** — Les quatre famílies d'amplada existeixen de fet i funcionen; convé fixar-les com a tokens abans d'afegir pàgines, perque ara cada secció nova n'inventa una variant.

| | |
|---|---|
| **Funció** | Les amplades maximes de contingut i el ritme vertical i horitzontal de les seccions. No hi ha cap token: tots els valors s'escriuen a mà a cada secció. |
| **Quan té sentit** | Cada secció nova ha de triar una amplada de contingut i un padding. Avui es tria per copia de la secció veïna. |
| **Construcció** | Còpies divergents a diversos fitxers |
| **Contingut que necessita** | - Cap. |
| **Escriptori** | Quatre famílies de facto: ~1400px (contenidor ple), ~1160px (contingut estret), ~690px (prosa i titulars) i ~453px (nota lateral al costat d'un titular). |
| **Mòbil** | px-[20px] és el marge lateral dominant; el contingut passa a una columna per sota de md o lg segons la secció. |
| **Limitacions observades** | - Més de quaranta amplades maximes diferents escrites a mà, moltes a un pixel de distància (1400 / 1480 / 1440 / 1164 / 1165 / 1163 / 1161 / 1160 / 1154...).<br>- El padding horitzontal té quatre patrons incompatibles (vegeu docs/visual-criteria.md, incoherència 6).<br>- El ritme vertical fa servir sis valors de py (40 / 56 / 64 / 80 / 96 / 112) sense cap criteri declarat. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `default` — Les quatre famílies d'amplada i el ritme vertical, a escala | `tot app/**/*Section.tsx` | totes les rutes |  |

### `fnd-button` — Botons i enllacos

**Recomanació: 🟡 Adaptar** — El patró es reconeixible i consistent a ull nu, però vuit copies amb set mides fan impossible canviar-lo en un sol lloc. És el candidat més clar a convertir-se en component compartit.

| | |
|---|---|
| **Funció** | La pastilla de fons clar amb text mono en majúscules i un cercle taronja amb fletxa que gira 45 graus en hover. És l'element interactiu característic del lloc i apareix en gairebé totes les pàgines. |
| **Quan té sentit** | Qualsevol acció principal. La variant petita viu a la capcalera; la gran, als heroes i a les bandes de CTA. |
| **Construcció** | Còpies divergents a diversos fitxers |
| **Contingut que necessita** | - Text de l'acció (curt, en majúscules)<br>- Destinació (BOOKING_URL de lib/constants.ts, correu, o ruta interna) |
| **Escriptori** | Transició de fons de 330ms i rotació de la fletxa de 300ms en hover. |
| **Mòbil** | Identic, però sense hover: la fletxa no gira mai en tàctil. |
| **Limitacions observades** | - No existeix com a component: el marcatge es repeteix literalment a vuit fitxers, amb el cercle de la fletxa en set mides diferents (48 / 32 / 30 / 28 / 27 / 24 / 20px).<br>- Hi ha dues inversions de parella de colors sense criteri: bg-grey hover:bg-white en uns llocs i bg-white hover:bg-grey en uns altres.<br>- No hi ha cap estil de focus declarat més enlla del del navegador.<br>- No existeix cap variant secundaria ni terciaria: tota acció té el mateix pes visual. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `default` — Totes les variants reals, extretes del seu context | `app/home/HomeHeroSection.tsx:126-153`<br>`components/Navbar.tsx:93-117`<br>`app/servicios/estrategia-editorial/CtaSection.tsx:78-100`<br>`app/servicios/estrategia-editorial/ServiciosClient.tsx:57-74`<br>`app/sobre-mi/LinkedInSection.tsx:87-114`<br>`components/MobileMenu.tsx:125-138` | totes les rutes |  |

### `fnd-shape` — Vores i formes decoratives

**Recomanació: 🟡 Adaptar** — Les formes són el que fa que el lloc no sembli una plantilla, però el repertori és enorme i d'un sol us. Val la pena reduir-lo a una família petita i reutilitzable abans d'afegir pàgines.

| | |
|---|---|
| **Funció** | Els radis de cantonada i la família d'SVG decoratius (ones, blobs, arcs, diamants) que donen caràcter al lloc. Viuen tots a public/ com a fitxers solts. |
| **Quan té sentit** | Els radis, a qualsevol targeta o secció. Les formes, per omplir cantonades buides de heroes i seccions de color. |
| **Construcció** | Còpies divergents a diversos fitxers |
| **Contingut que necessita** | - Un SVG a public/ per cada forma, posicionat amb coordenades absolutes. |
| **Escriptori** | Les formes es posicionen a sang amb absolute i valors negatius de left/right/top. |
| **Mòbil** | Gairebe totes les formes decoratives s'oculten (hidden lg:block o hidden md:block). |
| **Limitacions observades** | - Nou radis diferents en us (24 / 20 / 16 / 14 / 10 / 8 / 6 / 4 / ple) més l'arc asimètric 128px 0 0 0.<br>- Hi ha ~60 SVG decoratius a public/ amb noms lligats a la secció on van (s5b-ventajas-diagram.svg, about-history-shape-orange-top.svg): no es poden reutilitzar fora del seu context.<br>- Com que s'oculten a mòbil, la identitat visual del lloc es notablement més pobra en tàctil, que es on hi ha més visites. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `default` — Radis en us i mostrari de formes | `public/*.svg` | totes les rutes |  |

### `fnd-tag` — Etiqueta de secció

**Recomanació: 🟡 Adaptar** — Es l'element més repetit del lloc i el que més es beneficiaria de ser un component amb una sola decisió d'opacitat i de claudators.

| | |
|---|---|
| **Funció** | La línia curta en DM Mono, majúscules i entre claudators ([SERVICIOS], [MI ENFOQUE]) que encapcala gairebé totes les seccions i n'anuncia el tema. |
| **Quan té sentit** | Sempre que una secció necessiti orientar el lector abans del titular. Es el senyal de comenca una secció nova més usat del lloc. |
| **Construcció** | Còpies divergents a diversos fitxers |
| **Contingut que necessita** | - Una o dues paraules en majúscules. |
| **Escriptori** | Mida fixa de 14px amb letter-spacing: -0.5px. |
| **Mòbil** | Identica. En un cas (hero-page, variant estrategia) es trunca amb el lipsi perque té whitespace-nowrap. |
| **Limitacions observades** | - L'opacitat es incoherent: opacity: .65 en unes seccions i cap en d'altres, per al mateix element.<br>- Quan opacity: .65 s'aplica sobre --color-text-secondary el contrast cau per sota d'AA, precisament el token que globals.css havia enfosquit per complir-lo.<br>- La convenció dels claudators no es universal: les pàgines de cas d'èxit fan servir Contexto, Reto, Solución i Resultados sense claudators.<br>- Dos errors de redacció en viu: [¿QUe INCLUYE?] amb e minúscula i les majúscules aplicades per CSS sobre text ja escrit en majúscules. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `default` — Les variants reals, amb i sense opacitat i claudators | `~25 fitxers de secció` | totes les rutes |  |

## Navegació

_Capcalera fixa i peu de pàgina, presents a totes les rutes via app/layout.tsx._

### `nav-header` — Capcalera fixa

**Recomanació: 🟡 Adaptar** — Funciona bé, però la llista de serveis duplicada és exactament el punt que la reorganització a quatre serveis tocarà primer. Convé unificar-la en una sola constant compartida.

| | |
|---|---|
| **Funció** | Barra blava fixa amb cantonades inferiors arrodonides: logotip a l'esquerra, navegació centrada amb dos desplegables, selector d'idioma i boto de reserva a la dreta. Per sota de lg es converteix en un menú hamburguesa a pantalla completa. |
| **Quan té sentit** | Present a totes les rutes. No és un bloc que es triï. |
| **Construcció** | Component compartit |
| **Contingut que necessita** | - Els tres serveis, codificats a mà a SERVICES_ITEMS dins components/Navbar.tsx i duplicats a components/FooterClient.tsx<br>- Casos d'èxit des de Sanity (CASE_STUDIES_QUERY), amb miniatura |
| **Escriptori** | Els desplegables s'obren en hover (amb paddingTop intern per no deixar zona morta) i també en clic. La ruta activa es marca amb un subratllat taronja. |
| **Mòbil** | Menú a pantalla completa per sota de var(--navbar-height), amb bloqueig d'scroll del cos i tancament automàtic en canviar de ruta. |
| **Limitacions observades** | - La llista de serveis està escrita dues vegades (Navbar i FooterClient): afegir un quart servei exigeix editar els dos fitxers.<br>- El selector d'idioma és decoratiu: mostra ES i una fletxa, però no obre res ni porta enlloc.<br>- Amb tres entrades de servei i títols llargs el desplegable ja fa 260px d'ample mínim; amb quatre serveis de nom llarg caldra revisar-ho.<br>- El menú mòbil no té trampa de focus ni tancament amb la tecla Escape. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `desktop` — Capcalera completa (escriptori i mòbil segons amplada) | `components/Navbar.tsx`<br>`components/NavLink.tsx`<br>`components/MobileMenu.tsx` | totes les rutes |  |
| `dropdown-simple` — Desplegable de serveis - llista de text | `components/NavDropdown.tsx` | totes les rutes |  |
| `dropdown-rich` — Desplegable de casos - amb miniatura i fletxa | `components/CaseStudiesDropdown.tsx` | totes les rutes |  |

### `nav-footer` — Peu de pàgina

**Recomanació: 🟢 Conservar** — Compleix la seva funció i el degradat és un tancament de marca reconeixible. L'única cosa a resoldre és la duplicació de la llista de serveis, compartida amb la capcalera.

| | |
|---|---|
| **Funció** | Peu amb degradat vertical de blau a salmo: identitat i contacte a l'esquerra i tres columnes d'enllacos (serveis, casos d'èxit, navegació) a la dreta, amb barra inferior de copyright. |
| **Quan té sentit** | Present a totes les rutes. |
| **Construcció** | Component compartit |
| **Contingut que necessita** | - Els tres serveis (duplicats des de la capcalera)<br>- Casos d'èxit des de Sanity, amb text de recanvi Proximamente si no n'hi ha<br>- Correu i telefon, codificats a FooterClient.tsx |
| **Escriptori** | Quatre columnes amb el bloc d'identitat a l'esquerra. Els títols de cas es trunquen a dues línies. |
| **Mòbil** | Graella de dues columnes (grid-cols-2); el bloc d'identitat ocupa la primera cel la. |
| **Limitacions observades** | - A dues columnes en pantalla estreta, les columnes de Casos de éxito i Navegación queden desequilibrades perque una té amplada fixa de 150px i l'altra de 220px.<br>- La llista de serveis és una copia literal de la de la capcalera.<br>- No hi ha enllaç a avís legal ni a política de privacitat. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `default` — Peu complet | `components/Footer.tsx`<br>`components/FooterClient.tsx` | totes les rutes |  |

## Capçaleres de pàgina

_El primer bloc de cada ruta: etiqueta, titular, descripció i crida a l'acció sobre fons de color._

### `hero-page` — Capcalera de pàgina

**Recomanació: 🟡 Adaptar** — Sis copies divergents d'un sol patró (la variant estrategia ja és un component propi des del redisseny). Convergir-les en un de sol amb props de color i alineació és el pas pràctic que falta per a les tres pàgines de servei restants.

| | |
|---|---|
| **Funció** | El primer bloc de cada ruta: fons de color sencer, etiqueta mono, titular gran amb una paraula destacada, cos curt i boto de reserva. Set implementacions diferents del mateix patró, cadascuna amb el seu propi fitxer, colors i disposició. |
| **Quan té sentit** | Sempre a dalt de tot d'una pàgina. Cada variant actual tria un color de fons diferent (blau, verd, taronja, taronja-400) sense que hi hagi cap sistema declarat que digui quin color correspon a quin tipus de pàgina. |
| **Construcció** | Còpies divergents a diversos fitxers |
| **Contingut que necessita** | - Etiqueta (1-3 paraules)<br>- Titular amb un fragment destacat<br>- Cos curt (1-2 frases)<br>- Boto amb destinació |
| **Escriptori** | Composicions variades: foto amb màscara (home, sobre-mi), vectors decoratius a les cantonades (servicios), titular alineat a la dreta (ecosistema), o centrat (enfoque, caso). |
| **Mòbil** | Totes amaguen les formes i fotos decoratives (hidden lg:block). El titular i el cos passen a una sola columna. |
| **Limitacions observades** | - Set implementacions independents del mateix patró: canviar la mida del titular o el boto exigeix tocar set fitxers.<br>- La variant enfoque conserva text de farciment (lorem ipsum) al titular en producció.<br>- Cap variant té una alternativa de contrast per a usuaris amb preferència de moviment reduït, excepte la variant estrategia (afegida en el redisseny de 2026-10-08, que sí que comprova prefers-reduced-motion). |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `home` — Home - foto amb màscara + forma dentada | `app/home/HomeHeroSection.tsx` | / |  |
| `estrategia` — Estrategia de IA - vectors simètrics, fons verd | `app/servicios/estrategia-de-ia/HeroSection.tsx` | /servicios/estrategia-de-ia |  |
| `produccion` — Producción editorial con IA - titular a l'esquerra, text i accions a la dreta, fons taronja-400 | `app/servicios/produccion-editorial-con-ia/HeroSection.tsx` | /servicios/produccion-editorial-con-ia |  |
| `ecosistema` — Ecosistema de producció - titular alineat a la dreta, fons taronja | `app/servicios/ecosistema-produccion-editorial/EcosistemaHeroSection.tsx` | /servicios/ecosistema-produccion-editorial (sense ruta, 301) |  |
| `editoriales` — Servicios editoriales - titular al 57%, fons taronja-400 | `app/servicios/servicios-editoriales/ServiciosEditorialesHeroSection.tsx` | /servicios/servicios-editoriales (sense ruta, 301) |  |
| `sobre-mi` — Sobre mi - foto amb màscara d'ona, fons blau | `app/sobre-mi/SobreMiHeroSection.tsx` | /sobre-mi |  |
| `enfoque` — Enfoque - centrat, amb text de farciment | `app/enfoque/EnfoqueHeroSection.tsx` | /enfoque |  |
| `caso` — Cas d'èxit - centrat amb metadades (any, durada, client) | `app/casos-de-exito/[slug]/CaseStudyHeroSection.tsx` | /casos-de-exito/[slug] |  |

## Enunciats i afirmacions

_Blocs que només són un titular gran, sense targetes ni llistes._

### `statement-headline` — Afirmació directa

**Recomanació: 🟢 Conservar** — Funciona com a respirador entre blocs densos i no té cap problema tècnic observat.

| | |
|---|---|
| **Funció** | Un titular sol, sense targetes ni llistes, que fa una afirmació o plantejament. A vegades amb una forma decorativa de fons. |
| **Quan té sentit** | Per marcar una transició de to dins la pàgina, entre blocs més densos, sense demanar cap interacció. |
| **Construcció** | Còpies divergents a diversos fitxers |
| **Contingut que necessita** | - Un titular curt amb un fragment destacat. |
| **Escriptori** | Text centrat o alineat a l'esquerra segons la secció, amb una forma SVG decorativa opcional. |
| **Mòbil** | La forma decorativa s'oculta; el titular es manté a la mateixa mida (no baixa de title-xxl a cap de les seves aparicions). |
| **Limitacions observades** | - És el bloc amb menys contingut de tot el lloc: no aporta context ni acció, només afirma.<br>- A QuoteSection el text és una citació personal però es tracta tipograficament igual que un titular de venda. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `problem` — Problem (home) - titular amb forma de fons | `app/home/ProblemSection.tsx` | / |  |
| `production-painpoints-title` — Titulars de ProductionPainPoints (servicios editoriales) | `app/servicios/servicios-editoriales/ProductionPainPointsSection.tsx` | /servicios/servicios-editoriales (sense ruta, 301) | Els dos h2 del bloc de pastilles; no és un component separat. · _incrustat_ |
| `quote` — Quote (sobre mi) - citació personal sobre fons taronja | `app/sobre-mi/QuoteSection.tsx` | /sobre-mi |  |

### `statement-wordfill` — Titular que s'omple en fer scroll

**Recomanació: 🔴 Retirar (proposta)** — És un efecte vistós però sense cap altra aparició al lloc, en una pàgina ja deprioritzada. Proposta a revisar: si es recupera /enfoque, decidir si val la pena mantenir aquest efecte o substituir-lo per statement-headline.

| | |
|---|---|
| **Funció** | Paraula per paraula, el titular i el cos passen d'opacitat 0.2 a 1 mentre l'usuari fa scroll (GSAP scrub). Només apareix a /enfoque. |
| **Quan té sentit** | Per donar enfasi narratiu a un plantejament llarg, quan es vol que la lectura marqui el ritme de l'scroll. |
| **Construcció** | Còpies divergents a diversos fitxers |
| **Contingut que necessita** | - Un titular llarg partit en fragments de color<br>- Un cos llarg (un paragraf) |
| **Escriptori** | Composició en graella de dues columnes amb una forma decorativa superposada. |
| **Mòbil** | S'apila en una columna; l'efecte de scrub es manté (no es desactiva a mòbil). |
| **Limitacions observades** | - Només existeix a /enfoque, una pàgina que ja no és al menú ni al peu: és un patró infrautilitzat.<br>- L'efecte depèn de l'scroll i no té cap alternativa per a preferència de moviment reduït.<br>- Llegir una paraula alhora que s'il·lumina es més lent que llegir un paragraf normal; amb contingut de venda dens no escala bé. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `challenge` — Plantejament del repte | `app/enfoque/EnfoqueChallengeStatementSection.tsx` | /enfoque |  |
| `approach` — Per que importa l'enfoque | `app/enfoque/ApproachSection.tsx` | /enfoque |  |

## Llistes de problemes

_Pastilles blanques que enumeren dolors del client abans de presentar l'oferta._

### `painpoint-pills` — Pastilles de problema

**Recomanació: 🟡 Adaptar** — El concepte (reconeixer el dolor abans de vendre) és útil per a una pàgina de comparació de serveis, però la implementació actual amb marges fixos no és sostenible si el nombre de frases varia per servei. El redisseny de "Estrategia de IA" (2026-10-08) ha optat per substituir aquest patró per una graella regular de preguntes (vegeu `qa-grid`) en lloc d'adaptar-lo.

| | |
|---|---|
| **Funció** | Llista de frases curtes en pastilles blanques amb un punt de color, cadascuna descrivint un dolor o situació del client potencial. Precedeix l'oferta: primer es reconeix el problema, després es presenta la solució. |
| **Quan té sentit** | Just abans de presentar les targetes de servei, per connectar amb la situació actual del lector abans de vendre. |
| **Construcció** | Còpies divergents a diversos fitxers |
| **Contingut que necessita** | - De 2 a 6 frases curtes<br>- Un color de punt per frase (sense significat declarat) |
| **Escriptori** | Disposició esglaonada amb marges esquerra variables per crear una composició irregular, no una llista neta. |
| **Mòbil** | Es converteix en una llista vertical simple, sense marges esglaonats. |
| **Limitacions observades** | - Tres implementacions divergents amb marges codificats a mà per cada pastilla (per exemple md:ml-[135px], md:ml-[186px]): afegir o treure una frase desquadra tota la composició.<br>- El color del punt no té cap significat (no categoritza el tipus de problema): es només decoratiu.<br>- No hi ha versió amb més de sis frases provada: amb quatre serveis que comparteixin aquest bloc, la composició esglaonada pot no escalar. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `ecosistema` — Sense el teu criteri codificat (ecosistema) - esglaonat amb marges a la dreta | `app/servicios/ecosistema-produccion-editorial/ProblemPillsSection.tsx` | /servicios/ecosistema-produccion-editorial (sense ruta, 301) |  |
| `editoriales` — Si necessites complir el pla (servicios editoriales) - dues files, titular a banda i banda | `app/servicios/servicios-editoriales/ProductionPainPointsSection.tsx` | /servicios/servicios-editoriales (sense ruta, 301) |  |
| `home-avatars` — Desafíos reales (home) - amb avatar flotant en lloc de punt de color | `app/home/ChallengesSection.tsx` | / | Variant més allunyada del patró: substitueix el punt per una fotografia d'avatar i coordenades absolutes calibrades a 1400px. |

### `qa-grid` — Graella de preguntes i respostes

**Recomanació: 🟢 Conservar** — Resol directament la limitació de `painpoint-pills` (marges esglaonats codificats a mà que no escalen): és una graella regular sense posicions fixes per element.

| | |
|---|---|
| **Funció** | Graella regular (no esglaonada, no masonry) de targetes blanques sobre fons gris, cadascuna amb un número, una pregunta a mode de títol i una resposta curta de com s'ajuda a resoldre-la. |
| **Quan té sentit** | Introduïda al redisseny de "Estrategia de IA" (2026-10-08) com a alternativa deliberada a `painpoint-pills`: en lloc de pastilles esglaonades que descriuen un dolor, presenta directament la pregunta i la resposta, amb un disseny de graella que escala millor a un nombre variable d'elements. |
| **Construcció** | Còpies divergents a diversos fitxers |
| **Contingut que necessita** | - Entre 4 i 6 parelles de pregunta curta + resposta d'1-2 frases |
| **Escriptori** | 3 columnes (≥1024px), 2 a tauleta, 1 a mòbil. Targetes blanques, radi 24, padding 32. |
| **Mòbil** | 1 columna; cap contingut s'oculta ni depèn d'interacció. |
| **Limitacions observades** | - Només una implementació fins ara: cal veure com escala amb un nombre de preguntes diferent de 6 abans de considerar-lo un patró consolidat. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `estrategia` — ¿Qué preguntas no puedes seguir aplazando? (estrategia de ia) - graella 3x2 | `app/servicios/estrategia-de-ia/DecisionsSection.tsx` | /servicios/estrategia-de-ia |  |

## Targetes de servei

_Els blocs que presenten l'oferta. És el grup clau per a la reorganització en quatre serveis._

### `svccard-illustrated` — Targeta de servei il·lustrada

**Recomanació: 🟡 Adaptar** — És el bloc més pròxim a un selector de serveis que existeix avui, però només funciona com a llista, no com a comparador. Amb quatre serveis caldra decidir si aquest patró escala o si cal un comparador nou (vegeu la secció de blocs inexistents a l'inventari).

| | |
|---|---|
| **Funció** | Tres targetes apilades verticalment, cadascuna amb text a un costat i una il·lustració SVG a sang a l'altre, que alternen costat. Cada targeta és un enllaç complet cap a la pàgina del servei. |
| **Quan té sentit** | Per presentar l'oferta completa com una llista d'opcions navegables des de la home. |
| **Construcció** | Còpies divergents a diversos fitxers |
| **Contingut que necessita** | - Títol<br>- Subtitol (en cursiva)<br>- Cos (2-3 frases)<br>- Una il·lustració SVG per servei<br>- Ruta de destinació |
| **Escriptori** | Targetes de 480px d'alcada mínima; la il·lustració ocupa ~56% de l'amplada i alterna costat servei a servei. |
| **Mòbil** | La il·lustració passa a dalt de tot i el text a sota, en una sola columna. |
| **Limitacions observades** | - Només en té tres: amb el quart servei cal decidir si s'hi afegeix una quarta targeta o es redissenya el bloc.<br>- No hi ha manera de comparar els serveis entre si: cada targeta és un enllaç independent, no hi ha taula ni resum conjunt. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `default` — Les tres targetes reals, amb el seu contingut | `app/home/ServicesSection.tsx` | / |  |

### `svccard-grid` — Graella de targetes de servei

**Recomanació: 🟡 Adaptar** — És el patró que s'ha triat per al primer comparador real del lloc (`estrategia-collaboration`); cal decidir si les variants antigues (sense subgrid, amb alçada fixa) convergeixen cap a la mateixa tècnica o es deixen tal com estan.

| | |
|---|---|
| **Funció** | Una targeta blanca gran que conté un subtitol de servei i una graella de 2x2 (o files) de targetes grises més petites, cadascuna amb icona, títol i descripció curta. |
| **Quan té sentit** | Per descompondre un servei ampli en les seves peces concretes, dins la mateixa pàgina de servei. Des del redisseny de "Estrategia de IA" (2026-10-08), també per comparar 2 modalitats de col·laboració amb la mateixa jerarquia (variant `estrategia-collaboration`), usant CSS subgrid perquè les files quedin alineades encara que el contingut de cada targeta no tingui la mateixa llargada. |
| **Construcció** | Còpies divergents a diversos fitxers |
| **Contingut que necessita** | - Títol i cos del servei pare<br>- Una il·lustració gran<br>- De 2 a 6 sub-elements amb icona, títol i descripció |
| **Escriptori** | Graella de 2 columnes amb targetes d'alcada mínima fixa (245px) a les variants antigues; la variant `estrategia-collaboration` alinea les files amb subgrid en lloc d'una alçada fixa. |
| **Mòbil** | Una sola columna; les targetes mantenen l'alcada mínima, que pot deixar espai buit si el text es curt (excepte `estrategia-collaboration`, que no té alçada fixa). |
| **Limitacions observades** | - Les variants antigues tenen nombre de columnes diferent (2x2 vs 1x3) i mides d'icona inconsistents dins el mateix bloc (48px el contenidor, però la icona interior varia de 28 a 48px segons l'entrada).<br>- Retirat el patró `svccard-expandable` (targeta desplegable, única implementació a l'antiga /servicios/estrategia-editorial): el redisseny de 2026-10-08 el substitueix per aquesta variant `estrategia-collaboration`. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `editoriales-offerings` — Lo que ofrezco (servicios editoriales) - graella 2x2 | `app/servicios/servicios-editoriales/ServiceOfferingsSection.tsx` | /servicios/servicios-editoriales (sense ruta, 301) |  |
| `ecosistema-includes` — Qué incluye (ecosistema) - fila de 3, dins SystemStepsSection | `app/servicios/ecosistema-produccion-editorial/SystemStepsSection.tsx:318-366` | /servicios/ecosistema-produccion-editorial (sense ruta, 301) | _incrustat_ |
| `estrategia-collaboration` — ¿Cómo podemos colaborar? (estrategia de ia) - comparador de 2 modalitats amb subgrid | `app/servicios/estrategia-de-ia/CollaborationSection.tsx` | /servicios/estrategia-de-ia |  |
| `produccion-modalities` — ¿Qué necesitas resolver? (producción) - 3 modalitats amb il·lustració, subgrid | `app/servicios/produccion-editorial-con-ia/ModalitiesSection.tsx` | /servicios/produccion-editorial-con-ia |  |
| `produccion-options` — Dos formas de ponerlo en marcha (producción) - comparador de 2 opcions amb subgrid, dins ProductionSystemSection | `app/servicios/produccion-editorial-con-ia/ProductionSystemSection.tsx` | /servicios/produccion-editorial-con-ia | _incrustat_ |

## Graelles de valor

_Targetes curtes amb icona, títol i cos que argumenten beneficis o principis._

### `valuegrid-masonry` — Graella de valor en masonry

**Recomanació: 🟡 Adaptar** — L'efecte visual és atractiu però fragil: cada nova entrada obliga a recalcular alcades a mà. Si es reutilitza per comparar serveis, convé una graella regular en lloc de masonry.

| | |
|---|---|
| **Funció** | Targetes blanques curtes (icona + títol + cos) organitzades en columnes amb desplacament vertical (masonry), de vegades amb formes decoratives de fons. |
| **Quan té sentit** | Per enumerar valors, principis o beneficis quan no cal cap ordre estricte entre ells. |
| **Construcció** | Còpies divergents a diversos fitxers |
| **Contingut que necessita** | - Icona<br>- Títol curt<br>- Cos d'una frase<br>- Alcada de targeta (es codifica a mà per crear l'efecte masonry) |
| **Escriptori** | Columnes amb un marge superior diferent cada una, per crear l'efecte esglaonat. |
| **Mòbil** | Es converteix en una sola columna; l'efecte masonry desapareix i totes les targetes es veuen seguides. |
| **Limitacions observades** | - L'alcada de cada targeta es un número fix en px triat a mà (304, 350, 284...) perque quadri amb les altres columnes: afegir o treure un element trenca l'efecte masonry sencer.<br>- Quatre implementacions divergents: dues columnes de 2, una de 2x2+il·lustració, una de 3x1 amb testimoni incrustat a sota.<br>- Les formes decoratives de ValuesSection tenen coordenades absolutes (left: 778px, 1089px) calibrades per a 1400px i no responen bé entre 1024 i 1400px. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `about-values` — Mis valores (sobre mi) - 3 columnes de 2, amb formes de fons | `app/sobre-mi/ValuesSection.tsx` | /sobre-mi |  |
| `enfoque-principles` — Principios de trabajo (enfoque) - 3 columnes, targetes altes amb forma | `app/enfoque/WorkPrinciplesSection.tsx` | /enfoque |  |
| `home-practice` — Traducción a la práctica (home) - fila de 3 + testimoni incrustat | `app/home/PracticeSection.tsx` | / |  |
| `ecosistema-advantages` — Ventajas (ecosistema) - graella 2x2 + diagrama | `app/servicios/ecosistema-produccion-editorial/AdvantagesSection.tsx` | /servicios/ecosistema-produccion-editorial (sense ruta, 301) |  |

## Composicions de marca

_Composicions amb formes de marca i coreografia d'scroll. Alt impacte visual, poca densitat de text._

### `brandshape-composition` — Composició de formes de marca

**Recomanació: 🟡 Adaptar** — És un dels blocs més vistosos del lloc, però les tres implementacions expliquen essencialment el mateix (el meu criteri ve de tres eixos) de maneres incompatibles. Convergir en una sola abans de decidir si cal replicar-la per servei.

| | |
|---|---|
| **Funció** | Formes grans de marca (arc, cercle, diamant) amb text superposat, animades amb scroll fixat (GSAP pin + scrub): les formes es mouen, es converteixen o canvien d'opacitat mentre l'usuari fa scroll sense avancar de pàgina. |
| **Quan té sentit** | Per explicar visualment els tres eixos del posicionament (editorial / pedagogia / tecnologia) amb alt impacte, quan es disposa de temps d'atenció de l'usuari. |
| **Construcció** | Còpies divergents a diversos fitxers |
| **Contingut que necessita** | - Tres blocs de contingut curt (títol + cos), un per forma<br>- Res més: la coreografia es 100% CSS/GSAP |
| **Escriptori** | La pàgina es fixa (position: pin) durant 1400-1600px d'scroll mentre la composició es transforma; només continua en avancar prou. |
| **Mòbil** | Totes les variants substitueixen l'animació per una llista estàtica apilada (sense pin ni scrub). |
| **Limitacions observades** | - Reserva molt espai d'scroll (1400-1600px) només per a l'animació: en una previsualització reduïda (com una miniatura) es llegeix com a buit.<br>- Tres implementacions amb geometria diferent (arcs+cercle a la home, diamants apilats a enfoque, targetes que convergeixen a ecosistema) però el mateix concepte narratiu subjacent.<br>- La variant d'enfoque té contingut de farciment (Beneficio 1, Beneficio 1, Beneficio 1) en producció.<br>- Depèn totalment de JavaScript (GSAP + ScrollTrigger): sense JS la composició mostra només l'estat inicial, sense cap indicació que hi ha més contingut. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `home-arches` — El meu enfoque (home) - dos arcs + un cercle, sense pin | `app/home/CriterioShapesSection.tsx` | / |  |
| `enfoque-diamonds` — El criteri (enfoque) - diamants apilats amb pin + crossfade | `app/enfoque/CriterioLayersSection.tsx` | /enfoque |  |
| `ecosistema-converge` — El criteri no es delega (ecosistema) - tres targetes que convergeixen amb pin | `app/servicios/ecosistema-produccion-editorial/ThreeLayersConvergeSection.tsx` | /servicios/ecosistema-produccion-editorial (sense ruta, 301) |  |

## Processos i etapes

_Seqüències numerades (passos, setmanes) que expliquen com es treballa._

### `process-steps` — Passos de procés

**Recomanació: 🟡 Adaptar** — El concepte és clar i útil per explicar un procés de venda. El redisseny de "Estrategia de IA" (2026-10-08) ja demostra que es pot mantenir tot visible sense perdre claredat; queda per decidir si `ecosistema-build` convergeix cap al mateix patró.

| | |
|---|---|
| **Funció** | Llista numerada de passos o etapes (Paso 1 / Semana 1...), amb un títol curt i un detall que es revela en hover o que es manté visible, segons la variant. |
| **Quan té sentit** | Per explicar com es treballa, en quin ordre i amb quina durada. |
| **Construcció** | Còpies divergents a diversos fitxers |
| **Contingut que necessita** | - Una etiqueta numèrica (Paso 1, Semana 1)<br>- Un títol curt<br>- Un detall d'una frase |
| **Escriptori** | Files horitzontals amb una línia divisoria; a la variant `ecosistema-build` el detall només es veu en passar-hi el ratolí per sobre, però `estrategia-always-visible` i `case-process` el mostren sempre. |
| **Mòbil** | Totes les variants passen a un format apilat amb el detall sempre visible. |
| **Limitacions observades** | - La variant `ecosistema-build` amaga el detall de cada pas rere hover a escriptori: a la vista per defecte només es veu el títol, sense el contingut que explica el pas (vegeu la incoherència 10 de docs/visual-criteria.md).<br>- Les mides de fletxa i de punt verd no estan unificades entre les variants.<br>- La variant de casos d'èxit (ProcessSection) és l'única alimentada per Sanity (PortableText) i inclou un lightbox d'imatges; no comparteix cap part de la implementació amb les altres dues. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `ecosistema-build` — Cómo lo construimos (ecosistema) - detall rere hover a escriptori | `app/servicios/ecosistema-produccion-editorial/SystemStepsSection.tsx:194-316` | /servicios/ecosistema-produccion-editorial (sense ruta, 301) | _incrustat_ |
| `estrategia-always-visible` — ¿Cómo trabajo? (estrategia de ia) - 3 passos, tot visible sense hover | `app/servicios/estrategia-de-ia/WorkProcessSection.tsx` | /servicios/estrategia-de-ia |  |
| `produccion-benefits` — ¿Qué aporta a tu editorial? (producción) - 4 beneficis amb icona, sense numeració, dins ProductionSystemSection | `app/servicios/produccion-editorial-con-ia/ProductionSystemSection.tsx` | /servicios/produccion-editorial-con-ia | _incrustat_ |
| `case-process` — Proceso (cas d'èxit) - text + graella d'imatges amb lightbox | `app/casos-de-exito/[slug]/ProcessSection.tsx` | /casos-de-exito/[slug] |  |

### `timeline-history` — Línia de temps biogràfica

**Recomanació: 🟢 Conservar** — Compleix bé la seva funció narrativa a /sobre-mi i no té equivalent necessari en cap altra pàgina; no cal tocar-lo per a la reorganització de serveis.

| | |
|---|---|
| **Funció** | Seqüència vertical d'etapes professionals alternant costat (esquerra/dreta), cada una amb un títol, una descripció i fites datades, connectades per una línia vertical contínua. |
| **Quan té sentit** | Només a /sobre-mi, per explicar la trajectòria professional en forma de relat, no de currículum. |
| **Construcció** | Còpies divergents a diversos fitxers |
| **Contingut que necessita** | - Set entrades amb títol, descripció i una o més fites datades (data + text curt) |
| **Escriptori** | Alternança esquerra/dreta amb un punt central connectat per una línia vertical; cada fila anima independentment en entrar a la vista. |
| **Mòbil** | Es converteix en una sola columna amb els punts alineats a l'esquerra; desapareix l'alternança. |
| **Limitacions observades** | - Set entrades amb contingut i nombre de fites molt desigual (d'una a tres per entrada): el ritme visual no és constant.<br>- No existeix enlloc més al lloc: és un patró d'un sol ús, sense cap altre bloc que el reutilitzi.<br>- El contingut és estrictament biogràfic i personal; no es pot adaptar a cap dels quatre serveis sense canviar-ne completament el propòsit. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `default` — Línia de temps completa amb les set etapes reals | `app/sobre-mi/HistorySection.tsx` | /sobre-mi |  |

## Mètriques

_Xifres grans de resultat._

### `metric-hero` — Mètrica destacada amb blob

**Recomanació: 🟢 Conservar** — És un recurs d'impacte eficaç per a una sola mètrica destacada; no cal replicar-lo si no n'hi ha una altra de comparable.

| | |
|---|---|
| **Funció** | Una xifra molt gran (comptador animat en carregar) incrustada dins una forma SVG blava, acompanyada d'una llista de verificació a l'altre costat. |
| **Quan té sentit** | Per obrir una secció d'impacte amb una sola xifra memorable, en lloc de diverses mètriques petites. |
| **Construcció** | Codi incrustat dins un component més gran |
| **Contingut que necessita** | - Un rang numèric (60-90%)<br>- Una etiqueta curta<br>- Una llista de 3 a 8 elements de verificació |
| **Escriptori** | La forma blava (545x576px fixos) conté la xifra; el comptador anima de 0 al valor final amb GSAP en entrar a la vista. |
| **Mòbil** | La forma es substitueix per una targeta blava plana amb la mateixa xifra, sense l'animació de comptador amb fletxa. |
| **Limitacions observades** | - Només existeix en una pàgina i no és un component: tota la lògica de comptador i la forma estan incrustades directament a SystemStepsSection.<br>- Les dimensions de la forma (545x576) són fixes en px, no responen per sota del breakpoint lg (es substitueixen de cop per la variant mòbil, no s'escalen). |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `default` — Tiempo de producción - rang 60-90% | `app/servicios/ecosistema-produccion-editorial/ImpactStatsSection.tsx` | /servicios/ecosistema-produccion-editorial (sense ruta, 301) |  |

### `metric-cards` — Targetes de resultat

**Recomanació: 🟡 Adaptar** — Risc tècnic real i fàcil de corregir: cal o bé limitar el schema a 3 resultats o bé fer que l'estil es repeteixi en lloc de trencar-se a partir del quart.

| | |
|---|---|
| **Funció** | Fins a tres targetes de color amb una xifra o resultat gran i una etiqueta a sota, una al costat de l'altra. |
| **Quan té sentit** | Per tancar un cas d'èxit amb els resultats quantificats obtinguts. |
| **Construcció** | Codi incrustat dins un component més gran |
| **Contingut que necessita** | - Entre 1 i 3 resultats, cadascun amb number i label (text des de Sanity) |
| **Escriptori** | Tres targetes en fila, cadascuna amb un color i un color de xifra predefinits per posició. |
| **Mòbil** | Les targetes passen a apilar-se verticalment. |
| **Limitacions observades** | - Els estils de targeta estan codificats en un array de 3 posicions (cardStyles[0..2]) indexat directament per index: un quart resultat des de Sanity faria fallar l'accés (cardStyles[3] és undefined) en lloc de mostrar-se amb un estil de recanvi.<br>- No hi ha limit declarat al schema de Sanity que impedeixi afegir-ne un quart. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `default` — Les tres targetes amb els seus colors fixos | `app/casos-de-exito/[slug]/ResultsSection.tsx` | /casos-de-exito/[slug] |  |

## Comparadors

_Blocs que posen dues o més coses una al costat de l'altra per contrastar-les._

### `compare-beforeafter` — Comparador abans / després

**Recomanació: 🟢 Conservar** — Funciona bé per al seu propòsit actual (abans/després d'un cas). No és el bloc a reutilitzar per comparar serveis: cal un bloc nou per a aixo (vegeu Blocs que no existeixen a l'inventari).

| | |
|---|---|
| **Funció** | Dues columnes amb icona (creu vermella vs. check blau) i una llista de frases curtes a cada una, contrastant la situació abans i després d'un projecte. |
| **Quan té sentit** | Només apareix dins les pàgines de cas d'èxit, per resumir visualment la transformació. |
| **Construcció** | Codi incrustat dins un component més gran |
| **Contingut que necessita** | - Llista d'items Abans (PortableText)<br>- Llista d'items Después (PortableText), idealment amb el mateix nombre d'elements |
| **Escriptori** | Dues columnes amb graella fixa; cada item és una fila amb icona + text. |
| **Mòbil** | Les columnes es apilen (Antes a sobre, Después a sota) en lloc de mostrar-se en paral·lel. |
| **Limitacions observades** | - És l'únic comparador real del lloc, però compara un abans/després temporal d'un sol cas, no diverses opcions entre si: no serveix per comparar quatre serveis.<br>- Si una llista té més elements que l'altra, les files deixen de correspondre's visualment (no hi ha alineació per parella). |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `default` — Antes / Después amb contingut real d'un cas | `app/casos-de-exito/[slug]/BeforeAfterSection.tsx` | /casos-de-exito/[slug] |  |

## Testimonis

_Citació de client amb autoria i logotip._

### `testimonial-card` — Targeta de testimoni

**Recomanació: 🟢 Conservar** — És el millor exemple del lloc de bloc reutilitzat correctament via props. Servirà de model per convergir altres patrons (hero-page, cta-band) cap a un sol component.

| | |
|---|---|
| **Funció** | Targeta de color amb una forma de marca a l'esquerra (amb el logotip del client superposat en silueta translúcida) i la citació, l'avatar i l'autoria a la dreta. |
| **Quan té sentit** | Per aportar prova social després de presentar l'oferta o abans de tancar amb una crida a l'acció. |
| **Construcció** | Component compartit |
| **Contingut que necessita** | - Citació<br>- Nom i càrrec de l'autor<br>- Avatar (Sanity)<br>- Logotip del client (opcional, Sanity)<br>- Color de targeta |
| **Escriptori** | La forma decorativa amb el logotip només es veu a partir de md; la citació ocupa la resta de l'espai. |
| **Mòbil** | La forma i el logotip s'oculten del tot; només queden la citació i l'autoria. |
| **Limitacions observades** | - És l'únic component veritablement compartit entre moltes pàgines (home, les tres de servei, enfoque i casos d'èxit), però amb tres colors de targeta triats a mà per crida (taronja per defecte, verd, i hideHeader per incrustar-lo sense títol).<br>- Si no hi ha testimoni a Sanity per a una pàgina, el bloc sencer desapareix (cap text de recanvi), cosa consistent però que deixa buit sense avisar. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `orange` — Color per defecte (taronja-400), amb capcalera Testimonios | `app/servicios/estrategia-editorial/TestimonialSection.tsx` | /, /servicios/estrategia-de-ia, /enfoque, /casos-de-exito/[slug] |  |
| `green` — Variant verda (cardColor), amb capcalera | `app/servicios/estrategia-editorial/TestimonialSection.tsx` | /, /servicios/produccion-editorial-con-ia |  |
| `embedded` — hideHeader - incrustat sense títol de secció, dins PracticeSection | `app/home/PracticeSection.tsx:150-163` | / | _incrustat_ |

## Casos i projectes

_Índexs de feina feta que enllacen o es naveguen._

### `caselist-rows` — Llista de casos d'èxit

**Recomanació: 🟢 Conservar** — Component net i reutilitzat correctament amb props (tag/title/subtitle). Només caldria substituir l'aparellament per subcadena per una referència directa si creix el catàleg de clients.

| | |
|---|---|
| **Funció** | Files horitzontals (targeta-enllaç) amb miniatura, títol, subtitol i un logotip de client superposat en marca d'aigua sobre la imatge. |
| **Quan té sentit** | Per enumerar casos d'èxit complets com a enllacos a la seva pàgina pròpia. |
| **Construcció** | Component compartit |
| **Contingut que necessita** | - Títol, subtitol i client per cas<br>- Imatge de targeta (Sanity)<br>- Logotip del client, aparellat per coincidència de nom |
| **Escriptori** | Fila amb miniatura a l'esquerra i text a la dreta; escala lleugerament (1.02) en hover. |
| **Mòbil** | La miniatura passa a dalt de tot, amplada completa, i el boto fletxa es superposa a la cantonada. |
| **Limitacions observades** | - L'aparellament de logotip es fa per coincidència de subcadena de nom (findLogoForClient), no per referència explícita: un nom de client amb variació ortogràfica no trobaria el seu logotip.<br>- Si no hi ha cap cas d'èxit, el component retorna null sense missatge alternatiu. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `default` — Llista amb casos reals i logotips aparellats | `app/servicios/estrategia-editorial/CaseStudiesClient.tsx`<br>`app/servicios/estrategia-editorial/CaseStudiesSection.tsx` | /, /servicios/estrategia-de-ia, /enfoque | A estrategia-editorial està desactivat per SHOW_CASE_STUDIES = false. |

### `project-carousel` — Carrusel de projectes

**Recomanació: 🟢 Conservar** — Redissenyat el 2026-10-09 per a Producción editorial con IA: resol la dependència de hover (incoherència 10 de docs/visual-criteria.md) i el triplicat de l'array de projectes.

| | |
|---|---|
| **Funció** | Targetes verticals en carrusel horitzontal: coberta sencera del llibre i, a sota, any, curs, títol, rol i editorial, sempre visibles. |
| **Quan té sentit** | Per mostrar un volum gran de projectes (desenes) sense ocupar tanta alcada de pàgina com una llista vertical. |
| **Construcció** | Codi incrustat dins un component més gran |
| **Contingut que necessita** | - Títol, rol, curs, editorial i any per projecte<br>- Imatge de coberta (Sanity) |
| **Escriptori** | Scroll-snap natiu amb botons anterior/següent (aria-label) que es desactiven als extrems; projectes del més recent al més antic. |
| **Mòbil** | Lliscable amb el dit; la informació de cada projecte es manté visible sota la coberta. |
| **Limitacions observades** | - Sense bucle infinit: arribat a l'últim projecte, cal tornar enrere.<br>- L'ordre és per any (descendent); dins d'un mateix any es respecta el camp «Orden» de Sanity. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `default` — Carrusel amb projectes reals | `app/servicios/produccion-editorial-con-ia/EditorialProjectsSection.tsx` | /servicios/produccion-editorial-con-ia |  |

## Logotips de client

_Prova social en forma de marquesina._

### `logo-marquee` — Marquesina de logotips

**Recomanació: 🟡 Adaptar** — Funciona visualment però està acoblat a noms de client concrets en dos llocs diferents del codi; amb més clients caldra una propietat explícita al CMS en lloc d'una llista a mà.

| | |
|---|---|
| **Funció** | Franja de logotips de client en moviment horitzontal continu (GSAP), recolorats a blanc translúcid perque sempre encaixin amb el fons blau, amb esvaiment als dos costats. |
| **Quan té sentit** | Com a prova social compacta, normalment just després del hero. |
| **Construcció** | Component compartit |
| **Contingut que necessita** | - Llista de logotips (Sanity, industryLogo) |
| **Escriptori** | Moviment continu que es pausa en passar-hi el ratolí per sobre. |
| **Mòbil** | Identic; el moviment continua (no hi ha pausa tàctil equivalent al hover). |
| **Limitacions observades** | - Les mides d'alcada individuals de certs logotips estan codificades a mà per nom (HEIGHT_OVERRIDES: actilearning, juniorreport, altamar): un logotip nou amb mida visual rara exigeix tornar a tocar aquest fitxer.<br>- El recolorat per a logotips sense transparència (RecoloredLogo, màscara de luminància) també depèn d'una llista de noms a mà (LUMINANCE_MASK_LOGOS).<br>- El moviment continu no es pausa mai en mòbil ni respecta prefers-reduced-motion. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `default` — Marquesina amb logotips reals | `app/home/LogosSection.tsx`<br>`components/RecoloredLogo.tsx` | / |  |

## Prosa editable des del CMS

_Blocs de text llarg provinents de Sanity (PortableText)._

### `prose-block` — Bloc de prosa des del CMS

**Recomanació: 🟢 Conservar** — Només s'usa a casos d'èxit, que no formen part d'aquesta reorganització. És correcte com està; només es beneficiaria d'una petita unificació dels components PortableText si es creen més blocs d'aquest tipus.

| | |
|---|---|
| **Funció** | Bloc de text llarg (PortableText) sobre un fons de color pla, amb una etiqueta i de vegades un títol, només a les pàgines de cas d'èxit. |
| **Quan té sentit** | Per a text narratiu llarg que ve directament de Sanity i no encaixa en targetes ni llistes curtes. |
| **Construcció** | Codi incrustat dins un component més gran |
| **Contingut que necessita** | - Contingut PortableText des de Sanity |
| **Escriptori** | Amplada de contingut estreta (690-923px) per mantenir la llegibilitat del paragraf llarg. |
| **Mòbil** | Identic, només canvia el padding lateral. |
| **Limitacions observades** | - Tres implementacions gairebé identiques (Contexto, Reto, Solución) amb petites variacions de components PortableText (negreta amb mida diferent, llistes amb pinta només en una de les tres).<br>- El color de fons de cada bloc és fix i diferent (blau-200, taronja-200, gris) sense que hi hagi cap criteri declarat de per que correspon a cada etapa narrativa. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `context` — Contexto - fons blau-200 | `app/casos-de-exito/[slug]/ContextSection.tsx` | /casos-de-exito/[slug] |  |
| `challenge` — Reto - fons taronja-200, amb pregunta com a títol | `app/casos-de-exito/[slug]/CaseStudyChallengeSection.tsx` | /casos-de-exito/[slug] |  |
| `solution` — Solución - fons gris, amb llistes amb pinta | `app/casos-de-exito/[slug]/SolutionSection.tsx` | /casos-de-exito/[slug] |  |

## Crides a l'acció

_Bandes de conversió al final de pàgina o de secció._

### `cta-band` — Banda de crida a l'acció

**Recomanació: 🟡 Adaptar** — Tres de les quatre implementacions haurien de ser CtaSection amb props diferents. És la duplicació més fàcil de resoldre de tot l'inventari i la que més es notarà quan es repliqui a quatre pàgines de servei.

| | |
|---|---|
| **Funció** | Banda de color sencer amb cantonades superiors arrodonides, titular + cos centrats i un boto gran, sempre amb la mateixa estructura però amb quatre implementacions de codi diferents. |
| **Quan té sentit** | Al final de gairebé totes les pàgines, per tancar amb una crida directa a reservar una trucada (o, en un cas, a subscriure's). |
| **Construcció** | Còpies divergents a diversos fitxers |
| **Contingut que necessita** | - Títol<br>- Subtitol<br>- Text i destinació del boto |
| **Escriptori** | Banda de color sencer, 80px de padding vertical, boto centrat. |
| **Mòbil** | Identic, només es redueix el padding lateral. |
| **Limitacions observades** | - Quatre implementacions: una és el component compartit parametritzable (CtaSection), les altres tres són copies amb petites derives (ClosingCtaSection usa clamp() en lloc de l'escala tipogràfica i colors en hex en lloc de tokens; Newsletter i LinkedIn tenen la seva pròpia estructura visual, no només el seu text).<br>- ClosingCtaSection (només a ecosistema) no accepta props: està fixada amb el seu propi text, mentre que CtaSection si que n'accepta.<br>- Newsletter està comentada (desactivada) a la pàgina de sobre mi, però el fitxer es manté complet. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `cta-section` — CtaSection - component compartit amb props | `app/servicios/estrategia-editorial/CtaSection.tsx` | /, /servicios/estrategia-de-ia, /servicios/produccion-editorial-con-ia, /enfoque, /sobre-mi, /casos-de-exito/[slug] |  |
| `closing-ecosistema` — ClosingCtaSection - copia fixada, només a ecosistema | `app/servicios/ecosistema-produccion-editorial/ClosingCtaSection.tsx` | /servicios/ecosistema-produccion-editorial (sense ruta, 301) |  |
| `newsletter` — Newsletter (sobre mi) - variant amb il·lustracions animades, desactivada | `app/sobre-mi/NewsletterSection.tsx` | /sobre-mi | Comentada a page.tsx; no es renderitza a la web pública. · _inactiu_ |
| `linkedin` — LinkedIn (sobre mi) - targeta amb banner i foto, no només boto | `app/sobre-mi/LinkedInSection.tsx` | /sobre-mi |  |

## Estats del sistema

_Càrrega, 404 i error. Sense animació ni formes de marca._

### `sys-state` — Estats del sistema

**Recomanació: 🟢 Conservar** — Són pàgines curtes que compleixen la seva funció. Només caldria afegir un enllaç de navegació mínim (per exemple, a l'inici) a error.tsx per no deixar l'usuari sense sortida.

| | |
|---|---|
| **Funció** | Pàgines curtes i centrades per a càrrega, 404 i error, sense animació GSAP ni formes de marca: només tipografia i un boto o acció de recuperació. |
| **Quan té sentit** | Gestionades automàticament per Next.js (loading.tsx, not-found.tsx, error.tsx); no es trien manualment. |
| **Construcció** | Component compartit |
| **Contingut que necessita** | - Cap contingut extern. |
| **Escriptori** | Centrat vertical i horitzontal amb minHeight: 70vh. |
| **Mòbil** | Identic. |
| **Limitacions observades** | - global-error.tsx no pot fer servir els tokens de app/globals.css (substitueix el layout arrel sencer) i repeteix els colors en hex directe com a única excepció deliberada i justificada del lloc.<br>- Cap dels tres estats fa servir Navbar ni Footer: en sortir d'un error l'usuari no té cap manera de navegar fora del boto de reintentar o tornar a l'inici. |

**Variants:**

| Variant | Fitxer(s) | Pàgines | Nota |
|---|---|---|---|
| `loading` — Càrrega - espiral girant | `app/loading.tsx` | totes les rutes |  |
| `not-found` — 404 - pàgina no trobada | `app/not-found.tsx` | totes les rutes |  |
| `error` — Error de ruta - amb boto de reintentar | `app/error.tsx` | totes les rutes |  |


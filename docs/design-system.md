# Design system

## Tailwind
Tailwind CSS 4, configurat via `@tailwindcss/postcss` (no hi ha `tailwind.config.js` separat — la configuració viu inline via CSS segons la convenció de Tailwind 4). Consulta els fitxers CSS globals abans d'introduir nous tokens de color/espaiat per evitar duplicar-los.

## Animacions
GSAP s'usa per a les animacions d'entrada i scroll de les seccions. Segueix el patró existent a les seccions ja implementades (p. ex. `app/home/*Section.tsx`) abans d'introduir una llibreria o patró nou.

## Convenció de components
- Cada secció d'una pàgina és un component `NomSection.tsx` colocat dins la carpeta de la ruta corresponent (no a `components/`).
- `components/` arrel és només per a elements compartits entre múltiples rutes (Navbar, Footer, MobileMenu, dropdowns).
- Contingut en espanyol (còpia del lloc web); mantenir aquest idioma a menys que s'indiqui el contrari.

## Inventari i galeria de blocs
Abans de crear un bloc nou o decidir-ne la identitat visual, consulta `docs/component-inventory.md` (patrons existents, variants i recomanacions) i `docs/visual-criteria.md` (colors, tipografia, amplades i inconsistències detectades). La galeria visual interna (`npm run dev` → `/dev/gallery`, fora de la navegació pública i de producció) renderitza cada bloc real amb contingut representatiu.

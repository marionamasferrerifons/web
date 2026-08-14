# Design system

## Tailwind
Tailwind CSS 4, configurat via `@tailwindcss/postcss` (no hi ha `tailwind.config.js` separat — la configuració viu inline via CSS segons la convenció de Tailwind 4). Consulta els fitxers CSS globals abans d'introduir nous tokens de color/espaiat per evitar duplicar-los.

## Animacions
GSAP s'usa per a les animacions d'entrada i scroll de les seccions. Segueix el patró existent a les seccions ja implementades (p. ex. `app/home/*Section.tsx`) abans d'introduir una llibreria o patró nou.

## Convenció de components
- Cada secció d'una pàgina és un component `NomSection.tsx` colocat dins la carpeta de la ruta corresponent (no a `components/`).
- `components/` arrel és només per a elements compartits entre múltiples rutes (Navbar, Footer, MobileMenu, dropdowns).
- Contingut en espanyol (còpia del lloc web); mantenir aquest idioma a menys que s'indiqui el contrari.

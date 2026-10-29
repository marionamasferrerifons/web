import type { NavContent } from './types'

// Esborrany traduït amb IA (2026-10-19) — pendent de revisió de la Mariona.
export const navContentCa: NavContent = {
  navAriaLabel: 'Navegació principal',
  logoAlt: 'Mariona Masferrer',
  servicesLabel: 'Serveis',
  servicesItems: [
    { href: '/ca/serveis/estrategia-dia', label: "Estratègia d'IA" },
    { href: '/ca/serveis/produccio-editorial-amb-ia', label: 'Producció editorial amb IA' },
    { href: '/ca/serveis/formacio-en-ia', label: 'Formació en IA' },
  ],
  caseStudiesLabel: "Casos d'èxit",
  aboutLabel: 'Sobre mi',
  ctaLabel: 'Reservar una trucada',
  languageLabel: 'Idioma',
  mobileMenu: {
    openLabel: 'Obrir el menú',
    closeLabel: 'Tancar el menú',
  },
  footer: {
    tagline: 'Intel·ligència artificial per a editorials educatives.',
    servicesHeader: 'Serveis',
    caseStudiesHeader: "Casos d'èxit",
    caseStudiesEmpty: 'Properament',
    navHeader: 'Navegació',
    homeLabel: 'Inici',
    aboutLabel: 'Sobre mi',
    copyright: '© {year} Mariona Masferrer i Fons. Tots els drets reservats.',
    bottomTagline: 'Dissenyat amb criteri editorial + IA.',
  },
}

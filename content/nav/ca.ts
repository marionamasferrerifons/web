import type { NavContent } from './types'

// Primer esborrany traduït amb IA (2026-09-16) — pendent de validació de la clienta.
export const navContentCa: NavContent = {
  navAriaLabel: 'Navegació principal',
  logoAlt: 'Mariona Masferrer',
  servicesLabel: 'Serveis',
  servicesItems: [
    { href: '/ca/serveis/estrategia-editorial', label: "Implementació estratègica d'IA" },
    { href: '/ca/serveis/ecosistema-produccio-editorial', label: 'Sistema de producció editorial amb IA' },
    { href: '/ca/serveis/serveis-editorials', label: 'Serveis editorials amb IA aplicada' },
  ],
  caseStudiesLabel: "Casos d'èxit",
  caseStudiesActivePrefix: '/ca/casos-dexit',
  aboutLabel: 'Sobre mi',
  aboutHref: '/ca/sobre-mi',
  homeHref: '/ca',
  ctaLabel: 'RESERVAR UNA TRUCADA',
  mobileMenu: {
    openLabel: 'Obrir menú',
    closeLabel: 'Tancar menú',
    ctaLabel: 'Reservar una trucada',
  },
  footer: {
    tagline: "Intel·ligència artificial per a editorials educatives.",
    servicesColumnHeader: 'Serveis',
    caseStudiesColumnHeader: "Casos d'èxit",
    caseStudiesEmpty: 'Properament',
    navColumnHeader: 'Navegació',
    homeLabel: 'Inici',
    aboutLabel: 'Sobre mi',
    linkedinLabel: 'LinkedIn ↗',
    copyright: '© {year} Mariona Masferrer i Fons. Tots els drets reservats.',
    bottomTagline: 'Dissenyat amb criteri editorial + IA.',
  },
}

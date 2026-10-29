import type { NavContent } from './types'

export const navContentEs: NavContent = {
  navAriaLabel: 'Navegación principal',
  logoAlt: 'Mariona Masferrer',
  servicesLabel: 'Servicios',
  servicesItems: [
    { href: '/servicios/estrategia-de-ia', label: 'Estrategia de IA' },
    { href: '/servicios/produccion-editorial-con-ia', label: 'Producción editorial con IA' },
    { href: '/servicios/formacion-en-ia', label: 'Formación en IA' },
  ],
  caseStudiesLabel: 'Casos de éxito',
  aboutLabel: 'Sobre mí',
  ctaLabel: 'Reservar una llamada',
  languageLabel: 'Idioma',
  mobileMenu: {
    openLabel: 'Abrir menú',
    closeLabel: 'Cerrar menú',
  },
  footer: {
    tagline: 'Inteligencia artificial para editoriales educativas.',
    servicesHeader: 'Servicios',
    caseStudiesHeader: 'Casos de éxito',
    caseStudiesEmpty: 'Próximamente',
    navHeader: 'Navegación',
    homeLabel: 'Inicio',
    aboutLabel: 'Sobre mí',
    copyright: '© {year} Mariona Masferrer i Fons. Todos los derechos reservados.',
    bottomTagline: 'Diseñado con criterio editorial + IA.',
  },
}

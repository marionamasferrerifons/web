import type { NavContent } from './types'

export const navContentEs: NavContent = {
  navAriaLabel: 'Navegación principal',
  logoAlt: 'Mariona Masferrer',
  servicesLabel: 'Servicios',
  servicesItems: [
    { href: '/servicios/estrategia-editorial', label: 'Implementación estratégica de IA' },
    { href: '/servicios/ecosistema-produccion-editorial', label: 'Sistema de producción editorial con IA' },
    { href: '/servicios/servicios-editoriales', label: 'Servicios editoriales con IA aplicada' },
  ],
  caseStudiesLabel: 'Casos de éxito',
  caseStudiesActivePrefix: '/casos-de-exito',
  aboutLabel: 'Sobre mí',
  aboutHref: '/sobre-mi',
  homeHref: '/',
  ctaLabel: 'RESERVAR UNA LLAMADA',
  mobileMenu: {
    openLabel: 'Abrir menú',
    closeLabel: 'Cerrar menú',
    ctaLabel: 'Reservar una llamada',
  },
  footer: {
    tagline: 'Inteligencia artificial para editoriales educativas.',
    servicesColumnHeader: 'Servicios',
    caseStudiesColumnHeader: 'Casos de éxito',
    caseStudiesEmpty: 'Próximamente',
    navColumnHeader: 'Navegación',
    homeLabel: 'Inicio',
    aboutLabel: 'Sobre mí',
    linkedinLabel: 'LinkedIn ↗',
    copyright: '© {year} Mariona Masferrer i Fons. Todos los derechos reservados.',
    bottomTagline: 'Diseñado con criterio editorial + IA.',
  },
}

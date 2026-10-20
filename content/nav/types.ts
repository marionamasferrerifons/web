import type { NavDropdownItem } from '@/components/NavDropdown'

export type NavContent = {
  navAriaLabel: string
  logoAlt: string
  servicesLabel: string
  servicesItems: NavDropdownItem[]
  caseStudiesLabel: string
  aboutLabel: string
  ctaLabel: string
  languageLabel: string
  mobileMenu: {
    openLabel: string
    closeLabel: string
  }
  footer: {
    tagline: string
    servicesHeader: string
    caseStudiesHeader: string
    caseStudiesEmpty: string
    navHeader: string
    homeLabel: string
    aboutLabel: string
    /** `{year}` es substitueix per l'any en curs. */
    copyright: string
    bottomTagline: string
  }
}

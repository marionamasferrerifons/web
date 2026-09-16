export type NavItem = { href: string; label: string }

export type NavContent = {
  navAriaLabel: string
  logoAlt: string
  servicesLabel: string
  servicesItems: NavItem[]
  caseStudiesLabel: string
  caseStudiesActivePrefix: string
  aboutLabel: string
  aboutHref: string
  homeHref: string
  ctaLabel: string
  mobileMenu: {
    openLabel: string
    closeLabel: string
    ctaLabel: string
  }
  footer: {
    tagline: string
    servicesColumnHeader: string
    caseStudiesColumnHeader: string
    caseStudiesEmpty: string
    navColumnHeader: string
    homeLabel: string
    aboutLabel: string
    linkedinLabel: string
    copyright: string
    bottomTagline: string
  }
}

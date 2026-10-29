// Tots els documents traduïbles tenen un camp `language` (es/ca). Els que no
// el tenen (creats abans de la versió catalana) compten com a castellà, per
// això les queries filtren amb coalesce(language, "es") == $language.

export const CASE_STUDIES_QUERY = `
  *[_type == "caseStudy" && coalesce(language, "es") == $language] | order(_createdAt asc) {
    _id,
    title,
    subtitle,
    client,
    "slug": slug.current,
    imageCard {
      asset-> {
        _id,
        url
      },
      alt
    }
  }
`

// esSlug / caSlug: slug de la mateixa pàgina en l'altre idioma, per a l'hreflang.
export const CASE_STUDY_BY_SLUG_QUERY = `
  *[_type == "caseStudy" && slug.current == $slug && coalesce(language, "es") == $language][0] {
    _id,
    "esSlug": translationOf->slug.current,
    "caSlug": *[_type == "caseStudy" && language == "ca" && translationOf._ref == ^._id][0].slug.current,
    title,
    subtitle,
    year,
    duration,
    client,
    context,
    challengeQuestion,
    challengeText,
    solutionTitle,
    solutionText,
    results[] {
      number,
      label
    },
    processTitle,
    processText,
    processImages[] {
      asset-> {
        _id,
        url
      },
      alt
    },
    beforeItems[] {
      text
    },
    afterItems[] {
      text
    },
    testimonial-> {
      quote,
      authorName,
      authorRole,
      avatar {
        asset-> {
          _id,
          url
        },
        alt
      },
      "logo": logo->logo {
        asset-> {
          _id,
          url
        },
        alt
      }
    },
    imageCard {
      asset-> {
        _id,
        url
      },
      alt
    }
  }
`

export const CASE_STUDY_CARD_BY_SLUG_QUERY = `
  *[_type == "caseStudy" && (slug.current == $slug || translationOf->slug.current == $slug) && coalesce(language, "es") == $language][0] {
    _id,
    title,
    subtitle,
    client,
    "slug": slug.current,
    imageCard {
      asset-> {
        _id,
        url
      },
      alt
    },
    summaryImage {
      asset-> {
        _id,
        url
      },
      alt
    }
  }
`

export const CASE_STUDY_SLUGS_QUERY = `
  *[_type == "caseStudy" && defined(slug.current) && coalesce(language, "es") == $language] {
    "slug": slug.current,
    _updatedAt
  }
`

export const EDITORIAL_PROJECTS_QUERY = `
  *[_type == "editorialProject" && coalesce(language, "es") == $language] | order(order asc) {
    _id,
    title,
    publisher,
    grade,
    role,
    year,
    image {
      asset-> {
        _id,
        url
      },
      alt
    }
  }
`

export const INDUSTRY_LOGOS_QUERY = `
  *[_type == "industryLogo"] | order(order asc) {
    _id,
    name,
    logo {
      asset-> {
        _id,
        url
      },
      alt
    }
  }
`

// Carrusel de la home: tots els testimonis, amb la marca «Mostrar en el
// carrusel de la home». La pàgina mostra els marcats i, si no n'hi ha cap, tots.
export const HOME_TESTIMONIALS_QUERY = `
  *[_type == "testimonial" && coalesce(language, "es") == $language] | order(_createdAt asc) {
    _id,
    showInHome,
    quote,
    authorName,
    authorRole,
    avatar {
      asset-> {
        _id,
        url
      },
      alt
    },
    "logo": logo->logo {
      asset-> {
        _id,
        url
      },
      alt
    }
  }
`

export const TESTIMONIAL_BY_PLACEMENT_QUERY = `
  *[_type == "testimonial" && $placement in placement && coalesce(language, "es") == $language][0] {
    quote,
    authorName,
    authorRole,
    avatar {
      asset-> {
        _id,
        url
      },
      alt
    },
    "logo": logo->logo {
      asset-> {
        _id,
        url
      },
      alt
    }
  }
`

// Parelles de slugs ES ↔ CA dels casos d'èxit traduïts: el selector d'idioma
// les fa servir per saltar a la mateixa pàgina en l'altre idioma.
// Slug català del cas que tradueix el cas castellà $slug (per redirigir-hi).
export const CASE_STUDY_TRANSLATION_SLUG_QUERY = `
  *[_type == "caseStudy" && language == "ca" && translationOf->slug.current == $slug][0].slug.current
`

export const CASE_STUDY_SLUG_PAIRS_QUERY = `
  *[_type == "caseStudy" && language == "ca" && defined(slug.current) && defined(translationOf->slug.current)] {
    "ca": slug.current,
    "es": translationOf->slug.current
  }
`

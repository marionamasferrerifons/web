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

export const CASE_STUDY_BY_SLUG_QUERY = `
  *[_type == "caseStudy" && slug.current == $slug && coalesce(language, "es") == $language][0] {
    _id,
    "translationSlug": translationOf->slug.current,
    "caTranslationSlug": *[_type == "caseStudy" && translationOf._ref == ^._id][0].slug.current,
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

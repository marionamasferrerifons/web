export const CASE_STUDIES_QUERY = `
  *[_type == "caseStudy"] | order(_createdAt asc) {
    _id,
    title,
    subtitle,
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
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
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
      logo {
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

export const EDITORIAL_PROJECTS_QUERY = `
  *[_type == "editorialProject"] | order(order asc) {
    _id,
    title,
    publisher,
    grade,
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

export const TESTIMONIAL_BY_PLACEMENT_QUERY = `
  *[_type == "testimonial" && $placement in placement][0] {
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
    logo {
      asset-> {
        _id,
        url
      },
      alt
    }
  }
`

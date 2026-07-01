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
    imageCard {
      asset-> {
        _id,
        url
      },
      alt
    }
  }
`

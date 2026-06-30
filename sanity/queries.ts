export const CASE_STUDIES_QUERY = `
  *[_type == "caseStudy"] | order(_createdAt asc) {
    _id,
    title,
    subtitle,
    imageCard {
      asset-> {
        _id,
        url
      },
      alt
    }
  }
`

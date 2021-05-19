import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment contactFragment on PrismicContact {
    data {
      name
      street
      city
      email
      telephone
    }
  }
`

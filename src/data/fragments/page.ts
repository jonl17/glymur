import { graphql } from 'gatsby'
import '@src/data/fragments/contact'

export const fragment = graphql`
  fragment pageFragmentFull on PrismicPage {
    data {
      text {
        html
      }
      contact_information {
        document {
          ... on PrismicContact {
            ...contactFragment
          }
        }
      }
    }
  }
`

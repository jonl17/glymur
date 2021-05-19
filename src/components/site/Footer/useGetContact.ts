import { useStaticQuery, graphql } from 'gatsby'
import '@src/data/fragments/seo'

export type ContactInterface = {
  type: string
  url: string
}

export const useGetContact = (): ContactInterface[] => {
  const data = useStaticQuery(graphql`
    {
      prismicSeo {
        ...seoFragment
      }
    }
  `)

  const contact = data.prismicSeo.data.contact.map((item: any) => ({
    type: item.type,
    url: item.link.url,
  }))

  return contact
}

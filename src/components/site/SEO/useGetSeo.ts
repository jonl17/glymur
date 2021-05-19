import { graphql, useStaticQuery } from 'gatsby'
import '@src/data/fragments/seo'

type MetaType = {
  title: string
  description: string
  image: {
    url: string
  }
  favicon: {
    url: string
  }
}

export const useGetSeo = (): MetaType => {
  const data = useStaticQuery(graphql`
    {
      prismicSeo {
        ...seoFragment
      }
    }
  `)

  return {
    ...data.prismicSeo.data,
  }
}

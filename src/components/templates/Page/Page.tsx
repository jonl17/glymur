import React from 'react'
import { graphql } from 'gatsby'
import '@src/data/fragments/page'
import { contactResolver } from '@src/data/resolvers/data'
import Contact from '@cmp/site/Contact'

type Props = {
  data: any
}

const Page = ({ data }: Props) => {
  const contact = contactResolver(
    data.prismicPage.data.contact_information.document
  )

  return (
    <div className='page container py-3 pt-xl-4 fade-in'>
      <div
        dangerouslySetInnerHTML={{
          __html: data.prismicPage.data.text.html,
        }}
        className='mb-4 mt-4 mt-lg-0'
      />
      <Contact {...contact} />
    </div>
  )
}

export default Page

export const query = graphql`
  query($id: String) {
    prismicPage(id: { eq: $id }) {
      ...pageFragmentFull
    }
  }
`

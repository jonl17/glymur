import React from 'react'
import { Helmet } from 'react-helmet'
import { useGetSeo } from './useGetSeo'

const SEO = () => {
  const meta = useGetSeo()

  return (
    <Helmet>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <title>{meta.title}</title>
      <link rel='icon' href={meta.favicon.url} type='image/png' />

      <meta property='description' content={meta.description} />

      <meta property='og:image' content={meta.image.url} />
      <meta property='og:description' content={meta.description} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image.url} />
      <meta name='twitter:card' content='summary_large_image' />
    </Helmet>
  )
}

export default SEO

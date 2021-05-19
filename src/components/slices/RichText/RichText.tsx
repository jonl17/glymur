import React from 'react'

type Props = {
  html: string
}

const RichText = ({ html }: Props) => {
  return (
    <div
      className='rich-text col-lg-8  m-lg-auto p-0'
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default RichText

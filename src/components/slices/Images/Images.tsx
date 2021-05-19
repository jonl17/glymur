import React from 'react'

type Props = {
  images: {
    alt: string
    src: string
  }[]
}

const Images = ({ images }: Props) => {
  return (
    <div className='images'>
      {images.map(image => (
        <img key={image.alt} {...image} />
      ))}
    </div>
  )
}

export default Images

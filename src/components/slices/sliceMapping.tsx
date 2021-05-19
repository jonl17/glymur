import React from 'react'
import { Fade } from 'react-reveal'
import Video from '@cmp/slices/Video'
import RichText from '@cmp/slices/RichText'
import Images from '@cmp/slices/Images'

type SliceProps = {
  slice_type: string
  primary: any
  items: any[]
}

const findProps = (slice: any) => {
  switch (slice.slice_type) {
    case 'video':
      return {
        videoUrl: slice.primary.video_link.url,
      }
    case 'rich_text':
      return {
        html: slice.primary.text.html,
      }
    case 'images':
      return {
        images: slice.items.map((item: any) => ({
          src: item.image.url,
          alt: item.image.alt,
        })),
      }
    default:
      return slice
  }
}

const SliceMapping = ({ slice }: { slice: SliceProps }) => {
  const sliceTypes: { [key: string]: React.ElementType } = {
    video: Video,
    rich_text: RichText,
    images: Images,
  }

  const Cmp = sliceTypes[slice.slice_type]

  const props = findProps(slice)

  if (!Cmp) return null

  return (
    <Fade up distance='10px' duration={350}>
      <div className='slice-gap'>
        <Cmp {...props} />
      </div>
    </Fade>
  )
}

export default SliceMapping

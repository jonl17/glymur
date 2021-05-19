import React from 'react'
import AspectRatioBox from '@cmp/site/AspectRatioBox'
import cn from 'classnames'
import getVideoId from 'get-video-id'

const Video: React.FC<{
  videoUrl: string
  autoplay: boolean
  containerClass?: string
}> = ({ videoUrl, autoplay = true, containerClass }) => {
  const generateUrlFromService = (service: string, id: string) => {
    if (service === 'youtube') {
      return `https://www.youtube.com/embed/${id}?rel=0;&modestbranding=1;&controls=0`
    } else if (service === 'vimeo') {
      return `https://player.vimeo.com/video/${id}`
    } else return ''
  }

  const { id, service } = getVideoId(videoUrl)

  if (!id || !service) return null

  return (
    <div className={cn('container pt-2', containerClass)}>
      <AspectRatioBox ratio='widescreen'>
        <iframe
          src={generateUrlFromService(service, id).concat(
            `${autoplay ? `?autoplay=1` : ``}`
          )}
          allow='autoplay;'
          allowFullScreen
          className='video__iframe'
        ></iframe>
      </AspectRatioBox>
    </div>
  )
}

export default Video

import React from 'react'
import cn from 'classnames'

const AspectRatioBox: React.FC<{
  ratio: 'widescreen' | 'landscape'
  containerClass?: string
}> = ({ children, ratio, containerClass }) => {
  const ratios = {
    widescreen: 'aspect-ratio-box--widescreen',
    landscape: 'aspect-ratio-box--landscape',
  }

  return <div className={cn(ratios[ratio], containerClass)}>{children}</div>
}

export default AspectRatioBox

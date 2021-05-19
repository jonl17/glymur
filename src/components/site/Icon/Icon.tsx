import React from 'react'
import { Facebook, Instagram, Logo, Rocks } from './svg'
import cn from 'classnames'

export type IconType = 'facebook' | 'instagram' | 'logo' | 'rocks'

interface Props {
  type: IconType
  className?: string
}

const Icon = ({ type, className }: Props) => {
  const icons: { [key in IconType]: React.ElementType } = {
    facebook: Facebook,
    instagram: Instagram,
    logo: Logo,
    rocks: Rocks,
  }

  const IconSvg = icons[type]

  return <IconSvg className={cn('icon', className)} />
}

export default Icon

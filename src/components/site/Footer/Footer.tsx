import React from 'react'
import { useGetContact } from './useGetContact'
import Icon from '@cmp/site/Icon'
import { useGetSeo } from '../SEO/useGetSeo'

const iconTypes: { [key: string]: JSX.Element } = {
  facebook: <Icon type='facebook' />,
  instagram: <Icon type='instagram' />,
}

const Footer = () => {
  const meta = useGetSeo()
  const contact = useGetContact()
  return (
    <div className='footer container d-flex flex-column justify-content-center align-items-end'>
      <p>{`© ${meta.title} ${new Date().getFullYear()}`}</p>
      <div className='d-flex align-items-center'>
        {contact.map(item => (
          <a key={item.url} className='pl-3' href={item.url} target='_blank'>
            {iconTypes[item.type]}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Footer

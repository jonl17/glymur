import React from 'react'
import { ContactInformationInterface } from '@src/data/resolvers/data'
import SocialMediaLinks from '@cmp/site/SocialMediaLinks'

const Contact = ({
  city,
  email,
  telephone,
  street,
  name,
}: ContactInformationInterface) => {
  return (
    <div className='contact pt-3 d-inline-block'>
      <p className='contact--thick'>{name}</p>
      <div>
        <p className='mb-0'>{street}</p>
        <p>{city}</p>
      </div>
      <div className='mb-3'>
        <a
          target='_blank'
          href={`mailto:${email}`}
          className='contact--thick mb-0'
        >
          {email}
        </a>
        <p>{telephone}</p>
      </div>
      <SocialMediaLinks />
    </div>
  )
}

export default Contact

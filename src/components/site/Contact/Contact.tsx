import React from 'react'
import { ContactInformationInterface } from '@src/data/resolvers/data'

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
      <div>
        <a
          target='_blank'
          href={`mailto:${email}`}
          className='contact--thick mb-0'
        >
          {email}
        </a>
        <p>{telephone}</p>
      </div>
    </div>
  )
}

export default Contact

import React from 'react'
import SEO from '@cmp/site/SEO'
import Icon from '@cmp/site/Icon'
import { Fade } from 'react-reveal'

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <main>
        <div className='pl-lg-5 pt-4 text-center text-lg-left'>
          <Icon type='logo' />
        </div>
        {children}
        <div className='rocks'>
          <Icon type='rocks' />
        </div>
      </main>
    </>
  )
}

export default MainLayout

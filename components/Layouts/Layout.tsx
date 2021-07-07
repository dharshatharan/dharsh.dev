import React, { ReactElement } from 'react'
import NavBar from '../Navigation/NavBar'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

interface Props {
  headerContent?: ReactElement
  children: React.ReactNode
}

export default function Layout({ headerContent, children }: Props) {
  return (
    <div className='m-0'>
      <NavBar/>
      {headerContent}
      {/* {headerContent ? 
        <Header content={headerContent}/>
        : <Header />
      } */}
      <Body>{children}</Body>
      <Footer/>
    </div>
  )
}
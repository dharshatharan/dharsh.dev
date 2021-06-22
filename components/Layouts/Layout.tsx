import Head from 'next/head'
import React, { ReactElement } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'
interface Props {
  headerContent?: ReactElement
  children: React.ReactNode
}

export default function Layout({ headerContent, children }: Props) {
  return (
    <div className='h-screen m-0 font-main bg-off-white'>
      {headerContent ? 
        <Header content={headerContent}/>
        : <Header />
      }
      <Body>{children}</Body>
      <Footer/>
    </div>
  )
}
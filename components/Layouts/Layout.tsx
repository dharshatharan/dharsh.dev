import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

export const siteTitle = 'Hey! I\'m Dharsh'

interface Props {
  headerContent?: ReactElement
  children: React.ReactNode
}

export default function Layout({ headerContent, children }: Props) {
  return (
    <div className='h-screen m-0 font-main bg-off-white'>
      <Head>
        <link rel="icon" href="/icons/favicon.png" />
        <meta
          name="description"
          content="I share things that I consider \'cool\' on here"
        />
        <meta
          property="og:image"
          content="/images/open-graph-image.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content={siteTitle} />
        <meta name="twitter:site" content="@dharshatharan" />
        <meta name="twitter:creator" content="@dharshatharan" />
      </Head>
      {headerContent ? 
        <Header content={headerContent}/>
        : <Header />
      }
      <Body>{children}</Body>
      <Footer/>
    </div>
  )
}
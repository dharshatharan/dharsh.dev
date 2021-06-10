import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { ReactElement } from 'react'
import Body from './Body'
import Footer from './Footer'
import Header from './Header'

const name = 'Hey! I\'m Dharsh'
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
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header content={headerContent}/>
      <Body>{children}</Body>
      <Footer/>
    </div>
  )
}
import Link from 'next/link'
import React, { ReactElement } from 'react'
import Image from 'next/image'

interface Props {
  
}

export default function Footer({}: Props): ReactElement {
  return (
    <div className='bg-off-white w-full flex justify-center py-10'>
      <div className='w-full max-w-7xl flex justify-center'>
        <FooterIcon link='' icon='/icons/lisn.png' />
        <FooterIcon link='' icon='/icons/scesoc.png' />
        <FooterIcon link='' icon='/icons/github.png' />
        <FooterIcon link='' icon='/icons/linkedin.png' />
        <FooterIcon link='' icon='/icons/instagram.png' />
        <FooterIcon link='' icon='/icons/twitter.png' />
      </div>
    </div>
  )
}

interface footerIconProps {
  link: string,
  icon: string
}

const FooterIcon = ({link, icon}: footerIconProps) => (
  <Link href={link}>
    <div className='h-12 w-12 md:h-14 md:w-14 relative px-14'>
      <Image src={icon} layout='fill' objectFit='contain'/>
    </div>
  </Link>
)

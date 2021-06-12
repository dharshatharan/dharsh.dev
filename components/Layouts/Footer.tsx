import Link from 'next/link'
import React, { ReactElement } from 'react'
import Image from 'next/image'

interface Props {
  
}

export default function Footer({}: Props): ReactElement {
  return (
    <div>
      <div className='bg-off-white w-full flex justify-center py-10'>
        <div className='w-full max-w-7xl flex justify-center'>
          <FooterIcon link='' icon='/icons/lisn.svg' />
          <FooterIcon link='' icon='/icons/scesoc.svg' />
          <FooterIcon link='' icon='/icons/github.svg' />
          <FooterIcon link='' icon='/icons/linkedin.svg' />
          <FooterIcon link='' icon='/icons/instagram.svg' />
          <FooterIcon link='' icon='/icons/twitter.svg' />
        </div>
      </div>
      <div className='bg-dark-grey w-full flex justify-end p-5 text-off-white font-extralight'>
        This website might look simple, but it involved a lot of overthinking
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
    <div className='h-12 w-12 md:h-14 md:w-14 relative px-7 md:px-14'>
      <Image src={icon} layout='fill' objectFit='contain'/>
    </div>
  </Link>
)

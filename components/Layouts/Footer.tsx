import Link from 'next/link'
import React, { ReactElement } from 'react'
import Image from 'next/image'

interface Props {
  
}

export default function Footer({}: Props): ReactElement {
  return (
    <div>
      <div className='bg-off-white w-full flex justify-center py-10'>
        <div id='socials' className='w-full max-w-7xl flex justify-center'>
          <FooterIcon link='https://www.lisnclips.app/' icon='/icons/lisn.svg' />
          <FooterIcon link='https://www.scesoc.ca/' icon='/icons/scesoc.svg' />
          <FooterIcon link='https://github.com/dharshatharan' icon='/icons/github.svg' />
          <FooterIcon link='https://www.linkedin.com/in/dharshatharan/' icon='/icons/linkedin.svg' />
          <FooterIcon link='https://www.instagram.com/dharshatharan/' icon='/icons/instagram.svg' />
          <FooterIcon link='https://twitter.com/dharshatharan' icon='/icons/twitter.svg' />
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
  <a href={link} target='_blank' className='h-12 w-12 md:h-14 md:w-14 relative mx-2 md:mx-7'>
    <Image src={icon} layout='fill' objectFit='contain'/>
  </a>
)

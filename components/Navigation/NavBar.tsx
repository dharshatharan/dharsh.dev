import React, { ReactElement } from 'react'
import Image from 'next/image'
import NavBarItem from './NavBarItem'
//@ts-ignore
import OwnImage from '../Image/Image'

interface Props {
  
}

export default function NavBar({}: Props): ReactElement {
  return (
    <div className='flex-shrink-1 flex-grow-0'>
      <header className='flex justify-center w-full'>
        <div className='flex flex-1 justify-between items-center flex-row max-w-screen-xl'>
          <a href='/' className='p-5 w-36 md:w-72'>
            <OwnImage 
              src='/icons/logo.svg'
              layout='fill'
            />
          </a>
          <div className='flex flex-row pr-5 md:bottom-5'>
            <NavBarItem label='About' link='/'/>
            <NavBarItem label='Blog' link='/#blog'/>
            <NavBarItem label='Socials' link='/#socials'/>
          </div>
        </div>
      </header>
    </div>
  )
}


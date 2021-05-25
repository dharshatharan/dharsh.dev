import React, { ReactElement } from 'react'
import Image from 'next/image'
import NavBarItem from './NavBarItem'

interface Props {
  
}

export default function NavBar({}: Props): ReactElement {
  return (
    <>
      <header className='flex justify-center w-full'>
        <div className='flex flex-1 justify-between items-center flex-row max-w-screen-lg'>
          <div>
            <Image 
              src='/icons/logo.png'
              width='300'
              height='195'
            />
          </div>
          <div className='p-10 flex flex-row'>
            <NavBarItem label='About' link=''/>
            <NavBarItem label='Blog' link=''/>
            <NavBarItem label='Socials' link=''/>
          </div>
        </div>
      </header>
    </>
  )
}


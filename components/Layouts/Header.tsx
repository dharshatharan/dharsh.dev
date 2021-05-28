import React, { ReactElement } from 'react'
import Image from 'next/image'
import NavBar from '../Navigation/NavBar'
// @ts-ignore
import OwnImage from '../../components/Image/Image'

interface Props {
  
}

export default function Header({}: Props): ReactElement {
  return (
    <div className='flex flex-col h-screen m-0 bg-off-white text-dark-grey'>
      <NavBar/>
      <section className='w-full flex flex-col flex-grow justify-between'>
        <div className='w-full flex flex-1 justify-center relative bottom-10'>
          <div className='flex flex-1 flex-col md:flex-row-reverse items-center md:justify-between max-w-7xl'>
            <div className='max-w-xs md:max-w-xl p-5'>
              <OwnImage src='/images/profile.png' layout='fill'/>
            </div>
            <div className='max-w-xl p-5 pt-2 pb-2 md:p-5'>
              <div className='text-3xl md:text-5xl font-semibold mt-2 mb-2 md:mt-5 md:mb-5 flex flex-row items-center'>
                Hi, I'm{' '}
                <div className='bg-pale-yellow pt-2 pr-1 pl-1 m-1 md:pt-3 md:pr-2 md:pl-2 md:m-2 rounded-lg shadow-xl relative bottom-1'>
                  dharsh_
                </div>
              </div>
              <p className='text-md md:text-xl font-light md:mt-5 md:mb-10'>
                I’m a 21 year old Software Engineering student at Carleton University 
                that enjoys being a part of the startup life.
              </p>
              <p className='text-md md:text-xl font-light mt-5 mb-5'>
                On this site I will be sharing thoughts and tools that I think are <b className='font-bold'>‘cool’ </b> 
                with the goal of potentially helping and inspiring people on a similar path.
              </p>
            </div>
          </div>
        </div>
        <OwnImage src='/images/funky-divider.svg' layout='fill'/>
      </section>
    </div>
  )
}

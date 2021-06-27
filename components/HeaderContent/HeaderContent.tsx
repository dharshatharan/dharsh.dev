import React, { ReactElement } from 'react'
import Image from 'next/image'
import SolidText from '../../components/Text/SolidText'

interface Props {
  
}

export default function HeaderContent({}: Props): ReactElement {
  return (
    <section className='w-full flex flex-col flex-grow justify-between' style={{height: '92vh'}}>
        <div className='w-full flex flex-1 justify-center'>
          <div className='flex flex-1 flex-col md:flex-row-reverse justify-around portrait:flex-col portrait:justify-around items-center md:justify-between max-w-7xl'>
            <div className='max-w-xs md:max-w-xl w-full h-3/4 relative m-5 md:bottom-16 potrait:bottom-5'>
              <Image src='/images/profile.png' layout='fill' objectFit='contain' />
            </div>
            <div className='max-w-xl p-5 pt-2 pb-2 md:p-5 relative bottom-5 md:bottom-16 potrait:bottom-5 text-smooth-black dark:text-off-white'>
              <div className='text-3xl md:text-5xl font-semibold mt-2 mb-2 md:mt-5 md:mb-5 flex flex-row items-center'>
                Hi, I'm{' '}
                <SolidText>dharsh_</SolidText>
              </div>
              <p className='text-md md:text-xl font-light mt-2 mb-2 md:mt-5 md:mb-5'>
                I’m a <b> 21 year old Software Engineering student at Carleton University </b>
                that enjoys being a part of the startup life.
              </p>
              <p className='text-md md:text-xl font-light mt-2 mb-2 md:mt-5 md:mb-5'>
                One of the best ways to learn is to think aloud, and that what I’m going to try to do with this website. 
              </p>
              <p className='text-md md:text-xl font-light mt-2 mb-2 md:mt-5 md:mb-5'>
                On this site I will be sharing thoughts, tool and content that I think are <b>‘cool’ </b> 
                with the goal of <b> potentially helping and inspiring people on a similar path. </b>
              </p>
              <p className='text-md md:text-xl font-light mt-2 mb-2 md:mt-5 md:mb-5'>
                Some categories that interest me are <b> tech, productivity, photography and fpv drones. </b>
              </p>
              <p className='text-md md:text-xl font-light mt-2 mb-2 md:mt-5 md:mb-5'>
              <b>Disclaimer: </b> I’m an amature in all these topics, but aren’t we all?
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

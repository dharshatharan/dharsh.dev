import React, { ReactElement } from 'react'
// @ts-ignore
import OwnImage from '../../components/Image/Image'
import SolidText from '../../components/Text/SolidText'

interface Props {
  
}

export default function HeaderContent({}: Props): ReactElement {
  return (
    <section className='w-full flex flex-col flex-grow justify-between'>
        <div className='w-full flex flex-1 justify-center relative bottom-5 md:bottom-20'>
          <div className='flex flex-1 flex-col md:flex-row-reverse portrait:flex-col portrait:justify-around items-center md:justify-between max-w-7xl'>
            <div className='max-w-xs md:max-w-xl p-5'>
              <OwnImage src='/images/profile.png' layout='fill'/>
            </div>
            <div className='max-w-xl p-5 pt-2 pb-2 md:p-5'>
              <div className='text-3xl md:text-5xl font-semibold mt-2 mb-2 md:mt-5 md:mb-5 flex flex-row items-center'>
                Hi, I'm{' '}
                <SolidText>dharsh_</SolidText>
              </div>
              <p className='text-md md:text-xl font-normal mt-2 mb-2 md:mt-5 md:mb-5'>
                I’m a <b className='font-semibold'> 21 year old Software Engineering student at Carleton University </b>
                that enjoys being a part of the startup life.
              </p>
              <p className='text-md md:text-xl font-normal mt-2 mb-2 md:mt-5 md:mb-5'>
                One of the best ways to learn is to think aloud, and that what I’m going to try to do with this website. 
              </p>
              <p className='text-md md:text-xl font-normal mt-2 mb-2 md:mt-5 md:mb-5'>
                On this site I will be sharing thoughts and tools that I think are <b className='font-semibold'>‘cool’ </b> 
                with the goal of <b className='font-semibold'> potentially helping and inspiring people on a similar path. </b>
              </p>
              <p className='text-md md:text-xl font-normal mt-2 mb-2 md:mt-5 md:mb-5'>
                Some categories that interest me are <b className='font-semibold'> tech, productivity, photography and fpv drones. </b>
              </p>
              <p className='text-md md:text-xl font-normal mt-2 mb-2 md:mt-5 md:mb-5'>
              <b className='font-semibold'>Disclaimer: </b> I’m an amature in all these topics, but aren’t we all?
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

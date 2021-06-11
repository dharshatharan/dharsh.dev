import Link from 'next/link'
import React, { ReactElement } from 'react'
import Date from '../../components/Date/Date'
// @ts-ignore
import OwnImage from '../../components/Image/Image'
import Image from 'next/image'

interface Props {
  id: string,
  date: string,
  title: string,
  image: string
}

export default function BlogItem(props: Props): ReactElement {
  return (
    <Link href={`/posts/${props.id}`}>
      <div className='group h-80 w-80 md:h-96 md:w-96 relative rounded-xl md:rounded-2xl'>
        <div className='h-80 w-80 md:h-96 md:w-96 absolute z-0 rounded-xl md:rounded-2xl group-hover:opacity-20 transition duration-500 ease-in-out transform'>
          <Image src={props.image} layout='fill' objectFit='cover' className='rounded-xl md:rounded-2xl'/>
        </div>
        <div className='relative z-10 h-full bg-black bg-opacity-40 rounded-xl md:rounded-2xl p-5 flex flex-col justify-between group-hover:bg-transparent transition duration-500 ease-in-out transform'>
          <h2 className='text-3xl text-off-white font-semibold group-hover:text-dark-grey transition duration-500 ease-in-out transform'>{props.title}</h2>
          <div className='text-off-white text-lg group-hover:text-dark-grey transition duration-500 ease-in-out transform'>
            <Date dateString={props.date} />
          </div>
        </div>
      </div>
    </Link>
  )
}

import Link from 'next/link'
import React, { ReactElement } from 'react'

interface Props {
  label: string,
  link: string
}

export default function NavBarItem({label, link}: Props): ReactElement {
  return (
    <Link href={link}>
      <a className='text-md md:text-2xl font-normal p-2 md:p-5 hover:border-medium-grey border-b-4 border-transparent transition duration-500 transform'>
        {label}
      </a>
    </Link>
  )
}

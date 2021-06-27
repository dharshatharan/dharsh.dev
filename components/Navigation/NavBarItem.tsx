import Link from 'next/link'
import React, { ReactElement } from 'react'

interface Props {
  label: string,
  link: string
}

export default function NavBarItem({label, link}: Props): ReactElement {
  return (
    <Link href={link}>
      <a className='p-2 md:px-5 hover:border-medium-grey border-b-4 border-transparent transition duration-500 transform bg-transparent'>
        <span className="text-smooth-black dark:text-off-white text-md md:text-lg font-semibold">{label}</span>
      </a>
    </Link>
  )
}

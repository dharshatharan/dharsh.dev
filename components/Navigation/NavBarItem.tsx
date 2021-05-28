import Link from 'next/link'
import React, { ReactElement } from 'react'

interface Props {
  label: string,
  link: string
}

export default function NavBarItem({label, link}: Props): ReactElement {
  return (
    <div className='text-md md:text-2xl font-normal p-2 md:p-5'>
      <Link href={link}>{label}</Link>
    </div>
  )
}

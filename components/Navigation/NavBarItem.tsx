import React, { ReactElement } from 'react'

interface Props {
  label: string,
  link: string
}

export default function NavBarItem({label, link}: Props): ReactElement {
  return (
    <div className='text-xl p-5'>
      <a href={link}>{label}</a>
    </div>
  )
}

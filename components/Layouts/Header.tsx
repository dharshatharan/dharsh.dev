import React, { ReactElement } from 'react'
import Image from 'next/image'
import NavBar from '../Navigation/NavBar'
// @ts-ignore
import OwnImage from '../../components/Image/Image'

interface Props {
  content?: ReactElement
}

export default function Header({content}: Props): ReactElement {
  return (
    <div className={`flex flex-col m-0 text-dark-grey ${content ? 'h-screen' : ''}`}>
      <NavBar/>
      {content}
    </div>
  )
}

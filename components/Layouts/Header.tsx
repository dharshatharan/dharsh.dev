import React, { ReactElement } from 'react'
import NavBar from '../Navigation/NavBar'

interface Props {
  
}

export default function Header({}: Props): ReactElement {
  return (
    <div>
      <NavBar/>
    </div>
  )
}

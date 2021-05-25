import React, { ReactElement } from 'react'

interface Props {
  children: React.ReactNode
}

export default function Body({ children }: Props): ReactElement {
  return (
    <main>{children}</main>
  )
}

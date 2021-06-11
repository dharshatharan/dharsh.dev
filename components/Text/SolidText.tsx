import React, { ReactElement } from 'react'

interface Props {
  children: string
}

export default function SolidText({ children }: Props): ReactElement {
  return (
    <div className='bg-medium-grey pt-2 pr-1 pl-1 m-1 md:pt-3 md:pr-2 md:pl-2 md:m-2 rounded-lg relative bottom-1'>
      <div className='text-off-white'>{children}</div>
    </div>
  )
}

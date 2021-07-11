import { ReactElement, ReactNode } from 'react'
import NavBar from '../Navigation/NavBar'
import Body from './Body'
import Footer from './Footer'
interface Props {
  headerContent?: ReactElement
  children: ReactNode
}

export default function Layout ({ headerContent, children }: Props) {
  return (
    <div className='m-0'>
      <NavBar/>
      {headerContent}
      <Body>{children}</Body>
      <Footer/>
    </div>
  )
}

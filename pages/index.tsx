import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/Layouts/Layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/Date/Date'
import { GetStaticProps } from 'next'
// @ts-ignore
import OwnImage from '../components/Image/Image'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section className='w-full flex flex-col flex-grow flex-shrink'>
        <div className='w-full flex justify-center'>
          <div className='flex flex-1 flex-row-reverse justify-between max-w-4xl'>
            <div>
              <Image height='150' width='160' src='/images/profile.png' />
            </div>
            <div className='max-w-lg'>
              <div className='text-4xl'>
                Hi, I'm Dharsh
              </div>
              <p>
                I’m a 21 year old Software Engineering student at Carleton University 
                that enjoys being a part of the startup life.
              </p>
              <p>
                On this site I will be sharing thoughts and tools that I think are <b>‘cool’</b> 
                with the goal of potentially helping and inspiring people on a similar path.
              </p>
            </div>
          </div>
        </div>
        <OwnImage src='/images/funky-divider.svg' layout='fill'/>
      </section> */}
      <section className='w-full -mt-1'>
        {/* <div className='w-full bg-yellow-200'> */}
        {/* </div> */}
        {/* <Image src='/images/funky-divider.svg' height='300' width='1800' className=''/> */}
        {/* <div className='scale-110 h-60 absolute bg-yellow-200'>
          <Image src='/images/funky-divider.svg' layout='fill' objectFit='contain' className=''/>
        </div> */}
        <div className='w-full bg-teal-grey flex flex-1 justify-center z-10'>
          <div className='max-w-4xl flex flex-1'>
            <div id='blog' className='flex flex-col'>
              <h2 className=''>Blog</h2>
              <ul className=''>
                {allPostsData.map(({ id, date, title }) => (
                  <li className='' key={id}>
                    <Link href={`/posts/${id}`}>
                      <a>{title}</a>
                    </Link>
                    <br />
                    <small className=''>
                      <Date dateString={date} />
                    </small>
                  </li>
                ))}
              </ul>
              <div className='h-96'>
                test
              </div>
              <div className='h-96'>
                test
              </div>
              <div className='h-96'>
                test
              </div>
              <div className='h-96'>
                test
              </div>
              <div className='h-96'>
                test
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
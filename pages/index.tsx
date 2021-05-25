import Head from 'next/head'
import Image from 'next/image'
import Layout, { siteTitle } from '../components/Layouts/Layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/Date/Date'
import { GetStaticProps } from 'next'

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
      <section className='w-full flex justify-center'>
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
      </section>
      <div className='w-full max-h-1'>
      <Image src='/images/funky-divider.png' layout='fill' objectFit='contain' className='reletive z-0'/>
      </div>
      <section className='w-full bg-yellow-200 relative z-10'>
        <div className='mt-60 flex flex-grow justify-center max-w-5xl'>
          <div className='flex flex-col'>
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
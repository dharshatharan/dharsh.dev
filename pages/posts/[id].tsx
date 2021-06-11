import Layout from '../../components/Layouts/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Date from '../../components/Date/Date'
import { GetStaticProps, GetStaticPaths, GetStaticPathsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { PostData } from '../../types/posts'
import React, { CSSProperties } from 'react'

const contentStyle:CSSProperties = {
  listStyleType: 'disc',
}

export default function Post({ post }: Props) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className='w-full flex bg-off-white justify-center'>
        <div className='md:max-w-3xl mx-5 md:mx-10 mb-10 md:mb-20'>
          <article className='text-md md:text-xl'>
            <h1 className='text-dark-grey my-10'>{post.title}</h1>
            <div className='text-teal-grey my-10 mb-5'>
              <Date dateString={post.date} />
            </div>
            <div className='w-full h-96 relative mb-10'>
              <Image src={post.image} layout='fill' objectFit='cover' />
            </div> 
            <div className={`text-dark-grey my-10 leading-relaxed`} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          </article>
          <div className='text-teal-grey hover:underline text-md md:text-xl'>
            <Link href="/#blog">
              <a>← Read More</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const postData = await getPostData(params!.id as string)
  return {
    props: {
      post: postData
    }
  }
}

type Props = {
  post: PostData
}

interface Params extends ParsedUrlQuery {
  id: string,
}

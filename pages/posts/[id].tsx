import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths, GetStaticPathsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { PostData } from '../../types/posts'

export default function Post({ post }: Props) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{post.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={post.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
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

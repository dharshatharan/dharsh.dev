import Link from "next/link";
import { ReactElement } from "react";
import Date from "@components/Formatters/Date";
import Image from "next/image";
import { PostData } from "@localTypes/posts";

interface Props {
  blogId: string;
  blogData: PostData;
}

export default function BlogItem({ blogData }: Props): ReactElement {
  return (
    <Link href={`/blog/${blogData.id}`} passHref>
      <a>
        <div className="group h-80 w-80 md:h-96 md:w-96 relative rounded-xl md:rounded-2xl">
          <div className="h-80 w-80 md:h-96 md:w-96 absolute z-0 rounded-xl md:rounded-2xl group-hover:opacity-20">
            <Image
              src={blogData.image}
              alt={blogData.title}
              layout="fill"
              objectFit="cover"
              className="rounded-xl md:rounded-2xl"
            />
          </div>
          <div className="relative z-10 h-full bg-black bg-opacity-60 rounded-xl md:rounded-2xl p-5 flex flex-col justify-between group-hover:bg-transparent">
            <h2 className="text-3xl text-off-white group-hover:text-dark-grey dark:group-hover:text-off-white m-0">
              {blogData.title}
            </h2>
            <div className="text-off-white text-lg group-hover:text-dark-grey dark:group-hover:text-off-white">
              <Date dateString={blogData.date} />
              &nbsp;&bull;&nbsp;{blogData.readTime.text}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

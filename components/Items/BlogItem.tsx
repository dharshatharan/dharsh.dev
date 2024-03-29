import Link from "next/link";
import { ReactElement } from "react";
import Date from "@components/Formatters/Date";
import Image from "next/image";
import { BlogData } from "@localTypes/blog";

interface Props {
  blogId: string;
  blogData: BlogData;
}

export default function BlogItem({ blogData }: Props): ReactElement {
  return (
    <Link href={`/blog/${blogData.id}`} passHref>
      <div className="space-y-5 mb-5 group">
        <div className="flex justify-center items-center">
          <div className="relative aspect-h-4 aspect-w-3 focus-ring w-full rounded-lg object-cover object-center transition duration-300">
            <Image
              src={blogData.image}
              alt={blogData.title}
              layout="fill"
              className="relative rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="text-gray-500 text-xl font-bold">
          <Date dateString={blogData.published} />
          &nbsp;&bull;&nbsp;{blogData.readTime.text}
        </div>
        <h2 className="text-3xl font-bold">{blogData.title}</h2>
      </div>
    </Link>
  );
}

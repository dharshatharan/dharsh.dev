import Link from "next/link";
import { ReactElement } from "react";
import Date from "@components/Formatters/Date";
import Image from "next/image";
import { PostData } from "@localTypes/posts";
import { motion } from "framer-motion";

interface Props {
  blogId: string;
  blogData: PostData;
}

export default function BlogItem({ blogData }: Props): ReactElement {
  return (
    <Link href={`/blog/${blogData.id}`} passHref>
      <a>
        <motion.div
          whileHover={{ scale: 1.025 }}
          whileTap={{ scale: 1 }}
          className="text-off-white bg-black square relative rounded-xl md:rounded-2xl shadow-md hover:shadow-lg"
        >
          <Image
            src={blogData.image}
            alt={blogData.title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl md:rounded-2xl"
          />
          <div className="relative z-10 h-full bg-black bg-opacity-50 rounded-xl md:rounded-2xl p-5 flex flex-col justify-between">
            <h2 className="text-3xl text-off-white font-bold">
              {blogData.title}
            </h2>
            <div className="text-off-white text-lg group-hover:text-dark-grey dark:group-hover:text-off-white">
              <Date dateString={blogData.date} />
              &nbsp;&bull;&nbsp;{blogData.readTime.text}
            </div>
          </div>
        </motion.div>
      </a>
    </Link>
  );
}

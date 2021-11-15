import { ReactElement } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@localTypes/project";
import { SmartLink } from "@components/SmartLink";

interface Props {
  imageLeft?: boolean;
  project: Project;
}

export default function ProjectItem({
  imageLeft = true,
  project,
}: Props): ReactElement {
  return (
    <SmartLink href={project.url}>
      <div
        className={`rounded-xl md:rounded-2xl shadow-md hover:shadow-lg w-full p-5 md:gap-10 flex flex-col bg-gradient-to-b
					${
            imageLeft
              ? "md:flex-row md:bg-gradient-to-r"
              : "md:flex-row-reverse md:bg-gradient-to-l"
          } from-yellow-400 via-red-500 to-pink-500`}
      >
        <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 1 }}>
          <Image
            src={project.image}
            alt={project.name}
            width={300}
            height={300}
            objectFit="cover"
            className="rounded-xl md:rounded-2xl shadow-md hover:shadow-lg"
          />
        </motion.div>
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold py-3">{project.name}</h2>
          <p className="text-xl">{project.description}</p>
        </div>
      </div>
    </SmartLink>
  );
}

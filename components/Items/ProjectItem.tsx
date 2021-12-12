import { ReactElement } from "react";
import { Project } from "@localTypes/project";
import { SmartLink } from "@components/SmartLink";

interface Props {
  imageLeft?: boolean;
  project: Project;
}

export default function ProjectItem({ project }: Props): ReactElement {
  return (
    <SmartLink href={project.url}>
      <div className="focus-ring p-10 h-[35rem] rounded-lg bg-[#ececec] dark:bg-[#202020]">
        <div className="h-full flex flex-col justify-between">
          <div>
            <div className="text-8xl md:text-9xl mb-16">{project.emoji}</div>
            <h2 className="text-2xl md:text-4xl font-bold py-3 mb-3">
              {project.name}
            </h2>
            <p className="text-lg md:text-xl font-semibold text-gray-500 line-clamp-6">
              {project.description}
            </p>
          </div>
          <div className="hover:underline">Read more → </div>
        </div>
      </div>
    </SmartLink>
  );
}

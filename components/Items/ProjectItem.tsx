import { ReactElement } from "react";
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
        className={`focus-ring p-10 h-[35rem] rounded-lg bg-[#ececec] dark:bg-[#202020]`}
      >
        <div className="h-full">
          <div className="text-9xl">😂</div>
          <div className="h-full flex flex-col justify-around">
            <div className="">
              <h2 className="text-4xl font-extrabold py-3">{project.name}</h2>
              <p className="text-xl">{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </SmartLink>
  );
}

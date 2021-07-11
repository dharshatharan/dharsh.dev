import { ReactElement } from "react";
import NavBar from "@components/Navigation/NavBar";

interface Props {
  content?: ReactElement;
}

export default function Header({ content }: Props): ReactElement {
  return (
    <div
      className={`flex flex-col m-0 text-black ${
        content ? "min-h-screen" : ""
      }`}
    >
      <NavBar />
      {content}
    </div>
  );
}

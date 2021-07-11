import { ReactElement } from "react";

interface Props {
  children: string;
}

export default function SolidText({ children }: Props): ReactElement {
  return (
    <div className="bg-dark-yellow px-1 my-1 mx-2 md:p-2 md:m-2 rounded-lg">
      <div className="text-off-white dark:text-smooth-black">{children}</div>
    </div>
  );
}

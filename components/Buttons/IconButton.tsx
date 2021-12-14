import { ReactElement } from "react";

interface Props {
  icon: ReactElement;
  [x: string]: any;
}

export const IconButton = ({ icon, ...others }: Props) => {
  return (
    <button
      className="flex justify-center bg-transparent hover:bg-gray-200 dark:hover:bg-[#1f1f1f] h-10 w-10 p-2 rounded-md border-0"
      {...others}
    >
      {icon}
    </button>
  );
};

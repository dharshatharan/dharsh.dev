import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Body({ children }: Props): ReactElement {
  return (
    <main className="flex-grow">
      <div className="w-full flex flex-1 justify-center py-10 px-5">
        <div className="max-w-7xl">{children}</div>
      </div>
    </main>
  );
}

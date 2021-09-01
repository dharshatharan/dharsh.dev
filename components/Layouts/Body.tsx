import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Body({ children }: Props): ReactElement {
  return (
    <main className="w-full flex-grow flex self-center px-5 max-w-7xl">
      {children}
    </main>
  );
}

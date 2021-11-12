import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Body({ children }: Props): ReactElement {
  return (
    <main className="w-full min-h-screen flex self-center px-5 max-w-4xl">
      {children}
    </main>
  );
}

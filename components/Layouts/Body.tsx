import { ReactElement, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Body({ children }: Props): ReactElement {
  return <main>{children}</main>;
}

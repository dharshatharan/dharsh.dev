import { ReactElement, ReactNode } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
interface Props {
  headerContent?: ReactElement;
  children: ReactNode;
}

export default function PageLayout({ headerContent, children }: Props) {
  return (
    <main className="w-full flex justify-center max-h-screen overflow-y-auto">
      <div className="px-5 max-w-4xl">{children}</div>
    </main>
  );
}

export function SiteLayout({ children }: Props) {
  return (
    <div className="relative flex w-full h-full min-h-screen">
      <Sidebar />
      <div className="flex flex-1">{children}</div>
    </div>
  );
}

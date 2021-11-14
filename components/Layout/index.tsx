import ThemeToggle from "@components/Toggle/ThemeToggle";
import { ReactElement, ReactNode, useContext, useState } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import MenuIcon from "@components/icons/Menu";
import { IconButton } from "@components/Buttons/IconButton";
import { GlobalNavigationContext } from "@components/Providers";
interface Props {
  headerContent?: ReactElement;
  children: ReactNode;
}

export default function PageLayout({ headerContent, children }: Props) {
  const [scroll, setScroll] = useState(0);
  const { isOpen, setIsOpen } = useContext(GlobalNavigationContext);
  return (
    <div
      onScroll={(e) => {
        setScroll(e.currentTarget.scrollTop);
      }}
      className="relative flex flex-1 flex-col max-h-screen overflow-y-auto"
    >
      <div
        className={`p-2 pr-3 w-full flex justify-between bg-off-white dark:bg-smooth-black backdrop-filter backdrop-blur-xl bg-opacity-70 dark:bg-opacity-80 z-20
        ${
          scroll ? "shadow-sm border-b" : ""
        } sticky top-0 border-gray-200 dark:border-gray-800 transform duration-300
        `}
      >
        <div>
          {!isOpen && (
            <IconButton
              icon={<MenuIcon height={25} width={25} className="self-center" />}
              onClick={() => {
                setIsOpen(true);
              }}
            />
          )}
        </div>
        <ThemeToggle />
      </div>
      <div className="w-full">
        <main className="w-full flex justify-center">
          <div className="px-5 max-w-4xl">{children}</div>
        </main>
      </div>
    </div>
  );
}

export function SiteLayout({ children }: Props) {
  return (
    <div className="lg:flex w-full h-full min-h-screen">
      <Sidebar />
      {children}
    </div>
  );
}

import ThemeToggle from "@components/Toggle/ThemeToggle";
import { ReactElement, ReactNode, useContext } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import MenuIcon from "@components/icons/Menu";
import { IconButton } from "@components/Buttons/IconButton";
import { GlobalNavigationContext } from "@components/Providers";
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
  const { isOpen, setIsOpen } = useContext(GlobalNavigationContext);
  return (
    <div className="md:flex w-full h-full min-h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <div className="p-2 w-full flex justify-between bg-off-white dark:bg-smooth-black backdrop-filter backdrop-blur-xl bg-opacity-75 dark:bg-opacity-80 z-20">
          <div>
            {!isOpen && (
              <IconButton
                icon={
                  <MenuIcon height={25} width={25} className="self-center" />
                }
                onClick={() => {
                  setIsOpen(true);
                }}
              />
            )}
          </div>
          <ThemeToggle />
        </div>
        {children}
      </div>
    </div>
  );
}

import ThemeToggle from "@components/Toggle/ThemeToggle";
import { ReactNode, useContext, useState, ReactElement } from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import MenuIcon from "@components/Icons/MenuIcon";
import { IconButton } from "@components/Buttons/IconButton";
import { GlobalNavigationContext } from "@components/Providers";
interface SiteLayoutProps {
  children: ReactNode;
}

interface PageLayoutProps {
  title?: string;
  children: ReactNode;
  customLeftItem?: ReactElement;
}

interface ListProps {
  list: ReactElement | null;
  children: ReactElement | null;
  hasDetail?: boolean;
}

export function ListDetailView({
  list,
  children,
  hasDetail = false,
}: ListProps) {
  return (
    <div className="flex w-full">
      {list && (
        <div
          className={`bg-dots ${
            hasDetail ? "hidden md:flex" : "w-full min-h-screen"
          }`}
        >
          {list}
        </div>
      )}
      {children}
    </div>
  );
}

export default function PageLayout({
  title,
  children,
  customLeftItem,
}: PageLayoutProps) {
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
        className={`p-2 pr-3 flex justify-between bg-glass z-20
        ${
          scroll ? "shadow-sm border-b" : ""
        } sticky top-0 border-gray-200 dark:border-gray-800 transform duration-300
        `}
      >
        <div className="flex h-full items-center">
          {!isOpen && !customLeftItem ? (
            <IconButton
              icon={<MenuIcon height={25} width={25} className="self-center" />}
              onClick={() => {
                setIsOpen(true);
              }}
            />
          ) : (
            customLeftItem
          )}
          <span className={`mx-2 text-lg font-bold self-center line-clamp-1`}>
            {scroll > 50 ? title : ""}
          </span>
        </div>
        <ThemeToggle />
      </div>
      <div className="w-full">
        <main className="p-5">{children}</main>
      </div>
    </div>
  );
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div className="lg:flex w-full h-full min-h-screen">
      <Sidebar />
      {children}
    </div>
  );
}

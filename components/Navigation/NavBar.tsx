import { ReactElement } from "react";
import NavBarItem from "./NavBarItem";
import Link from "next/link";
import ThemeToggle from "@components/Toggle/ThemeToggle";
import PathAnimatedLogo from "@components/Image/PathAnimatedLogo";
import { useScrollHandler } from "@components/hooks/ScrollHandler";

export default function NavBar(): ReactElement {
  const scroll = useScrollHandler();
  return (
    <>
      <div className="w-full h-10 bg-off-white dark:bg-smooth-black backdrop-filter backdrop-blur-xl bg-opacity-75 dark:bg-opacity-80 firefox:bg-opacity-100 z-20 hidden md:block transition duration-300"></div>
      <nav
        className={`sticky top-0 w-full flex item bg-off-white dark:bg-smooth-black backdrop-filter backdrop-blur-xl bg-opacity-75 dark:bg-opacity-80 z-20 transition duration-300 ${
          scroll > 10 ? "shadow-md" : ""
        }`}
        style={{ height: "5rem" }}
      >
        <header className="flex justify-center w-full">
          <div className="flex flex-1 justify-between items-center flex-row max-w-6xl pl-5">
            <Link href="/">
              <a
                aria-label="Home Page"
                className="w-24 h-16 md:w-32 md:h-20 flex items-center"
              >
                <PathAnimatedLogo />
              </a>
            </Link>
            <div className="flex flex-row pr-3 md:p-0 md:bottom-5 items-center">
              <NavBarItem label="About" link="/" />
              <NavBarItem label="Blog" link="/blog" />
              <NavBarItem label="Socials" link="/#socials" />
            </div>
            <div className="pr-5">
              <ThemeToggle />
            </div>
          </div>
        </header>
      </nav>
    </>
  );
}

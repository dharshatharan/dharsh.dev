import { useState, useEffect, ReactElement } from "react";
import NavBarItem from "./NavBarItem";
import Link from "next/link";
import { useTheme } from "next-themes";
import ThemeToggle from "@components/Toggle/ThemeToggle";

export default function NavBar(): ReactElement {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);
  return (
    <>
      <div className="w-full h-10 bg-off-white dark:bg-smooth-black backdrop-filter backdrop-blur-xl bg-opacity-75 dark:bg-opacity-80 firefox:bg-opacity-100 z-20 hidden md:block"></div>
      <nav
        className="sticky top-0 w-full flex item bg-off-white dark:bg-smooth-black backdrop-filter backdrop-blur-xl bg-opacity-75 dark:bg-opacity-80 z-20"
        style={{ height: "8vh", minHeight: "5rem", maxHeight: "5rem" }}
      >
        <header className="flex justify-center w-full">
          <div className="flex flex-1 justify-between items-center flex-row max-w-screen-xl pl-5">
            <Link href="/">
              <a className="w-24 h-16 md:w-32 md:h-20 flex items-center">
                {mounted && (
                  <svg
                    width="240"
                    height="91"
                    viewBox="0 0 240 91"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0"
                      mask-type="alpha"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="240"
                      height="91"
                    >
                      <rect width="240" height="91" fill="white" />
                    </mask>
                    <g mask="url(#mask0)">
                      <path
                        d="M36 24.6506L4 28L61 78.6506L36 24.6506Z"
                        fill="#E9AE8C"
                      />
                      <path
                        d="M64 4V85.5L4.5 32"
                        stroke={`${
                          resolvedTheme === "dark" ? "#FBFBFB" : "#151515"
                        }`}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M115.095 73.982L145.526 84.4306L115.181 14.4757L115.095 73.982Z"
                        fill="#E9AE8C"
                      />
                      <path
                        d="M81 80.909L115.347 7.00019L146.758 80.5926"
                        stroke={`${
                          resolvedTheme === "dark" ? "#FBFBFB" : "#151515"
                        }`}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M168.131 43.0664L157.806 73.5396L227.637 42.9107L168.131 43.0664Z"
                        fill="#E9AE8C"
                      />
                      <path
                        d="M161.065 8.99985L235.113 43.0464L161.649 74.7563"
                        stroke={`${
                          resolvedTheme === "dark" ? "#FBFBFB" : "#151515"
                        }`}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                )}
              </a>
            </Link>
            <div className="flex flex-row pr-3 md:p-0 md:bottom-5 items-center">
              <NavBarItem label="About" link="/" />
              <NavBarItem label="Blog" link="/#blog" />
              <NavBarItem label="Socials" link="/#socials" />
              <ThemeToggle />
              <button
                type="button"
                className="text-indigo-600"
                onClick={() => {
                  throw new Error("Sentry Frontend Error");
                }}
              >
                Throw error
              </button>
            </div>
          </div>
        </header>
      </nav>
    </>
  );
}

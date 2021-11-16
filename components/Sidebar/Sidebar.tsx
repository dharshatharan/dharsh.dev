import PathAnimatedLogo from "@components/Image/PathAnimatedLogo";
import { SidebarItem } from "@components/Sidebar/SidebarItem";
import HomeIcon from "@components/icons/Home";
import WritingIcon from "@components/icons/Writing";
import LightIcon from "@components/icons/Light";
import FireIcon from "@components/icons/Fire";
import LinkedInIcon from "@components/icons/LinkedIn";
import TwitterIcon from "@components/icons/Twitter";
import GitHubIcon from "@components/icons/GitHub";
import WebIcon from "@components/icons/Web";
import FaceIcon from "@components/icons/Face";
import LeftDoubleArrowIcon from "@components/icons/LeftDoubleArrow";
import { SVGProps, useContext } from "react";
import { GlobalNavigationContext } from "@components/Providers";
import { IconButton } from "@components/Buttons/IconButton";
import Link from "next/link";

interface Props {}

const IconProps: SVGProps<SVGSVGElement> = {
  height: "20",
  width: "20",
  className: "flex self-center",
};

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: <HomeIcon {...IconProps} />,
  },
  {
    label: "About",
    href: "/about",
    icon: <FaceIcon {...IconProps} />,
  },
  {
    label: "Writing",
    href: "/blog",
    icon: <WritingIcon {...IconProps} />,
  },
  "Projects",
  {
    label: "WebBook",
    href: "/project/web-book",
    icon: <WebIcon {...IconProps} />,
  },
  {
    label: "Makers Club",
    href: "/project/makers-club",
    icon: <FireIcon {...IconProps} />,
  },
  {
    label: "Torch",
    href: "/project/torch",
    icon: <LightIcon {...IconProps} />,
  },
  "Connect",
  {
    label: "GitHub",
    href: "https://github.com/dharshatharan",
    icon: <GitHubIcon {...IconProps} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dharshatharan/",
    icon: <LinkedInIcon {...IconProps} />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/dharshatharan",
    icon: <TwitterIcon {...IconProps} />,
  },
];

export const Sidebar = (props: Props) => {
  const { isOpen, setIsOpen } = useContext(GlobalNavigationContext);

  return (
    <div className="relative">
      <div
        className={`absolute h-screen w-60 lg:w-72 text-9xl flex flex-col justify-end overflow-hidden transform duration-300
      ${isOpen ? "" : "hidden"}`}
      >
        <div className="floating-blob"></div>
      </div>
      <nav
        className={`w-60 lg:w-72 h-screen flex flex-col px-3 absolute lg:static z-30 top-0 left-0 transform duration-300 bg-[#f9f9f9] dark:bg-smooth-black border-r border-gray-200 dark:border-gray-800
      ${
        isOpen ? "translate-x-0 shadow-lg" : "-translate-x-full hidden"
      } backdrop-filter backdrop-blur-xl bg-opacity-80 dark:bg-opacity-80 firefox:bg-opacity-95 dark:firefox:bg-opacity-95 overflow-y-auto
    `}
      >
        <div className="flex justify-between items-center mb-10">
          <Link href="/">
            <a className="h-14 w-20 flex items-center">
              <PathAnimatedLogo />
            </a>
          </Link>
          <IconButton
            icon={<LeftDoubleArrowIcon className="text-gray-500" />}
            onClick={() => {
              setIsOpen(false);
            }}
            aria-label="Close Menu"
          />
        </div>
        {navItems.map((item, index) => {
          if (typeof item === "string") {
            return (
              <div
                key={item}
                className="mt-5 mb-3 px-3 font-bold text-gray-500"
              >
                {item}
              </div>
            );
          }
          return <SidebarItem key={index} {...item} />;
        })}
      </nav>
    </div>
  );
};

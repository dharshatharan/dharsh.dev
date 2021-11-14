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
    label: "Writing",
    href: "/blog",
    icon: <WritingIcon {...IconProps} />,
  },
  "Projects",
  {
    label: "WebBook",
    href: "https://github.com/dharshatharan/web-book",
    icon: <WebIcon {...IconProps} />,
  },
  {
    label: "Makers Club",
    href: "https://makers.scesoc.ca/",
    icon: <FireIcon {...IconProps} />,
  },
  {
    label: "Torch",
    href: "https://github.com/SCESoc/code-name-candle",
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
    <nav
      className={`w-72 min-w-[18rem] h-screen flex flex-col px-3 absolute lg:static z-30 top-0 left-0 transform duration-300 bg-[#f9f9f9] dark:bg-smooth-black border-r border-gray-200 dark:border-gray-800
      ${
        isOpen ? "translate-x-0 shadow-lg" : "-translate-x-full hidden"
      } backdrop-filter backdrop-blur-xl bg-opacity-90 dark:bg-opacity-80
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
        />
      </div>
      {navItems.map((item, index) => {
        if (typeof item === "string") {
          return (
            <div key={item} className="mt-5 mb-3 px-3 font-bold text-gray-500">
              {item}
            </div>
          );
        }
        return <SidebarItem key={index} {...item} />;
      })}
    </nav>
  );
};

import PathAnimatedLogo from "@components/Image/PathAnimatedLogo";
import { SidebarItem } from "@components/Sidebar/SidebarItem";
import BookmarkIcon from "@components/Icons/BookmarkIcon";
import HomeIcon from "@components/Icons/HomeIcon";
import WritingIcon from "@components/Icons/WritingIcon";
import LightIcon from "@components/Icons/LightIcon";
import FireIcon from "@components/Icons/FireIcon";
import LinkedInIcon from "@components/Icons/LinkedInIcon";
import TwitterIcon from "@components/Icons/TwitterIcon";
import GitHubIcon from "@components/Icons/GitHubIcon";
import WebIcon from "@components/Icons/WebIcon";
import FaceIcon from "@components/Icons/FaceIcon";
import GradCap from "@components/Icons/GradCapIcon";
import LeftDoubleArrowIcon from "@components/Icons/LeftDoubleArrowIcon";
import { SVGProps, useContext } from "react";
import { GlobalNavigationContext } from "@components/Providers";
import { IconButton } from "@components/Buttons/IconButton";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {}

const IconProps: SVGProps<SVGSVGElement> = {
  height: "17",
  width: "17",
  className: "flex self-center",
};

export const Sidebar = (props: Props) => {
  const { isOpen, setIsOpen } = useContext(GlobalNavigationContext);
  const router = useRouter();

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: <HomeIcon {...IconProps} />,
      isActive: router.asPath === "/",
    },
    {
      label: "About",
      href: "/about",
      icon: <FaceIcon {...IconProps} />,
      isActive: router.asPath === "/about",
    },
    "Content",
    {
      label: "Writing",
      href: "/blog",
      icon: <WritingIcon {...IconProps} />,
      isActive: router.asPath.startsWith("/blog"),
    },
    {
      label: "TIL",
      href: "/today-i-learned",
      icon: <GradCap {...IconProps} />,
      isActive: router.asPath.startsWith("/today-i-learned"),
    },
    {
      label: "Bookmarks",
      href: "/bookmark",
      icon: <BookmarkIcon {...IconProps} />,
      isActive: router.asPath.startsWith("/bookmark"),
    },
    "Projects",
    {
      label: "WebBook",
      href: "/project/web-book",
      icon: <WebIcon {...IconProps} />,
      isActive: router.asPath === "/project/web-book",
    },
    {
      label: "Makers Club",
      href: "/project/makers-club",
      icon: <FireIcon {...IconProps} />,
      isActive: router.asPath === "/project/makers-club",
    },
    {
      label: "Torch",
      href: "/project/torch",
      icon: <LightIcon {...IconProps} />,
      isActive: router.asPath === "/project/torch",
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

  return (
    <div className="relative">
      <nav
        className={`w-60 lg:w-72 h-screen flex flex-col px-3 absolute lg:static z-30 top-0 left-0 bg-panel
      ${isOpen ? "translate-x-0 shadow-lg" : "-translate-x-full hidden"}
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
                className="mt-5 mb-3 px-3 text-sm font-bold text-gray-500"
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

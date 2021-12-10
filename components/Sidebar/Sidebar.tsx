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
import GradHat from "@components/icons/GradHat";
import LeftDoubleArrowIcon from "@components/icons/LeftDoubleArrow";
import { SVGProps, useContext } from "react";
import { GlobalNavigationContext } from "@components/Providers";
import { IconButton } from "@components/Buttons/IconButton";
import Link from "next/link";
import { useRouter } from "next/router";

interface Props {}

const IconProps: SVGProps<SVGSVGElement> = {
  height: "20",
  width: "20",
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
    {
      label: "Writing",
      href: "/blog",
      icon: <WritingIcon {...IconProps} />,
      isActive: router.asPath.startsWith("/blog"),
    },
    {
      label: "TIL",
      href: "/today-i-learned",
      icon: <GradHat {...IconProps} />,
      isActive: router.asPath.startsWith("/today-i-learned"),
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

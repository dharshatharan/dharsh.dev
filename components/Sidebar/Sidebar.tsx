import PathAnimatedLogo from "@components/Image/PathAnimatedLogo";
import ThemeToggle from "@components/Toggle/ThemeToggle";
import { SidebarItem } from "@components/Sidebar/SidebarItem";
import HomeIcon from "@components/icons/Home";
import WritingIcon from "@components/icons/Writing";
import { SVGProps } from "react";

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
  // 'Projects',
  "Connect",
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
];

export const Sidebar = (props: Props) => {
  return (
    <nav className="bg-gray-100 dark:bg-gray-900 w-72 min-w-[18rem] h-screen flex flex-col px-3 sticky top-0 left-0">
      <div className="flex justify-between items-center mb-10">
        <div className="h-14 w-20 flex items-center">
          <PathAnimatedLogo />
        </div>
        <ThemeToggle />
      </div>
      {navItems.map((item, index) => {
        if (typeof item === "string") {
          return (
            <div className="mt-5 mb-3 px-3 font-bold text-gray-500">{item}</div>
          );
        }
        return <SidebarItem key={index} {...item} />;
      })}
    </nav>
  );
};

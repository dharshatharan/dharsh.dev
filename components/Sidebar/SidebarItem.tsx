import { ReactElement, SVGProps, useContext } from "react";
import RightArrowIcon from "@components/Icons/RightArrowIcon";
import { SmartLink } from "@components/SmartLink";
import { useWindowSize } from "@components/hooks/WindowSize";
import { GlobalNavigationContext } from "@components/Providers";

interface Props {
  href: string;
  label: string;
  icon: ReactElement;
  isActive?: boolean;
}

const ArrowIconProps: SVGProps<SVGSVGElement> = {
  height: "15",
  width: "15",
  className: "flex self-center -rotate-45 text-gray-500",
};

export const SidebarItem = ({ href, label, icon, isActive }: Props) => {
  const size = useWindowSize();
  const { setIsOpen } = useContext(GlobalNavigationContext);

  return (
    <SmartLink
      href={href}
      onClick={() => {
        size.width && size.width < 1024 && setIsOpen(false);
      }}
      className={`py-2 px-3 mb-1 text-sm hover:bg-gray-200 dark:hover:bg-[#222222] rounded-lg flex align-middle justify-between transform duration-300 font-semibold
            ${
              isActive
                ? " font-bold text-smooth-black dark:text-off-white bg-gray-200 dark:bg-[#222222]"
                : " text-gray-700 dark:text-gray-200"
            }`}
    >
      <span className="flex align-middle space-x-3">
        {icon}
        <span>{label}</span>
      </span>
      {!href.startsWith("/") && <RightArrowIcon {...ArrowIconProps} />}
    </SmartLink>
  );
};

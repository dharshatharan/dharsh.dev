import { useRouter } from "next/router";
import { ReactElement, SVGProps, useContext } from "react";
import RightArrowIcon from "@components/icons/RightArrow";
import { SmartLink } from "@components/SmartLink";
import { useWindowSize } from "@components/hooks/WindowSize";
import { GlobalNavigationContext } from "@components/Providers";

interface Props {
  href: string;
  label: string;
  icon: ReactElement;
}

const ArrowIconProps: SVGProps<SVGSVGElement> = {
  height: "15",
  width: "15",
  className: "flex self-center -rotate-45",
};

export const SidebarItem = ({ href, label, icon }: Props) => {
  const router = useRouter();
  const size = useWindowSize();
  const { setIsOpen } = useContext(GlobalNavigationContext);
  const isActive = router.asPath === href;

  return (
    <SmartLink
      href={href}
      onClick={() => {
        size.width && size.width < 1024 && setIsOpen(false);
      }}
      className={`py-1 px-3 mb-1 text-md md:text-md hover:bg-gray-200 dark:hover:bg-[#1f1f1f] rounded-lg flex align-middle justify-between transform duration-300
            ${
              isActive
                ? " font-bold text-smooth-black dark:text-off-white bg-gray-200 dark:bg-[#1f1f1f]"
                : " text-gray-600 dark:text-gray-400"
            }`}
    >
      <span className="flex align-middle space-x-5">
        {icon}
        <span>{label}</span>
      </span>
      {!href.startsWith("/") && <RightArrowIcon {...ArrowIconProps} />}
    </SmartLink>
  );
};

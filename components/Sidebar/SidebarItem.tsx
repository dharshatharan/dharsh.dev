import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";

interface Props {
  href: string;
  label: string;
  icon: ReactElement;
}

export const SidebarItem = ({ href, label, icon }: Props) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a
        className={`p-1 md:px-3 mb-1 text-md md:text-md hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg flex align-middle space-x-5
            ${
              isActive
                ? " font-bold text-smooth-black dark:text-off-white bg-gray-200 dark:bg-gray-800"
                : " text-gray-600 dark:text-gray-400"
            }`}
      >
        {icon}
        <span>{label}</span>
      </a>
    </Link>
  );
};

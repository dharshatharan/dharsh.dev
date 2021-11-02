import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement } from "react";

interface Props {
  label: string;
  link: string;
}

export default function NavBarItem({ label, link }: Props): ReactElement {
  const router = useRouter();
  const isActive = router.asPath === link;

  return (
    <Link href={link}>
      <a className="transition duration-500">
        <span
          className={`p-2 md:px-5 text-md md:text-2xl hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg
            ${
              isActive
                ? " font-bold text-smooth-black dark:text-off-white"
                : " text-gray-600 dark:text-gray-400"
            }`}
        >
          {label}
        </span>
      </a>
    </Link>
  );
}

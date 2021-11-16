import Link from "next/link";
import { ClassAttributes, AnchorHTMLAttributes } from "react";

export const SmartLink = (
  props: ClassAttributes<HTMLAnchorElement> &
    AnchorHTMLAttributes<HTMLAnchorElement>
) => {
  const href = props.href;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <Link href={encodeURI(href ?? "")}>
        <a {...props}>{props.children}</a>
      </Link>
    );
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

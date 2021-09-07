import Link from "next/link";
import Image from "next/image";
import { ClassAttributes, AnchorHTMLAttributes } from "react";
import { ComponentMap } from "mdx-bundler/client";

const CustomLink = (
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

const MDXComponents: ComponentMap = {
  // @ts-ignore
  Image,
  a: CustomLink,
};

export default MDXComponents;

import { ComponentMap } from "mdx-bundler/client";
import { ArticleImage } from "./Image/ArticleImage";
import { SmartLink } from "./SmartLink";

const MDXComponents: ComponentMap = {
  // @ts-ignore
  Image: ArticleImage,
  a: SmartLink,
};

export default MDXComponents;

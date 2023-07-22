import { getMDXComponent } from "mdx-bundler/client";
import { ArticleImage } from "./Image/ArticleImage";
import { SmartLink } from "./SmartLink";

const MDXComponents = {
  Image: ArticleImage,
  a: SmartLink,
};

const getMdxComponent = (code: string) => {
  const Component = getMDXComponent(code);
  const MyMdxComponent = ({
    components,
    ...rest
  }: Parameters<typeof Component>["0"]) => {
    return (
      <Component components={{ ...MDXComponents, ...components }} {...rest} />
    );
  };
  return MyMdxComponent;
};

export default getMdxComponent;

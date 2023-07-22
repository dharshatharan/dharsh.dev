import getMdxComponent from "@components/MDXComponents";
import React from "react";

export function useMdxComponent(code: string) {
  return React.useMemo(() => {
    const component = getMdxComponent(code);
    return component;
  }, [code]);
}

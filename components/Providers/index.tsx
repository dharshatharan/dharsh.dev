import { createContext, useState } from "react";
import { ThemeProvider } from "next-themes";
import { useAnalytics } from "@lib/analytics";
import { NextPageContext } from "next";
import { useWindowSize } from "@components/hooks/WindowSize";

interface Props {
  children?: any;
  pageProps: NextPageContext;
}

const globalNavigationContext = {
  isOpen: false,
  setIsOpen: (val: boolean) => {},
};

export const GlobalNavigationContext = createContext(globalNavigationContext);

export function Providers({ children, pageProps }: Props) {
  const size = useWindowSize();
  useAnalytics();

  console.log(size);

  const initialState = {
    isOpen: (size.width !== undefined && size.width > 1024) || false,
    setIsOpen,
  };

  const [state, setState] = useState(initialState);

  function setIsOpen(isOpen: boolean) {
    return setState({ ...state, isOpen });
  }

  return (
    <>
      <ThemeProvider attribute="class">
        <GlobalNavigationContext.Provider value={state}>
          {children}
        </GlobalNavigationContext.Provider>
      </ThemeProvider>
    </>
  );
}

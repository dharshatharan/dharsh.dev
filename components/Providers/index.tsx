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
  isOpen: true,
  setIsOpen: (val: boolean) => {},
};

export const GlobalNavigationContext = createContext(globalNavigationContext);

export function Providers({ children, pageProps }: Props) {
  const [initSidebarState, setInitSidebarState] = useState(false);
  const size = useWindowSize();
  useAnalytics();

  const initialState = {
    isOpen: true,
    setIsOpen,
  };

  const [state, setState] = useState(initialState);

  function setIsOpen(isOpen: boolean) {
    return setState({ ...state, isOpen });
  }

  if (typeof window !== "undefined" && !initSidebarState && size.width) {
    setIsOpen(size.width > 1024);
    setInitSidebarState(true);
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

import "@styles/globals.css";

import { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { useAnalytics } from "@lib/analytics";

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics();

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

import "@styles/globals.css";

import { AppProps } from "next/app";
import { SiteLayout } from "@components/Layouts/Layout";
import { Providers } from "@components/Providers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers pageProps={pageProps}>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </Providers>
  );
}

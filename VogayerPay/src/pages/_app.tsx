import { Hydrate } from "@tanstack/react-query";
import type { AppProps as NextAppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { AppProviders } from "../AppProviders";
import "../styles/globals.css";

// Workaround for https://github.com/zeit/next.js/issues/8592
export type AppProps = NextAppProps & {
  /** Will be defined only is there was an error */
  err?: Error;
};

function App({ Component, pageProps, err }: AppProps) {
  const router = useRouter();

  return (
    <AppProviders>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=5,viewport-fit=cover"
        />
      </Head>
      {/* Hydrate query cache */}
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} err={err} key={router.asPath} />
      </Hydrate>
    </AppProviders>
  );
}

export default App;

import type { DocumentProps } from "next/document";
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

function MyDocument(props: DocumentProps) {
  const { locale } = props.__NEXT_DATA__;

  return (
    <Html
      lang={locale}
      className="scroll-auto"
      style={{ scrollBehavior: "auto" }}>
      <Head>
        <link
          rel="preload"
          href="/fonts/svn-gilroy-regular.ttf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/svn-gilroy-medium.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/svn-gilroy-semibold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/svn-gilroy-bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta content="#142246" name="theme-color" />
        <meta content="#142246" name="msapplication-TileColor" />
        {process.env.NEXT_PUBLIC_ENABLE_ERUDA === "true" ? (
          <>
            <Script src="//cdn.jsdelivr.net/npm/eruda" />
            <Script
              id="eruda-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{ __html: "eruda.init();" }}
            />
          </>
        ) : null}
      </Head>
      <body className="text-neutral-90 dark:bg-neutral-90 bg-white dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// Example to process graceful shutdowns (ie: closing db or other resources)
// https://nextjs.org/docs/deployment#manual-graceful-shutdowns
if (process.env.NEXT_MANUAL_SIG_HANDLE) {
  // this should be added in your custom _document
  process.on("SIGTERM", () => {
    console.log("Received SIGTERM: ", "cleaning up");
    process.exit(0);
  });

  process.on("SIGINT", () => {
    console.log("Received SIGINT: ", "cleaning up");
    process.exit(0);
  });
}

export default MyDocument;

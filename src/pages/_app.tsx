// src/pages/_app.tsx
import { withTRPC } from "@trpc/next";
import type { AppRouter } from "../server/router";
import type { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";
import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout";
import theme from "../utils/theme";
import { Global } from "@emotion/react";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

const Fonts = () => (
  <Global
    styles={`
      @import url('https://fonts.googleapis.com/css2?family=Yomogi&display=swap');
      @font-face {
        font-family: 'osake';
        font-display: swap;
        src: url("/fonts/osake.woff") format('woff');
      };
    `}
  />
);

const MyApp: AppType = ({
  Component,
  pageProps: { session, ...pageProps },
  router,
}) => {
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout router={router}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  );
};

const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return "";
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url

  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

export default withTRPC<AppRouter>({
  config({ ctx }) {
    /**
     * If you want to use SSR, you need to use the server's full URL
     * @link https://trpc.io/docs/ssr
     */
    const url = `${getBaseUrl()}/api/trpc`;

    return {
      url,
      transformer: superjson,
      /**
       * @link https://react-query.tanstack.com/reference/QueryClient
       */
      // queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
    };
  },
  /**
   * @link https://trpc.io/docs/ssr
   */
  ssr: false,
})(MyApp);

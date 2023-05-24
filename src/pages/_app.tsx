import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "@/utils/api";

import "@/styles/globals.css";

import Head from "next/head";
import { OGP } from "react-ogp";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <>
    <Head>
        <OGP
          url="https://jakekinchen.dev"
          title="Jake"
          description="The personal website of Jake, a full-stack software developer."
          siteName="jakekinchen.dev"
          image="https://jakekinchen.dev/banner.png"
        />
      </Head>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    </>
  );
};

export default api.withTRPC(MyApp);

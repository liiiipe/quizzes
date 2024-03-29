import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";

import Container from "../layouts/container";
import Navbar from "../components/navbar";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);

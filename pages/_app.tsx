import { AppProps } from "next/app";
import React from "react";
import NextI18Next from "../components/@locale/i18n";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default NextI18Next.appWithTranslation(MyApp);

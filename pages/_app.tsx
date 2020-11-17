import { AppProps } from "next/app";
import React from "react";
import { SomeContext, TheContext } from "../components/@context/TestContext";
import NextI18Next from "../components/@locale/i18n";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <TheContext.Provider value={SomeContext}>
      <Component {...pageProps} />
    </TheContext.Provider>
  );
};

export default NextI18Next.appWithTranslation(MyApp);

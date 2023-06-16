import type { AppProps } from "next/app";

import { appWithTranslation } from "next-i18next";

import { ThemeProvider } from "@/contexts/ThemeContext";

import "@/styles/globals.scss";
import { TranslationProvider } from "@/contexts/TranslateContext";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <TranslationProvider>
        <Component {...pageProps} />
      </TranslationProvider>
    </ThemeProvider>
  );
};

export default appWithTranslation(App);

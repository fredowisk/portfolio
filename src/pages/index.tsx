import type { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Head from "next/head";
import Link from "next/link";

import { useContext } from "react";
import { BsBrightnessLow } from "react-icons/bs";

import { Info } from "@/components/Info";
import { Facts } from "@/components/Facts";
import { Contact } from "@/components/Contact";
import { Tabs } from "@/components/Tabs";
import { Content } from "@/components/Content";

import { ThemeContext } from "@/contexts/ThemeContext";
import { TranslateContext } from "@/contexts/TranslateContext";

import styles from "./home.module.scss";

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage, translate } = useContext(TranslateContext);

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <Head>
        <title>{`${translate("title")} | Frederico`}</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.themeContainer}>
          <BsBrightnessLow onClick={toggleTheme} />
        </div>
        <div className={styles.languageContainer}>
          {
            <Link
              href="/"
              locale={language.abbreviation}
              onClick={toggleLanguage}
            >
              {language.abbreviation}
              <img src={language.url} alt={language.flag} />
            </Link>
          }
        </div>
      </header>

      <main className={styles.contentContainer}>
        <Info />
        <Facts />
        <Contact />
        <Tabs />
        <Content />
      </main>

      <footer className={styles.footer}>
        <span>{`© Frederico Parreira. 2023 ${translate("footer")}`}</span>
      </footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
  revalidate: 60 * 60 * 24 * 30,
});

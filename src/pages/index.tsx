import type { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Head from "next/head";
import Link from "next/link";

import { useContext } from "react";
import { BsBrightnessLow } from "react-icons/bs";

import { query as q } from "faunadb";
import { fauna } from "@/services/fauna";

import { Info } from "@/components/Info";
import { Facts } from "@/components/Facts";
import { Contact } from "@/components/Contact";
import { Tabs } from "@/components/Tabs";
import { Content } from "@/components/Content";

import { ThemeContext } from "@/contexts/ThemeContext";
import { TranslateContext } from "@/contexts/TranslateContext";

import styles from "./home.module.scss";

export default function Home({ currentLocale }: { currentLocale: string }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { language, toggleLanguage, translate } = useContext(TranslateContext);

  if (currentLocale === language.abbreviation) toggleLanguage();

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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const currentLocale = locale ?? "en";

  const totalViews = await fauna.query<{
    ref: { id: string };
    data: { count: number };
  }>(q.Get(q.Match(q.Index("visualization_by_id"), "1")));

  await fauna.query(
    q.Update(q.Ref(q.Collection("visualizations"), totalViews.ref.id), {
      data: {
        count: totalViews.data.count + 1,
      },
    })
  );

  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ["common"])),
      currentLocale,
    },
  };
};

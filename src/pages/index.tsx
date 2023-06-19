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

import { ThemeContext } from "@/contexts/ThemeContext";
import { TranslateContext } from "@/contexts/TranslateContext";

import styles from "./home.module.scss";

export default function Home({ currentLocale, contents }: { currentLocale: string, contents: [] }) {
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
        <Tabs contents={contents}/>
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

  const contents = [
    {
      imageSrc:
        "https://github.com/fredowisk/Natours/assets/53921083/5b875b83-ddb6-4dd0-81cd-49d95c2d9ac7",
      title: "Natours",
      description: "Landing page of Natours created using JavaScript",
      appURL: "https://natours-sand.vercel.app/",
    },
    {
      imageSrc:
        "https://raw.githubusercontent.com/fredowisk/forkify/main/src/img/screenshot.jpg",
      title: "Forkify",
      description: "Landing page of Forkify created using JavaScript",
      appURL: "https://forkify-sigma.vercel.app/",
    },
    {
      imageSrc:
        "https://user-images.githubusercontent.com/53921083/230407191-d318997d-7fcc-4884-93b5-681291baadb9.png",
      title: "dtMoney",
      description: "Landing page of dtMoney created using React.js",
      appURL: "https://dtmoney-psi-ten.vercel.app/",
    },
    {
      imageSrc:
        "https://user-images.githubusercontent.com/53921083/231844611-c2858f3d-24a0-4e92-bfd6-cc0f0654d867.png",
      title: "ig.news",
      description: "Landing page of ig.news created using Next.js",
      appURL: "https://ig-news-pearl.vercel.app/",
    },
    {
      imageSrc:
        "https://github.com/fredowisk/dashgo/assets/53921083/3690d4de-48b3-4550-947f-78fc831f8987",
      title: "dashgo",
      description: "Landing page of dashgo created using Next.js",
      appURL: "https://dashgo-blue.vercel.app/",
    },
    {
      imageSrc:
        "https://github.com/fredowisk/RocketShoes/assets/53921083/de9c989f-cd17-4571-94c0-23039f972457",
      title: "Rocketshoes",
      description: "Landing page of Rocketshoes created using React.js",
      appURL: "https://rocket-shoes-omega.vercel.app/",
    },
  ];

  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ["common"])),
      currentLocale,
      contents
    },
  };
};

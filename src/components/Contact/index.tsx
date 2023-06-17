import { HiDownload } from "react-icons/hi";

import styles from "./styles.module.scss";
import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeContext";
import { TranslateContext } from "@/contexts/TranslateContext";

export function Contact() {
  const { theme } = useContext(ThemeContext);
  const { translate, language } = useContext(TranslateContext);

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <a
        href={`./../../../public/cv-${
          language.abbreviation === "en" ? "pt" : "en"
        }.pdf`}
        download
      >
        {translate("CV")} <HiDownload />
      </a>
      <a href="mailto:souofred.developer@gmail.com">{translate("contact")}</a>
    </div>
  );
}

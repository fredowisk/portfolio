import { useContext } from "react";

import { ThemeContext } from "@/contexts/ThemeContext";

import styles from "./styles.module.scss";
import { TranslateContext } from "@/contexts/TranslateContext";

export function Facts() {
  const { theme } = useContext(ThemeContext);
  const { translate } = useContext(TranslateContext);

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <div className={styles.fact}>
        <span>4+</span>
        <p>{translate('fact1')}</p>
      </div>
      <div className={styles.fact}>
        <span>80+</span>
        <p>{translate('fact2')}</p>
      </div>
      <div className={styles.fact}>
        <span>5+</span>
        <p>{translate('fact3')}</p>
      </div>
    </div>
  );
}

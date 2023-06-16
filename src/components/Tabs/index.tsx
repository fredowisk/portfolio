import { useContext } from "react";
import styles from "./styles.module.scss";
import { ThemeContext } from "@/contexts/ThemeContext";
import { TranslateContext } from "@/contexts/TranslateContext";

export function Tabs() {
  const { theme } = useContext(ThemeContext);
  const { translate } = useContext(TranslateContext);

  return (
    <div className={`${styles.container} ${styles[theme]}`}>
      <button>{translate('title')}</button>
      <button>{translate('secondaryTab')}</button>
    </div>
  );
}

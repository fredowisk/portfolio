import { useContext } from "react";
import { BsGithub, BsLinkedin, BsMedium, BsYoutube } from "react-icons/bs";

import { ThemeContext } from "@/contexts/ThemeContext";
import { TranslateContext } from "@/contexts/TranslateContext";

import styles from "./styles.module.scss";

export function Info() {
  const { theme } = useContext(ThemeContext);
  const { translate } = useContext(TranslateContext);

  return (
    <div className={`${styles.profile} ${styles[theme]}`}>
      <div className={styles.avatarContainer}>
        <img
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/53921083?v=4"
          alt="Fred Avatar"
        />
      </div>
      <div className={styles.info}>
        <span>Frederico Parreira</span>
        <p>{translate("role")}</p>
        <div className={styles.social}>
          <a href="https://github.com/fredowisk" target="blank">
            <BsGithub />
          </a>
          <a href="https://www.linkedin.com/in/fredparreira/" target="blank">
            <BsLinkedin />
          </a>
          <a href="https://medium.com/@souofred.developer" target="blank">
            <BsMedium />
          </a>
          <a href="https://www.youtube.com/@FredDeveloper" target="blank">
            <BsYoutube />
          </a>
        </div>
      </div>
    </div>
  );
}

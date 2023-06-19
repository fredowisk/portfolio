import { FiLink2 } from "react-icons/fi";

import styles from "./styles.module.scss";

interface ContentProps {
  imageSrc: string;
  title: string;
  description: string;
  appURL: string;
}

export function Content({
  imageSrc,
  title,
  description,
  appURL,
}: ContentProps) {
  return (
    <div className={styles.container}>
      <img src={imageSrc} alt={`${title} app`} />
      <div className={styles.imageDescription}>
        <span>{title}</span>
        <p>{description}</p>
        <a href={appURL} className={styles.linkIcon} target="blank">
          <FiLink2 />
        </a>
      </div>
    </div>
  );
}

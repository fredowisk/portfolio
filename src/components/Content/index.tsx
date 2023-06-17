import { FiLink2 } from "react-icons/fi";

import styles from "./styles.module.scss";

export function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="https://github.com/fredowisk/Natours/assets/53921083/5b875b83-ddb6-4dd0-81cd-49d95c2d9ac7"
          alt="Natours app"
        />
        <div className={styles.imageDescription}>
          <span>Natours</span>
          <p>Landing page of Natours created using JavaScript</p>
          <a
            href="https://natours-sand.vercel.app/"
            className={styles.linkIcon}
            target="blank"
          >
            <FiLink2 />
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://raw.githubusercontent.com/fredowisk/forkify/main/src/img/screenshot.jpg"
          alt="Forkify app"
        />
        <div className={styles.imageDescription}>
          <span>Forkify</span>
          <p>Landing page of Forkify created using JavaScript</p>
          <a
            href="https://forkify-sigma.vercel.app/"
            className={styles.linkIcon}
            target="blank"
          >
            <FiLink2 />
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://user-images.githubusercontent.com/53921083/230407191-d318997d-7fcc-4884-93b5-681291baadb9.png"
          alt="dtMoney app"
        />
        <div className={styles.imageDescription}>
          <span>dtMoney</span>
          <p>Landing page of dtMoney created using React.js</p>
          <a
            href="https://dtmoney-psi-ten.vercel.app/"
            className={styles.linkIcon}
            target="blank"
          >
            <FiLink2 />
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://user-images.githubusercontent.com/53921083/231844611-c2858f3d-24a0-4e92-bfd6-cc0f0654d867.png"
          alt="ig.news app"
        />
        <div className={styles.imageDescription}>
          <span>ig.news</span>
          <p>Landing page of ig.news created using Next.js</p>
          <a
            href="https://ig-news-pearl.vercel.app/"
            className={styles.linkIcon}
            target="blank"
          >
            <FiLink2 />
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://github.com/fredowisk/dashgo/assets/53921083/3690d4de-48b3-4550-947f-78fc831f8987"
          alt="dashgo app"
        />
        <div className={styles.imageDescription}>
          <span>dashgo</span>
          <p>Landing page of dashgo created using Next.js</p>
          <a
            href="https://dashgo-blue.vercel.app/"
            className={styles.linkIcon}
            target="blank"
          >
            <FiLink2 />
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="https://github.com/fredowisk/RocketShoes/assets/53921083/de9c989f-cd17-4571-94c0-23039f972457"
          alt="Rocketshoes app"
        />
        <div className={styles.imageDescription}>
          <span>Rocketshoes</span>
          <p>Landing page of Rocketshoes created using React.js</p>
          <a
            href="https://rocket-shoes-omega.vercel.app/"
            className={styles.linkIcon}
            target="blank"
          >
            <FiLink2 />
          </a>
        </div>
      </div>
    </div>
  );
}

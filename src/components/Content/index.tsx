import Link from "next/link";

import { FiLink2 } from "react-icons/fi";

import styles from "./styles.module.scss";

export function Content() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.lorenzoribecca.co.uk%2Fwp-content%2Fuploads%2F2020%2F06%2FNatours-1536x693.png&f=1&nofb=1&ipt=017930fd2d642ab5773072ab8e42ab401e805c9db4eb78faed46e4207b70f1dc&ipo=images"
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
          src="https://github.com/fredowisk/forkify/blob/main/src/img/screenshot.jpg?raw=true"
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
          src="https://user-images.githubusercontent.com/53921083/230407174-d189e6ef-9575-4d61-a1c9-8e6ac973934f.png"
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
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcamo.githubusercontent.com%2Fafaa4f032c9f2caa0bdb99ec011a87d1ce3a10986e21d978a975d7495a7f4130%2F68747470733a2f2f692e696d6775722e636f6d2f7941794b6e35762e706e67&f=1&nofb=1&ipt=cd816eb84a0043efff574c8ece8ceb031876f2743cf3fadc24c48b19a8fd200b&ipo=images"
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
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Flukemorales%2Fimage%2Fupload%2Fv1563042321%2Freadme_logos%2Frocketshoes_readme_swvhr9.png&f=1&nofb=1&ipt=ac3c4c54f837f21e79f323b7fb2ae68ea9b8f3771e3e6e0bf6cc459bd7acb4d5&ipo=images"
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

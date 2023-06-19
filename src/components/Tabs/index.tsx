import { useContext, useState } from "react";

import styles from "./styles.module.scss";
import { ThemeContext } from "@/contexts/ThemeContext";
import { TranslateContext } from "@/contexts/TranslateContext";
import { Content } from "../Content";

export function Tabs({ contents = [] }: { contents: [] }) {
  const { theme } = useContext(ThemeContext);
  const { translate } = useContext(TranslateContext);

  const [state, setState] = useState("portfolio");

  return (
    <div className={styles[theme]}>
      <div className={styles.container}>
        <button
          className={state === "portfolio" ? styles.selected : ""}
          onClick={() => setState("portfolio")}
        >
          {translate("title")}
        </button>
        <button
          className={state === "skills" ? styles.selected : ""}
          onClick={() => setState("skills")}
        >
          {translate("secondaryTab")}
        </button>
      </div>
      <div className={styles.wrapper}>
        {state === "portfolio" ? (
          <div className={styles.imagesContainer}>
            {contents.map(({ imageSrc, title, description, appURL }, index) => (
              <Content
                key={index}
                imageSrc={imageSrc}
                title={title}
                description={description}
                appURL={appURL}
              />
            ))}
          </div>
        ) : (
          <div className={styles.skillsContainer}>
            <span>Front-end</span>
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>GraphQL</li>
              <li>Scss</li>
            </ul>
            <span>Back-end</span>
            <ul>
              <li>Node.js</li>
              <li>Nest.js</li>
              <li>Serverless</li>
              <li>GraphQL</li>
              <li>Design Patterns</li>
              <li>Clean Architecture</li>
            </ul>
            <span>Mobile</span>
            <ul>
              <li>React Native</li>
            </ul>
            <span>DevOps</span>
            <ul>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>Redis</li>
              <li>AWS</li>
              <li>Docker</li>
              <li>Linux</li>
              <li>Bash Scripting</li>
              <li>Git</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

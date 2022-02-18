import classNames from "classnames";
import { useState } from "react";
import styles from "./accordion.module.css";

export default function Accordion({ title, children }) {
  const [toggleAccordion, setToggleAccordion] = useState(false);

  const handleToggleAccordion = () => {
    setToggleAccordion(!toggleAccordion);
  };

  return (
    <div
      className={classNames(
        toggleAccordion ? styles.show : styles.hide,
        styles.accordion
      )}
    >
      <h3 onClick={handleToggleAccordion} className={styles.title}>
        {title}
      </h3>
      <div className={styles.details}>{children}</div>
    </div>
  );
}

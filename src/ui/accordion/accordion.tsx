"use client";

import Typography from "../typography/typography";
import classNames from "classnames";
import styles from "./accordion.module.css";
import { useState } from "react";

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
      <Typography
        component="h3"
        onClick={handleToggleAccordion}
        className={styles.title}
      >
        {title}
      </Typography>
      <div className={styles.details}>{children}</div>
    </div>
  );
}

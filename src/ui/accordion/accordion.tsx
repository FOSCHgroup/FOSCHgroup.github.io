"use client";

import { PropsWithChildren, useState } from "react";

import classNames from "classnames";
import styles from "./accordion.module.css";

interface Props extends PropsWithChildren {
  title: string;
}

export default function Accordion({ title, children }: Props) {
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
      <h3
        className={classNames("title is-5", styles.title)}
        onClick={handleToggleAccordion}
      >
        {title}
      </h3>
      <div className={styles.details}>{children}</div>
    </div>
  );
}

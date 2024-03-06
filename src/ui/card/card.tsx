import { HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./card.module.css";

interface Props extends HTMLAttributes<HTMLElement> {
  variant?: string;
}

export default function Card({
  className,
  children,
  variant,
  ...passedProps
}: Props) {
  return (
    <div
      className={classNames(styles.card, className, styles[variant])}
      {...passedProps}
    >
      {children}
    </div>
  );
}

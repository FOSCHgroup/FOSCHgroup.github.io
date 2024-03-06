import { HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./container.module.css";

export default function Container({
  className,
  children,
  ...passedProps
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={classNames(styles.container, className)} {...passedProps}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

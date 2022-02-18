import classNames from "classnames";
import styles from "./typography.module.css";

export default function Typography({ className, color, ...passedProps }) {
  return (
    <div
      className={classNames(styles.typography, styles[color], className)}
      {...passedProps}
    />
  );
}

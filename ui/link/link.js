import classNames from "classnames";
import styles from "./link.module.css";

export default function Link({ className, ...passedProps }) {
  return (
    <a
      className={classNames(styles.link, className)}
      rel="noreferrer"
      target="_blank"
      {...passedProps}
    />
  );
}

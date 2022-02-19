import classNames from "classnames";
import styles from "./avatar.module.css";

export default function Avatar({ className, ...passedProps }) {
  if (!passedProps.src) return null;

  return (
    <img className={classNames(styles.avatar, className)} {...passedProps} />
  );
}

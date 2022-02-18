import classNames from "classnames";
import styles from "./avatar.module.css";

export default function Avatar({ className, ...passedProps }) {
  return (
    <img className={classNames(styles.avatar, className)} {...passedProps} />
  );
}

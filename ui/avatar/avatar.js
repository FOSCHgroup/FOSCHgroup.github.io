import classNames from "classnames";
import styles from "./avatar.module.css";

export default function Avatar({ className, variant, ...passedProps }) {
  if (!passedProps.src) return null;

  return (
    <img
      className={classNames(styles.avatar, styles[variant], className)}
      {...passedProps}
    />
  );
}

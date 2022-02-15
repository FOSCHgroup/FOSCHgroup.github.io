import classNames from "classnames";
import styles from "./pill-box.module.css";

export default function PillBox({ className, ...passedProps }) {
  return (
    <div className={classNames(styles.pillBox, className)} {...passedProps} />
  );
}

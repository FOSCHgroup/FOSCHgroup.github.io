import classNames from "classnames";
import styles from "./stack.module.css";

export default function PillBox({ className, ...passedProps }) {
  return (
    <div className={classNames(styles.stack, className)} {...passedProps} />
  );
}
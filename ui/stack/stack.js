import classNames from "classnames";
import styles from "./stack.module.css";

export default function Stack({ className, ...passedProps }) {
  return (
    <div className={classNames(styles.stack, className)} {...passedProps} />
  );
}

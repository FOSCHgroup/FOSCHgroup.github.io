import { HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./stack.module.css";

export default function Stack({
  className,
  ...passedProps
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={classNames(styles.stack, className)} {...passedProps} />
  );
}

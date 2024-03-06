import { HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./grid-item.module.css";

export default function GridItem({
  className,
  ...passedProps
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={classNames(styles.gridItem, className)} {...passedProps} />
  );
}

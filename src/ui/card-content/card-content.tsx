import { HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./card-content.module.css";

export default function CardContent({
  className,
  ...passedProps
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={classNames(styles.cardContent, className)}
      {...passedProps}
    />
  );
}

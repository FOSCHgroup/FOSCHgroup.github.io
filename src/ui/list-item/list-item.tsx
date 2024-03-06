import { HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./list-item.module.css";

export default function ListItem({
  className,
  children,
  ...passedProps
}: HTMLAttributes<HTMLLIElement>) {
  return (
    <li className={classNames(styles.listItem, className)} {...passedProps}>
      {children}
    </li>
  );
}

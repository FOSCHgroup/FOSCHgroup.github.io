import classNames from "classnames";
import styles from "./list-item.module.css";

export default function ListItem({ className, children, ...passedProps }) {
  return (
    <li className={classNames(styles.listItem, className)} {...passedProps}>
      {children}
    </li>
  );
}

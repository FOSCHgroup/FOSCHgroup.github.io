import classNames from "classnames";
import Link from "../link/link";
import styles from "./list-item-text.module.css";

export default function ListItemText({
  primary,
  secondary,
  className,
  children,
  link,
  ...passedProps
}) {
  return (
    <div
      className={classNames(styles.listItemText, className)}
      {...passedProps}
    >
      <span className={styles.primary}>
        {link ? <Link href={link}>{primary}</Link> : primary}
      </span>
      <span className={styles.secondary}>{secondary}</span>
      {children}
    </div>
  );
}

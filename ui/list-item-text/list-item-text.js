import classNames from "classnames";
import styles from "./list-item-text.module.css";

export default function ListItemText({
  primary,
  secondary,
  className,
  children,
  ...passedProps
}) {
  return (
    <div
      className={classNames(styles.listItemText, className)}
      {...passedProps}
    >
      <span className={styles.primary}>{primary}</span>
      <span className={styles.secondary}>{secondary}</span>
      {children}
    </div>
  );
}

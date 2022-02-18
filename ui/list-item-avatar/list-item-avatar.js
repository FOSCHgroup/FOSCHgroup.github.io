import classNames from "classnames";
import styles from "./list-item-avatar.module.css";

export default function ListItemAvatar({ className, ...passedProps }) {
  return (
    <div
      className={classNames(styles.listItemAvatar, className)}
      {...passedProps}
    />
  );
}

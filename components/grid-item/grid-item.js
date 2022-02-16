import classNames from "classnames";
import styles from "./grid-item.module.css";

export default function GridItem({ className, ...passedProps }) {
  return (
    <div className={classNames(styles.gridItem, className)} {...passedProps} />
  );
}

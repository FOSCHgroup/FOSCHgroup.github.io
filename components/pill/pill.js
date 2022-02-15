import classNames from "classnames";
import styles from "./pill.module.css";

export default function Pill({
  className,
  label,
  basic,
  area,
  ...passedProps
}) {
  return (
    <div
      className={classNames(
        styles.pill,
        styles[area],
        basic && styles.basic,
        className
      )}
      {...passedProps}
    >
      {label}
    </div>
  );
}

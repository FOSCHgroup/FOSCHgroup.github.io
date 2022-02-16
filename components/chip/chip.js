import classNames from "classnames";
import styles from "./chip.module.css";

export default function Chip({
  className,
  label,
  basic,
  area,
  ...passedProps
}) {
  return (
    <div
      className={classNames(
        styles.chip,
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

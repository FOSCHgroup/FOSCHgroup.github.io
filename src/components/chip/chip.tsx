import { HTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./chip.module.css";

interface Props extends HTMLAttributes<HTMLDivElement> {
  label: string;
  basic?: boolean;
  area?: string;
}

export default function Chip({
  className,
  label,
  basic,
  area,
  ...passedProps
}: Props) {
  return (
    <div
      className={classNames(
        styles.chip,
        area && styles[area],
        basic && styles.basic,
        className
      )}
      {...passedProps}
    >
      {label}
    </div>
  );
}

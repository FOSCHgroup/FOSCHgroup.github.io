import classNames from "classnames";
import styles from "./card.module.css";

export default function Card({
  image,
  title,
  video,
  link,
  details,
  date,
  className,
  children,
  variant,
  ...passedProps
}) {
  return (
    <div
      className={classNames(styles.card, className, styles[variant])}
      {...passedProps}
    >
      {children}
    </div>
  );
}

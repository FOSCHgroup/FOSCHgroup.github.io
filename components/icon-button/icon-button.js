import classNames from "classnames";
import styles from "./icon-button.module.css";

export default function IconButton({ icon, className, show, ...passedProps }) {
  return (
    <button
      className={classNames(styles.iconButton, styles.topButton, {
        [styles.show]: show,
      })}
      {...passedProps}
    >
      {icon}
    </button>
  );
}

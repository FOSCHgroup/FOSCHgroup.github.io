import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./icon-button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: JSX.Element;
  show: boolean;
}

export default function IconButton({
  icon,
  className,
  show,
  ...passedProps
}: Props) {
  return (
    <button
      className={classNames(className, styles.iconButton, styles.topButton, {
        [styles.show]: show
      })}
      {...passedProps}
    >
      {icon}
    </button>
  );
}

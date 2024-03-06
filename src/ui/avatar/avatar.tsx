import { ImgHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./avatar.module.css";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  variant?: string;
}

export default function Avatar({ className, variant, ...passedProps }: Props) {
  if (!passedProps.src) return null;

  return (
    <img
      className={classNames(styles.avatar, styles[variant], className)}
      {...passedProps}
    />
  );
}

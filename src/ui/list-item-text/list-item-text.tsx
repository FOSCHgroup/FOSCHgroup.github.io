import { HTMLAttributes } from "react";
import Link from "../link/link";
import Typography from "../typography/typography";
import classNames from "classnames";
import styles from "./list-item-text.module.css";

interface Props extends HTMLAttributes<HTMLElement> {
  primary: string;
  secondary?: string;
  link?: string;
}

export default function ListItemText({
  primary,
  secondary,
  className,
  children,
  link,
  ...passedProps
}: Props) {
  return (
    <div
      className={classNames(styles.listItemText, className)}
      {...passedProps}
    >
      <Typography component="span" className={styles.primary}>
        {link ? <Link href={link}>{primary}</Link> : primary}
      </Typography>
      <Typography component="span" className={styles.secondary}>
        {secondary}
      </Typography>
      {children}
    </div>
  );
}

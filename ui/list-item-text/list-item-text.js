import classNames from "classnames";
import Link from "../link/link";
import Typography from "../typography/typography";
import styles from "./list-item-text.module.css";

export default function ListItemText({
  primary,
  secondary,
  className,
  children,
  link,
  ...passedProps
}) {
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

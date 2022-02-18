import classNames from "classnames";
import Link from "../link/link";
import Typography from "../typography/typography";
import styles from "./card-header.module.css";

export default function CardHeader({
  title,
  subtitle,
  link,
  className,
  ...passedProps
}) {
  return (
    <div className={classNames(styles.cardHeader, className)} {...passedProps}>
      <Typography className={styles.title}>
        {link ? <Link href={link}>{title}</Link> : title}
      </Typography>
      {subtitle && (
        <Typography className={styles.subtitle}>{subtitle}</Typography>
      )}
    </div>
  );
}

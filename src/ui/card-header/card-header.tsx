import { HTMLAttributes } from "react";
import Link from "../link/link";
import Typography from "../typography/typography";
import classNames from "classnames";
import styles from "./card-header.module.css";

interface Props extends HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  link?: string;
}

export default function CardHeader({
  title,
  subtitle,
  link,
  className,
  ...passedProps
}: Props) {
  return (
    <div className={classNames(styles.cardHeader, className)} {...passedProps}>
      <Typography variant="h4" className={styles.title}>
        {link ? <Link href={link}>{title}</Link> : title}
      </Typography>
      {subtitle && (
        <Typography variant="body2" className={styles.subtitle}>
          {subtitle}
        </Typography>
      )}
    </div>
  );
}

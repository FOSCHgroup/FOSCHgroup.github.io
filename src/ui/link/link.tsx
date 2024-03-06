import { AnchorHTMLAttributes } from "react";
import Link from "next/link";
import classNames from "classnames";
import styles from "./link.module.css";

export default function MyLink({
  className,
  children,
  href,
  ...passedProps
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (!href) {
    return children;
  }

  return (
    <Link
      className={classNames(styles.link, className)}
      rel="noreferrer"
      target="_blank"
      href={href}
      {...passedProps}
    >
      {children}
    </Link>
  );
}

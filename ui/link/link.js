import classNames from "classnames";
import Link from "next/link";
import styles from "./link.module.css";

export default function MyLink({ className, children, href, ...passedProps }) {
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

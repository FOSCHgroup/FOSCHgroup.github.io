import { AnchorHTMLAttributes } from "react";
import Link from "next/link";

export default function MyLink({
  children,
  href,
  ...passedProps
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (!href) {
    return children;
  }

  return (
    <Link rel="noreferrer" target="_blank" href={href} {...passedProps}>
      {children}
    </Link>
  );
}

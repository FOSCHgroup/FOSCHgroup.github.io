import { HTMLAttributes } from "react";
import classNames from "classnames";

export default function Container({
  className,
  children,
  ...passedProps
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={classNames("section", className)} {...passedProps}>
      <div className="container">{children}</div>
    </div>
  );
}

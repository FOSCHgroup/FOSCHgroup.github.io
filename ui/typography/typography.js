import classNames from "classnames";
import styles from "./typography.module.css";

export default function Typography({
  className,
  color,
  component,
  ...passedProps
}) {
  const props = {
    className: classNames(styles.typography, styles[color], className),
    ...passedProps,
  };

  if (component === "div") {
    return <div {...props} />;
  }

  return <p {...props} />;
}

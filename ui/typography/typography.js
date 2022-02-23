import classNames from "classnames";
import styles from "./typography.module.css";

export default function Typography({
  className,
  color,
  component,
  variant,
  ...passedProps
}) {
  const props = {
    className: classNames(
      styles.typography,
      styles[color],
      styles[variant],
      className
    ),
    ...passedProps,
  };

  switch (component) {
    case "div":
      return <div {...props} />;
    case "h1":
      return (
        <h1 {...props} className={classNames(props.className, styles.h1)} />
      );
    case "h2":
      return (
        <h2 {...props} className={classNames(props.className, styles.h2)} />
      );
    case "h3":
      return (
        <h3 {...props} className={classNames(props.className, styles.h3)} />
      );
    case "h4":
      return (
        <h4 {...props} className={classNames(props.className, styles.h4)} />
      );
    case "h5":
      return (
        <h5 {...props} className={classNames(props.className, styles.h5)} />
      );
    case "h6":
      return (
        <h6 {...props} className={classNames(props.className, styles.h6)} />
      );
    case "span":
      return <span {...props} />;
    default:
      return <p {...props} />;
  }
}

import classNames from "classnames";
import styles from "./col.module.css";

export default function Col({ xs, ...passedProps }) {
  return (
    <div
      className={classNames({
        [styles[`col-xs-${xs}`]]: xs,
      })}
      {...passedProps}
    />
  );
}

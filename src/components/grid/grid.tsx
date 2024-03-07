import { PropsWithChildren } from "react";
import styles from "./grid.module.css";

export default function Grid(props: PropsWithChildren) {
  return <div className={styles.grid} {...props} />;
}

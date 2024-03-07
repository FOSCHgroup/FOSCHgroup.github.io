import { PropsWithChildren } from "react";
import styles from "./list.module.css";

export default function List(props: PropsWithChildren) {
  return <ul className={styles.list} {...props} />;
}

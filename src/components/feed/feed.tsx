import { PropsWithChildren } from "react";
import styles from "./feed.module.css";

export default function Feed(props: PropsWithChildren) {
  return <div className={styles.feed} {...props} />;
}

import styles from "./feed.module.css";

export default function Feed({ children, ...passedProps }) {
  return (
    <div className={styles.feed} {...passedProps}>
      {children}
    </div>
  );
}

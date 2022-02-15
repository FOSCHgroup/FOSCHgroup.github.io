import styles from "./list.module.css";

export default function List(props) {
  return <ul className={styles.list} {...props} />;
}

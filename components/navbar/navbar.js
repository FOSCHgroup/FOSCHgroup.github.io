import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">FOSCH Group</Link>
      </div>
      <div className={styles.links}>
        <Link href="/team">Our Team</Link>
        <Link href="/research">Research</Link>
        <Link href="/divulgacion">Divulgación</Link>
        <Link href="/formacion">Formación</Link>
        <Link href="/resources">Resources</Link>
      </div>
    </nav>
  );
}

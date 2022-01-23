import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">FOSCH Group</Link>
      <Link href="/team">Our Team</Link>
      <Link href="/research">Research</Link>
      <Link href="/divulgacion">Divulgación</Link>
      <Link href="/formacion">Formación</Link>
      <Link href="/resources">Resources</Link>
    </nav>
  );
}

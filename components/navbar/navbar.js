import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">FOSCH Group</Link>
      <Link href="/nuestro-equipo">Nuestro Equipo</Link>
      <Link href="/investigacion">Investigación</Link>
      <Link href="/divulgacion">Divulgación</Link>
      <Link href="/formacion">Formación</Link>
      <Link href="/recursos">Recursos</Link>
    </nav>
  );
}

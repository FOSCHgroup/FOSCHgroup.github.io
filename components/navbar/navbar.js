import Link from "next/link";
import styles from "./navbar.module.css";
import ActivityIcon from "../icons/activity";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link passHref href="/">
          <a>
            <ActivityIcon /> FOSCH Group
          </a>
        </Link>
      </div>
      <div className={styles.links}>
        <Link href="/team">Our Team</Link>
        <Link href="/research">Research</Link>
        <Link href="/talks">Talks</Link>
        <Link href="/education">Education</Link>
        <Link href="/resources">Resources</Link>
      </div>
    </nav>
  );
}

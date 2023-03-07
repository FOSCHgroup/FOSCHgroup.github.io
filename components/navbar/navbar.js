import Link from "next/link";
import styles from "./navbar.module.css";
import ActivityIcon from "../icons/activity";
import HamburgerIcon from "../icons/hamburger";
import CloseIcon from "../icons/close";
import { useState } from "react";
import classNames from "classnames";

export default function Navbar() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuExpanded((isMenuExpanded) => !isMenuExpanded);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <ActivityIcon /> FOSCH Group
        </Link>
      </div>
      <div className={styles.icon} onClick={handleToggleMenu}>
        {isMenuExpanded ? <CloseIcon /> : <HamburgerIcon />}
      </div>
      <div
        className={classNames(styles.links, {
          [styles.hide]: !isMenuExpanded,
        })}
      >
        <Link href="/team">Our Team</Link>
        <Link href="/research">Research</Link>
        <Link href="/talks">Talks</Link>
        <Link href="/education">Education</Link>
        <Link href="/resources">Resources</Link>
      </div>
    </nav>
  );
}

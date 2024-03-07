"use client";

import ActivityIcon from "../icons/activity";
import Link from "next/link";
import { MouseEvent } from "react";
import classNames from "classnames";
import styles from "./navbar.module.css";

export default function Navbar() {
  const handleClickBurger = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const menu = document.getElementById("navbar-menu");
    if (menu === null) return;
    if (menu.classList.contains("is-active")) {
      menu.classList.remove("is-active");
      event.currentTarget.classList.remove("is-active");
    } else {
      menu.classList.add("is-active");
      event.currentTarget.classList.add("is-active");
    }
  };

  return (
    <nav
      className="navbar p-4 is-align-items-center"
      role="navigation"
      aria-label="main navigation"
      id="header"
    >
      <div className="container is-align-items-center">
        <div className={classNames("navbar-brand", styles.logo)}>
          <Link className="navbar-item is-size-4" href="/">
            <ActivityIcon /> FOSCH Group
          </Link>
          <a
            role="button"
            className={classNames("navbar-burger", styles.burger)}
            id="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navMenu"
            onClick={handleClickBurger}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className="navbar-menu navbar-end" id="navbar-menu">
          <Link className="navbar-item is-size-5" href="/team">
            Our Team
          </Link>
          <Link className="navbar-item is-size-5" href="/research">
            Research
          </Link>
          <Link className="navbar-item is-size-5" href="/talks">
            Talks
          </Link>
          <Link className="navbar-item is-size-5" href="/education">
            Education
          </Link>
          <Link className="navbar-item is-size-5" href="/resources">
            Resources
          </Link>
        </div>
      </div>
    </nav>
  );
}

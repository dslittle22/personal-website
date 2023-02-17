"use client";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import styles from "@/styles/header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Header() {
  let path = usePathname()?.substring(1);
  const slashIdx = path?.search("/");
  if (slashIdx !== -1) {
    path = path?.substring(0, slashIdx);
  }

  return (
    <>
      <ThemeSwitcher styles={styles} />
      <header className={styles.header}>
        <div className={styles.linkWrapper}>
          <Link href="/">
            <h1 className={styles.siteHeader}>Danny Little</h1>
          </Link>
          <ul>
            <li className={path === "blog" ? styles.active : ""}>
              <Link href="/blog">Blog</Link>
            </li>
            <li className={path === "projects" ? styles.active : ""}>
              <Link href="/projects">Projects</Link>
            </li>
            <li className={path === "music" ? styles.active : ""}>
              <Link href="/music">Music</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

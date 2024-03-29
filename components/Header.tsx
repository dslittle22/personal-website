"use client";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import styles from "@/styles/header.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  let path = usePathname()?.substring(1);
  const slashIdx = path?.search("/");
  if (slashIdx !== -1) {
    path = path?.substring(0, slashIdx);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles["link-wrapper"]}>
          <Link href="/">
            <h1>Danny Little</h1>
          </Link>
          <nav>
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
          </nav>
        </div>
        <ThemeSwitcher styles={styles} />
      </header>
      <div></div>
    </>
  );
}

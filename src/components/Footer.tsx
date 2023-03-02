import React from "react";
import SmartLink from "./SmartLink";
import styles from "@/styles/footer.module.scss";

type Props = {};

export default function Footer({}: Props) {
  const startYear = 2023;
  const currentYear = new Date().getFullYear();
  const dateStr =
    currentYear === startYear ? startYear : `${startYear} - ${currentYear}`;

  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a target={"_blank"} href="/rss/feed.xml">
          Rss
        </a>
        <SmartLink href="https://github.com/dslittle22">GitHub</SmartLink>
        <SmartLink href="https://www.linkedin.com/in/danny-little-3b3665178/">
          LinkedIn
        </SmartLink>
        <SmartLink href="https://www.youtube.com/@daniellittle9015">
          YouTube
        </SmartLink>
        <SmartLink href="https://mastodon.social/@dslittle22">
          Mastodon
        </SmartLink>
      </div>
      <div className={styles.bottomText}>Made by Danny Little in {dateStr}</div>
    </footer>
  );
}

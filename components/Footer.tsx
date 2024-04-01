import SmartLink from "./SmartLink";
import styles from "@/styles/footer.module.scss";

export default function Footer() {
  const start_year = 2023;
  const current_year = new Date().getFullYear();
  const dateStr =
    current_year === start_year
      ? start_year
      : `${start_year} - ${current_year}`;

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
      <div className={styles["bottom-text"]}>
        Made by Danny Little in {dateStr}
      </div>
    </footer>
  );
}

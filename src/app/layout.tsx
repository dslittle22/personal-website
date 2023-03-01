// import "@/styles/prism-material-dark.css";
import { Roboto_Serif, Open_Sans } from "next/font/google";
import type { Metadata } from "next";

import "styles/globals.scss";
import "styles/code.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const heading = Roboto_Serif({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const prose = Open_Sans({
  subsets: ["latin"],
  variable: "--font-prose",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Danny Little",
    template: "Danny Little | %s",
  },
  icons: {
    shortcut: "favicon/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: JSX.Element }) {
  const setInitialTheme = `
    const theme = window.localStorage.getItem('theme')
    const fallbackTheme = theme || window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    document.body.dataset.theme = theme || fallbackTheme
  `;

  return (
    <html lang="en" className={`${heading.variable} ${prose.variable}`}>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS 2.0"
          href="/rss/feed.xml"
        />
      </head>

      <body>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }}></script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

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
  description: "Web developer",
  openGraph: {
    title: "Danny Little",
    description: "Web developer",
    url: "https://dlittle.me",
    siteName: "Danny Little",
    images: [
      {
        url: "https://dlittle.me/senior-portrait.jpeg",
        width: 853,
        height: 1280,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "favicon/favicon.ico",
    shortcut: "favicon/favicon.ico",
    apple: "favicon/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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

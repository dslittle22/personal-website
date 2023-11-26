import { Roboto_Serif, Open_Sans } from "next/font/google";
import type { Metadata } from "next";

import "styles/globals.scss";
import "styles/code.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { prod_url } from "@/lib/site_url";

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
  metadataBase: new URL(prod_url),
  openGraph: {
    title: "Danny Little",
    description: "Web developer",
    url: "https://dlittle.me",
    siteName: "Danny Little",
    images: [
      {
        url: "https://dlittle.me/favicon/android-chrome-512x512.png",
        width: 512,
        height: 512,
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
  const set_initial_theme = `
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
        <script
          dangerouslySetInnerHTML={{ __html: set_initial_theme }}
        ></script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

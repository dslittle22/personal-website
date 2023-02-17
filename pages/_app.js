import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "../styles/theme.js";
import GlobalStyle from "../styles/global";
import Head from "next/head";
import "prismjs/themes/prism-okaidia.css";
import Layout from "@/components/layout";
import GridLayout from "@/components/GridLayout";
import React from "react";

const Global = createGlobalStyle`${GlobalStyle}`;

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Global />
      <Head>
        <link rel="shortcut icon" href="favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={theme}>
        <Layout>
          <GridLayout>
            <Component {...pageProps} />
          </GridLayout>
        </Layout>
      </ThemeProvider>
    </React.Fragment>
  );
}

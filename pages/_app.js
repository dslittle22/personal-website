import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '../styles/theme.js';
import GlobalStyle from '../styles/global';
import Head from 'next/head';
import 'prismjs/themes/prism-okaidia.css';

const Global = createGlobalStyle`${GlobalStyle}`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Global />
      <Head>
        <link rel='shortcut icon' href='favicon/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='favicon/apple-touch-icon.png'
        />
        <link rel='manifest' href='manifest.json' />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

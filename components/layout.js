import { useEffect } from 'react';
import Head from 'next/head';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import Footer from './Footer';

export const siteTitle = 'Danny Little';

export default function Layout({ children, page }) {
  return (
    <>
      <Head>
        <title>{page ? `Danny Little - ${page}` : `Danny Little`}</title>
        <meta
          property='og:title'
          content={page ? `Danny Little - ${page}` : `Danny Little`}
          key='title'
        />
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Danny Little - personal Website' />
      </Head>
      <MobileHeader />
      <DesktopHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}

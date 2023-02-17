import Link from 'next/link';
import Head from 'next/head';
import Conway from '../components/Conway';

const Error = () => {
  return <>
    <Head>
      <title>{'Danny Little - 404'}</title>
    </Head>
    <h1>Uh Oh!</h1>
    <p>
      This page doesn't exist. Feel free to stick around and play Conway's
      Game of Life, or go to the full sized version{' '}
      <Link href='https://conwaysgameoflife-react.netlify.app/'>
        here.
      </Link>
    </p>
    {typeof window !== 'undefined' ? <Conway /> : ''}
  </>;
};

export default Error;

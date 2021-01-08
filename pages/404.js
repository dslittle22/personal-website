import Link from 'next/link';
import Layout from '../components/layout';
import Conway from '../components/Conway';

const Error = () => {
  return (
    <Layout page='Projects'>
      <h1>Uh Oh!</h1>
      <p>
        This page doesn't exist. Feel free to stick around and play Conway's
        Game of Life, or go to the full sized version{' '}
        <Link href='https://conwaysgameoflife-react.netlify.app/'>
          <a>here.</a>
        </Link>
      </p>
      {typeof window !== 'undefined' ? <Conway /> : ''}
    </Layout>
  );
};

export default Error;

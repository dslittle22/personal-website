import Link from 'next/link';
import Layout from '../components/layout';
import Conway from '../components/Conway';

const Error = () => {
  return (
    <Layout page='Projects'>
      <h1>Uh Oh!</h1>
      <p>
        You visited a page that doesn't exist on my website. Sorry about that.
        Feel free to{' '}
        <Link href='/'>
          <a>Go Home</a>
        </Link>
        , or stick around and play{' '}
        <a
          href='https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life'
          target='blank'
        >
          Conway's Game of Life
        </a>
        .
      </p>
      {typeof window !== 'undefined' ? <Conway /> : ''}
    </Layout>
  );
};

export default Error;

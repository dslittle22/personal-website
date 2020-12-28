import Link from 'next/link';
import Layout from '../components/layout';

const Error = () => {
  return (
    <Layout page='Projects'>
      <h1>Uh Oh!</h1>
      <p>
        You visited a page that doesn't exist on my website. Sorry about that.
      </p>
      <Link href='/'>
        <a>Go Home</a>
      </Link>
    </Layout>
  );
};

export default Error;

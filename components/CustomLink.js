import Link from 'next/link';

const CustomLink = props => {
  const { href } = props;

  if (href && href.startsWith('#fn')) {
    return <a {...props} />;
  }

  if ((href && href.startsWith('/')) || href.startsWith('#')) {
    return (
      (<Link href={href} {...props}>

      </Link>)
    );
  }

  return <a target='_blank' {...props} />;
};

export default CustomLink;

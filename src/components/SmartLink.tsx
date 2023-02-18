import Link from "next/link";

const SmartLink = (props: {
  children: React.ReactNode;
  href: string;
  [any: string]: any;
}) => {
  const { href, children } = props;
  if (href && href.startsWith("#")) {
    return <a className="autolink" {...props} />;
  }

  return (
    <Link {...props} target={href.startsWith("/") ? "" : "_blank"}>
      {children}
    </Link>
  );
};

export default SmartLink;

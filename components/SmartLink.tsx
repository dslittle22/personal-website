import React from "react";
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
    <Link target={href.startsWith("/") ? "" : "_blank"} {...props}>
      {children}
    </Link>
  );
};

export default SmartLink;

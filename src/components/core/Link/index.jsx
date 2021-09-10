import Link from "next/link";
import React from "react";

const LinkComponent = ({ children, to, ...rest }) => {
  return (
    <>
      <Link href={to}>
        <a {...rest}>{children}</a>
      </Link>
    </>
  );
};

export default LinkComponent;

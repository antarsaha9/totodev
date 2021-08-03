import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const BreadCrumbSection = () => {
  const { asPath } = useRouter();
  const pathList = asPath.slice(1).split("/");

  return (
    <section className="cover-image bg-background3">
      <div className="bannerimg">
        <div className="header-text mb-0">
          <div className="container">
            <div className="text-center text-white">
              <h1 className="text-capitalize">{pathList.slice(-1)}</h1>
              <ol className="breadcrumb text-center">
                <li className="breadcrumb-item">
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                {pathList.map((item, ind) =>
                  pathList.length - 1 !== ind ? (
                    <li className="breadcrumb-item text-capitalize" key={item}>
                      <Link href={`/${item}`}>
                        <a>{item}</a>
                      </Link>
                    </li>
                  ) : (
                    <li
                      className="breadcrumb-item text-capitalize active text-white"
                      key={item}
                    >
                      {item}
                    </li>
                  )
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BreadCrumbSection;

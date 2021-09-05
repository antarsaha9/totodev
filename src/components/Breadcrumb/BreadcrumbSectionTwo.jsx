import React from "react";
import Link from "../core/Link";
const BreadCrumbSection =({title,nestedPageName,currentPageName}) =>{
  return (
    <section>
      <div
        className="bannerimg">
        <div className="header-text mb-0">
          <div className="container">
            <div className="text-center text-white">
              <h1>{title}</h1>
              <ol className="breadcrumb text-center">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <a href="#" className="pointer-none">
                    {nestedPageName}
                  </a>
                </li>
                <li
                  className="breadcrumb-item active text-white"
                  aria-current="page"
                >
                  {currentPageName}
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default  BreadCrumbSection;
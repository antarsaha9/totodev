import React from "react";

const Sepbreadcrumb = ({nestedPageName,currentPageName}) =>{
  return (
    <div className="bg-white border-bottom">
      <div className="container">
        <div className="page-header">
          <h4 className="page-title">{currentPageName}</h4>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">{nestedPageName}</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              {currentPageName}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default  Sepbreadcrumb;
import React from "react";

const ProductInformationCard = ({ product }) => {
  return (
    <div className="card mb-0">
      <div className="card-header">
        <h3 className="card-title">Product Information</h3>
      </div>
      <div className="card-body">
        <div className="marketplace-content">
          <ul className="list-unstyled widget-spec mb-0">
            <li>
              <span className="w-40 font-weight-semibold text-dark">
                Last Update
              </span>
              <span className="w-60 text-muted">18 January 2019</span>
            </li>
            <li className="pt-2">
              <span className="w-40 font-weight-semibold text-dark">
                Release Date
              </span>
              <span className="w-60 text-muted"> 10 January 2019</span>
            </li>
            <li className="pt-2">
              <span className="w-40 font-weight-semibold text-dark">
                Category
              </span>
              <span className="w-60 text-muted">
                <a href="#">Corporate</a>, <a href="#">Classifieds</a>
              </span>
            </li>
            <li className="pt-2">
              <span className="w-40 font-weight-semibold text-dark">
                High Resolution
              </span>
              <span className="w-60 text-muted">
                <a href="#"> Yes </a>
              </span>
            </li>
            <li className="pt-2">
              <span className="w-40 font-weight-semibold text-dark">
                Supported Browsers
              </span>
              <span className="w-60 text-muted">
                <a href="#"> Chrome</a>, <a href="#">IE7</a>,{" "}
                <a href="#">IE6</a>, <a href="#">IE9</a>, <a href="#">IE10</a>,
                <a href="#">IE11</a>, <a href="#">Opera</a>,{" "}
                <a href="#">Firefox</a>, <a href="#">Safari</a>
              </span>
            </li>
            <li className="pt-2">
              <span className="w-40 font-weight-semibold text-dark">
                Documentation
              </span>
              <span className="w-60 text-muted">
                <a href="#"> Well Documented</a>
              </span>
            </li>
            <li className="pt-2">
              <span className="w-40 font-weight-semibold text-dark">
                Layout
              </span>
              <span className="w-60 text-muted">
                <a href="#"> Responsive</a>
              </span>
            </li>
            <li className="pt-2">
              <span className="w-40 font-weight-semibold text-dark">
                Bootstrap Compatibility
              </span>
              <span className="w-60 text-muted">
                {" "}
                <a href="#">version 4.1.3</a>
              </span>
            </li>
            <li className="pt-2">
              <span className="w-40 font-weight-semibold text-dark">
                Columns
              </span>
              <span className="w-60 text-muted">
                {" "}
                <a href="#">4+</a>
              </span>
            </li>
            <li className="pt-2">
              <span className="w-40 font-weight-semibold text-dark">
                Files Included
              </span>
              <span className="w-60 text-muted">
                <a href="#">HTML Files</a>, <a href="#">CSS Files</a>,{" "}
                <a href="#">JS Files</a>
              </span>
            </li>
            <li className="pt-2">
              <span className="w-40 font-weight-semibold text-dark">Tags</span>
              <span className="w-60 text-muted">
                {product?.tags}

                {/* <a href="#">Bootstrap</a>,<a href="#"> Ads</a>,{" "}
                <a href="#">Business</a>, <a href="#">E-Commerce</a>,{" "}
                <a href="#">Classified</a>, <a href="#">Car</a>,{" "}
                <a href="#">Real Estate|</a>,<a href="#"> Education </a>,{" "}
                <a href="#">Jobs </a>, <a href="#">Marketplace </a>,{" "}
                <a href="#">Bidding </a>, <a href="#">Coupons </a>,
                <a href="#">Beauty</a>, <a href="#">Multipurpose</a>,{" "}
                <a href="#">Corporate</a>, <a href="#">Business </a>,{" "}
                <a href="#">Listing </a>, <a href="#">Listings </a>,{" "}
                <a href="#">Directory</a>, <a href="#">Restaurant </a>,
                <a href="#"> Hotel,Company</a> */}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ProductInformationCard;

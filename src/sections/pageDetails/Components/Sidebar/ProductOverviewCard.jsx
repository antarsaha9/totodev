import React from "react";
import { paths } from "src/helper";
import LoaderSpinner from "~components/Cards/LoaderSpinner";
import { Link } from "~components/core";
import ImageWrapper from "~components/Widgets/Image";
import productThumbnail from "../../../../assets/images/media/pictures/thumb-list/thumb-2.jpg";

const ProductOverviewCard = ({ product }) => {
  console.log('ProductOverviewCard', product);
  return (
    <>{product.loading ? <LoaderSpinner /> :
      <div className="card overflow-hidden">
        <div className="card-body">
          <div className="item-det mb-4">
            <div className="text-dark">
              <h2 className="fs-22">
                {product?.item_name ||
                  "Bioplex - Beauty & Spa Creative Wordpress Template"}
              </h2>
            </div>
            <div className="d-flex mt-2">
              <ul className="d-flex">
                <li className="mr-5">
                  <Link to={{ pathname: paths.PageList, query: { category_name: product.category_name } }} className="icons">
                    <i className="fe fe-briefcase text-muted mr-1" />{" "}
                    {product?.category_name || "Wordpress"}
                  </Link>
                </li>
                {/* <li className="mr-5">
                  <div href="#" className="icons">
                    <i className="fe fe-calendar text-muted mr-1" /> 5 hours ago
                  </div>
                </li> */}
                {/* <li className="mr-5">
                  <a href="#" className="icons">
                    <i className="fe fe-eye text-muted mr-1" /> 765
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="marketplace-single-imag mx-auto text-center">
            <div className="d-block link-overlay">
              <ImageWrapper
                src={product?.image_url || productThumbnail}
                alt="product-card"
                responsive
                height={200}
                width={320}
              />
              <span className="link-overlay-bg rounded">
                <i className="fe fe-search fs-25" />
              </span>
            </div>
            {/* <div className="p-4 border btn-list">
              <a href="#" className="btn ripple  btn-primary btn-lg-0">
                <i className="fe fe-airplay" /> Live Preview
              </a>
              <a href="#" className="btn ripple  btn-outline-primary btn-lg-0">
                <i className="fe fe-heart" /> Add to Favorites
              </a>
              <a href="#" className="btn ripple  btn-light btn-lg-0">
                <i className="fa fa-folder-open-o" /> Add to Collection
              </a>
            </div> */}
          </div>
        </div>
      </div>}
    </>
  );
};
export default ProductOverviewCard;

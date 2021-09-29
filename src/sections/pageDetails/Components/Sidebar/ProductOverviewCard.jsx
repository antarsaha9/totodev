import Image from "next/image";
import React from "react";
import LoaderSpinner from "~components/Cards/LoaderSpinner";
import productThumbnail from "../../../../assets/images/media/pictures/thumb-list/thumb-2.jpg";

const ProductOverviewCard = ({ product }) => {
  console.log(product);
  return (
    <>{product.loading ? <LoaderSpinner /> :
      <div className="card overflow-hidden">
        <div className="card-body">
          <div className="item-det mb-4">
            <a href="#" className="text-dark">
              <h2 className="fs-22">
                {product?.item_name ||
                  "Bioplex - Beauty & Spa Creative Wordpress Template"}
              </h2>
            </a>
            <div className="d-flex mt-2">
              <ul className="d-flex">
                <li className="mr-5">
                  <a href="#" className="icons">
                    <i className="fe fe-briefcase text-muted mr-1" />{" "}
                    {product?.category_name || "Wordpress"}
                  </a>
                </li>
                <li className="mr-5">
                  <a href="#" className="icons">
                    <i className="fe fe-calendar text-muted mr-1" /> 5 hours ago
                  </a>
                </li>
                <li className="mr-5">
                  <a href="#" className="icons">
                    <i className="fe fe-eye text-muted mr-1" /> 765
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="marketplace-single-imag mx-auto text-center">
            <a href="/#" className="d-block link-overlay">
              <Image
                src={product?.image_url || productThumbnail}
                alt="product-card"
                layout="responsive"
                height="200px"
                width="320px"
                placeholder="blur"
                blurDataURL={productThumbnail}
              />
              <span className="link-overlay-bg rounded">
                <i className="fe fe-search fs-25" />
              </span>
            </a>
            <div className="p-4 border btn-list">
              <a href="#" className="btn ripple  btn-primary btn-lg-0">
                <i className="fe fe-airplay" /> Live Preview
              </a>
              <a href="#" className="btn ripple  btn-outline-primary btn-lg-0">
                <i className="fe fe-heart" /> Add to Favorites
              </a>
              <a href="#" className="btn ripple  btn-light btn-lg-0">
                <i className="fa fa-folder-open-o" /> Add to Collection
              </a>
            </div>
          </div>
        </div>
      </div>}
    </>
  );
};
export default ProductOverviewCard;

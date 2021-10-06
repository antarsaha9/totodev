import React from "react";
import profileImage from "../../../../assets/images/users/female/3.jpg";
import ProductInformationCard from "./ProductInformationCard";
import ProfileCard from "./ProfileCard";
import SidebarBuyCard from "./SidebarBuyCard";

const Sidebar = ({ product, addToCart }) => {
  return (
    <>
      <SidebarBuyCard {...{ product, addToCart }} />
      <div className="card bg-primary text-white border-0 overflow-hidden">
        <div className="power-ribbon power-ribbon-top-left text-warning">
          <span className="bg-warning">
            <i className="fa fa-bolt" />
          </span>
        </div>
        <div className="card-body">
          <h5 className="mb-0 font-weight-normal pl-4">
            This Item was Featured On WebSite
          </h5>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="d-flex">
            <p className="mb-1  mr-3 mt-2">Total Slaes:</p>
            <p className="mb-0 fs-25 font-weight-semibold">
              <i className="typcn typcn-shopping-cart text-dark mr-1" />
              567
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="d-flex">
            <p className="mb-1 mr-3 mt-2">Total Comments:</p>
            <p className="mb-0 fs-25 ">
              <i className="typcn typcn-messages text-dark mr-1" />
              <a href="#" className="text-dark font-weight-semibold">
                12
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <div className="item-rating-info d-flex mb-4">
            <h5 className="mr-3 ">Items Rating:</h5>
            <span className="item-ratings fs-14">
              <a href="#">
                <i className="fa fa-star text-warning "> </i>
              </a>
              <a href="#">
                <i className="fa fa-star text-warning "> </i>
              </a>
              <a href="#">
                <i className="fa fa-star text-warning "> </i>
              </a>
              <a href="#">
                <i className="fa fa-star text-warning "> </i>
              </a>
              <a href="#">
                <i className="fa fa-star-o text-warning mr-2"> </i>
              </a>
              ({product?.overall_rating || 567})
            </span>
          </div>
          {product?.stars?.map((rating, ind) => (
            <div className="mb-3">
              <small className="mb-0">
                {product.stars.length - ind} Star
                <span className="float-right text-muted">{rating}%</span>
              </small>
              <div className="progress h-1 mt-1">
                <div
                  className={`progress-bar bg-warning w-${rating}`}
                  role="progressbar"
                />
              </div>
            </div>
          ))}
          {/* <div className="mb-3">
            <small className="mb-0">
              4 Star<span className="float-right text-muted">50%</span>
            </small>
            <div className="progress h-1 mt-1">
              <div
                className="progress-bar bg-warning w-40"
                role="progressbar"
              />
            </div>
          </div>
          <div className="mb-3">
            <small className="mb-0">
              3 Star<span className="float-right text-muted">30%</span>
            </small>
            <div className="progress h-1 mt-1">
              <div
                className="progress-bar bg-warning w-40"
                role="progressbar"
              />
            </div>
          </div>
          <div className="mb-3">
            <small className="mb-0">
              2 Star<span className="float-right text-muted">20%</span>
            </small>
            <div className="progress h-1 mt-1">
              <div
                className="progress-bar bg-warning w-20"
                role="progressbar"
              />
            </div>
          </div>
          <div className="mb-0">
            <small className="mb-0">
              1 Star<span className="float-right text-muted">10%</span>
            </small>
            <div className="progress h-1 mt-1">
              <div className="progress-barbg-warning w-10" role="progressbar" />
            </div>
          </div> */}
        </div>
      </div>
      <ProfileCard
        image={profileImage}
        title="Vania Laurin"
        date="Member since 8 November 2010"
      />
      <ProductInformationCard product={product} />
    </>
  );
};

export default Sidebar;

import React from "react";
import profileImage from "../../../../assets/images/users/female/3.jpg";
import ProductInformationCard from "./ProductInformationCard";
import ProfileCard from "./ProfileCard";
import SidebarBuyCard from "./SidebarBuyCard";
import { TiShoppingCart, TiMessages } from 'react-icons/ti';

const Sidebar = ({ product, addToCart, buyNow }) => {
  return (
    <>
      <SidebarBuyCard {...{ product, addToCart, buyNow }} />
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
      {product.total_sales && <div className="card">
        <div className="card-body">
          <div className="d-flex">
            <p className="mb-1  mr-3 mt-2">Total Sales:</p>
            <p className="mb-0 fs-25 font-weight-semibold">
              {/* <i className="typcn typcn-shopping-cart text-dark mr-1" /> */}
              <TiShoppingCart className="text-dark mr-1" style={{ marginBottom: "-4px" }} />
              {product.total_sales}
            </p>
          </div>
        </div>
      </div>}
      {product.total_comments && <div className="card">
        <div className="card-body">
          <div className="d-flex">
            <p className="mb-1 mr-3 mt-2">Total Comments:</p>
            <p className="mb-0 fs-25 ">
              <i className="typcn typcn-messages text-dark mr-1" />
              <TiMessages className="text-dark mr-1" style={{ marginBottom: "-4px" }} />
              <span className="text-dark font-weight-semibold">
                {product.total_comments}
              </span>
            </p>
          </div>
        </div>
      </div>}
      <div className="card">
        <div className="card-body">
          <div className="item-rating-info d-flex mb-4">
            <h5 className="mr-3 ">Items Rating:</h5>
            <span className="item-ratings fs-14">
              {Array.from(Array(Number(5)), (_, index) => {
                const t = index + 1;
                return <i key={t + "pcstr2"} className={`fa fa-star${product.overall_rating >= t ? "-o" : ""} text-warning mr-1`} />
              })}
              <span className="ml-1">({product?.total_rating})</span>
            </span>
          </div>
          {product?.stars?.map((rating, ind) => (
            <div className="mb-3" key={"rating-" + ind}>
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
      <ProfileCard product={product} />
      <ProductInformationCard product={product} />
    </>
  );
};

export default Sidebar;

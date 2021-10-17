import React, { useState } from "react";
import Tooltip from "../Tooltip";
import userImageDefault from "../../assets/images/user-placeholder.png"
import productImageDefault from "../../assets/images/media/pictures/thumb-list/5.jpg"
import StarRating from "~components/Widgets/StarRating";
import { Link } from "~components/core";
import { Button } from "react-bootstrap";
import LoadingButton from "~components/Buttons/LoadingButton";
import { paths } from "src/helper";
import ImageWrapper from "~components/Widgets/Image";
const ProductCardList = ({
  id,
  image = productImageDefault,
  tag,
  star = 3,
  price,
  saleCount,
  userImage = userImageDefault,
  userName,
  userId,
  title,
  date,
  buy,
  className,
  categoryName,
  online
}) => {
  const [buying, setBuying] = useState(false);
  const _buy = function () {
    setBuying(true);
    buy(() => setBuying(false));
  }
  return (
    <div className={`card overflow-hidden card-list-item1 ${className}`}>
      <div className="power-ribbon power-ribbon-top-left text-warning">
        <span className="bg-warning"><i className="fa fa-bolt" /></span>
      </div>
      <div className="d-md-flex">
        <div className="item-card9-img">
          <div className="item-card9-imgs">
            <Link to={{ pathname: paths.PageDetail, query: { id } }} >
              <ImageWrapper
                src={image}
                alt={title}
                width={514}
                height={340}
              />
            </Link>
          </div>
          {/* <div className="item-card9-icons">
            <a href="#" className="item-card9-icons1 bg-pink mx-1" data-toggle="tooltip" data-placement="top" title="Wishlist"> <i className="fa fa fa-heart-o" /></a>
            <a href="#" className="item-card9-icons1 bg-purple mx-1" data-toggle="tooltip" data-placement="top" title="Share"> <i className="icon icon-share" /></a>
          </div> */}
          <div className="item-card7-overlaytext">
            <Link to={{ pathname: paths.PageList, query: { category_name: categoryName } }} className="text-white"> {categoryName} </Link>
          </div>
          <div className="item-trans-rating">
            <div className="rating-stars block">
              <StarRating rating={star} editable={false} />

            </div>
          </div>
        </div>
        <div className="card border-0 mb-0">
          <div className="d-md-flex">
            <div className="item-card9 w-65">
              <div className="card-body pt-4 pb-4">
                <Link to={{ pathname: paths.PageDetail, query: { id } }} className="text-dark">
                  <h3>{title}</h3>
                </Link>
                <ul className="list-unstyled widget-spec1 mt-3 mb-0">
                  <li className="mb-1">
                    <i className="fa fa-circle-o text-muted" aria-hidden="true" /> Meet Seller at public Place
                  </li>
                  <li className="mb-1">
                    <i className="fa fa-circle-o text-muted" aria-hidden="true" /> Check item before you buy
                  </li>
                  <li className="mb-1">
                    <i className="fa fa-circle-o text-muted" aria-hidden="true" /> Check item before you buy
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-md-center w-35 border-left">
              <div className="card-body">
                <h4 className=" text-dark fs-25 mb-4">${price}</h4>
                <p className="mb-1"><span className="text-muted fs-13"> {saleCount} Sales</span></p>
                <p className="mb-0"><span className="text-muted fs-13">Last Updated:</span><span className="text-muted"> {date}</span></p>
              </div>
            </div>
          </div>
          <div className="card-footer pt-1 pl-3 pr-3 pb-1">
            <div className="footerimg d-sm-flex mt-0 mb-0">
              <div className="d-flex footerimg-l mb-0 mt-4">
                <span className="avatar brround mr-2 cover-image" style={{ background: `url(${userImage})` }}>
                  {online ? <span className="avatar-status bg-success" /> : <span className="avatar-status" />}
                </span>
                <Link to={{ pathname: paths.UserProfile, query: { id: userId } }} className="time-title text-muted p-0 leading-normal mt-2">
                  {userName}
                  <i className="fe fe-check-circle text-success fs-12 ml-1" data-toggle="tooltip" data-placement="top" title="verified" />
                </Link>
              </div>
              <div className="footerimg-r ml-auto">
                <div className="btn  btn-list">
                  {/* <a href="#" className="btn ripple  btn-primary"><i className="fe fe-airplay mr-1" />Live Preview</a> */}
                  <LoadingButton variant="secondary" className="ripple" onClick={_buy} loading={buying}>
                    <i className="fe fe-shopping-cart mr-1" />
                    Buy Now
                  </LoadingButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCardList;
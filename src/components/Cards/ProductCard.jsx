import React from "react";
import Tooltip from "../Tooltip";
import { Link } from "~components/core";
import ImageWrapper from "~components/Widgets/Image";
import { paths } from "src/helper";
import StarRating from "~components/Widgets/StarRating";
const ProductCard = ({
  item_id,
  image,
  tag,
  star,
  price,
  userImage,
  userName,
  userId,
  cartCount,
  title,
  text,
  badge,
  className,
}) => {
  return (
    <div className={`card overflow-hidden ${className}`}>
      {badge === "flash" ? (
        <div className="power-ribbon power-ribbon-top-left text-warning">
          <span className="bg-warning">
            <i className="fa fa-bolt" />
          </span>
        </div>
      ) : null}
      {badge === "featured" ? (
        <div className="ribbon ribbon-top-left text-danger">
          <span className="bg-danger">Featured</span>
        </div>
      ) : null}

      <div className="item-card2-tans">
        <div className="item-card7-imgs">
          <Link to={{ pathname: paths.PageDetail, query: { id: item_id } }} className="position-static">
            <div className="cover-image" >
              <ImageWrapper
                src={image}
                alt={"product"}
                width={531}
                height={315}
              />
            </div>
          </Link>
          <div className="tag-text">
            <span className="bg-dark-transparent tag-option">{tag}</span>
          </div>
        </div>
        {/* <div className="item-card2-icons">
          <Tooltip className="bg-primary" tip="Add to Wishlist">
            <i className="fe fe-heart" />
          </Tooltip>
          <Tooltip className="bg-secondary" tip="Buy Now">
            <i className="fe fe-shopping-cart" />
          </Tooltip>
          <Tooltip className="bg-info" tip="View Details">
            <i className="fe fe-eye" />
          </Tooltip>
        </div> */}
      </div>
      <div className="card-body">
        <div className="item-card7-desc">
          <div className="item-card7-text">
            <Link to={{ pathname: paths.PageDetail, query: { id: item_id } }} className="text-dark">
              <h4 className="font-weight-semibold">{title}</h4>
            </Link>
            <p className="fs-13 mb-1 text-muted">{text}</p>
          </div>
          <div className="d-md-flex">
            <div className="rating-stars d-flex mr-5">
              <StarRating rating={star} editable={false} />
            </div>
            <div className="ml-auto">
              <div className="item-card9-cost">
                <h4 className=" mb-0">${price}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer pt-3">
        <div className="footerimg d-flex mt-0 mb-0">
          <div className="d-flex footerimg-l mb-0">
            <div className="avatar bg-none avatar-sm brround mr-2">
              <ImageWrapper
                src={userImage}
                alt={userName}
                className="brround"
                width={24}
                height={24}
              />
            </div>
            <Link to={{ pathname: paths.UserProfile, query: { id: userId } }} className="time-title text-muted p-0 leading-normal">
              {userName}
              <i
                className="si si-check text-success fs-12 ml-1"
                data-toggle="tooltip"
                data-placement="top"
                title="verified"
              />
            </Link>
          </div>
          {cartCount && <div className="footerimg-r ml-auto">
            <span className="text-muted">
              <i className="fe fe-shopping-cart" /> {cartCount}
            </span>
          </div>}
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
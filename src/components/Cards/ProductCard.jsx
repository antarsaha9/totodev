import React from "react";
import Tooltip from "../Tooltip";
import Image from "next/image"
const ProductCard =({
  image,
  tag,
  star = 5,
  price,
  userImage,
  userName,
  cartCount,
  title,
  text,
  badge,
  className,
}) =>{
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
          <a href="/#" className="position-static">
            <div className="cover-image" >
              <Image src={image} alt="product" placeholder="blur"/>
            </div>
          </a>
          <div className="tag-text">
            <span className="bg-dark-transparent tag-option">{tag}</span>
          </div>
        </div>
        <div className="item-card2-icons">
          <Tooltip className="bg-primary" tip="Add to Wishlist">
            <i className="fe fe-heart" />
          </Tooltip>
          <Tooltip className="bg-secondary" tip="Buy Now">
            <i className="fe fe-shopping-cart" />
          </Tooltip>
          <Tooltip className="bg-info" tip="View Details">
            <i className="fe fe-eye" />
          </Tooltip>
        </div>
      </div>
      <div className="card-body">
        <div className="item-card7-desc">
          <div className="item-card7-text">
            <a href="/#" className="text-dark">
              <h4 className="font-weight-semibold">{title}</h4>
            </a>
            <p className="fs-13 mb-1 text-muted">{text}</p>
          </div>
          <div className="d-md-flex">
            <div className="rating-stars d-flex mr-5">
              <input
                type="number"
                readOnly="readonly"
                className="rating-value star"
                name="rating-stars-value"
                defaultValue={4}
              />
              <div className="rating-stars-container mr-2">
                {star <= 5 ? (
                  <>
                    <div className="review-star">
                      {Array.from(Array(Number(star)), (_, index) => {
                        return (
                          <div className="rating-star sm is--active" key={index + "pcstr"}>
                            <i className="fa fa-star"></i>
                          </div>
                        );
                      })}
                      {Array.from(Array(5 - star), (_, index) => {
                        return (
                          <div className="rating-star sm" key={index + "pcstr"}>
                            <i className="fa fa-star"></i>
                          </div>
                        );
                      })}
                    </div>
                    ({star})
                  </>
                ) : null}
              </div>
              <div className="ml-auto">
                <div className="item-card9-cost">
                  <h4 className=" mb-0">{price}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer pt-3">
        <div className="footerimg d-flex mt-0 mb-0">
          <div className="d-flex footerimg-l mb-0">
            <div className="avatar bg-none avatar-sm brround mr-2">
              <img
                src={userImage.src}
                alt="avatar"
                className="brround"
                placeholder="blur"
              />
            </div>
            <a href="/#" className="time-title text-muted p-0 leading-normal">
              {userName}
              <i
                className="si si-check text-success fs-12 ml-1"
                data-toggle="tooltip"
                data-placement="top"
                title="verified"
              />
            </a>
          </div>
          <div className="footerimg-r ml-auto">
            <span className="text-muted">
              <i className="fe fe-shopping-cart" /> {cartCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default  ProductCard;
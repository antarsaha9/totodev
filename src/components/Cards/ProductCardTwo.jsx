import React from "react";
import Tooltip from "../Tooltip";
import productImageDefault from "../../assets/images/media/pictures/thumb-list/5.jpg"
import Image from "next/image";
const  ProductCardTwo =({
  image = productImageDefault,
  tag,
  star = 5,
  price,
  userName,
  cartCount,
  title,
  badge,
  className,
})=> {
  return (
    <div className={`card overflow-hidden ${className}`}>
      {badge? <div className="power-ribbon power-ribbon-top-left text-warning">
        <span className="bg-warning">
          <i className="fa fa-bolt" />
        </span>
      </div>:null}
      
      <div className="item-card9-img">
        <div className="item-card9-imgs">
          <a href="page-details.html" />
          <Image
            src={image}
            alt="prodct"
            className="cover-image"
            placeholder="blur"
          />
        </div>
        <div className="item-card9-icons">
          <Tooltip className="item-card9-icons1 bg-pink mx-1" tip="Wishlist">
          <i className="fa fa fa-heart-o" />
          </Tooltip>
          <Tooltip className="item-card9-icons1 bg-purple mx-1" tip="Share">
            <i className="icon icon-share" />
          </Tooltip>
        </div>
        <div className="item-card7-overlaytext">
          <a href="#" className="text-white">
            {tag}{" "}
          </a>
          <h4 className=" mb-0">{price}</h4>
        </div>
      </div>
      <div className="card-body">
        <div className="item-card9">
          <a href="page-details.html" className="text-dark mt-2">
            <h4 className=" mt-0 mb-2">{title}</h4>
          </a>
          <div className="mt-0 fs-13 mb-4">
            by{" "}
            <a href="#" >
              {userName}
            </a>{" "}
            in{" "}
            <a href="#" >
              {title}
            </a>
          </div>
          <div className="d-md-flex">
            <div className="rating-stars d-flex">
            <input type="number" readOnly="readonly" className="rating-value star" name="rating-stars-value" defaultValue={star} />
            {star <= 5 ? (
                  <>
                    <div className="rating-stars-container mr-2">
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
            <a href="#" className="ml-auto mt-1">
              <span className="text-muted fs-13">
                <i className="fe fe-shopping-cart text-muted mr-1" /> {cartCount} Sales
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="btn ripple  btn-list m-md-0 p-md-0">
          <a href="#" className="btn ripple  btn-primary mb-lg-0">
            Live Preview
          </a>
          <a href="#" className="btn ripple  btn-secondary mb-lg-0">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
}
export default  ProductCardTwo;
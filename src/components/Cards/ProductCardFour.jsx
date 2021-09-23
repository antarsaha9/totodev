import React from "react";
import Tooltip from "../Tooltip";
import productImageDefault from "../../assets/images/media/pictures/thumb-list/5.jpg"
import Image from "next/image";
import Carousel from 'react-bootstrap/Carousel'
const ProductCardTwo = ({
  image = productImageDefault,
  tag,
  star = 5,
  price,
  userName,
  cartCount,
  title,
  badge,
  className,
}) => {
  return (
    <div className={`card overflow-hidden ${className}`}>
      {badge ? <div className="power-ribbon power-ribbon-top-left text-warning">
        <span className="bg-warning">
          <i className="fa fa-bolt" />
        </span>
      </div> : null}
      {/* </div> */}
      <div className="item-card9-img">
        <div className="item-card2-imgs">
          {/* <a href="page-details.html" />
          <Image
            src={image}
            alt="prodct"
            className="cover-image"
            placeholder="blur"
          /> */}
          <Carousel indicators={false}>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image}
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
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
        </div>
        <div className="item-trans-rating">
          <div className="rating-stars block">
            <input type="number" readOnly="readonly" className="rating-value star" name="rating-stars-value" defaultValue={star} />
            {star <= 5 ? (
              <>
                <div className="rating-stars-container mr-2">
                  {Array.from(Array(Number(star)), (_, index) => {
                    return (
                      <div className="rating-star sm is--active" key={index + "pcstr2"}>
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
              </>
            ) : null}
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className="item-card9">
          <a href="page-details.html" className="text-dark">
            <h4 className="text-over">{title}</h4>
          </a>
          <div className="fs-13 mb-4">
            by{" "}
            <a href="#" >
              {userName}
            </a>{" "}
            in{" "}
          </div>
          <div class="d-flex">
            <div class="mt-1"> <span class="fs-13 mr-4"><i class="fe fe-eye text-muted mr-1"></i> 36 Views</span> <span class="fs-13"><i class="fe fe-download text-muted mr-1"></i> 36 Sales</span> </div>
            <div class="ml-auto">
              <h4 class=" mb-0 text-dark fs-25">{price}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="item-card9-footer d-flex">
          <a href="#" className="btn ripple  btn-primary mr-2">
            Live Preview
          </a>
          <a href="#" className="btn ripple  btn-secondary">
            Buy Now
          </a>
          <div class="ml-auto"> <a href="#" class="btn ripple  btn-outline-gray btn-icon" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add To Collections"><i class="fa fa-folder-open-o fs-14"></i></a> </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCardTwo;
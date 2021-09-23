import React from "react";
import Tooltip from "../Tooltip";
import productImageDefault from "../../assets/images/media/pictures/thumb-list/5.jpg"
import Image from "next/image";
import Carousel from 'react-bootstrap/Carousel'
const ProductCardThree = ({
  image = productImageDefault,
  tag,
  star = 5,
  price,
  userName,
  cartCount,
  title,
  badge,
  className,
  category = "HTML",
  summary = ""
}) => {
  return (
    <div className={`card overflow-hidden ${className}`}>
      <div className="item-card-btn-hover">

        {badge ? <div className="power-ribbon power-ribbon-top-left text-warning">
          <span className="bg-warning">
            <i className="fa fa-bolt" />
          </span>
        </div> : null}
        <div className="d-md-flex">
          <div className="item-card9-img">
            <div className="item-card9-imgs">
              <a href="page-details.html" />
              {/* <Image
                src={image}
                alt="prodct"
                className="cover-image"
              // placeholder="blur"
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
              {/* <div id="carousel-controls" class="carousel slide property-slide" data-ride="carousel" data-interval="false"> <div class="carousel-inner"> <div class="carousel-item active"> <img src="../assets/images/media/pictures/thumb-list/thumb-1.jpg" alt="img" class="cover-image d-block w-100" data-holder-rendered="true"/> </div> <div class="carousel-item"> <img src="../assets/images/media/pictures/thumb-list/thumb-7.jpg" alt="img" class="cover-image d-block w-100" data-holder-rendered="true"/> </div> <div class="carousel-item"> <img src="../assets/images/media/pictures/thumb-list/thumb-8.jpg" alt="img" class="cover-image d-block w-100" data-holder-rendered="true"/> </div> </div> <a class="carousel-control-prev" href="#carousel-controls" role="button" data-slide="prev"> <span class="fe fe-chevron-left" aria-hidden="true"></span> </a> <a class="carousel-control-next" href="#carousel-controls" role="button" data-slide="next"> <span class="fe fe-chevron-right" aria-hidden="true"></span> </a> </div> */}
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
                {category}
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
          <div className="card border-0 mb-0 w-70">
            <div className="card-body">
              <div className="item-card9">
                <a href="page-details.html" className="text-dark mt-2">
                  <h3 className=" mb-1 text-over">{title}</h3>
                </a>
                <div className="fs-13 mb-4">
                  by{" "}
                  <a href="#" >{userName}</a>
                  {" "}in{" "}
                  <a href="#" >{title}</a>
                </div>
                <p className="fs-13 mb-0 text-muted">{summary}</p>
                <div className="d-flex mt-4">
                  <div class="item-card9-cost mt-1">
                    <h4 class=" text-dark fs-25 mb-0">{price}</h4>
                  </div>
                  <div className="ml-auto ">
                    <div className="mt-3">
                      <span className="fs-13">
                        <i className="fe fe-shopping-cart text-muted mr-1" /> {cartCount} Sales
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="item-card-btn">
          {/* <div className="btn ripple  btn-list m-md-0 p-md-0"> */}
          <a href="#" className="btn ripple  btn-primary mr-2">
            <i className="fe fe-airplay mr-1" />
            Live Preview
          </a>
          <a href="#" className="btn ripple  btn-secondary">
            <i className="fe fe-shopping-cart mr-1" />
            Buy Now
          </a>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
export default ProductCardThree;
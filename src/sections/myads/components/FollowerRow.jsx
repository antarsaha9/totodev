import React from "react";
import userImage from "../../../assets/images/png/4.png"
import Image from "next/image";
const FollowerRow =({image=userImage,title,authors=[],items,followers,date,freelanceWork,sales,star=5}) => {
  return (
    <div className="card shadow-none mb-0 border-top border-left-0 border-right-0 border-bottom-0">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6">
            <div className="media mt-0">
              <div className="card-aside-img">
              <Image
              src={image}
              alt="cart-image"
              layout="fixed"
              width="70"
              height="70"
              className="bg-light"
              placeholder="blur"
              />
              </div>
              <div className="media-body ml-3">
                <div className="ml-3 mt-1">
                  <h4 className="mt-0">{title}</h4>
                  <div className="author-user">
                      {authors.map((item,index) => {
                          return(
                            <div className="img" key={item.id + index}>
                              <Image layout="fixed" width="30" height="30" src={item.image} alt="author" />
                            </div>
                          )
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="mt-3">
              <span className="d-flex">
                <small>Items:</small>
                <small className="font-weight-semibold1 ml-2">{items}</small>
              </span>
              <span className="d-flex">
                <small>Followers:</small>
                <small className="font-weight-semibold1 ml-2">{followers}</small>
              </span>
              <span className="d-flex">
                <small>Member Since:</small>
                <small className="font-weight-semibold1 ml-2">{date}</small>
              </span>
              {freelanceWork? <small>Available for freelance work</small>:null}
              
            </div>
          </div>
          <div className="col-md-3">
            <div className="text-lg-center mt-3 mt-lg-0">
              <h4 className=" text-dark fs-25 mb-1">{sales}</h4>
              <span className="text-muted fs-13">Sales</span>
              <div className="mt-2">
                <div className="rating-stars block">
                  <input
                    type="number"
                    readOnly="readonly"
                    className="rating-value star"
                    name="rating-stars-value"
                    defaultValue={4}
                  />
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
                  </>
                ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default  FollowerRow;
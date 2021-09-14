import React from "react";
import Image from "next/image";
const ProductRowOne = ({
  image,
  title,
  date,
  tag,
  price,
  badge,
  badgeText,
}) => {
  return (
    <div className="row ml-0 mr-0 border-top">
      <div className="col-md-6 col-sm-6">
        <div className="card-body">
          <div className="d-flex">
            <label className="custom-control custom-checkbox mr-3">
              <input
                type="checkbox"
                className="custom-control-input"
                name="checkbox"
                defaultValue="checkbox"
              />
              <span className="custom-control-label" />
            </label>
            <div className="media mt-0 mb-0">
              <div className="card-aside-img">
                <a href="#" />
                <Image
                src={image}
                alt="cart-image"
                layout="fixed"
                width="70"
                height="70"
                className="br-4"
                placeholder="blur"
                />
              </div>
              <div className="media-body">
                <div className="card-item-desc ml-4 p-0">
                  <a href="#" className="text-dark">
                    <h4 className="text-over">{title}</h4>
                  </a>
                  {date ? (
                    <div className="text-muted">
                      <i className="fa fa-clock-o mr-1" /> {date}
                    </div>
                  ) : null}
                  {tag ? (
                    <div className="text-muted">
                      <i className="fa fa-tag mr-1" />
                      {tag}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-2 col-sm-6">
        <div className="card-body">
          <h3 className="fs-20">{price}</h3>
        </div>
      </div>
      <div className="col-md-2 col-sm-6">
        <div className="card-body">
          <a href="#" className={`badge badge-${badge}`}>
            {badgeText}
          </a>
        </div>
      </div>
      <div className="col-md-2 col-sm-6">
        <div className="card-body">
          <div className="btn-list">
            <a
              href="edit-posts.html"
              className="btn ripple  btn-secondary btn-sm text-white"
              data-toggle="tooltip"
              data-original-title="Edit"
            >
              <i className="fa fa-pencil" />
            </a>
            <a
              className="btn ripple  btn-info btn-sm text-white"
              data-toggle="tooltip"
              data-original-title="Delete"
            >
              <i className="fa fa-trash-o" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default  ProductRowOne;
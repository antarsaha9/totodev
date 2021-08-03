import React from "react";
import { Dropdown } from "react-bootstrap";
// import Image from "next/image";
import styled from "styled-components";
const DropdownWrapper = styled(Dropdown)`
  .dropdown-menu{
    /* transform:translateY(0)!important */
    margin-top: 0px!important;
  }
`;

const ProductRow = ({ image, title, date, tag, price, badge, badgeText }) => {
  return (
    <div className="row ml-0 mr-0">
      <div className="col-lg-4 col-md-12">
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
                <img
                  src={image.src}
                  alt="img"
                  className="br-4"
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
      <div className="col-lg-2 col-md-12">
        <div className="card-body">
          <h3 className="font-weight-semibold fs-20">{price}</h3>
        </div>
      </div>
      <div className="col-lg-2 col-md-12">
        <DropdownWrapper className="card-body">
          <Dropdown.Toggle variant="success" id="dropdown-basic"      className="btn ripple  btn-primary">
          Download Item
            <i className="fa fa-caret-down ml-1" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Download License</Dropdown.Item>
            <Dropdown.Item href="#">Documentation</Dropdown.Item>
            <Dropdown.Item href="#">Download All</Dropdown.Item>
          </Dropdown.Menu>
        </DropdownWrapper>
      </div>
      <div className="col-lg-2 col-md-12">
        <div className="card-body">
          <div className="rating-stars d-flex mr-5">
            <input
              type="number"
              readOnly="readonly"
              className="rating-value star"
              name="rating-stars-value"
              defaultValue={3}
            />
            <div className="rating-stars-container">
              <div className="rating-star md is--active">
                <i className="fa fa-star" />
              </div>
              <div className="rating-star md is--active">
                <i className="fa fa-star" />
              </div>
              <div className="rating-star md is--active">
                <i className="fa fa-star" />
              </div>
              <div className="rating-star md">
                <i className="fa fa-star" />
              </div>
              <div className="rating-star md">
                <i className="fa fa-star" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-2 col-md-12">
        <div className="card-body">
          <div className="btn-list">
            <a
              className="btn ripple  btn-success btn-icon text-white"
              data-toggle="tooltip"
              data-original-title="Likes"
            >
              <i className="fe fe-thumbs-up" />
            </a>
            <a
              className="btn ripple  btn-danger btn-icon text-white"
              data-toggle="tooltip"
              data-original-title="Dislikes"
            >
              <i className="fe fe-thumbs-down" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductRow;

// "../../../assets/images/" +

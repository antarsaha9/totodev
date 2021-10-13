import React from "react";
import { Button, Dropdown } from "react-bootstrap";
// import Image from "next/image";
import styled from "styled-components";
import { parseISO, format } from 'date-fns'
import { Link } from "~components/core";
import StarRating from "../StarRating";
const DropdownWrapper = styled(Dropdown)`
  .dropdown-menu{
    /* transform:translateY(0)!important */
    margin-top: 0px!important;
  }
`;

const ProductRow = ({ image, title, date, tag, price, item_id, downloadItem, rating }) => {
  return (
    <div className="row ml-0 mr-0">
      <div className="col-lg-4 col-md-12">
        <div className="card-body">
          <div className="d-flex">
            {/* <label className="custom-control custom-checkbox mr-3">
              <input
                type="checkbox"
                className="custom-control-input"
                name="checkbox"
                defaultValue="checkbox"
              />
              <span className="custom-control-label" />
            </label> */}
            <div className="media mt-0 mb-0">
              <div className="card-aside-img">
                <img
                  src={image}
                  alt="img"
                  className="br-4"
                />
              </div>
              <div className="media-body">
                <div className="card-item-desc ml-4 p-0">
                  <Link to={"/pageDetails?id="+item_id} className="text-dark">
                    <h4 className="text-over">{title}</h4>
                  </Link>
                  {date ? (
                    <div className="text-muted">
                      <i className="fa fa-clock-o mr-1" /> {format(parseISO(date), 'MMM-dd-yyyy')}
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
          <h3 className="font-weight-semibold fs-20">${price}</h3>
        </div>
      </div>
      <div className="col-lg-2 col-md-12">
        <div className="card-body">
          <Button onClick={downloadItem} variant="primary" class="ripple">Download Item</Button>
        </div>
        {/* <DropdownWrapper className="card-body">
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="btn ripple  btn-primary">
            Download Item
            <i className="fa fa-caret-down ml-1" />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Download License</Dropdown.Item>
            <Dropdown.Item href="#">Documentation</Dropdown.Item>
            <Dropdown.Item href="#">Download All</Dropdown.Item>
          </Dropdown.Menu>
        </DropdownWrapper> */}
      </div>
      <div className="col-lg-2 col-md-12">
        <div className="card-body">
          <div className="rating-stars d-flex mr-5">
            <StarRating editable={false} rating={rating} starSize="md" />
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

import React from "react";
import { Dropdown } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "~components/core";

const ProductImage = styled.img`
  height: 60px;
  min-height: 60px;
  width: 80px;
  min-width: 80px;
`;

const DropdownButton = styled(Dropdown.Toggle)`
  &:after {
    display: none;
  }
`;

const ProductRow = ({
  image_url,
  item_name,
  date,
  tags,
  price,
  item_status,
  id,
  handleItemStatusChange = () => () => {},
}) => {
  const badge = item_status === "PUBLISHED" ? "success" : "danger";

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
              <ProductImage src={image_url} />
              <div className="media-body">
                <div className="card-item-desc ml-4 p-0">
                  <Link to={`/template/${id}`} className="text-dark">
                    <h4 className="text-over">{item_name}</h4>
                  </Link>
                  {date ? (
                    <div className="text-muted">
                      <i className="fa fa-clock-o mr-1" /> {date}
                    </div>
                  ) : null}
                  {tags ? (
                    <div className="text-muted text-capitalize mt-1">
                      <i className="fa fa-tag mr-1" />
                      {tags}
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
          <span className={`badge badge-${badge}`}>{item_status}</span>
        </div>
      </div>
      <div className="col-md-2 col-sm-6">
        <div className="card-body">
          <div className="btn-list d-flex">
            <Link
              className="btn ripple  btn-secondary btn-sm text-white"
              to={{ pathname: "/dashboard/upload", query: { id } }}
            >
              <i className="fa fa-pencil" />
            </Link>

            <Dropdown>
              <DropdownButton size="sm" variant="success">
                <i className="fa fa-ellipsis-v" />
              </DropdownButton>

              <Dropdown.Menu>
                {item_status !== "PUBLISHED" ? (
                  <>
                    <Dropdown.Item
                      onClick={handleItemStatusChange(id, "PUBLISH")}
                    >
                      Publish
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={handleItemStatusChange(id, "DELETE")}
                    >
                      Delete
                    </Dropdown.Item>
                  </>
                ) : (
                  <Dropdown.Item
                    onClick={handleItemStatusChange(id, "SUSPEND")}
                  >
                    Suspend
                  </Dropdown.Item>
                )}
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductRow;

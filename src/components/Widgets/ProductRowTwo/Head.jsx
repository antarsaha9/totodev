import React from "react";

const ProductRowHead = () => {
  return (
    <div className="row border-bottom ml-0 mr-0">
      <div className="col-lg-4 col-md-12">
        <div className="card-body">
          <h3 className="card-title">Name &amp; Details</h3>
        </div>
      </div>
      <div className="col-lg-2 col-md-12">
        <div className="card-body">
          <h3 className="card-title">Price</h3>
        </div>
      </div>
      <div className="col-lg-2 col-md-12">
        <div className="card-body">
          <h3 className="card-title">Download</h3>
        </div>
      </div>
      <div className="col-lg-2 col-md-12">
        <div className="card-body">
          <h3 className="card-title">Rating</h3>
        </div>
      </div>
      <div className="col-lg-2 col-md-12">
        <div className="card-body">
          <h3 className="card-title">Action</h3>
        </div>
      </div>
    </div>
  );
};
export default ProductRowHead;

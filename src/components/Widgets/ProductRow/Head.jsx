import React from "react";

const ProductRowHead = ()=> {
  return (
    <div className="row ml-0 mr-0">
      <div className="col-md-6 col-sm-6">
        <div className="card-body">
          <h3 className="card-title">Name &amp; Details</h3>
        </div>
      </div>
      <div className="col-md-2 col-sm-6">
        <div className="card-body">
          <h3 className="card-title">Price</h3>
        </div>
      </div>
      <div className="col-md-2 col-sm-6">
        <div className="card-body">
          <h3 className="card-title">Status</h3>
        </div>
      </div>
      <div className="col-md-2 col-sm-6">
        <div className="card-body">
          <h3 className="card-title">Action</h3>
        </div>
      </div>
    </div>
  );
}
export default  ProductRowHead;
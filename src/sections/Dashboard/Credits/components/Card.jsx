import React from "react";
const card = ({ title, price, ...rest }) => {
  return (
    <div className="card">
      <div className="card-body text-center">
        <div className="card-title">
          {title}
        </div>
        <div className="h2 mb-0 fs-40">
          ${price}
        </div>
        <div className="text-center mt-6">
          <a href="#" className="btn ripple btn-light btn-block">
            Choose plan
          </a>
        </div>
      </div>
    </div>
  );
};

export default card;

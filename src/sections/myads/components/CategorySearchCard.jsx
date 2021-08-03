import React from "react";
import SelectBox from "../../../components/Forms/SelectBox";
const CategorySearchCard = () =>{
  return (
    <div className="card my-select">
      <div className="card-header">
        <h3 className="card-title">Search Categories</h3>
      </div>
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="text"
            placeholder="What are you looking for?"
          />
        </div>
        <div className="form-group">
          <SelectBox
            data={["HTML", "Wordpress", "Angular", "PHP", "PSD", "Plugins"]}
            defaultValue="All Categories"
          />
        </div>
        <div>
          <button className="btn ripple btn-block btn-primary">Search</button>
        </div>
      </div>
    </div>
  );
}
export default  CategorySearchCard;
import React from "react";
import styled from "styled-components";
import SelectBox from "./SelectBox"
const SortSelect = styled.div`
.rc-menu-button{
  max-height:1.775rem !important;
  min-height:1.775rem !important;
  min-width: 150px !important;
  padding-left: 8px;
  padding-right: 20px;
  &:after{
      right:4%;
  }
}
`
const ProductSortBlock = () => {
  return (
    <div className="p-5 bg-white item2-gl-nav d-flex">
      <h6 className="mb-0 mt-1 card-title">12 Items Purchased</h6>
      <div className="ml-auto">
        <SortSelect className="d-flex select2-sm text-left">
          <label className="mr-2 mt-1 mb-sm-1">Sort By:</label>
          <SelectBox
            data={[
              "Best Seller",
              "Newest",
              "Best Rated",
              "Trending",
              "Price"
            ]}
            defaultValue="Best Seller"
          />
        </SortSelect>
      </div>
    </div>
  );
};

export default ProductSortBlock;

import React from "react";
import { Container } from "react-bootstrap";
import ProductSortBlock from "./components/ProductSortBlock";
import ProductRowHead from "../../../components/Widgets/ProductRow/Head";
import ProductRow from "../../../components/Widgets/ProductRow";
import productData from "./data";
import Pagination from "../../../components/Pagination";
const ManageSection = () => {
  return (
    <>
      <Container className="spb">
        <div className="mb-5">
          <ProductSortBlock />
        </div>
        <div className="card manged-ad">
          <ProductRowHead/>

          {productData.map(({title,date,tag,price,badge,badgeText,image},index)=>{
              return(
                  <ProductRow title={title} image={image} date={date} tag={tag} badge={badge} badgeText={badgeText} price={price} key={index + "tr"}/>
              )
            })}
        </div>
        <Pagination/>
      </Container>
    </>
  );
};

export default ManageSection;

import React from "react";
import { Container } from "react-bootstrap";
import ProductSortBlock from "./components/ProductSortBlock";
import ProductRowHead from "../../../components/Widgets/ProductRowTwo/Head";
import ProductRow from "../../../components/Widgets/ProductRowTwo";
import productData from "./data";
import Pagination from "../../../components/Pagination";
const PurchaseSection = () => {
  return (
    <>
      <Container className="spb">
        <div className="mb-5">
          <ProductSortBlock />
        </div>
        <div className="card manged-ad">
          <ProductRowHead />

          {productData.map(
            ({ title, date, tag, price, badge, badgeText, image }, index) => {
              return (
                <ProductRow
                  title={title}
                  image={image}
                  date={date}
                  tag={tag}
                  price={price}
                  key={index + "tr"}
                />
              );
            }
          )}
        </div>
        <Pagination />
      </Container>
    </>
  );
};

export default PurchaseSection;

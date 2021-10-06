import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductCard from "~components/Cards/ProductCardTwo";

function GridBlock({ items }) {
  if (!items || items.length === 0)
    return ""
  return (
    <Row>
      {items.map(
        (
          {
            image_url,
            tags,
            overall_rating,
            price,
            seller_image,
            seller_name,
            saleCount,
            item_name,
            category_name,
            date,
          },
          index
        ) => {
          return (
            <Col lg={6} md={6} xl={4}>
              <ProductCard
                image={image_url}
                tag={tags}
                star={overall_rating}
                price={price}
                userImage={seller_image}
                userName={seller_name}
                saleCount={saleCount}
                title={item_name}
                className={category_name}
                date={date}
                key={"pl" + index}
              />
            </Col>
          );
        }
      )}
    </Row>
  );
};

export default GridBlock;

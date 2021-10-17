import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import cursorIcon from "../../../assets/images/cursor.png";
import ProductCard from "../../../components/Cards/ProductCard";
import productData from "../data";

const SliderWrapper = styled(Slider)`
  &:hover {
    .slick-arrow {
      background: rgb(255, 255, 255) !important;
    }
  }
  .card {
    box-shadow: 0 5px 10px rgb(21 17 148 / 6%) !important;
    overflow: hidden;
  }
  .slick-list {
    margin-left: -12.5px;
    margin-right: -12.5px;
  }
  .slick-slide {
    padding-left: 12.5px;
    padding-right: 12.5px;
    cursor: url(${cursorIcon}), move;
  }
  .slick-arrow {
    position: absolute;
    top: 50%;
    left: -25px;
    right: -1.5em;
    margin-top: -24px;
    border-radius: 200px;
    font-size: 0;
    min-height: 48px;
    max-height: 48px;
    min-width: 48px;
    max-width: 48px;
    border: 0;
    text-align: center;
    background: rgba(255, 255, 255, 0.5) !important;
    border: 1px solid #eaebf7 !important;
    z-index: 99;
    box-shadow: 0 4px 15px rgb(67 67 67 / 15%);
    cursor: pointer;
    &:before {
      content: "‹";
      font-size: 1.3rem;
    }
    &.slick-next {
      right: -25px;
      left: auto;
      &:before {
        content: "›";
      }
    }
  }
`;

const SliderBlock = ({ items }) => {
  const elSlider = React.useRef();

  const slickSettings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    swipe: true,
    infinite: items.length > 2,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          centerPadding: "10%",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding: "20px",
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <SliderWrapper ref={elSlider} {...slickSettings}>
      {items && items.map(
        (
          {
            image_url,
            item_name,
            text,
            price,
            overall_rating,
            seller_name,
            cartCount,
            seller_image,
            category_name,
            seller_id,
            id,
          },
          index
        ) => {
          return (
            <ProductCard
              item_id={id}
              image={image_url}
              title={item_name}
              text={text}
              price={price}
              star={overall_rating}
              tag={category_name}
              userId={seller_id}
              userName={seller_name}
              userImage={seller_image}
              cartCount={cartCount}
              className="mb-0"
              badge="flash"
              key={index + "lt"}
            />
          );
        }
      )}
    </SliderWrapper>
  );
};

export default SliderBlock;

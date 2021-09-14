import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import BlogCard from "../../../components/Cards/BlogCard";
import blogData from "./data";
import cursorIcon from "../../../assets/images/cursor.png";
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
    cursor: url(${cursorIcon.src}), move;
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
const BlogSection = () =>{
  const elSlider = React.useRef();

  const slickSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    swipe: true,
    infinite: true,
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
    <section className="sptb bg-white">
      <div className="container">
        <div className="section-title center-block text-center">
          <h2>Latest News</h2>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <SliderWrapper ref={elSlider} {...slickSettings}>
          {blogData.map(
            (
              {
                image,
                title,
                text,
                star,
                userName,
                cartCount,
                userImage,
                tag,
                date,
              },
              index
            ) => {
              return (
                <BlogCard
                  image={image}
                  title={title}
                  text={text}
                  date={date}
                  star={star}
                  tag={tag}
                  userName={userName}
                  userImage={userImage}
                  cartCount={cartCount}
                  key={index + "blog"}
                />
              );
            }
          )}
        </SliderWrapper>
      </div>
    </section>
  );
}
export default  BlogSection;
import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import TestimonialSlide from "./Components/TestimonialSlide";
import testimonialData from "./data"
import testimonailUser from '../../../assets/images/users/male/34.jpg'
import Image from "next/image";
const SliderSmall = styled(Slider)`
margin-top:0;
margin-bottom: 20px;
  .slick-list {
    overflow: unset;
    .slick-track{
    display: flex;
    justify-content: center;
    }
  }
`

const SliderWrapper = styled(Slider)`
&:hover{
    .slick-arrow{
        background: rgb(255, 255, 255) !important;
    }
}
.card{
    box-shadow:0 5px 10px rgb(21 17 148 / 6%) !important;
    overflow: hidden;
}
.slick-list{
    margin-left:-12.5px;
    margin-right:-12.5px;
    
}
.slick-slide{
    padding-left:12.5px;
    padding-right:12.5px;
    &.slick-active{
      &:before{
        border-top-color: #fb5c3b;
      }
    }
}
.slick-arrow{
    position: absolute;
    top: 0%;
    left: -25px;
    right: -1.5em;
    margin-top: 24px;
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
    cursor:pointer;
    &:before{
        content:"‹";
        font-size:1.3rem;
    }
    &.slick-next{
        right: -25px;
        left: auto;
        &:before{
            content:"›"
        }
    }
}
` 
const sliderConfig1 = {
  slidesToShow: 1,
  arrows: true,
  fade:true
};

const sliderConfig2 = {
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  focusOnSelect: true,
  centerPadding: "20px",
  swipe: false,
  responsive: [
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};
const TestimonialSection = ()=> {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();
  return (
    <section className="sptb position-relative pattern">
      <div className="container">
        <div className="section-title center-block text-center">
          <h2 className="text-white position-relative">Best Testimonials</h2>
          <p className="text-white position-relative">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="row">
          <div className="col-md-12">
          <div className="row">
        <div className="col-xl-4 col-md-12 d-block mx-auto">
            <SliderSmall
              asNavFor={nav1}
              ref={(slider) => setNav2(slider)}
              className="testimonial-slider-dots"
              {...sliderConfig2}>
              <div className="single-img">
                <Image src={testimonailUser} alt="slide" placeholder="blur" />
              </div>
              <div className="single-img">
                <Image src={testimonailUser} alt="slide" placeholder="blur"/>
              </div>
              <div className="single-img">
                <Image src={testimonailUser} alt="slide" placeholder="blur"/>
              </div>
            </SliderSmall>
            </div>
            </div>
            <SliderWrapper 
              asNavFor={nav2}
              ref={(slider) => setNav1(slider)}
              {...sliderConfig1}>
              {testimonialData.map(
                ({
                  title,
                  text,
                  star,
                  position
                },index) => {
                  return (
                    <TestimonialSlide
                      title={title}
                      text={text}
                      star={star}
                      position={position}
                      key={index + "tm"}
                    />
                  );
                }
              )}
            </SliderWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
export default  TestimonialSection;
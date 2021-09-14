import React from "react";

const TestimonialSlide = ({star=5,title,position,text}) =>{
  return (
    <div className="item text-center">
      <div className="row">
        <div className="col-xl-8 col-md-12 d-block mx-auto">
          <div className="testimonia">
            <h3 className="title">{title}</h3>
            <span className="post">{position}</span>
            <div className="rating-stars mb-3">
              <input
                type="number"
                readOnly="readonly"
                className="rating-value star"
                name="rating-stars-value"
                defaultValue={4}
              />
              <div className="rating-stars-container">
              {star <= 5 ? (
                  <>
                    <div className="review-star">
                      {Array.from(Array(Number(star)), (_, index) => {
                        return (
                          <div className="rating-star sm is--active" key={index + "star"}>
                            <i className="fa fa-star"></i>
                          </div>
                        );
                      })}
                      {Array.from(Array(5 - star), (_, index) => {
                        return (
                          <div className="rating-star sm" key={index + "star"}>
                            <i className="fa fa-star"></i>
                          </div>
                        );
                      })}
                    </div>
                    ({star})
                  </>
                ) : null}
                {/* <div className="rating-star sm">
                  <i className="fa fa-star" />
                </div>
                <div className="rating-star sm">
                  <i className="fa fa-star" />
                </div>
                <div className="rating-star sm">
                  <i className="fa fa-star" />
                </div>
                <div className="rating-star sm">
                  <i className="fa fa-star" />
                </div>
                <div className="rating-star sm">
                  <i className="fa fa-star" />
                </div> */}
              </div>
            </div>
            <p className="text-white-80">
              <i className="fa fa-quote-left" />
              {text}
            </p>
          </div>
          <a
            href="testimonial.html"
            className="btn ripple  btn-secondary btn-lg"
          >
            View all Testimonials
          </a>
        </div>
      </div>
    </div>
  );
}
export default  TestimonialSlide;
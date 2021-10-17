import React from "react";
import Image from "next/image";
import ImageWrapper from "~components/Widgets/Image";
import { paths } from "src/helper";
import { Link } from "~components/core";

const SingleComment = ({
  children,
  image,
  title,
  location,
  date,
  time,
  text,
  tags,
  className,
  star,
  id,
  ...rest
}) => {
  return (
    <div className={`media ${className}`}>
      <div className="d-flex mr-3">
        <Link to={{ pathname: paths.UserProfile, query: { id } }} className="media-object">
          <ImageWrapper
            className="brround"
            width={64}
            height={64}
            alt={title}
            src={image}
          />{" "}
        </Link>
      </div>
      <div className="media-body">
        <h4 className="mt-0 mb-1 font-weight-semibold">
          {title}
          <span
            className="fs-14 ml-0"
            data-toggle="tooltip"
            data-placement="top"
            title="verified"
          >
            <i className="fa fa-check-circle-o text-success ml-1" />
          </span>
          {star && star <= 5 ? (
            <span className="fs-14 ml-2">
              {star}{" "}
              {Array.from(Array(Number(star)), (_, index) => {
                return <i className="fa fa-star text-yellow mx-haf-1" key={index + "star"}></i>;
              })}
              {Array.from(Array(5 - star), (_, index) => {
                return (
                  <i
                    className="fa fa-star mx-haf-1"
                    key={index + "star"}
                  ></i>
                );
              })}
            </span>
          ) : null}
        </h4>
        <small className="text-muted">
          <i className="fa fa-calendar" /> {date}{" "}
          <i className=" ml-3 fa fa-clock-o" /> {time}{" "}
          <i className=" ml-3 fa fa-map-marker" /> {location}
        </small>
        <p className="font-13 fs-15 mb-2 mt-2">{text}</p>
        {/* {tags
          ? tags.map(({ text, active }, index) => {
            return (
              <a
                href="/#"
                className="mr-2"
                data-toggle="modal"
                data-target="#Comment"
                key={index + "tag"}
              >
                <span
                  className={`badge ${active ? "badge-primary" : "badge-default"}`}
                >
                  {text}
                </span>
              </a>
            );
          })
          : null} */}

        {children}
      </div>
    </div>
  );
}
export default SingleComment;
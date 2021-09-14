import React from "react";
import Image from "next/image";
const SingleComment = ({
  children,
  image,
  title,
  date,
  text,
  tags,
  className,
  ...rest
})=> {
  return (
    <div className={`card mb-0 shadow-none ${className}`}>
      <div className="card-body">
        <div>
          <div className="media mt-0">
          <div className="mr-3">
            <Image
          src={image}
          alt="cmnt description"
          layout="fixed"
          width="45"
          height="45"
          className="bg-light"
          placeholder="blur"
        />
          </div>
            <div className="media-body">
              <div className="d-md-flex align-items-center">
                <h4 className="mb-2">{title}</h4>
                <small className="text-muted ml-md-auto">
                  <i className="fe fe-calendar mr-1" /> {date}
                </small>
              </div>

              {tags
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
                          className={`badge ${
                            active ? "badge-primary" : "badge-default"
                          }`}
                        >
                          {text}
                        </span>
                      </a>
                    );
                  })
                : null}
            </div>
          </div>
          <p className="fs-15  mb-0 mt-3">{text}</p>
        </div>
      </div>
    </div>
  );
}
export default  SingleComment;
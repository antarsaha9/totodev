import React from "react";
import Image from "next/image";
import commentImagePlaceHolder from "../../../../assets/images/png/1.png";
import { parseISO, format } from 'date-fns'
import { Badge } from "react-bootstrap";
const SingleComment = ({
  children,
  image,
  title,
  date,
  text,
  className,
  comments,
  id,
  sub = false,
  ...rest
}) => {
  return (
    <div className={`card shadow-none ${className || ''}${sub ? " border-0" : ""}`}>
      <div className={`card-body${sub ? " pr-0" : ""}`}>
        <div>
          <div className="media mt-0">
            <div className="mr-3">
              <Image
                src={image || commentImagePlaceHolder}
                alt="cmnt description"
                layout="fixed"
                width="45"
                height="45"
                className="bg-light"
              // placeholder="blur"
              />
            </div>
            <div className="media-body">
              <div className="d-md-flex align-items-center">
                <h4 className="mb-2">{title}</h4>
                <small className="text-muted ml-md-auto">
                  <i className="fe fe-calendar mr-1" /> {format(parseISO(date), 'dd-MMM-yyyy')}
                </small>
              </div>

              {rest.tags?.map(({ text, active, onClick }, index) => {
                return (
                  <button
                    style={{ cursor: "pointer" }}
                    className="mr-2 bg-none border-0 pe-auto"
                    key={index + "tag"}
                    onClick={onClick}
                    context={id}
                  >
                    <Badge variant={active ? "primary" : "default"} context={id} >
                      {text}
                    </Badge>
                  </button>
                );
              })}
            </div>
          </div>
          <p className="fs-15  mb-0 mt-3">{text}</p>
        </div>
        {comments && comments.map(({
          name,
          created_at,
          id,
          image_url,
          message,
          comments
        }, index) => <SingleComment
            id={id}
            sub
            image={image_url}
            title={name}
            date={created_at}
            text={message}
            key={"comment-" + index}
            comments={comments}
            {...rest}
          />)}
      </div>
    </div>
  );
}
export default SingleComment;
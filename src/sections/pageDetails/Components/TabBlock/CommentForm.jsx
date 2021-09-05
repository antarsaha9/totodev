import React from "react";

const CommentForm = () =>{
  return (
    <div className="card mt-5">
      <div className="card-header">
        <h3 className="card-title">Write Your Comments</h3>
      </div>
      <div className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="name1"
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email address"
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="example-textarea-input"
            rows={6}
            placeholder="Write Your Comment"
            defaultValue={""}
          />
        </div>
        <a href="#" className="btn ripple  btn-primary">
          Submit
        </a>
      </div>
    </div>
  );
}
export default  CommentForm;
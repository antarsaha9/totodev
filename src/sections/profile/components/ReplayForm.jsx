import React from "react";

const ReplayForm = ()=> {
  return (
    <form>
      <h3 className="card-title">Leave a reply</h3>
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
          className="form-control h-auto"
          name="example-textarea-input"
          rows={6}
          placeholder="Comment"
          defaultValue={""}
        />
      </div>
      <button className="btn ripple  btn-primary">
        Send Reply
      </button>
    </form>
  );
}
export default  ReplayForm;
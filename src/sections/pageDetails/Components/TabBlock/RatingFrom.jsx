import React from 'react'
 
const RatingForm=()=>{
return(
<div className="card mt-5">
              <div className="card-header">
                <h3 className="card-title">Item Rating</h3>
              </div>
              <div className="card-body">
                <div className="rating-stars d-flex mb-3">
                  <label className="form-label mr-3 mt-1">Select Rating:</label>
                  <input
                    type="number"
                    readOnly="readonly"
                    className="rating-value star"
                    name="rating-stars-value"
                    defaultValue={3}
                  />
                  <div className="rating-stars-container mr-2">
                    <div className="rating-star lg">
                      <i className="fa fa-star" />
                    </div>
                    <div className="rating-star lg">
                      <i className="fa fa-star" />
                    </div>
                    <div className="rating-star lg">
                      <i className="fa fa-star" />
                    </div>
                    <div className="rating-star lg">
                      <i className="fa fa-star" />
                    </div>
                    <div className="rating-star lg">
                      <i className="fa fa-star" />
                    </div>
                  </div>
                </div>
                <div className="form-group reviewselect">
                  <select className="form-control select2 custom-select">
                    <option value={0}>SelectOptions</option>
                    <option value={1}>Customer Support</option>
                    <option value={2}>Design Qulity</option>
                    <option value={3}>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control h-auto"
                    name="example-textarea-input"
                    placeholder="Comment"
                    row="6"
                    defaultValue={""}
                  />
                </div>
                <a href="#" className="btn ripple  btn-primary">
                  Save
                </a>
              </div>
            </div>
)
}
export default  RatingForm;
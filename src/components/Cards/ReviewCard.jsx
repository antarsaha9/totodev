import React from 'react'
 
const eFollowCard =({image,name,email})=>{
return(
<div className="card shadow-none">
  <div className="card-header bg-light shadow-none">
    <div className="rating-stars d-flex">
      <input type="number" readOnly="readonly" className="rating-value star" name="rating-stars-value" defaultValue={star} />
      <div className="rating-stars-container mr-2">
        {star <= 5 ? (
            <>
            <div className="review-star">
                {Array.from(Array(Number(star)), (_, index) => {
                return (
                    <div className="rating-star lg is--active" key={index + "pcstr"}>
                    <i className="fa fa-star"></i>
                    </div>
                );
                })}    
                {Array.from(Array(5 - star), (_, index) => {
                return (
                    <div className="rating-star lg" key={index + "pcstr"}>
                    <i className="fa fa-star"></i>
                    </div>
                );
                })}
            </div>
            ({star})
            </>
        ) : null}
        </div>
    </div>
    <div className="card-options">
      <span className>by <a href="#" className="text-primary">Socrates</a> <span className="text-muted">2 days ago</span></span>
    </div>
  </div>
  <div className="card-body">
    <h4 className=" dark-grey-text mb-2">Design Qulity</h4>
    <p className="font-weight-normal dark-grey-text mb-0">
      Excellent design that breaksaway from the cliche bootstrap sites that are a dime-a-dozen these days.</p>
  </div>
</div>


)
}

export default FollowCard;
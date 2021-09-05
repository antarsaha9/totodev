import React from 'react'
const RatingReplyCard = ({name,image,text})=>{
return(
<div className="card-body bg-light">
  <div className="media mt-0 mb-0">
    <div className="d-flex mr-3">
      <a href="#"><img className="media-object brround" alt="64x64" src={image} /> </a>
    </div>
    <div className="media-body">
      <h4 className="mt-0 mb-1 ">{name}</h4>
      <p className="fs-15  mb-0 mt-2">
        {text}
      </p>
    </div>
  </div>
</div>

)
}
export default  RatingReplyCard;
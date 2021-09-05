import React from 'react'
import Image from "next/image"
const FollowCard =({image,name,email})=>{
return(
<div className="card overflow-hidden shadow-none">
  <div className="media card-body media-xs ">
  <div className="mr-3">
    <Image className="avatar brround avatar-md" src={image} alt="avatar-img" placeholder="blur"/>
  </div>
    <div className="media-body valign-middle mt-2">
      <a href="/#" className=" font-weight-semibold text-dark">{name}</a>
      <p className="text-muted mb-0">{email}</p>
    </div>
    <div className="media-body valign-middle text-right overflow-visible mt-4">
      <button className="btn ripple  btn-primary btn-sm" type="button"><i className="fe fe-rss mr-2" />Follow</button>
    </div>
  </div>
</div>

)
}
export default  FollowCard;
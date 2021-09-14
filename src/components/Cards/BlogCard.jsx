import React from 'react'
 import Image from "next/image"
const BlogCard =({image,commentCount,date,userImage,userName,title,text})=>{
return(
  <div className="card mb-0">
          <div className="item7-card-img">
            <a href="/#" className="d-block position-static">
            <Image src={image} alt="blog" className="cover-image w-100" placeholder="blur"/>
            </a>
          </div>
          <div className="card-body p-4">
            <div className="item7-card-desc d-flex mb-2">
              <a href="/#"><i className="fa fa-calendar-o mr-2 text-muted" />{date}</a>
              <div className="ml-auto">
                <a href="/#"><i className="fa fa-comment-o mr-2 text-muted" />{commentCount} Comments</a>
              </div>
            </div>
            <a href="blog-details.html" className="text-dark"><h3 className="font-weight-semibold">{title}</h3></a>
            <p>{text}</p>
            <div className="d-flex align-items-center pt-2 mt-auto">
              <div className="avatar bg-none brround avatar-md mr-3 overflow-hidden">
                <Image src={userImage}  alt="avatar-img" placeholder="blur"/>
              </div>
              <div>
                <a href="/#" className="text-default">{userName}</a>
                <small className="d-block text-muted">1 day ago</small>
              </div>
              <div className="ml-auto text-muted">
                <a href="/#" className="icon d-none d-md-inline-block ml-3"><i className="fe fe-heart mr-1" /></a>
                <a href="/#" className="icon d-none d-md-inline-block ml-3"><i className="fa fa-thumbs-o-up" /></a>
              </div>
            </div>
          </div>
        </div>
)
}
export default  BlogCard;
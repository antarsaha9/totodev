import React from 'react'
 import ProfilePic from '../../../assets/images/users/male/2.jpg';
const ProfileCard = ()=>{
return(
<div className="card">
          <div className="item-user">
            <div className="profile-pic wideget-user-img mb-0 pt-3">
              <Image src={ProfilePic} className="brround" alt="user" />
            </div>
          </div>
          <div className="card-body item-user text-center">
            <div className="ml-1">
              <a href="userprofile.html" className="text-dark">
                <h4 className="mt-0 mb-2 ">Jacob Smith  <i className="ion-checkmark-circled text-success" /></h4>
              </a>
              <span className="text-muted">Member since May 2012</span><br />
              <div className="rating-stars d-inline-flex mb-2 mr-3 mt-2">
                <input type="number" readOnly="readonly" className="rating-value star" name="rating-stars-value" defaultValue={4} />
                <div className="rating-stars-container mr-2">
                  <div className="rating-star sm "> <i className="fa fa-star" /> </div>
                  <div className="rating-star sm "> <i className="fa fa-star" /> </div>
                  <div className="rating-star sm "> <i className="fa fa-star" /> </div>
                  <div className="rating-star sm "> <i className="fa fa-star" /> </div>
                  <div className="rating-star sm"> <i className="fa fa-star" /> </div>
                </div>
                4.0
              </div>
              <h6 className="mt-2 mb-0"><a href="#" className="btn ripple  btn-secondary btn-sm">1245 Views</a>
                <a href="#" className="btn ripple  btn-info btn-sm">850 Followers</a></h6>
            </div>
          </div>
          <div className="card-body item-user">
            <h4 className="mb-4">Contact Info</h4>
            <div>
              <h6><span className="font-weight-semibold"><i className="fa fa-map-marker mr-2 mb-2" /></span><a href="#" className="text-body"> 7981 Aspen,  USA</a></h6>
              <h6><span className="font-weight-semibold"><i className="fa fa-envelope mr-3 mb-2" /></span><a href="#" className="text-body"> smith@yourdomain.com</a></h6>
              <h6><span className="font-weight-semibold"><i className="fa fa-phone mr-3  mb-2" /></span><a href="#" className="text-body"> 0-235-657-24587</a></h6>
              <h6><span className="font-weight-semibold"><i className="fa fa-link mr-3 " /></span><a href="#" className="text-body">http://spruko.com/</a></h6>
            </div>
            <div className=" item-user-icons mt-4">
              <a href="#" className="facebook-bg mt-0"><i className="fa fa-facebook" /></a>
              <a href="#" className="twitter-bg"><i className="fa fa-twitter" /></a>
              <a href="#" className="google-bg"><i className="fa fa-google" /></a>
              <a href="#" className="dribbble-bg"><i className="fa fa-dribbble" /></a>
            </div>
          </div>
          <div className="card-footer">
            <div className="text-left">
              <a href="#" className="btn ripple   btn-primary"><i className="fa fa-envelope" /> Chat</a>
              <a href="#" className="btn ripple  btn-secondary" data-toggle="modal" data-target="#contact"><i className="fa fa-user" /> Contact Me</a>
            </div>
          </div>
        </div>
)
}
export default  ProfileCard;
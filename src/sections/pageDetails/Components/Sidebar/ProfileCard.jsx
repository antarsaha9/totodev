import React from "react";
import Image from 'next/image'

const ProfileCard = ({ image, name, date }) => {
  return (
    <div className="card">
      <div className="card-body item-user">
        <div className="text-center">
          <a href="userprofile.html" className="mb-4">
            <Image
              src={image}
              alt="image"
              layout="fixed"
              width="80"
              height="80"
              className="avatar avatar-xxl brround"
              placeholder="blur"
            />
          </a>
          <a href="userprofile.html">
            <h3 className="mt-2 mb-1 text-dark">{name}</h3>
          </a>
          <span className="text-muted">{date}</span>
        </div>
        <div className=" item-user-icons mt-2 mb-5 text-center">
          <a href="#" className="facebook-bg mt-0 ">
            <i className="fa fa-facebook mx-1" />
          </a>
          <a href="#" className="twitter-bg ">
            <i className="fa fa-twitter mx-1" />
          </a>
          <a href="#" className="pinterest-bg ">
            <i className="fa fa-pinterest mx-1" />
          </a>
          <a href="#" className="bg-info ">
            <i className="fa fa-share text-white mx-1" />
          </a>
        </div>
        <div >
          <a
            href="profile.html"
            className="btn ripple btn-light btn-block btn-lg"
          >
            View Porfile
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

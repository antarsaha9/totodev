import React from "react";
import { Link } from "~components/core";
import { format, parseISO } from 'date-fns';
import ImageWrapper from "~components/Widgets/Image";
import productThumbnail from "../../../../assets/images/user-placeholder.png";
import { paths } from "src/helper";
const ProfileCard = ({ product }) => {
  const { seller_image_url: image, seller_name: name, seller_joined_at: date, seller_id } = product;
  return (
    <div className="card">
      <div className="card-body item-user">
        <div className="text-center">
          <div className="mb-4">
            <ImageWrapper
              src={image || productThumbnail}
              alt={name}
              width={80}
              height={80}
              className="avatar avatar-xxl brround"
            />
          </div>
          {/* <a href="userprofile.html"> */}
          <h3 className="mt-2 mb-1 text-dark">{name}</h3>
          {/* </a> */}
          <span className="text-muted">Member since {date && format(parseISO(date), 'd LLLL yyyy')}</span>
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
          <Link
            to={{ pathname: paths.UserProfile, query: { id: seller_id } }}
            className="btn ripple btn-light btn-block btn-lg"
          >
            View Porfile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

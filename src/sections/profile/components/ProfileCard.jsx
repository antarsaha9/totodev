import Image from "next/image";
import React from "react";
import UserImage from "../../../assets/images/users/male/2.jpg";

const ProfileCard = ({ profile }) => {
  console.log(profile);

  return (
    <div className="card">
      <div className="item-user">
        <div className="profile-pic wideget-user-img mb-0 pt-3">
          <Image
            src={profile?.image_url || UserImage}
            className="brround"
            alt="user"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="card-body item-user text-center">
        <div className="ml-1">
          <a href="userprofile.html" className="text-dark">
            <h4 className="mt-0 mb-2 d-flex align-items-center justify-content-center">
              {profile?.first_name} {profile?.last_name}
              <svg
                className="ml-1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                focusable="false"
                width="15.75"
                height={18}
                style={{
                  msTransform: "rotate(360deg)",
                  WebkitTransform: "rotate(360deg)",
                  transform: "rotate(360deg)",
                }}
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 512 512"
              >
                <path
                  d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm114.9 149.1L231.8 359.6c-1.1 1.1-2.9 3.5-5.1 3.5-2.3 0-3.8-1.6-5.1-2.9-1.3-1.3-78.9-75.9-78.9-75.9l-1.5-1.5c-.6-.9-1.1-2-1.1-3.2 0-1.2.5-2.3 1.1-3.2.4-.4.7-.7 1.1-1.2 7.7-8.1 23.3-24.5 24.3-25.5 1.3-1.3 2.4-3 4.8-3 2.5 0 4.1 2.1 5.3 3.3 1.2 1.2 45 43.3 45 43.3l111.3-143c1-.8 2.2-1.4 3.5-1.4 1.3 0 2.5.5 3.5 1.3l30.6 24.1c.8 1 1.3 2.2 1.3 3.5.1 1.3-.4 2.4-1 3.3z"
                  fill="#01d277"
                />
                <rect
                  x={0}
                  y={0}
                  width={512}
                  height={512}
                  fill="rgba(0, 0, 0, 0)"
                />
              </svg>
            </h4>
          </a>
          <span className="text-muted">Member since May 2012</span>
          <br />
          <div className="rating-stars d-inline-flex mb-2 mr-3 mt-2">
            <input
              type="number"
              readOnly="readonly"
              className="rating-value star"
              name="rating-stars-value"
              defaultValue={4}
            />
            <div className="rating-stars-container mr-2">
              <div className="rating-star sm is--active">
                {" "}
                <i className="fa fa-star" />{" "}
              </div>
              <div className="rating-star sm is--active">
                {" "}
                <i className="fa fa-star" />{" "}
              </div>
              <div className="rating-star sm is--active">
                {" "}
                <i className="fa fa-star" />{" "}
              </div>
              <div className="rating-star sm ">
                {" "}
                <i className="fa fa-star" />{" "}
              </div>
              <div className="rating-star sm">
                {" "}
                <i className="fa fa-star" />{" "}
              </div>
            </div>
            4.0
          </div>
          <h6 className="mt-2 mb-0">
            <a href="#" className="btn ripple  btn-secondary btn-sm">
              1245 Views
            </a>
            <a href="#" className="btn ripple  btn-info btn-sm">
              850 Followers
            </a>
          </h6>
        </div>
      </div>
      <div className="card-body item-user">
        <h4 className="mb-4">Contact Info</h4>
        <div>
          <h6>
            <span className="font-weight-semibold">
              <i className="fa fa-map-marker mr-2 mb-2" />
            </span>
            <a href="#" className="text-body">
              {" "}
              {profile?.address} {profile?.city} {profile?.country}
            </a>
          </h6>
          <h6>
            <span className="font-weight-semibold">
              <i className="fa fa-envelope mr-3 mb-2" />
            </span>
            <a href="#" className="text-body">
              {" "}
              {profile?.email}
            </a>
          </h6>
          <h6>
            <span className="font-weight-semibold">
              <i className="fa fa-phone mr-3  mb-2" />
            </span>
            <a href="#" className="text-body">
              {" "}
              {profile?.phone}
            </a>
          </h6>
          {/* <h6>
            <span className="font-weight-semibold">
              <i className="fa fa-link mr-3 " />
            </span>
            <a href="#" className="text-body">
              {profile?.website}
            </a>
          </h6> */}
        </div>
        <div className=" item-user-icons mt-4">
          <a
            href={`https://facebook.com/${profile?.facebook_id}`}
            target="_blank"
            rel="noopener norefrrer"
            className="facebook-bg mt-0 mx-1"
          >
            <i className="fa fa-facebook" />
          </a>
          <a
            href={`https://twitter.com/${profile?.twitter_id}`}
            target="_blank"
            rel="noopener norefrrer"
            className="twitter-bg mx-1"
          >
            <i className="fa fa-twitter" />
          </a>
          <a href="#" className="google-bg mx-1">
            <i className="fa fa-google" />
          </a>
          <a href="#" className="dribbble-bg mx-1">
            <i className="fa fa-dribbble" />
          </a>
        </div>
      </div>
      <div className="card-footer">
        <div className="text-left">
          <a href="#" className="btn ripple   btn-primary">
            <i className="fa fa-envelope" /> Chat
          </a>
          <a
            href="#"
            className="btn ripple  btn-secondary"
            data-toggle="modal"
            data-target="#contact"
          >
            <i className="fa fa-user" /> Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;

import { format } from "date-fns";
import React from "react";
import { Nav, Tab } from "react-bootstrap";
import LoaderSpinner from "~components/Cards/LoaderSpinner";
import CommentImage from "../../assets/images/users/male/1.jpg";
import FollowCard from "../../components/Cards/FollowCard";
import GridBlock from "./components/GridBlock";
import Map from "./components/Map";
import ProfileCard from "./components/ProfileCard";
import ReplayForm from "./components/ReplayForm";
import SingleComment from "./components/SingleComment";
import { FollowerData } from "./data";

const ProfileBody = ({ profile, review, reviewProfile, commentOnReview, sellerItems }) => {
  return (
    <>
      {/*Section*/}
      <section className="sptb">
        <div className="container">
          <div className="row">
            {/*Right Side Content*/}
            <div className="col-xl-3 col-lg-4 col-md-12">
              {(!profile || profile.loading) ? <LoaderSpinner /> : <ProfileCard profile={profile} />}
              <div className="card mb-lg-0">
                <div className="card-header">
                  <h3 className="card-title">Map location</h3>
                </div>
                <div className="card-body">
                  <div className="map-header">
                    <Map />
                  </div>
                </div>
              </div>
            </div>
            {/*Right Side Content*/}
            <div className="col-xl-9 col-lg-8 col-md-12">
              {/*Itemsd Description*/}
              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className=" mb-5">
                  <div className="wideget-user-tab wideget-user-tab3">
                    <div className="tab-menu-heading">
                      <div className="tabs-menu1">
                        <Nav className="nav" as="ul">
                          <Nav.Item as="li">
                            <Nav.Link eventKey="first" className="mb-0">Description</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Nav.Link eventKey="second" className="mb-0">Reviews</Nav.Link>
                          </Nav.Item>
                          <Nav.Item as="li">
                            <Nav.Link eventKey="third" className="mb-0">Followers</Nav.Link>
                          </Nav.Item>
                        </Nav>
                      </div>
                    </div>
                  </div>
                  {/*/Itemsd Description*/}
                  <div className="border-0">
                    <Tab.Content className="border-left border-right details-tab-content bg-white">
                      <Tab.Pane eventKey="first">
                        <div className="p-5">
                          <h3 className="card-title mb-3 ">Personal Details</h3>
                          <ul className="usertab-list mb-4">
                            <li>
                              <div className="text-dark">
                                <span className="font-weight-semibold">
                                  Full Name :
                                </span>{" "}
                                <span className="text-muted">
                                  {" "}
                                  {profile?.first_name} {profile?.last_name}
                                </span>
                              </div>
                            </li>
                            <li>
                              <a href="/#" className="text-dark">
                                <span className="font-weight-semibold">
                                  Location :
                                </span>{" "}
                                <span className="text-muted">
                                  {profile?.address} {profile?.city}{" "}
                                  {profile?.country}
                                </span>
                              </a>
                            </li>
                            {/* <li>
                              <a href="/#" className="text-dark">
                                <span className="font-weight-semibold">
                                  Languages :
                                </span>{" "}
                                <span className="text-muted">
                                  English, German,Vehiclenish.
                                </span>
                              </a>
                            </li> */}
                            <li>
                              <a href="/#" className="text-dark">
                                <span className="font-weight-semibold">
                                  Website :
                                </span>
                                <span className="text-muted">
                                  {profile?.website}
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="text-dark">
                                <span className="font-weight-semibold">
                                  Email :
                                </span>
                                <span className="text-muted">
                                  {" "}
                                  {profile?.email}
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href="/#" className="text-dark">
                                <span className="font-weight-semibold">
                                  Phone :
                                </span>{" "}
                                <span className="text-muted">
                                  {profile?.phone}
                                </span>
                              </a>
                            </li>
                          </ul>
                          <h3 className="card-title mb-3 ">Biography</h3>
                          <div className="mb-0 profie-img">
                            <p className="mb-0">{profile?.about}</p>
                          </div>
                        </div>
                        <div className="card-footer bg-white br-bl-3 br-br-3 border-bottom">
                          <div className="icons">
                            <a href="/#" className="btn ripple  btn-info icons">
                              <i className="icon icon-share mr-1" /> Share Items
                            </a>
                            <a
                              href="/#"
                              className="btn ripple  btn-danger icons"
                              data-toggle="modal"
                              data-target="#report"
                            >
                              <i className="icon icon-exclamation mr-1" />{" "}
                              Report Abuse
                            </a>
                            <a
                              href="/#"
                              className="btn ripple  btn-primary icons"
                            >
                              <i className="icon icon-heart  mr-1" /> 678
                            </a>
                            <a
                              href="/#"
                              className="btn ripple  btn-secondary icons"
                            >
                              <i className="icon icon-printer  mr-1" /> Print
                            </a>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane
                        eventKey="second"
                        className="userprof-tab border-bottom"
                      >
                        {review?.loading ? <LoaderSpinner /> : review?.map((item, ind) => (
                          <SingleComment
                            className="p-5 mt-0 border-bottom"
                            title={item.name}
                            image={item.image_url}
                            star={item.rating}
                            date={format(new Date(item.created_at), "MMM do")}
                            time={format(new Date(item.created_at), "HH:mm")}
                            location={item.address}
                            text={item.review}
                            tags={[
                              {
                                active: true,
                                text: "Helpful",
                              },
                              {
                                active: false,
                                text: "comment",
                              },
                              {
                                active: false,
                                text: "report",
                              },
                            ]}
                            key={item.id}
                            id={item.id}
                          >
                            {item.comments?.map((item, ind) => (
                              <SingleComment
                                className="mt-5"
                                title={item.name}
                                image={CommentImage}
                                star={false}
                                date={format(
                                  new Date(item.created_at),
                                  "MMM do"
                                )}
                                time={format(
                                  new Date(item.created_at),
                                  "HH:mm"
                                )}
                                tags={[
                                  {
                                    active: false,
                                    text: "comment",
                                  },
                                ]}
                              />
                            ))}
                          </SingleComment>
                        ))}
                        {/* 
                        <SingleComment
                          className="mt-5 border-top p-5"
                          title="Edward"
                          image={CommentImage}
                          star={3}
                          date="Dec 21st "
                          time="16.35"
                          location="UK"
                          text="Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et nostrud exercitation ullamco laboris commodo consequat."
                          tags={[
                            {
                              active: true,
                              text: "Helpful",
                            },
                            {
                              active: false,
                              text: "comment",
                            },
                            {
                              active: false,
                              text: "report",
                            },
                          ]}
                        /> */}
                        <div className="p-5">
                          <ReplayForm reviewProfile={reviewProfile} />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div className="p-5">
                          <div className="row">
                            {FollowerData.map(
                              ({ name, email, image }, index) => {
                                return (
                                  <div
                                    className="col-lg-6 col-md-12"
                                    key={index + "flwdat"}
                                  >
                                    <FollowCard
                                      name={name}
                                      image={image}
                                      email={email}
                                    />
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </div>
              </Tab.Container>
              {/*Related Posts*/}
              <h3 className="mb-5 mt-4">User Products</h3>
              {sellerItems && sellerItems.loading ? <LoaderSpinner /> : <GridBlock items={sellerItems} />}
              {/*/Related Posts*/}
            </div>
          </div>
        </div>
      </section>
      {/*/Section*/}
    </>
  );
};
export default ProfileBody;

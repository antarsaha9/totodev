import React from "react";
import { Nav, Tab } from "react-bootstrap";
import commentImagePlaceHolder from "../../../../assets/images/png/1.png";
import RatingReplyUser from "../../../../assets/images/users/male/1.jpg";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import Pagination from "./Pagination";
import RatingCard from "./RatingCard";
import RatingForm from "./RatingFrom";
import RatingReplyCard from "./RatingReplyCard";

const TabBlockMain = ({ product }) => {
  return (
    <Tab.Container defaultActiveKey="details">
      <div className="border-0 mb-5">
        <div className="wideget-user-tab wideget-user-tab3">
          <div className="tab-menu-heading">
            <div className="tabs-menu1">
              <Nav as="ul">
                <Nav.Item as="li">
                  <Nav.Link eventKey="details">Details</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="rating">Ratings</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="comments">Comments</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link eventKey="support">Support</Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
        </div>
        <div className="tab-content details-tab-content">
          <Tab.Pane eventKey="details">
            <div className="border-left border-right p-5 bg-white">
              <h3 className="card-title mb-3 ">Description</h3>
              <div className="mb-0">
                <p>
                  {product?.item_description ||
                    `At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atcorrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.`}
                </p>
              </div>
              <h4 className="card-title mb-3 ">Features</h4>
              <div className="row">
                <div className="col-xl-6 col-md-6">
                  <ul className="list-unstyled widget-spec mb-0">
                    <li>
                      <i className="typcn typcn-chevron-right-outline text-muted" />
                      HTML Pages
                    </li>
                    <li>
                      <i className="typcn typcn-chevron-right-outline text-muted" />{" "}
                      Plugins
                    </li>
                    <li>
                      <i className="typcn typcn-chevron-right-outline text-muted" />{" "}
                      Light &amp; Dark Versions
                    </li>
                    <li>
                      <i className="typcn typcn-chevron-right-outline text-muted" />{" "}
                      Realtime Project Work
                    </li>
                    <li>
                      <i className="typcn typcn-chevron-right-outline text-muted" />{" "}
                      More Maps
                    </li>
                    <li className="mb-xl-0">
                      <i className="typcn typcn-chevron-right-outline text-muted" />{" "}
                      Edittable Text
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6 col-md-6">
                  <ul className="list-unstyled widget-spec mb-0">
                    <li>
                      <i className="typcn typcn-chevron-right-outline text-muted" />{" "}
                      Message Chat
                    </li>
                    <li>
                      <i className="typcn typcn-chevron-right-outline text-muted" />{" "}
                      Mail Inbox
                    </li>
                    <li>
                      <i className="typcn typcn-chevron-right-outline text-muted" />{" "}
                      Icons Set
                    </li>
                    <li>
                      <i className="typcn typcn-chevron-right-outline text-muted" />{" "}
                      Error Pages
                    </li>
                    <li>
                      <i className="typcn typcn-chevron-right-outline text-muted" />{" "}
                      Pricing Tabels
                    </li>
                    <li className="mb-0">
                      <i className="typcn typcn-chevron-right-outline text-muted" />{" "}
                      Shoping Cart
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row mt-6 mb-1">
                <div className="col-xl-4 col-md-6">
                  <div className="card text-center bg-light shadow-none mb-3">
                    <div className="card-body pt-3 pb-3">
                      <p>100% Fully Responsive</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card text-center bg-light shadow-none mb-3">
                    <div className="card-body pt-3 pb-3">
                      <p>Bootstrap4 Framework</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card text-center bg-light shadow-none mb-3">
                    <div className="card-body pt-3 pb-3">
                      <p>W3C Validated</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card text-center bg-light mb-3 mb-lg-0 shadow-none">
                    <div className="card-body pt-3 pb-3">
                      <p>Regular Updates</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card text-center bg-light mb-3 mb-lg-0 shadow-none">
                    <div className="card-body pt-3 pb-3">
                      <p> Easy to Customize</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-md-6">
                  <div className="card text-center bg-light mb-0 shadow-none">
                    <div className="card-body pt-3 pb-3">
                      <p>24/7 Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer bg-white br-bl-3 br-br-3 border-right border-left border-bottom">
              <div className="btn-list">
                <a href="#" className="btn ripple  btn-secondary icons">
                  <i className="fe fe-share-2 mr-1" /> Share
                </a>
                <a
                  href="#"
                  className="btn ripple  btn-danger icons"
                  data-toggle="modal"
                  data-target="#report"
                >
                  <i className="icon icon-exclamation mr-1" /> Report Abuse
                </a>
                <a href="#" className="btn ripple  btn-info icons">
                  <i className="icon icon-heart  mr-1" /> 678
                </a>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="rating">
            <div className="border-left border-right p-5 bg-white border-bottom br-bl-3 br-br-3">
              <div className="row">
                <div className="col-md-12">
                  <RatingCard
                    title="Design Quality"
                    text="Excellent design that breaksaway from the cliche bootstrap sites that are a dime-a-dozen these days."
                    star={4}
                    name="Joyce Chua"
                    date="2 months ago"
                  />
                  <RatingCard
                    title="Design Quality"
                    text="Excellent design that breaksaway from the cliche bootstrap sites that are a dime-a-dozen these days."
                    star={4}
                    name="Joyce Chua"
                    date="2 months ago"
                  />
                  <RatingCard
                    title="Design Quality"
                    text="Excellent design that breaksaway from the cliche bootstrap sites that are a dime-a-dozen these days."
                    star={4}
                    name="Joyce Chua"
                    date="2 months ago"
                  />
                  <RatingCard
                    title="Design Quality"
                    text="Excellent design that breaksaway from the cliche bootstrap sites that are a dime-a-dozen these days."
                    star={4}
                    name="Joyce Chua"
                    date="2 months ago"
                  >
                    <RatingReplyCard
                      image={RatingReplyUser}
                      name="Joanne Scott"
                      text="Hey Thank You So Much"
                    />
                  </RatingCard>
                  <Pagination />
                </div>
              </div>
            </div>
            <RatingForm />
          </Tab.Pane>
          <Tab.Pane eventKey="comments">
            <div className="border-left border-right p-5 bg-white border-bottom br-bl-3 br-br-3">
              <CommentCard
                image={commentImagePlaceHolder}
                title="Marco Theme"
                tags={[
                  { text: "Helpul", active: true },
                  { text: "comment", active: false },
                  { text: "Report", active: false },
                ]}
                date="28 Dec 2019"
                text="Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore."
              />
              <CommentCard
                image={commentImagePlaceHolder}
                title="Marco Theme"
                tags={[
                  { text: "Helpul", active: true },
                  { text: "comment", active: false },
                  { text: "Report", active: false },
                ]}
                date="28 Dec 2019"
                text="Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore."
              />
              <CommentCard
                image={commentImagePlaceHolder}
                title="Marco Theme"
                tags={[
                  { text: "Helpul", active: true },
                  { text: "comment", active: false },
                  { text: "Report", active: false },
                ]}
                date="28 Dec 2019"
                text="Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore."
              />
              <CommentCard
                image={commentImagePlaceHolder}
                title="Marco Theme"
                tags={[
                  { text: "Helpul", active: true },
                  { text: "comment", active: false },
                  { text: "Report", active: false },
                ]}
                date="28 Dec 2019"
                text="Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore."
              />
              <CommentCard
                image={commentImagePlaceHolder}
                title="Marco Theme"
                tags={[
                  { text: "Helpul", active: true },
                  { text: "comment", active: false },
                  { text: "Report", active: false },
                ]}
                date="28 Dec 2019"
                text="Ut enim ad minim veniam, quis Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore."
              />
            </div>
            <CommentForm />
          </Tab.Pane>
          <Tab.Pane eventKey="support">
            <div className="border-left border-right p-5 bg-white">
              <h3 className="card-title mb-4 ">Conatct the Author</h3>
              <div className="form-group">
                <label className="form-label">Support Subject</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Support Query</label>
                <textarea
                  className="form-control h-auto"
                  name="example-textarea-input"
                  rows={6}
                  placeholder="Comment"
                  defaultValue={""}
                ></textarea>
              </div>
              <a href="#" className="btn ripple  btn-primary">
                Submit
              </a>
            </div>
            <div className="card-footer bg-white br-bl-3 br-br-3 border-right border-left border-bottom">
              <div className="btn-list">
                <a href="#" className="btn ripple  btn-secondary icons">
                  <i className="fe fe-share-2 mr-1" /> Share
                </a>
                <a
                  href="#"
                  className="btn ripple  btn-danger icons"
                  data-toggle="modal"
                  data-target="#report"
                >
                  <i className="icon icon-exclamation mr-1" /> Report Abuse
                </a>
                <a href="#" className="btn ripple  btn-info icons">
                  <i className="icon icon-heart  mr-1" /> 678
                </a>
              </div>
            </div>
          </Tab.Pane>
        </div>
      </div>
    </Tab.Container>
  );
};
export default TabBlockMain;

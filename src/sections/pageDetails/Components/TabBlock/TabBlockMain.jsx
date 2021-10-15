import React from "react";
import { Nav, Spinner, Tab } from "react-bootstrap";
import LoaderSpinner from "~components/Cards/LoaderSpinner";
import RatingReplyUser from "../../../../assets/images/users/male/1.jpg";
import CommentTab from "./CommentTab";
import Pagination from "./Pagination";
import RatingCard from "./RatingCard";
import RatingForm from "./RatingFrom";
import RatingReplyCard from "./RatingReplyCard";

const features = [
  'HTML Pages',
  'Plugins',
  'Light &amp; Dark Versions',
  'Realtime Project Work',
  'More Maps',
  'Edittable Text',
  'Message Chat',
  'Mail Inbox',
  'Icons Set',
  'Error Pages',
  'Pricing Tabels',
  'Shoping Cart'
];

const TabBlockMain = ({ product, reviews, comments, reviewItem, commentItem }) => {
  const { item_description, tags, } = product;
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
            {product.loading ? <LoaderSpinner /> :
              <><div className="border-left border-right p-5 bg-white">
                <h3 className="card-title mb-3 ">Description</h3>
                <div className="mb-0">
                  <p>
                    {item_description ||
                      `At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atcorrupti quos
                  dolores et quas molestias excepturi sint occaecati cupiditate
                  non provident, similique sunt in culpa qui officia deserunt
                  mollitia animi, id est laborum et dolorum fuga.`}
                  </p>
                </div>
                {/* {features && features.length > 0 && <>
                  <h4 className="card-title mb-3 ">Features</h4>
                  <div className="row">
                    <div className="col-xl-6 col-md-6">
                      <ul className="list-unstyled widget-spec mb-0">
                        {features.slice(0, features.length / 2).map((feature, index) =>
                          <li key={"feature-" + index}>
                            <i className="fa fa-angle-double-right text-muted"></i>
                            {feature}
                          </li>
                        )}
                      </ul>
                    </div>
                    <div className="col-xl-6 col-md-6">
                      <ul className="list-unstyled widget-spec mb-0">
                        {features.slice(features.length / 2).map((feature, index) =>
                          <li key={"feature-" + index}>
                            <i className="fa fa-angle-double-right text-muted" />
                            {feature}
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </>} */}
                {tags && <div className="row mt-6 mb-1">
                  {tags.split(',').map(tag =>
                    <div className="col-xl-4 col-md-6">
                      <div className="card text-center bg-light shadow-none mb-3">
                        <div className="card-body pt-3 pb-3">
                          <p>{tag}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>}
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
                </div></>}
          </Tab.Pane>
          <Tab.Pane eventKey="rating">
            {reviews.loading ? <LoaderSpinner /> :
              <>
                <div className="border-left border-right p-5 bg-white border-bottom br-bl-3 br-br-3">
                  <div className="row">
                    <div className="col-md-12">
                      {reviews.map(review =>
                        <RatingCard
                          title={review.review}
                          // text={review.review}
                          star={review.rating}
                          userName={review.name}
                          date={review.created_at}
                          userId={review.created_by}
                        />
                      )}

                      {/* <RatingCard
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
                      </RatingCard> */}
                      <Pagination />
                    </div>
                  </div>
                </div>
                <RatingForm reviewItem={reviewItem} />
              </>}
          </Tab.Pane>
          <Tab.Pane eventKey="comments">
            <CommentTab comments={comments} submitComment={commentItem} />

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

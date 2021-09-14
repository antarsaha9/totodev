import React from "react";
import ProfileNavigation from "../../components/Dashboard/ProfileNav";
import MyAdTab from "./components/MyAdTab";
import CategorySearchCard from "./components/CategorySearchCard";
const MyAdsBody = ({ menuActive }) => {
  return (
    <>
      {/*Section*/}
      <section className="sptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-12">
              <ProfileNavigation active={menuActive} />
              <CategorySearchCard />
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Safety Tips For Buyers</h3>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled widget-spec  mb-0">
                    <li>
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />
                      Meet Seller at public Place
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />{" "}
                      Check item before you buy
                    </li>
                    <li>
                      <i
                        className="fa fa-check text-success"
                        aria-hidden="true"
                      />{" "}
                      Pay only after collecting item
                    </li>
                    <li className="ml-5 mb-0">
                      <a href="#"> View more..</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12">
              <MyAdTab />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default  MyAdsBody;
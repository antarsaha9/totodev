import React from "react";
import ProfileNavigation from "../../components/Dashboard/ProfileNav";
import SelectBox from "../Checkout/Components/SelectBox";
import PaymentMethodTab from "../../components/Widgets/PaymentMethodWidget";
import PaymentTable from "./components/PaymentTable";
const PaymentBody = () => {
  return (
    <>
      {/*Section*/}
      <section className="sptb">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-12">
              <ProfileNavigation />
              <div className="card my-select">
                <div className="card-header">
                  <h3 className="card-title">Search Categories</h3>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="text"
                      placeholder="What are you looking for?"
                    />
                  </div>
                  <div className="form-group">
                    <SelectBox
                      data={[
                        "HTML",
                        "Wordpress",
                        "Angular",
                        "PHP",
                        "PSD",
                        "Plugins",
                      ]}
                      defaultValue="All Categories"
                    />
                  </div>
                  <div>
                    <button className="btn ripple btn-block btn-primary">
                      Search
                    </button>
                  </div>
                </div>
              </div>
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
                      />{" "}
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
                      <a href="tips.html"> View more..</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12">
              <PaymentMethodTab
                title="Payment Method"
                classBtnOne="btn-primary"
                classBtnTwo="btn-primary"
              />
              <PaymentTable />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PaymentBody;

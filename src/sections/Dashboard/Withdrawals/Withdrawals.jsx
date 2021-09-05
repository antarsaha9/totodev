import React from "react";
import { Container, Row } from "react-bootstrap";
import PaymentMethodTab from "../../../components/Widgets/PaymentMethodWidget";
const WithdrawalsSection = () => {
  return (
    <Container className="spb">
      <Row>
        <div className="col-xl-12 col-lg-12 col-md-12">
          <PaymentMethodTab
            title="Widthdrawals Method"
            classBtnOne="btn-primary"
            classBtnTwo="btn-primary"
          />
          <div className="card mb-0">
            <div className="card-header">
              <h3 className="card-title">Widthdrawals History</h3>
            </div>
            <div className="card-body">
              <div className="table-responsive border-top">
                <table className="table table-bordered text-nowrap">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Category</th>
                      <th>Date</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>#348</td>
                      <td>HTML Template</td>
                      <td>07-12-2019</td>
                      <td className="font-weight-semibold fs-16">$18</td>
                      <td>
                        <a className="btn ripple  btn-primary btn-sm text-white">
                          Pending
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>#186</td>
                      <td>Listing Template</td>
                      <td>02-12-2019</td>
                      <td className="font-weight-semibold fs-16">$14,276</td>
                      <td>
                        <a className="btn ripple  btn-success btn-sm text-white mb-1">
                          Paid
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>#831</td>
                      <td>Busniess Template</td>
                      <td>30-11-2019</td>
                      <td className="font-weight-semibold fs-16">$25,000</td>
                      <td>
                        <a className="btn ripple  btn-primary btn-sm text-white">
                          Pending
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>#672</td>
                      <td>Corporate Template</td>
                      <td>25-18-2019</td>
                      <td className="font-weight-semibold fs-16">$50.00</td>
                      <td>
                        <a className="btn ripple  btn-success btn-sm text-white">
                          Paid
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>#428</td>
                      <td>Spa Template</td>
                      <td>24-11-2019</td>
                      <td className="font-weight-semibold fs-16">$99.99</td>
                      <td>
                        <a className="btn ripple  btn-success btn-sm text-white">
                          Paid
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>#543</td>
                      <td>Wordpress Template</td>
                      <td>22-11-2019</td>
                      <td className="font-weight-semibold fs-16">$145</td>
                      <td>
                        <a className="btn ripple  btn-primary btn-sm text-white">
                          Pending
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>#986</td>
                      <td>Angular Template</td>
                      <td>18-11-2019</td>
                      <td className="font-weight-semibold fs-16">$378</td>
                      <td>
                        <a className="btn ripple  btn-success btn-sm text-white">
                          Paid
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ul className="pagination">
                <li className="page-item page-prev disabled">
                  <a className="page-link" href="#" tabIndex={-1}>
                    Prev
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item page-next">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default WithdrawalsSection;

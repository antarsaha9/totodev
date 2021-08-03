import React from "react";
import { Tab, Nav } from "react-bootstrap";
const PaymentMethodTab = ({ title, classBtnOne, classBtnTwo, ...rest }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="card-body">
        <Tab.Container defaultActiveKey="credit">
          <div className="card-pay">
            <Nav className="tabs-menu nav" as="ul">
              <Nav.Item as="li">
                <Nav.Link eventKey="credit">
                  <i className="fa fa-credit-card" /> Credit Card
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="paypal">
                  <i className="fa fa-paypal" /> Paypal
                </Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="bank">
                  <i className="fa fa-university" /> Bank Transfer
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="credit">
                <div className="form-group">
                  <label className="form-label">CardHolder Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name1"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Card number</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for..."
                    />
                    <span className="input-group-append">
                      <button className="btn ripple  btn-info" type="button">
                        <i className="fa fa-cc-visa" /> &nbsp;{" "}
                        <i className="fa fa-cc-amex" /> &nbsp;
                        <i className="fa fa-cc-mastercard" />
                      </button>
                    </span>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-8">
                    <div className="form-group">
                      <label className="form-label">Expiration</label>
                      <div className="input-group">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="MM"
                          name="expire-month"
                        />
                        <input
                          type="number"
                          className="form-control"
                          placeholder="YY"
                          name="expire-year"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label className="form-label">
                        CVV <i className="fa fa-question-circle" />
                      </label>
                      <input type="number" className="form-control" required />
                    </div>
                  </div>
                </div>
                <button className={`btn ripple ${classBtnOne}`}>Submit</button>
              </Tab.Pane>
              <Tab.Pane eventKey="paypal">
                <h6 className="font-weight-semibold">
                  Paypal is easiest way to pay online
                </h6>
                <p>
                  <a href="#" className={`btn ripple ${classBtnTwo}`}>
                    <i className="fa fa-paypal" /> Log in my Paypal
                  </a>
                </p>
                <p className="mb-0">
                  <strong>Note:</strong> Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.{" "}
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="bank">
                <h6 className="font-weight-semibold">Bank account details</h6>
                <dl className="card-text">
                  <dt>BANK: </dt>
                  <dd> THE UNION BANK 0456</dd>
                </dl>
                <dl className="card-text">
                  <dt>Accaunt number: </dt>
                  <dd> 67542897653214</dd>
                </dl>
                <dl className="card-text">
                  <dt>IBAN: </dt>
                  <dd>543218769</dd>
                </dl>
                <p className="mb-0">
                  <strong>Note:</strong> Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt.{" "}
                </p>
              </Tab.Pane>
            </Tab.Content>
          </div>
        </Tab.Container>
      </div>
    </div>
  );
};
export default PaymentMethodTab;

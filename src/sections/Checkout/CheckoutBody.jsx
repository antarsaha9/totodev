import React, { useState } from "react";
import { Button, Nav, Tab } from "react-bootstrap";
import { PayPalButton } from "react-paypal-button-v2";
import LoaderSpinner from "~components/Cards/LoaderSpinner";
import CreditCardForm from "./Components/CreditCardForm";
import FormBlock from "./Components/FormBlock";
import DropIn from "~components/Widgets/PaypalDropIn";

const CheckoutBody = ({ checkoutData, confirmPayment, purchase }) => {
  const [instance, setInstance] = useState(null)
  const handleBuy = function (res) {
    console.log(res);
    // const { nonce } = res;
    confirmPayment({ paymentMethodNonce: res.nonce, order_number: checkoutData.order_number })
    // });
  }
  return (
    <section className="sptb">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="card mb-lg-0">
              <div className="card-header">
                <h3 className="card-title">Billing Information</h3>
              </div>
              <div className="card-body">
                <FormBlock submit={purchase} />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12">
            <div className="card mb-0">
              <div className="card-header">
                <h3 className="card-title">Payment Method</h3>
              </div>
              <Tab.Container defaultActiveKey="second">
                <div className="card-body">
                  {!checkoutData ? "Please fill the form first!" : checkoutData.loading ? <LoaderSpinner /> : <div className="card-pay">
                    <Nav className="tabs-menu nav" as="ul">
                      {/* <Nav.Item as="li">
                        <Nav.Link eventKey="first">
                          <i className="fa fa-credit-card" /> Credit Card
                        </Nav.Link>
                      </Nav.Item> */}
                      <Nav.Item as="li">
                        <Nav.Link eventKey="second">
                          <i className="fa fa-paypal" /> Paypal
                        </Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item as="li">
                        <Nav.Link eventKey="third">
                          <i className="fa fa-university" /> Bank Transfer
                        </Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <CreditCardForm />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {/* <p>
                          <Button>
                            <i className="fa fa-paypal" /> Log in my Paypal
                          </Button>
                        </p> */}
                        {/* <p className="mb-0">
                          <strong>Note:</strong> Nemo enim ipsam voluptatem quia
                          voluptas sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt.{" "}
                        </p> */}

                        {/* <PayPalButton
                          amount="0.01"
                          onSuccess={(details, data) => {
                            console.log(details, data);
                            return fetch("/paypal-transaction-complete", {
                              method: "post",
                              body: JSON.stringify({
                                orderID: data.orderID,
                              }),
                            });
                          }}
                          options={{ clientId: "sb" }}
                          style={{
                            layout: "vertical",
                            color: "gold",
                            shape: "rect",
                            label: "paypal",
                            height: 40,
                          }}
                        /> */}
                        <div>
                          <h2>Total payable: ${checkoutData.total_cost}</h2>
                          <DropIn
                            options={{ authorization: checkoutData.paypal_token }}
                            onInstance={setInstance}
                            onComplete={handleBuy}
                          >
                            {/* <Button onClick={handleBuy}>Buy</Button> */}
                          </DropIn>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Bank account details</p>
                        <dl className>
                          <dt>BANK: </dt>
                          <dd> THE UNION BANK 0456</dd>
                        </dl>
                        <dl className>
                          <dt>Account number: </dt>
                          <dd> 67542897653214</dd>
                        </dl>
                        <dl className>
                          <dt>IBAN: </dt>
                          <dd>543218769</dd>
                        </dl>
                        <p className="mb-0">
                          <strong>Note:</strong> Nemo enim ipsam voluptatem quia
                          voluptas sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt.{" "}
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>}
                </div>
              </Tab.Container>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// {
//   "id": "6FG935502K861993T",
//   "intent": "CAPTURE",
//   "status": "COMPLETED",
//   "purchase_units": [
//       {
//           "reference_id": "default",
//           "amount": {
//               "currency_code": "USD",
//               "value": "0.01"
//           },
//           "payee": {
//               "email_address": "barco.03-facilitator@gmail.com",
//               "merchant_id": "YQZCHTGHUK5P8"
//           },
//           "shipping": {
//               "name": {
//                   "full_name": "John Doe"
//               },
//               "address": {
//                   "address_line_1": "1 Cheeseman Ave Brighton East",
//                   "admin_area_2": "Melbourne",
//                   "admin_area_1": "Victoria",
//                   "postal_code": "3001",
//                   "country_code": "AU"
//               }
//           },
//           "payments": {
//               "captures": [
//                   {
//                       "id": "5WG35187EE492234T",
//                       "status": "COMPLETED",
//                       "amount": {
//                           "currency_code": "USD",
//                           "value": "0.01"
//                       },
//                       "final_capture": true,
//                       "seller_protection": {
//                           "status": "ELIGIBLE",
//                           "dispute_categories": [
//                               "ITEM_NOT_RECEIVED",
//                               "UNAUTHORIZED_TRANSACTION"
//                           ]
//                       },
//                       "create_time": "2021-08-28T16:20:58Z",
//                       "update_time": "2021-08-28T16:20:58Z"
//                   }
//               ]
//           }
//       }
//   ],
//   "payer": {
//       "name": {
//           "given_name": "John",
//           "surname": "Doe"
//       },
//       "email_address": "sb-lgkad2799305@personal.example.com",
//       "payer_id": "7JY8F8DVKQ5L8",
//       "phone": {
//           "phone_number": {
//               "national_number": "0367386202"
//           }
//       },
//       "address": {
//           "address_line_1": "1 Cheeseman Ave Brighton East",
//           "admin_area_2": "Melbourne",
//           "admin_area_1": "Victoria",
//           "postal_code": "3001",
//           "country_code": "AU"
//       }
//   },
//   "create_time": "2021-08-28T16:20:29Z",
//   "update_time": "2021-08-28T16:20:58Z",
//   "links": [
//       {
//           "href": "https://api.sandbox.paypal.com/v2/checkout/orders/6FG935502K861993T",
//           "rel": "self",
//           "method": "GET"
//       }
//   ]
// }

// {
//   "orderID": "6FG935502K861993T",
//   "payerID": "7JY8F8DVKQ5L8",
//   "paymentID": null,
//   "billingToken": null,
//   "facilitatorAccessToken": "A21AAI-3Vp_o6-p-N6onA4rw2-0jNCkIoyP0SYePlBQIbn4jgnjsJcsjb06Ay5bBX-1WmU3vliHcz8K4mh8NwPqWx_izxHHNg"
// }

export default CheckoutBody;

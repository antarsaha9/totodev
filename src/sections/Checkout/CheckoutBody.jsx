import React from 'react'
import FormBlock from './Components/FormBlock'
import { Nav,Tab } from 'react-bootstrap'
import CreditCardForm from './Components/CreditCardForm'
const CheckoutBody=()=>{
return(
<section className="sptb">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-12">
        <div className="card mb-lg-0">
          <div className="card-header">
            <h3 className="card-title">Billing Information</h3>
          </div>
          <div className="card-body">
            <FormBlock/>
          </div>
        </div>
      </div>
      <div className="col-xl-6 col-lg-6 col-md-12">
        <div className="card mb-0">
          <div className="card-header">
            <h3 className="card-title">Payment Method</h3>
          </div>
          <Tab.Container defaultActiveKey="first">
          <div className="card-body">
            <div className="card-pay">
              <Nav  className="tabs-menu nav" as="ul">
              <Nav.Item as="li">
                <Nav.Link eventKey="first"><i className="fa fa-credit-card" /> Credit Card</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="second"><i className="fa fa-paypal" />  Paypal</Nav.Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Nav.Link eventKey="third"><i className="fa fa-university" />  Bank Transfer</Nav.Link>
              </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <CreditCardForm/>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>Paypal is easiest way to pay online</p>
                  <p><a href="#" className="btn btn-primary"><i className="fa fa-paypal" /> Log in my Paypal</a></p>
                  <p className="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
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
                  <p className="mb-0"><strong>Note:</strong> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </div>
          </Tab.Container>
        </div>
      </div>
    </div>
  </div>
</section>


)
}

export default  CheckoutBody;
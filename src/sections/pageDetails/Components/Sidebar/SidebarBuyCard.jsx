import React from 'react'
 
const SidebarBuyCard = ()=>{
return(
<div className="card  mt-5 mt-lg-0">
          <div className="licence-niceselect pt-4 pl-4 pr-4 pb-0">
            <div className="licence-niceselect">
              <select className="nice-select  required" id="licence-categories" name="custom1">
                <option value="regular">Regular License</option>
                <option value="extend">Extended License</option>
              </select>
            </div>
          </div>
          <div className="pt-4 pb-4 pl-5 pr-5 border-bottom">
            <div className="licence-content active" id="regular">
              <span className="mb-0 ml-auto licence-price">$32</span>
              <ul className="list-unstyled widget-spec  mb-0">
                <li>
                  <i className="fe fe-check" aria-hidden="true" /> 6 Months Support &amp; Updates
                </li>
                <li>
                  <i className="fe fe-check" aria-hidden="true" /> Forum Support
                </li>
                <li>
                  <i className="fe fe-check" aria-hidden="true" /> Best Qulity Product
                </li>
                <li>
                  <i className="fe fe-check" aria-hidden="true" /> One domain
                </li>
              </ul>
            </div>
            <div className="licence-content" id="extend">
              <span className="mb-0 ml-auto licence-price">$632</span>
              <ul className="list-unstyled widget-spec  mb-0">
                <li>
                  <i className="fe fe-check" aria-hidden="true" /> 1 year Support &amp; Updates
                </li>
                <li>
                  <i className="fe fe-check" aria-hidden="true" /> Forum Support
                </li>
                <li>
                  <i className="fe fe-check" aria-hidden="true" /> Best Qulity Product
                </li>
                <li>
                  <i className="fe fe-check" aria-hidden="true" /> Unlimted domain
                </li>
              </ul>
            </div>
          </div>
          <div className="card-body item-user">
            <a className="btn ripple  btn-primary btn-block btn-lg" href="#"><i className="fe fe-shopping-cart mr-1" />Add to Cart</a>
            <a className="btn ripple  btn-info btn-block btn-lg" href="#">Buy Now</a>
          </div>
          <div className="p-3 border-top text-center bg-light">
            {/* <i className="payment payment-maestro mr-2" /> */}
            <i className="payment payment-paypal mr-2" />
            <i className="payment payment-visa mr-2" />
            <i className="payment payment-mastercard mr-2" />
            <i className="payment payment-cirrus mr-2" />
            <i className="payment payment-discover mr-2" />
          </div>
        </div>
)
}

export default  SidebarBuyCard;
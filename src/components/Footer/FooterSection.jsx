import React from 'react'
 
const FooterSection =()=>{
return(
<section>
  <footer className="bg-dark text-white">
    <div className="footer-main">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <h6>About</h6>
            <hr className="deep-purple  accent-2 mb-4 mt-0 d-inline-block mx-auto" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet numquam iure provident voluptate essequasi, veritatis totam voluptas nostrum.Lorem ipsum dolor sit amet, consectetur </p>
            <ul className="list-unstyled list-inline mt-3">
              <li className="list-inline-item">
                <a href="/#" className="btn ripple btn-floating btn-sm mx-1">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/#" className="btn ripple btn-floating btn-sm mx-1">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/#" className="btn ripple btn-floating btn-sm mx-1">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/#" className="btn ripple btn-floating btn-sm mx-1">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-12">
            <h6>Our Services</h6>
            <hr className="deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto" />
            <ul className="list-unstyled mb-0">
              <li><a href="/#">Our Team</a></li>
              <li><a href="/#">Contact US</a></li>
              <li><a href="/#">About</a></li>
              <li><a href="/#">Services</a></li>
              <li><a href="/#">Blog</a></li>
              <li><a href="/#">Terms and Services</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-12">
            <h6>Contact</h6>
            <hr className="deep-purple  text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto" />
            <ul className="footer-conatct list-unstyled mb-0 contact-footer">
              <li>
                <a href="/#"><i className="fa fa-home mr-3 text-white" />  22 S. Rock Creek StreetSan Carlos, Uniontown CA 94070, USA</a>
              </li>
              <li>
                <a href="/#"><i className="fa fa-envelope mr-3 text-white" /> info12323@example.com</a></li>
              <li>
                <a href="/#"><i className="fa fa-phone mr-3 text-white" /> + 01 234 567 88</a>
              </li>
              <li>
                <a href="/#"><i className="fa fa-print mr-3 text-white" /> + 01 234 567 89</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12">
            <h6>Subscribe</h6>
            <hr className="deep-purple  text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto" />
            <div className="clearfix" />
            <div className="input-group w-100">
              <input type="text" className="form-control br-tl-3  br-bl-3 " placeholder="Email" />
              <div className="input-group-append ">
                <button type="button" className="btn ripple  btn-primary br-tr-3  br-br-3"> Subscribe </button>
              </div>
            </div>
            <h6 className="mb-0 mt-5">Payments</h6>
            <hr className="deep-purple  text-primary accent-2 mb-2 mt-3 d-inline-block mx-auto" />
            <div className="clearfix" />
            <ul className="footer-payments">
              <li className="pl-0"><a href="/#"><i className="fa fa-cc-amex" aria-hidden="true" /></a></li>
              <li><a href="/#"><i className="fa fa-cc-visa" aria-hidden="true" /></a></li>
              <li><a href="/#"><i className="fa fa-credit-card-alt" aria-hidden="true" /></a></li>
              <li><a href="/#"><i className="fa fa-cc-mastercard" aria-hidden="true" /></a></li>
              <li><a href="/#"><i className="fa fa-cc-paypal" aria-hidden="true" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-dark text-white-50 p-0">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-12 col-sm-12 mt-3 mb-3 text-center">
            Copyright © 2020 <a href="/#" className="fs-14 text-primary">Templist</a>. Designed  by <a href="/#" className="fs-14 text-primary"> Spruko Technologies Pvt.Ltd </a>All rights reserved.
          </div>
        </div>
      </div>
    </div>
  </footer>
</section>

)
}
export default FooterSection;
import React from 'react'
 
const NewsletterSection=()=>{
return(
<section className="sptb bg-white border-top">
  <div className="container">
    <div className="row">
      <div className="col-lg-7 col-xl-6 col-md-12">
        <div className="sub-newsletter">
          <h3 className="mb-2 fs-20"><i className="fa fa-paper-plane-o mr-2" /> Subscribe To Our Onlinesletter</h3>
          <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        </div>
      </div>
      <div className="col-lg-5 col-xl-6 col-md-12">
        <div className="input-group sub-input mt-1">
          <input type="text" className="form-control input-lg " placeholder="Enter your Email" />
          <div className="input-group-append ">
            <button type="button" className="btn ripple  btn-primary btn-lg br-tr-3  br-br-3">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

)
}
export default  NewsletterSection;